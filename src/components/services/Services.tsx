"use client";
import { Globe, BrainCircuit, Video, FileUser, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { 
      title: "Web Development", 
      desc: "Architecting high-stakes digital outposts and outperforming platforms.", 
      icon: <Globe className="w-8 h-8" />, 
      bounty: "REWARD: TOP TIER ROI",
      link: "/web-development"
    },
    { 
      title: "AI & Automation", 
      desc: "Wrangling neural networks to automate your digital frontier.", 
      icon: <BrainCircuit className="w-8 h-8" />,
      bounty: "REWARD: TOTAL EFFICIENCY",
      link: "/ai-tools"
    },
    { 
      title: "Video Editing", 
      desc: "Cinematic storytelling designed for high-noon retention.", 
      icon: <Video className="w-8 h-8" />,
      bounty: "REWARD: MAXIMUM IMPACT",
      link: "/video-editing"
    },
    { 
      title: "Resume Making", 
      desc: "ATS-optimized profiles to help you land the biggest bounties.", 
      icon: <FileUser className="w-8 h-8" />,
      bounty: "REWARD: JOB SECURED",
      link: "/resume-making"
    }
  ];

  return (
    <section className="py-24 bg-[#f5f5f5] relative overflow-hidden border-t border-black/5">
      {/* Vintage film grain overlay */}
      <div className="old-film-overlay opacity-10 absolute inset-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black font-serif italic text-black mb-4 uppercase tracking-tighter">
            — Expertise & Bounties —
          </h2>
          <p className="text-gray-600 font-serif italic max-w-2xl mx-auto">
            Specialized solutions across engineering and creative domains to help your business scale the frontier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ rotate: [0, -1, 1, 0], y: -8 }}
              className="p-6 bg-[#e8e2d5] border border-black/10 shadow-2xl relative group cursor-pointer"
              style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')" }}
            >
              <Link href={s.link} className="block">
                {/* Wanted Header */}
                <div className="text-center border-b-2 border-black/20 pb-4 mb-6">
                  <h3 className="text-3xl font-black text-black uppercase tracking-tight">SERVICE</h3>
                  <p className="text-[9px] font-bold tracking-[0.3em] text-black/60 uppercase">Outlaw Code Specialized</p>
                </div>

                {/* Icon Area (Acts as the "Photo") */}
                <div className="relative aspect-square mb-6 overflow-hidden bg-black flex items-center justify-center text-[#b85c38]">
                  <div className="relative z-10 scale-[2] grayscale brightness-125 group-hover:grayscale-0 transition-all duration-500">
                    {s.icon}
                  </div>
                  {/* Vintage Vignette */}
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] z-20" />
                </div>

                {/* Details */}
                <div className="text-center">
                  <h3 className="text-xl font-black font-serif italic text-black mb-2 uppercase">{s.title}</h3>
                  <p className="text-gray-700 text-xs font-serif italic leading-relaxed mb-6 px-2">
                    "{s.desc}"
                  </p>
                  
                  {/* Bounty Style Button */}
                  <div className="bg-[#2b1d15] text-[#f5f5f5] py-3 font-black text-sm tracking-widest group-hover:bg-[#b85c38] transition-colors duration-300">
                    {s.bounty}
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}