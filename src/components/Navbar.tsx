"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Star, Skull } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect scroll to darken the navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Your specific project routes
  const navLinks = [
    { name: "Web Dev", href: "/web-development" },
    { name: "AI Tools", href: "/ai-tools" },
    { name: "Video", href: "/video-editing" },
    { name: "Resume", href: "/resume-making" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-[3px] ${
          isScrolled 
            ? "bg-[#1a120b] py-3 border-[#b85c38] shadow-2xl" 
            : "bg-[#1a120b]/90 py-5 border-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* 🤠 SHERIFF LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative p-2 bg-[#b85c38] rounded-full border-2 border-[#e5d3b3] group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_15px_rgba(184,92,56,0.4)]">
              <Star className="w-6 h-6 text-[#1a120b] fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black font-serif italic text-[#e5d3b3] leading-none tracking-tighter uppercase">
                Outlaw
              </span>
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#b85c38] uppercase">
                Code
              </span>
            </div>
          </Link>

          {/* 🖥️ DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <Link 
                key={i} 
                href={link.href} 
                className="relative text-[#e5d3b3] font-serif font-bold tracking-widest text-sm uppercase group overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-[#1a120b] transition-colors duration-300">
                  {link.name}
                </span>
                {/* Hover "Branding Iron" Slide Effect */}
                <span className="absolute inset-0 bg-[#e5d3b3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-0" />
              </Link>
            ))}

            {/* CTA BUTTON */}
            <Link 
              href="/login"
              className="px-6 py-2 bg-[#b85c38] text-[#1a120b] font-black uppercase tracking-widest text-xs border-2 border-[#e5d3b3] hover:bg-[#e5d3b3] hover:text-[#b85c38] hover:border-[#b85c38] transition-all duration-300 shadow-[4px_4px_0px_#e5d3b3] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Client Portal
            </Link>
          </div>

          {/* 📱 MOBILE HAMBURGER */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="md:hidden text-[#e5d3b3] p-2 border border-[#e5d3b3]/30 rounded-md hover:bg-[#b85c38] hover:text-[#1a120b] transition-colors"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* 📜 MOBILE MENU (Old Parchment Style) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#1a120b] pt-24 px-6 md:hidden flex flex-col items-center gap-8 border-b-4 border-[#b85c38]"
            style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')" }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-black font-serif italic text-[#e5d3b3] uppercase tracking-tighter hover:text-[#b85c38] transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <div className="w-16 h-[2px] bg-[#b85c38]/50 my-4" />
            
            <Link 
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 text-[#b85c38] font-bold tracking-[0.2em] uppercase text-sm border-2 border-[#b85c38] px-8 py-3 hover:bg-[#b85c38] hover:text-[#1a120b] transition-all shadow-[4px_4px_0px_rgba(184,92,56,0.3)]"
            >
              <Skull className="w-4 h-4" />
              Client Portal
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}