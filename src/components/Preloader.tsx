"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Session Check: Skip loader if already visited this session
    if (window.sessionStorage.getItem("visited")) {
      setIsVisible(false);
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          window.sessionStorage.setItem("visited", "true"); // Mark as visited
          setTimeout(() => setIsVisible(false), 200);
          return 100;
        }
        const jump = Math.floor(Math.random() * 10) + 5;
        return Math.min(prev + jump, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617] perspective-1000"
        >
          <div className="relative w-24 h-24 preserve-3d">
            <motion.div
              animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              className="w-full h-full relative preserve-3d"
            >
              {[0, 90, 180, 270].map((deg) => (
                <div
                  key={deg}
                  className="absolute inset-0 border border-blue-500/40 bg-blue-500/10"
                  style={{ transform: `rotateY(${deg}deg) translateZ(48px)` }}
                />
              ))}
              {/* Top and Bottom */}
              <div className="absolute inset-0 border border-blue-500/40 bg-blue-500/10" style={{ transform: "rotateX(90deg) translateZ(48px)" }} />
              <div className="absolute inset-0 border border-blue-500/40 bg-blue-500/10" style={{ transform: "rotateX(-90deg) translateZ(48px)" }} />
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <div className="text-5xl font-mono font-black text-white">{progress}%</div>
            <p className="text-[8px] tracking-[0.6em] text-blue-500 uppercase mt-2 animate-pulse">Initializing Studio</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}