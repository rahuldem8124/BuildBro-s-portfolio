"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Preloader from "@/components/Preloader";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Team from "@/components/team/Team";
import Contact from "@/components/Contact";

const AmbientAtmosphere = () => {
  return (
    <div className="dust-particles">
      {/* Left Cactus Silhouette */}
      <div className="absolute left-[2%] top-[25%] opacity-10 hidden xl:block pointer-events-none">
         <div className="w-6 h-48 bg-[#2b1d15] rounded-full relative">
            <div className="absolute -left-6 top-10 w-8 h-12 bg-[#2b1d15] rounded-full border-b-4 border-[#b85c38]/20" />
            <div className="absolute -right-6 top-20 w-8 h-16 bg-[#2b1d15] rounded-full border-b-4 border-[#b85c38]/20" />
         </div>
      </div>

      {/* Right Cactus Silhouette */}
      <div className="absolute right-[5%] bottom-[15%] opacity-10 hidden xl:block pointer-events-none">
         <div className="w-5 h-32 bg-[#2b1d15] rounded-full relative">
            <div className="absolute -left-4 top-8 w-6 h-10 bg-[#2b1d15] rounded-full" />
         </div>
      </div>

      {/* Tumbleweed Physics */}
      <motion.div
        animate={{ x: ["-10vw", "110vw"], rotate: [0, 720] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 w-20 h-20 border-2 border-dashed border-[#b85c38]/20 rounded-full"
      />
    </div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Sync with Preloader Session Storage
  useEffect(() => {
    const isVisited = window.sessionStorage.getItem("visited");
    if (isVisited) {
      setLoading(false);
    } else {
      // Small timeout to allow Preloader to finish its animation
      const timer = setTimeout(() => setLoading(false), 4500); 
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Preloader />
      
      <main className={`relative min-h-screen bg-[#e5d3b3] transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="old-film-overlay" />
        <AmbientAtmosphere />
        
        <div className="relative z-10">
          <Hero />
          
          {/* Mexican Pattern Divider (Serape Style) */}
          <div className="h-6 w-full bg-gradient-to-r from-[#e74c3c] via-[#f1c40f] via-[#2ecc71] via-[#3498db] to-[#9b59b6] opacity-40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]" />
          
          <Services />
          
          {/* Transition to Wood Plank Background for Team */}
          <div className="bg-[#3d2b1f] border-t-8 border-[#2b1d15]">
            <Team />
          </div>

          <Contact />
        </div>

        <footer className="py-20 text-center border-t-8 border-[#2b1d15] bg-[#1a120b] relative z-10">
          <div className="mb-6 flex justify-center gap-8 opacity-20 grayscale">
              <span className="text-2xl">💀</span>
              <span className="text-2xl">🌵</span>
              <span className="text-2xl">💀</span>
          </div>
          <p className="text-[#e5d3b3] text-xs uppercase tracking-[1.5em] font-serif">
            STOP • OUTLAW CODE • STOP
          </p>
          <p className="text-[#b85c38] text-[10px] uppercase mt-4 tracking-widest font-bold">
            Frontier Intelligence Agency
          </p>
        </footer>
      </main>
    </>
  );
}