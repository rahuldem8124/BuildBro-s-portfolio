"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Web", href: "/web-development" },
    { name: "AI Tools", href: "/ai-tools" },
    { name: "Video", href: "/video-editing" },
    { name: "Resume", href: "/resume-making" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
      ? "py-4 bg-[#020617]/80 backdrop-blur-md border-b border-slate-800" 
      : "py-6 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white group">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-xs group-hover:shadow-[0_0_15px_#3b82f6] transition-shadow">
            AI
          </div>
          <span className="tracking-tighter">Studio</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <Link 
                href={link.href} 
                className="text-sm font-medium text-slate-400 hover:text-blue-500 transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <Link 
              href="/login" 
              className="px-5 py-2 rounded-full bg-blue-600 text-sm font-bold text-white hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
            >
              Client Portal
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* --- GLOW PATH ANIMATION --- */}
        {/* This line zips across the bottom of the navbar when the page loads */}
        <motion.div 
          initial={{ width: 0, left: "50%" }}
          animate={{ width: "100%", left: "0%" }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
          className="absolute bottom-[-17px] md:bottom-[-21px] h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_10px_#3b82f6]"
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="absolute top-full left-0 w-full bg-[#020617] border-b border-slate-800 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-lg text-slate-400 border-b border-slate-900 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/login" 
            onClick={() => setIsOpen(false)} 
            className="text-lg text-blue-500 font-bold mt-2"
          >
            Client Portal
          </Link>
        </motion.div>
      )}
    </nav>
  );
}