"use client";
import { useState } from "react";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Team from "@/components/team/Team";
import Contact from "@/components/Contact";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

const TechStack = () => {
  const techs = [
    "React", "Next.js", "Python", "FastAPI", 
    "OpenAI", "Premiere Pro", "After Effects", "ATS-Optimization"
  ];
  return (
    <div className="py-12 border-y border-slate-900 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
        {techs.map((t) => (
          <span key={t} className="text-white font-bold text-xl">{t}</span>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [filter, setFilter] = useState("All");
  const domains = ["All", "Web Development", "AI Tools", "Video Editing", "Resume Making"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="bg-[#020617] min-h-screen">
      <Hero />
      
      <ScrollReveal>
        <TechStack />
      </ScrollReveal>

      <ScrollReveal>
        <Services />
      </ScrollReveal>
      
      {/* PROJECTS SECTION WITH FILTERING */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
            <p className="text-slate-400">Selected projects from our core specializations.</p>
          </div>

          {/* Futuristic Domain Switcher */}
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {domains.map((d) => (
              <button 
                key={d}
                onClick={() => setFilter(d)}
                className={`px-5 py-2 rounded-full border text-xs font-bold whitespace-nowrap transition-all ${
                  filter === d 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]' 
                  : 'border-slate-800 text-slate-500 hover:border-slate-600'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-24">
          <AnimatePresence mode="wait">
            {filteredProjects.map((p, i) => (
              <motion.div 
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group grid md:grid-cols-2 gap-12 items-center border-b border-slate-900 pb-24 last:border-0"
              >
                <div className={i % 2 !== 0 ? "md:order-last" : ""}>
                  <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em]">{p.category}</span>
                  <h3 className="text-4xl font-bold text-white mt-4 mb-8">{p.title}</h3>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800/50">
                      <h4 className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-2">Challenge</h4>
                      <p className="text-gray-400 italic text-sm leading-relaxed">"{p.problem}"</p>
                    </div>
                    
                    <div>
                      <h4 className="text-green-400 text-[10px] font-bold uppercase tracking-widest mb-2">The Solution</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{p.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-2">Results</h4>
                      <p className="text-white font-semibold text-sm">{p.impact}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-10">
                    {p.stack.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-400 text-[10px] font-mono rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3D Visual Area */}
                <div className="relative group/visual perspective-1000">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover/visual:opacity-40 transition duration-1000"></div>
                  <div className="relative h-80 bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col items-center justify-center p-6 transition-transform duration-500 group-hover/visual:rotate-y-6">
                      <p className="text-slate-600 text-[10px] uppercase tracking-widest mb-8">Asset Preview</p>
                      
                      {/* Domain-specific Iconography */}
                      <div className="w-full h-32 border-2 border-dashed border-slate-900 rounded-xl flex items-center justify-center">
                        {p.category === "Video Editing" ? (
                           <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">▶</div>
                        ) : p.category === "Resume Making" ? (
                           <div className="w-12 h-12 bg-green-500/20 rounded flex items-center justify-center text-green-500">PDF</div>
                        ) : (
                           <div className="flex gap-2">
                             <div className="w-8 h-8 rounded bg-blue-500/20"></div>
                             <div className="w-16 h-8 rounded bg-blue-500/20"></div>
                           </div>
                        )}
                      </div>
                      
                      <button className="mt-8 text-xs font-bold text-blue-500 hover:text-white transition-colors">
                        EXPLORE CASE STUDY →
                      </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <ScrollReveal>
        <Team />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>

      <footer className="py-12 text-center border-t border-slate-900 bg-slate-950/50">
        <p className="text-slate-600 text-xs tracking-widest uppercase">
          © 2026 AI Studio. Designed for the Next Generation.
        </p>
      </footer>
    </main>
  );
}