import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";

// Define the site-wide SEO metadata
export const metadata: Metadata = {
  title: "AI & Web Solutions | Founding Team",
  description: "Building intelligent software for modern businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className="antialiased bg-[#020617] text-white" 
        suppressHydrationWarning
      >
        {/* The Preloader sits at the top level to cover the screen on load */}
        <Preloader />
        
        {/* The Navbar stays fixed at the top for all pages */}
        <Navbar />

        {/* The specific page content renders here */}
        {children}
      </body>
    </html>
  );
}