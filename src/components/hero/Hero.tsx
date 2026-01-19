"use client";
import { motion } from "framer-motion";
import Typewriter from "../Typewriter"; // No curly braces needed now

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#2b1d15] cursor-crosshair">
      
      {/* 1. THE VIDEO LAYER */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-40 contrast-150 sepia-[.9] grayscale-[0.2] blur-[0.4px]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-dust-particles-in-the-sunlight-9309-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#b85c38]/20 mix-blend-multiply" />
      </div>

      {/* 2. THE OLD FILM OVERLAY */}
      <div className="old-film-overlay" />

      {/* 3. HERO CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="border-[12px] border-double border-[#5d4037] p-8 md:p-16 bg-[#e5d3b3]/95 text-[#2b1d15] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative"
        >
          {/* Decorative Corner Accents */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#5d4037]" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#5d4037]" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#5d4037]" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#5d4037]" />

          <motion.h1 
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            animate={{ letterSpacing: "0em", opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black uppercase mb-4 tracking-tighter italic leading-none"
          >
            Outlaw <span className="text-[#b85c38] block md:inline">Code</span>
          </motion.h1>

          <div className="w-24 h-1 bg-[#b85c38] mx-auto mb-6" />

          {/* TELEGRAM TYPEWRITER SUBTITLE */}
          <div className="text-lg md:text-2xl font-serif uppercase tracking-[0.1em] font-bold mb-8 leading-tight min-h-[3rem] md:min-h-0">
            <Typewriter text="Digital Bounty Hunters & AI Wranglers" delay={0.08} />
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 bg-[#5d4037] text-[#e5d3b3] font-bold uppercase tracking-widest overflow-hidden transition-all shadow-lg"
          >
            <span className="relative z-10">Claim Your Bounty</span>
            <div className="absolute inset-0 bg-[#b85c38] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </motion.div>
        
        {/* SECONDARY TELEGRAM FOOTER */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 4.5 }}
          className="mt-6 text-[10px] uppercase tracking-[1em] text-[#e5d3b3] font-serif"
        >
          STOP • EST. 2026 • STOP
        </motion.p>
      </div>
    </section>
  );
}