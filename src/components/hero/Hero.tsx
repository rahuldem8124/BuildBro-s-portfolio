"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#020617] overflow-hidden px-6">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center max-w-5xl"
      >
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Now accepting projects for 2026</span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
          Web Meets <span className="text-blue-500">Intelligence.</span>
        </h1>
        
        <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
          We are a founding team of engineers building high-performance 
          web applications and custom AI systems for the next generation of business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
            Start a Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <Link 
            href="/login" 
            className="w-full sm:w-auto border border-slate-700 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
          >
            Client Login
          </Link>
        </div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-600 to-transparent opacity-20" />
      </motion.div>
    </section>
  );
}