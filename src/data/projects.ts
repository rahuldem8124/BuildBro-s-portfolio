export interface Project {
  title: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    title: "Enterprise SaaS Dashboard",
    category: "Web Development",
    problem: "A logistics company struggled with fragmented data across multiple spreadsheets.",
    solution: "Engineered a centralized Next.js dashboard with real-time tracking and automated reporting.",
    impact: "Boosted operational transparency and saved the team 15 hours of manual data entry per week.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  },
  {
    title: "AI-Powered Customer Support",
    category: "AI Tools",
    problem: "High support ticket volume was leading to 24-hour response delays.",
    solution: "Implemented a custom RAG (Retrieval-Augmented Generation) chatbot trained on internal documentation.",
    impact: "Automated 80% of common queries and dropped average response time to under 1 minute.",
    stack: ["OpenAI", "LangChain", "FastAPI", "Python"],
  },
  {
    title: "Viral Motion Graphics Ad",
    category: "Video Editing",
    problem: "An e-commerce brand's social ads had a high drop-off rate within the first 3 seconds.",
    solution: "Created high-retention cinematic edits with aggressive hooks and dynamic motion typography.",
    impact: "Achieved a 45% increase in click-through rate (CTR) and 1M+ organic views.",
    stack: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
  },
  {
    title: "Executive Career Package",
    category: "Resume Making",
    problem: "A senior developer was struggling to pass ATS filters for FAANG-level positions.",
    solution: "Redesigned a dual-column, ATS-optimized resume emphasizing quantifiable engineering impact.",
    impact: "Resulted in 4 interview callbacks within 10 days from top-tier tech companies.",
    stack: ["ATS Optimization", "Professional Branding", "Typography Design"],
  }
];