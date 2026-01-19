import "./globals.css";
import type { Metadata } from "next";
// 1. Import a Western-style Serif font
import { Playfair_Display } from "next/font/google"; 
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import ClickSound from "@/components/ClickSound"; // <--- 1. NEW IMPORT

// Configure the font
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif", // This allows tailwind's 'font-serif' to use it
  display: "swap",
});

// 2. Update Metadata to match the brand
export const metadata: Metadata = {
  title: "Outlaw Code | Digital Bounty Hunters",
  description: "Wrangling AI & Web Solutions for the modern frontier.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable}`}>
      <body 
        // 3. Changed background to Paper (#f5f5f5) and text to Ink (#1a120b)
        className="antialiased bg-[#f5f5f5] text-[#1a120b] font-serif" 
        suppressHydrationWarning
      >
        {/* The Preloader sits at the top level */}
        <Preloader />

        {/* 2. ADD THE SOUND COMPONENT HERE */}
        <ClickSound />
        
        {/* The Navbar stays fixed at the top */}
        <Navbar />

        {/* The specific page content renders here */}
        {children}
      </body>
    </html>
  );
}