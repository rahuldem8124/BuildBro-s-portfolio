"use client";
import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Bot, Terminal, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AIToolsPage() {
  return (
    <main className="bg-[#020617] min-h-screen text-white p-8 md:p-24">
      <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12">
        <ArrowLeft size={20} /> Back to Agency
      </Link>
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">AI & <span className="text-purple-500">Intelligence</span></h1>
        <p className="text-xl text-slate-400 mb-12">Automating your business with custom LLMs, RAG pipelines, and intelligent agents.</p>
        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Terminal className="text-purple-500" /> Technical Capabilities
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-400">
            <li>• OpenAI & Anthropic Integration</li>
            <li>• Custom RAG (Vector Databases)</li>
            <li>• Automated Python Scripts</li>
            <li>• LangChain Workflows</li>
          </ul>
        </div>
      </div>
    </main>
  );
}