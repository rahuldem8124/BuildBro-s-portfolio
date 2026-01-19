"use client";
import { motion } from "framer-motion";

const members = [
  // ROW 1
  { 
    name: "Raghul", 
    role: "AI Lead", 
    bounty: "$10,000",
    img: "/team/lead.jpeg", 
    bio: "Neural network architect." 
  },
  { 
    name: "Rahul", 
    role: "Frontend", 
    bounty: "$8,500",
    img: "/team/frontend.jpeg", 
    bio: "UI/UX pixel perfectionist." 
  },
  { 
    name: "Pranesh", 
    role: "DevOps", 
    bounty: "$7,000",
    img: "/team/devops.jpeg", 
    bio: "Cloud infrastructure expert." 
  },
  { 
    name: "Sriman", 
    role: "Designer", 
    bounty: "$6,500",
    img: "/team/member4.jpeg", 
    bio: "Intuitive interface design." 
  },
  // ROW 2
  { 
    name: "Rajesh", 
    role: "Data Sci", 
    bounty: "$7,200",
    img: "/team/member5.jpeg", 
    bio: "Big data wrangler." 
  },
  { 
    name: "Saravana", 
    role: "Mobile", 
    bounty: "$6,800",
    img: "/team/member6.jpeg", 
    bio: "iOS & Android specialist." 
  },
  { 
    name: "Sabari", 
    role: "Security", 
    bounty: "$8,000",
    img: "/team/member7.jpeg", 
    bio: "Cybersecurity warden." 
  },
  { 
    name: "Tharun", 
    role: "QA Testing", 
    bounty: "$5,500",
    img: "/team/member8.jpeg", 
    bio: "Bug bounty hunter." 
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-[#f5f5f5] px-4 relative overflow-hidden border-t border-black/5">
      {/* Background grain */}
      <div className="old-film-overlay opacity-10 absolute inset-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black font-serif italic text-black mb-2 uppercase tracking-tighter">
            — The Hateful Eight —
          </h2>
          <p className="text-gray-600 font-serif italic text-sm max-w-xl mx-auto">
            Wanted dead or alive for crimes of extreme coding efficiency.
          </p>
        </div>

        {/* 🤠 COMPACT 4-COLUMN GRID (2 Rows of 4) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {members.map((m, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-3 bg-[#e8e2d5] border border-black/20 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] relative group cursor-default"
              style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')" }}
            >
              {/* NAIL / PIN */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1a120b] border border-gray-600 shadow-sm z-30" />

              {/* WANTED Header (Tiny) */}
              <div className="text-center border-b border-black/20 pb-1 mb-2">
                <h3 className="text-lg font-black text-black uppercase tracking-widest">Wanted</h3>
              </div>

              {/* Photo (Compact) */}
              <div className="relative aspect-[3/4] mb-2 overflow-hidden bg-black border border-[#2b1d15]/10">
                <div className="absolute inset-0 bg-[#1a120b] flex items-center justify-center text-4xl grayscale opacity-20">
                    🤠
                </div>
                <img 
                  src={m.img} 
                  alt={m.name} 
                  className="w-full h-full object-cover grayscale contrast-125 sepia-[.3] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-500 relative z-10"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.6)] z-20" />
              </div>

              {/* Details (Scaled Down) */}
              <div className="text-center relative z-10">
                <h3 className="text-lg font-black font-serif text-[#1a120b] leading-none mb-1">{m.name}</h3>
                <p className="text-[#b85c38] text-[10px] font-bold uppercase tracking-widest mb-2">
                   {m.role}
                </p>
                
                {/* Reward Badge (Small & Compact) */}
                <div className="bg-[#2b1d15] text-[#f5f5f5] py-1 px-2 mb-2 font-black text-sm uppercase tracking-wider inline-block transform -rotate-2">
                  Reward: {m.bounty}
                </div>
                
                <p className="text-gray-800 text-[10px] font-serif italic leading-tight px-1 opacity-80 line-clamp-2">
                  "{m.bio}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}