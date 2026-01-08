"use client";
import { motion } from "framer-motion";
import { Globe, Zap, Shield, Layout, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WebDevPage() {
  const features = [
    { title: "Next.js 15 Speed", desc: "Blazing fast load times for better SEO.", icon: <Zap className="text-yellow-500" /> },
    { title: "Responsive UI", desc: "Perfectly optimized for mobile and desktop.", icon: <Layout className="text-blue-500" /> },
    { title: "Secure Backend", desc: "Robust data protection and encryption.", icon: <Shield className="text-green-500" /> },
  ];

  return (
    <main className="bg-[#020617] min-h-screen text-white p-8 md:p-24">
      <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12">
        <ArrowLeft size={20} /> Back to Agency
      </Link>
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Modern <span className="text-blue-500">Web</span> Solutions</h1>
        <p className="text-xl text-slate-400 mb-12">We build scalable SaaS, dashboards, and e-commerce sites using the latest tech stack.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}