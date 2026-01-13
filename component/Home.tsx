'use client'
import { ChevronDown } from 'lucide-react';
import  { useState } from 'react'

export const Home = () => {
      const [isVisible, setIsVisible] = useState(false);
      const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');


      
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };
    
  return (
   <>
   
  
   </>
  )
}


