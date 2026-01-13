import { connectDB } from "@/lib/db";
import Contact from "@/models/contactModel";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest) {
    await connectDB();
    const {name,email,message}= await req.json();
    
    if([name,email,message].some((item) => item === "")){
        return NextResponse.json({message:"All fields are required"},{status:400})
    }

    const contact = await Contact.create({name,email,message});
    console.log(contact);
    return NextResponse.json({message:"Message sent successfully"},{status:200})
    
    
}