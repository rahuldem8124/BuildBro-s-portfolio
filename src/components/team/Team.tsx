"use client";
import { motion } from "framer-motion";

const members = [
  { name: "You", role: "AI & Backend Lead", bio: "Architecting scalable neural networks and robust server logic." },
  { name: "Partner 1", role: "Frontend Architect", bio: "Crafting immersive, high-performance user interfaces." },
  { name: "Partner 2", role: "Full-stack / DevOps", bio: "Ensuring 99.9% uptime and seamless cloud deployments." },
];

export default function Team() {
  return (
    <section className="py-24 bg-[#020617] px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">The Founding Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Three engineers, one mission: turning complex problems into elegant software solutions.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {members.map((m, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500 transition-all"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                {m.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{m.name}</h3>
              <p className="text-blue-500 text-sm font-mono mb-4">{m.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}