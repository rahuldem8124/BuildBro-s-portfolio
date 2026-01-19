"use client";
import { ArrowLeft, Brain, Bot, Sparkles, Terminal, Database, Cpu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AiTools() {
  const capabilities = [
    {
      title: "LLM Integration",
      desc: "Harnessing OpenAI & Anthropic models to power your applications.",
      icon: <Brain className="w-8 h-8 text-[#b85c38]" />
    },
    {
      title: "Custom RAG",
      desc: "Vector databases that let your AI learn from your own private archives.",
      icon: <Database className="w-8 h-8 text-[#b85c38]" />
    },
    {
      title: "Auto-Agents",
      desc: "Autonomous Python scripts that work while you sleep.",
      icon: <Bot className="w-8 h-8 text-[#b85c38]" />
    },
    {
      title: "LangChain Flows",
      desc: "Complex reasoning chains to solve the toughest bounties.",
      icon: <Terminal className="w-8 h-8 text-[#b85c38]" />
    }
  ];

  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-32 px-6 relative overflow-hidden">
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

        {/* 🤠 HERO SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center md:text-left"
        >
          <div className="inline-block px-4 py-1 border border-[#b85c38] text-[#b85c38] text-[10px] tracking-[0.3em] uppercase font-bold mb-4 bg-[#b85c38]/5">
            Intelligence Agency
          </div>
          <h1 className="text-7xl font-black font-serif italic text-[#1a120b] mb-6 leading-[0.9]">
            Artificial <span className="text-[#b85c38]">Intelligence</span> <br />
            & Automation
          </h1>
          <p className="text-xl text-gray-700 font-serif italic max-w-2xl leading-relaxed">
            Automating your business with custom LLMs, RAG pipelines, and intelligent agents that aim true every time.
          </p>
        </motion.div>

        {/* 📜 CAPABILITIES BOARD (Wood & Paper Style) */}
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 p-8 bg-[#e8e2d5] border-2 border-[#1a120b] shadow-[8px_8px_0px_#b85c38] relative group hover:-translate-y-1 transition-transform duration-300"
              style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')" }}
            >
              {/* Icon Badge */}
              <div className="shrink-0 w-16 h-16 bg-[#1a120b] flex items-center justify-center border-2 border-[#e5d3b3]">
                {c.icon}
              </div>

              <div>
                <h3 className="text-2xl font-black font-serif italic text-[#1a120b] mb-2 uppercase tracking-tight">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-800 font-serif leading-relaxed opacity-90">
                  {c.desc}
                </p>
              </div>

              {/* Decorative Rivets */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#1a120b] opacity-20" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#1a120b] opacity-20" />
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[#1a120b] opacity-20" />
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#1a120b] opacity-20" />
            </motion.div>
          ))}
        </div>

        {/* 🚧 BOTTOM CTA */}
        <div className="mt-24 mb-12 p-12 bg-[#1a120b] text-[#e5d3b3] flex flex-col md:flex-row items-center justify-between border-t-8 border-[#b85c38] relative overflow-hidden">
          <div className="relative z-10 mb-8 md:mb-0">
            <h2 className="text-4xl font-black font-serif italic mb-2 uppercase">Need a Smart Agent?</h2>
            <p className="text-[#b85c38] tracking-widest uppercase text-xs font-bold">
              We build bots that don't miss.
            </p>
          </div>
          <Link 
            href="/#contact" 
            className="relative z-10 inline-block px-10 py-4 bg-[#e5d3b3] text-[#1a120b] font-black uppercase tracking-widest hover:bg-[#b85c38] hover:text-[#f5f5f5] transition-all duration-300 shadow-[0_0_30px_rgba(229,211,179,0.2)]"
          >
            Deploy AI
          </Link>
          
          {/* Background Map Texture */}
          <div className="absolute inset-0 opacity-5 mix-blend-overlay" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-scales.png')" }} />
        </div>

      </div>
    </main>
  );
}