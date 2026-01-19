"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Typewriter = ({ text, delay = 0.05 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset the typewriter if the text prop changes
  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span className="font-mono">
      {displayText}
      {/* This is the blinking telegram cursor */}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-5 bg-[#b85c38] ml-1 align-middle"
      />
    </span>
  );
};

export default Typewriter; // Changed to default export for easier importing