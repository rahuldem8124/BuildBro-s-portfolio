"use client";
import { ArrowLeft, Play, Film, Scissors, Aperture } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function VideoEditing() {
  const services = [
    {
      title: "Reels & Shorts",
      desc: "Fast-paced visual storytelling designed to stop the scroll.",
      icon: <Aperture className="w-6 h-6 text-[#e5d3b3]" />
    },
    {
      title: "Corporate Docs",
      desc: "Long-form narratives that build trust and authority.",
      icon: <Film className="w-6 h-6 text-[#e5d3b3]" />
    },
    {
      title: "Ad Creative",
      desc: "High-conversion hooks that capture bounties immediately.",
      icon: <Scissors className="w-6 h-6 text-[#e5d3b3]" />
    }
  ];

  return (
    // 1. Added 'pb-32' for bottom spacing
    // 2. Changed 'overflow-hidden' to 'overflow-x-hidden' to fix scroll clipping
    <main className="min-h-screen bg-[#f5f5f5] pt-32 pb-32 px-6 relative overflow-x-hidden">
      
      {/* 🎞️ VINTAGE GRAIN OVERLAY */}
      <div className="old-film-overlay opacity-10 absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* 🔙 BACK BUTTON */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#b85c38] font-bold tracking-widest uppercase text-xs hover:-translate-x-2 transition-transform mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to The Saloon
        </Link>

        {/* 🎬 HERO SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[2px] w-12 bg-[#b85c38]" />
             <span className="text-[#b85c38] tracking-[0.3em] uppercase font-bold text-xs">Moving Pictures</span>
          </div>
          <h1 className="text-7xl font-black font-serif italic text-[#1a120b] mb-6 leading-[0.9]">
            Cinematic <span className="text-[#b85c38] inline-block transform -rotate-2 decoration-4 underline decoration-[#1a120b]">Cuts</span>
          </h1>
          <p className="text-xl text-gray-700 font-serif italic max-w-2xl leading-relaxed">
            We don't just edit; we craft high-retention visual stories for YouTube, Reels, and Corporate Ads that keep the audience captivated.
          </p>
        </motion.div>

        {/* 🎥 VIDEO GALLERY (Cinema Screen Style) */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {[1, 2].map((v, i) => (
            <motion.div 
              key={v}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative aspect-video bg-black border-[8px] border-[#2b1d15] shadow-2xl cursor-pointer overflow-hidden"
            >
              {/* Screen Noise Effect */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-pulse" />
              
              {/* "Play" Wax Seal */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 bg-[#b85c38] rounded-full flex items-center justify-center border-4 border-[#e5d3b3] shadow-[0_0_30px_rgba(184,92,56,0.6)] group-hover:scale-110 transition-transform duration-300">
                    <Play fill="#1a120b" className="w-8 h-8 text-[#1a120b] ml-1" />
                 </div>
              </div>

              {/* Vintage Frame Corner Decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#e5d3b3]/50" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#e5d3b3]/50" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#e5d3b3]/50" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#e5d3b3]/50" />
              
              {/* Label */}
              <div className="absolute bottom-4 left-0 w-full text-center">
                 <span className="bg-[#1a120b] text-[#e5d3b3] px-3 py-1 text-[10px] tracking-widest uppercase font-bold">
                    Reel No. 0{v}
                 </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🎞️ SERVICES STRIP */}
        <div className="grid md:grid-cols-3 gap-6">
           {services.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 border border-[#b85c38]/20 bg-[#e8e2d5] hover:bg-[#1a120b] group transition-colors duration-300">
                 <div className="mb-4 p-3 bg-[#1a120b] rounded-full group-hover:bg-[#b85c38] transition-colors">
                    {s.icon}
                 </div>
                 <h3 className="text-lg font-black font-serif italic text-[#1a120b] group-hover:text-[#e5d3b3] mb-2">{s.title}</h3>
                 <p className="text-xs text-gray-600 font-serif italic group-hover:text-[#e5d3b3]/80">{s.desc}</p>
              </div>
           ))}
        </div>

      </div>
    </main>
  );
}