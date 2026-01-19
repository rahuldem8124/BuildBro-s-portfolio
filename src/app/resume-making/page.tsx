"use client";
import { FileText, Search, Award, ArrowLeft, PenTool, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ResumeMaking() {
  const features = [
    { 
      t: "Sheriff-Proof (ATS)", 
      d: "Keywords optimized to pass the Sheriff's automated scanners without getting flagged.",
      icon: <Search className="w-6 h-6 text-[#1a120b]" />
    },
    { 
      t: "Proven Bounties", 
      d: "We turn your daily duties into quantifiable data-driven achievements.",
      icon: <Award className="w-6 h-6 text-[#1a120b]" />
    },
    { 
      t: "Clear Typesetting", 
      d: "Clean, rugged layouts that highlight your seniority and experience.",
      icon: <FileText className="w-6 h-6 text-[#1a120b]" />
    }
  ];

  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-32 px-6 relative overflow-hidden">
      {/* 🎞️ VINTAGE GRAIN OVERLAY */}
      <div className="old-film-overlay opacity-10 absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* 🔙 BACK BUTTON */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#b85c38] font-bold tracking-widest uppercase text-xs hover:-translate-x-2 transition-transform mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to The Saloon
        </Link>

        {/* 🤠 HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
               <PenTool className="w-5 h-5 text-[#b85c38]" />
               <span className="text-[#b85c38] tracking-[0.3em] uppercase font-bold text-xs">Profile Forging</span>
            </div>
            <h1 className="text-7xl font-black font-serif italic text-[#1a120b] mb-6 leading-[0.9]">
              Resume <span className="text-[#b85c38] underline decoration-4 decoration-[#1a120b] underline-offset-4">Optimization</span>
            </h1>
            <p className="text-xl text-gray-700 font-serif italic leading-relaxed border-l-4 border-[#b85c38] pl-6">
              Don't get ghosted by the recruiting bots. We craft bulletproof profiles that pass the Sheriff's inspection and land you the interview.
            </p>
          </motion.div>

          {/* 📄 DECORATIVE RESUME STACK */}
          <motion.div 
            initial={{ opacity: 0, rotate: 5 }}
            animate={{ opacity: 1, rotate: 3 }}
            className="relative hidden md:block"
          >
            <div className="absolute inset-0 bg-[#1a120b] transform translate-x-4 translate-y-4 rounded-sm" />
            <div className="relative bg-[#e8e2d5] p-8 border-2 border-[#1a120b] shadow-2xl" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')" }}>
               <div className="w-1/3 h-4 bg-[#1a120b] mb-6" />
               <div className="space-y-3">
                  <div className="w-full h-2 bg-[#1a120b]/20" />
                  <div className="w-full h-2 bg-[#1a120b]/20" />
                  <div className="w-3/4 h-2 bg-[#1a120b]/20" />
               </div>
               <div className="mt-8 flex justify-end">
                  <div className="w-24 h-24 border-4 border-[#b85c38] rounded-full flex items-center justify-center opacity-80 transform -rotate-12">
                     <span className="text-[#b85c38] font-black uppercase text-xs tracking-widest text-center">
                        HIRED<br/>APPROVED
                     </span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* 📝 FEATURES LIST (Stamped Documents) */}
        <div className="space-y-6 max-w-3xl">
          {features.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start p-8 bg-[#e8e2d5] border border-black/10 relative group hover:pl-10 transition-all duration-300"
              style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')" }}
            >
              <div className="shrink-0 p-3 bg-[#b85c38]/20 rounded-full border border-[#b85c38]">
                {item.icon}
              </div>
              <div>
                <h4 className="text-2xl font-black font-serif italic text-[#1a120b] mb-2">{item.t}</h4>
                <p className="text-gray-800 font-serif italic opacity-80">{item.d}</p>
              </div>

              {/* Checkmark Stamp */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                 <CheckCircle2 className="w-8 h-8 text-[#b85c38]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🚧 CTA */}
        <div className="mt-16 mb-24">
           <Link 
             href="/#contact" 
             className="inline-block px-12 py-4 bg-[#1a120b] text-[#e5d3b3] font-black uppercase tracking-widest border-2 border-[#1a120b] hover:bg-transparent hover:text-[#1a120b] transition-all duration-300 shadow-[8px_8px_0px_#b85c38]"
           >
             Rewrite My Profile
           </Link>
        </div>

      </div>
    </main>
  );
}