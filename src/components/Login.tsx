"use client";
import { Lock, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#e8e2d5] p-8 border-2 border-[#1a120b] shadow-[10px_10px_0px_#1a120b] relative"
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')" }}
    >
      {/* Decorative Corner Rivets */}
      <div className="absolute top-3 left-3 w-2 h-2 bg-[#1a120b] rounded-full opacity-30" />
      <div className="absolute top-3 right-3 w-2 h-2 bg-[#1a120b] rounded-full opacity-30" />
      <div className="absolute bottom-3 left-3 w-2 h-2 bg-[#1a120b] rounded-full opacity-30" />
      <div className="absolute bottom-3 right-3 w-2 h-2 bg-[#1a120b] rounded-full opacity-30" />

      <form className="space-y-6">
        
        {/* Username Field */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-[#1a120b]/70">
            Badge Number / Email
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#b85c38]" />
            <input 
              type="email" 
              placeholder="sheriff@outlaw.code"
              className="w-full bg-[#f5f5f5] border-b-2 border-[#1a120b]/20 px-10 py-3 text-[#1a120b] font-serif placeholder:text-[#1a120b]/30 focus:outline-none focus:border-[#b85c38] transition-colors"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-[#1a120b]/70">
            Security Key
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#b85c38]" />
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-[#f5f5f5] border-b-2 border-[#1a120b]/20 px-10 py-3 text-[#1a120b] font-serif placeholder:text-[#1a120b]/30 focus:outline-none focus:border-[#b85c38] transition-colors"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="button" // Change to "submit" when logic is ready
          className="w-full bg-[#1a120b] text-[#e5d3b3] py-4 font-black uppercase tracking-widest hover:bg-[#b85c38] transition-colors flex items-center justify-center gap-2 group mt-4"
        >
          Open Ledger
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

      </form>
    </motion.div>
  );
}