"use client";
import { Globe, BrainCircuit, Video, FileUser, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { 
      title: "Web Development", 
      desc: "High-performance SaaS, Dashboards, and E-commerce built with Next.js 15.", 
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      link: "/web-development"
    },
    { 
      title: "AI & Automation", 
      desc: "Custom LLM integrations, RAG pipelines, and intelligent business agents.", 
      icon: <BrainCircuit className="w-8 h-8 text-purple-500" />,
      link: "/ai-tools"
    },
    { 
      title: "Video Editing", 
      desc: "High-retention cinematic editing for YouTube, Reels, and Corporate Ads.", 
      icon: <Video className="w-8 h-8 text-red-500" />,
      link: "/video-editing"
    },
    { 
      title: "Resume Making", 
      desc: "ATS-optimized professional resumes designed to land interviews at top firms.", 
      icon: <FileUser className="w-8 h-8 text-green-500" />,
      link: "/resume-making"
    }
  ];

  return (
    <section className="py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Animated Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Expertise</h2>
            <p className="text-slate-400 max-w-xl">
              Specialized solutions across engineering and creative domains to help your business scale.
            </p>
          </div>
        </motion.div>

        {/* Staggered Grid Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // Each card waits slightly longer than the previous one
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={s.link} className="group block h-full">
                <div className="h-full p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full group-hover:bg-blue-500/10 transition-colors" />
                  
                  <div className="mb-6 flex justify-between items-start">
                    <div className="p-3 bg-slate-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {s.icon}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-blue-500 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{s.desc}</p>
                  
                  <span className="text-xs font-mono text-blue-500 font-bold uppercase tracking-wider">
                    Learn More
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}