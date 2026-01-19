"use client";
import Login from "@/components/Login";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center relative overflow-hidden px-6">
      
      {/* 🎞️ VINTAGE GRAIN OVERLAY */}
      <div className="old-film-overlay opacity-10 absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.15)]" />

      {/* 🔙 BACK BUTTON (Absolute Top Left) */}
      <div className="absolute top-8 left-8 z-20">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#b85c38] font-bold tracking-widest uppercase text-xs hover:-translate-x-2 transition-transform"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to The Saloon
        </Link>
      </div>

      {/* 🤠 CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
           <h1 className="text-4xl font-black font-serif italic text-[#1a120b] mb-2 uppercase">
             Authorized <span className="text-[#b85c38]">Access</span>
           </h1>
           <p className="text-xs font-bold tracking-[0.2em] text-[#1a120b]/60 uppercase">
             Sheriff's Department Only
           </p>
        </div>
        
        <Login />
      </div>

    </main>
  );
}