"use client";
import { useState, useEffect, useRef } from "react";
import next from "../public/WIN_20250728_22_17_12_Pro.jpg";

import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Link,
  Instagram,
  Contact,
} from "lucide-react";
import { SignInButton, useUser, UserButton } from "@clerk/nextjs";
import ContactPage from "./contact/page";
import Typed from "typed.js";
import AOS from 'aos';
import myImage from "../public/phote2..webp"

export default function Portfolio() {

  const { isSignedIn, user } = useUser();
  console.log(isSignedIn, user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  
  const el = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Optional: animation duration in milliseconds
      once: false, // Optional: whether animation should happen only once
    })

    const type = new Typed(el.current, {
      strings: ["Full Stack Developer", "Creative Problem Solver","Mern Stack Developer"],
      startDelay: 100,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 50,
      loop: true,
    })

    setIsVisible(true);

    return () => {
      type.destroy();
    };
  }, []);

  

  const projects = [

    {
      title: "Authenticaton System",
      description:
        "A full-stack authentication system with user registration, login, and password verify functionality with next-auth.",
      tech: ["React", "Next.js", "Tailwind", "MongoDB","TypeScript","Next-Auth"],
      link: "https://github.com/karunesh77/Next_Auth_Authorization",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce  inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      link: "https://github.com/karunesh77/Ecommerce-app-MERN_stack",
    },
    
    {
      title: "Portfolio",
      description:
       "A  portfolio with clerk/next.js authentication system.",
      tech: ["React", "D3.js", "Firebase", "Tailwind","Clerk"],
      link: "#",
    },
     {
      title: "Short Url Service",
      description:
        "A full-stack short url service with user registration, login, and password verify functionality.",
      tech: ["React", "D3.js", "MONGODB", "Tailwind"],
      link: "https://github.com/karunesh77/Generate_Short_Url",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    },
    { category: "Tools", items: ["Git", "Docker", "Postman", "clerk"] },
  ];

  
   

  return (
    <div  className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav data-aos="fade-up" className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {isSignedIn ? user?.firstName : "Portfolio"}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {/* login button */}
              <div className="ml-60 flex  space-x-4 transition-colors">
                {isSignedIn ? (
                  <div className=" hover:text-purple-400 ml-6 mt-2  hover:scale-[0.9] transition-colors">
                    <UserButton />
                  </div>
                ) : (
                  <div className="bg-linear-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95 hover:text-purple-400 ml-6 px-4 py-1.5 hover:scale-[0.9] ">
                    <SignInButton>Login</SignInButton>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div>
                {isSignedIn ? (
                  <div className="hover:text-purple-400 ml-3 mt-2  hover:scale-[0.9] transition-colors">
                    <UserButton />
                  </div>
                ) : (
                  <div className="hover:text-purple-400 ml-6  hover:scale-[0.9] transition-colors">
                    <SignInButton>Login</SignInButton>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-18">
        <div
        data-aos="fade-right"
          className={`max-w-4xl md:pt-16 mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl ml-6 md:text-7xl font-bold mb-6 bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Hi, I'm {isSignedIn ? user?.firstName : "Karunesh Gupta"}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
           <span ref={el} className="font-bold"> Full Stack Developer </span> 
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I build exceptional digital experiences that combine beautiful
            design with powerful functionality.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://drive.google.com/file/d/1OTjvUslpTYtTRhlpOj9eTf76ZfhDFyNm/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-3 bg-linear-to-r from-purple-500 to-pink-500 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                Resume
              </button>
            </a>
            <a href="/contact">
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-8 py-3 border-2 border-purple-500 rounded-full hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </button>
            </a>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-purple-400" />
          </div>
        </div>

        <div
        data-aos="fade-left"
        className=" hidden ml-50 mr-20 md:block">
          <img src={isSignedIn ? user?.imageUrl : "./5.jpeg"}  alt="hero"  className="w-100 h-100 rounded-full object-cover border-4 border-purple-400 shadow-2xl hover:shadow-purple-500/50" />
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <p className="text-lg text-gray-300 mb-6">
              I'm a passionate full-stack developer with over 2 years of
              experience creating web applications that users love. My journey
              in tech started with a curiosity about how things work, and it's
              evolved into a career focused on building scalable, user-friendly
              solutions.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              I specialize in modern JavaScript frameworks and have a keen eye
              for design. When I'm not coding, you'll find me contributing to
              open-source projects, writing technical articles, or exploring the
              latest web technologies.
            </p>
            <div className="flex gap-6 mt-8">
              <a
                href="https://github.com/karunesh77"
                className="hover:text-purple-400 transition-colors hover:scale-110 transform duration-200"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/karunesh-gupta-680bb0326
"
                className="hover:text-purple-400 transition-colors hover:scale-110 transform duration-200"
              >
                <Linkedin size={28} />
              </a>
              <a
                href=""
                className="hover:text-purple-400 transition-colors hover:scale-110 transform duration-200"
              >
                <Instagram size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <h3 className="text-2xl font-bold mb-3 text-purple-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:translate-y-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li
                      key={i}
                      className="text-gray-300 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}

      <ContactPage />

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2026 Karunesh Gupta.</p>
        </div>
      </footer>
    </div>
  );
}
