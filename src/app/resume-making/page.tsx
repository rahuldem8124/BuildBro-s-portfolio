"use client";
import { FileUser, CheckCircle2, Search, Briefcase, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="bg-[#020617] min-h-screen text-white p-8 md:p-24">
      <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12">
        <ArrowLeft size={20} /> Back to Agency
      </Link>
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">ATS <span className="text-green-500">Optimization</span></h1>
        <p className="text-xl text-slate-400 mb-12">Don't get ghosted. We redesign resumes that pass bots and impress recruiters.</p>
        
        <div className="space-y-6">
          {[
            { t: "ATS Scanning", d: "Keywords optimized for your specific industry." },
            { t: "Quantifiable Impact", d: "Turning duties into data-driven achievements." },
            { t: "Modern Design", d: "Clean layouts that highlight your seniority." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start p-6 bg-slate-900 rounded-xl border border-slate-800">
              <CheckCircle2 className="text-green-500 shrink-0" />
              <div>
                <h4 className="font-bold">{item.t}</h4>
                <p className="text-slate-500 text-sm">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}