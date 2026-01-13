"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`hover:text-purple-400 transition-colors ${
                      activeSection === item.toLowerCase()
                        ? "text-purple-400"
                        : ""
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
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
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 hover:bg-purple-900/50 rounded-md transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
