"use client";
import { Video, Film, Scissors, Play, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function VideoPage() {
  return (
    <main className="bg-[#020617] min-h-screen text-white p-8 md:p-24">
      <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12">
        <ArrowLeft size={20} /> Back to Agency
      </Link>
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Cinematic <span className="text-red-500">Editing</span></h1>
        <p className="text-xl text-slate-400 mb-12">High-retention editing for YouTube, Reels, and Corporate Ads.</p>
        
        {/* Mock Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((v) => (
            <div key={v} className="aspect-video bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center group cursor-pointer hover:border-red-500/50 transition-all">
               <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play fill="white" />
               </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}