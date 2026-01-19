"use client";
import { useEffect, useRef } from "react";

export default function ClickSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Load sound
    audioRef.current = new Audio("/sounds/gunshot.mp3");
    audioRef.current.volume = 0.3;

    const handleShoot = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // 🔍 STRICT CHECK:
      // Search up the DOM tree to see if the clicked element is inside a <button> or <a>
      const clickedButton = target.closest("button");
      const clickedLink = target.closest("a");

      // 🛑 STOP if it's not a button and not a link
      if (!clickedButton && !clickedLink) {
        return; 
      }

      // ✅ FIRE only if we passed the check above
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {
            // Ignore autoplay errors
        });
      }
    };

    // Attach listener
    window.addEventListener("mousedown", handleShoot);

    // 🧹 CLEANUP: This removes the listener when you leave/reload pages
    return () => {
      window.removeEventListener("mousedown", handleShoot);
    };
  }, []);

  return null;
}