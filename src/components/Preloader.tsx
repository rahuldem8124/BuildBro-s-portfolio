"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");
    if (visited) {
      setIsVisible(false);
      return;
    }

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const jump = Math.floor(Math.random() * 5) + 2;
        return Math.min(prev + jump, 100);
      });
    }, 80);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      sessionStorage.setItem("visited", "true");
      setTimeout(() => setIsVisible(false), 1200);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0, filter: "brightness(0)" }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f5f5f5] overflow-hidden"
        >
          {/* VINTAGE CINEMA OVERLAYS */}
          <div className="old-film-overlay opacity-30 grayscale pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_300px_rgba(0,0,0,0.85)]" />

          {/* 🌵 REALISTIC ROLLING WEED */}
          <motion.div
            initial={{ x: "-50vw", rotate: 0 }}
            animate={{ 
              x: "150vw", 
              rotate: 1440,
              y: [0, -60, 5, -30, 0, -50, 10, 0] // Asymmetric bounce for realism
            }}
            transition={{ 
              x: { duration: 8, ease: "linear", repeat: Infinity },
              rotate: { duration: 8, ease: "linear", repeat: Infinity },
              y: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-[20%] z-50 pointer-events-none"
          >
             <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Layered Twig Clusters */}
                <div className="absolute inset-0 border-[3px] border-dashed border-black/30 rounded-full blur-[0.5px] scale-110" />
                <div className="absolute inset-0 border-[2px] border-dotted border-black/40 rounded-[45%_55%_70%_30%] rotate-45" />
                <div className="absolute inset-0 border-[1px] border-dashed border-black/20 rounded-[30%_70%_40%_60%] -rotate-90" />
                
                {/* Internal Cross-hatched Twigs */}
                {[...Array(8)].map((_, i) => (
                    <div 
                        key={i} 
                        className="absolute w-full h-[1.5px] bg-black/15" 
                        style={{ 
                          transform: `rotate(${i * 22.5}deg) scale(${0.8 + Math.random() * 0.4})`,
                          borderRadius: '100%' 
                        }} 
                    />
                ))}
                
                {/* Ground Shadow (Moves with the weed) */}
                <motion.div 
                   animate={{ scaleX: [1, 0.6, 1], opacity: [0.2, 0.1, 0.2] }}
                   transition={{ duration: 1.2, repeat: Infinity }}
                   className="absolute -bottom-4 w-3/4 h-4 bg-black/10 blur-xl rounded-full"
                />
             </div>
          </motion.div>

          <div className="relative flex flex-col items-center w-full max-w-md z-10 px-8">
            {/* PROGRESS INTERFACE */}
            <div className="w-full text-center">
              <span className="text-8xl font-black font-serif italic text-black leading-none tracking-tighter">
                {progress}%
              </span>
              
              <div className="mt-6 space-y-2">
                <div className="h-[1px] w-full bg-black/10 relative overflow-hidden">
                  <motion.div
                    className="h-full bg-black absolute left-0 top-0"
                    animate={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-[10px] tracking-[1.2em] uppercase font-bold text-black/50">
                  Tracing The Frontier
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}