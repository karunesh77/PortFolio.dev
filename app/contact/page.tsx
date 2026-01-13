"use client";

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const ContactPage = () => {
  const { user ,isSignedIn} = useUser();
  const [loader,setLoader] = useState(false)
  console.log(user?.emailAddresses[0].emailAddress);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true)
    const { name, email, message } = formData;
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await response.json();

    if(data.message=== "Message sent successfully"){
      toast.success(data.message,{autoClose:1000})
      setFormData({
        name: "",
        email: "",
        message: "",
      });

    }else{
      toast.error(data.message,{autoClose:1000})
      setLoader(false)
    }
    setLoader(false)
    console.log(data);
  };

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
     <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20">
            <p className="text-lg text-gray-300 mb-8 text-center">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>
            <div className="space-y-6">
              <div>
                
                  <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white"
                />
                
              </div>
              <div>
               {isSignedIn ? (
                <input
                  type="email"
                  name="email"
                  value={user?.emailAddresses[0].emailAddress}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white"
                />
               ):(
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white"
                />
               )}
              </div>
              <div>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none text-white"
                ></textarea>
              </div>
             {loader ? (
                <div
               
                 className="w-full px-8 py-3 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 font-semibold">
                <Loader2 className="animate-spin ml-60"/>
              </div>
             ):(
               <button
                onClick={handleSubmit}
                 className="w-full px-8 py-3 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 font-semibold">
                Send Message
              </button>
             )}
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ContactPage;
