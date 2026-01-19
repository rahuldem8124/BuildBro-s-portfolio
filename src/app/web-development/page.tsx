"use client";
import { ArrowLeft, Zap, Layout, ShieldCheck, Code } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WebDevelopment() {
  const features = [
    {
      title: "Next.js 15 Speed",
      desc: "Blazing fast load times for better SEO and high-noon performance.",
      icon: <Zap className="w-8 h-8 text-[#b85c38]" />
    },
    {
      title: "Responsive UI",
      desc: "Perfectly optimized for mobile, desktop, and every device on the frontier.",
      icon: <Layout className="w-8 h-8 text-[#b85c38]" />
    },
    {
      title: "Secure Backend",
      desc: "Robust data protection and encryption tighter than a bank vault.",
      icon: <ShieldCheck className="w-8 h-8 text-[#b85c38]" />
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-7xl font-black font-serif italic text-[#1a120b] mb-6 leading-[0.9]">
            Frontier <span className="text-[#b85c38] underline decoration-4 decoration-[#b85c38]/30 underline-offset-8">Web</span><br />
            Solutions
          </h1>
          <p className="text-xl text-gray-700 font-serif italic max-w-2xl leading-relaxed border-l-4 border-[#b85c38] pl-6">
            We build scalable SaaS, dashboards, and e-commerce sites using the latest tech stack to help you stake your claim in the digital wild west.
          </p>
        </motion.div>

        {/* 📜 FEATURES GRID (PARCHMENT STYLE) */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#e8e2d5] border border-black/10 shadow-[8px_8px_0px_rgba(26,18,11,0.1)] relative group"
              style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')" }}
            >
              {/* Icon Box */}
              <div className="w-16 h-16 bg-[#1a120b] flex items-center justify-center mb-6 border-2 border-[#b85c38] shadow-lg group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>

              <h3 className="text-2xl font-black font-serif italic text-[#1a120b] mb-3">{f.title}</h3>
              <p className="text-sm text-gray-800 font-serif leading-relaxed opacity-80">
                {f.desc}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#b85c38] opacity-50" />
            </motion.div>
          ))}
        </div>

        {/* 🚧 BOTTOM CTA */}
        <div className="mt-24 p-12 bg-[#1a120b] text-[#e5d3b3] text-center border-4 border-[#b85c38] relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-black font-serif italic mb-6 uppercase">Ready to Deploy?</h2>
            <Link 
              href="/#contact" 
              className="inline-block px-8 py-4 bg-[#b85c38] text-[#1a120b] font-black uppercase tracking-widest hover:bg-[#e5d3b3] transition-colors shadow-[0_0_20px_rgba(184,92,56,0.4)]"
            >
              Start Project
            </Link>
          </div>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')" }} />
        </div>

      </div>
    </main>
  );
}