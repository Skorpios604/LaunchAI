"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const words = [
    "REAL PROJECTS",
    "REAL TEAMS",
    "OPEN SOURCE",
    "AI ENGINEERING",
    "PORTFOLIO READY",
    "CAREER GROWTH",
    "SHIP CODE",
    "BUILD WITH US"
  ];
  const items = [...words, ...words, ...words]; // Triple the array for seamless endless scrolling

  return (
    <div className="w-full border-y border-white/5 py-3 overflow-hidden flex relative z-10 bg-transparent">
      {/* Soft gradient fades on the edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[var(--color-tech-bg)] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[var(--color-tech-bg)] to-transparent z-10 pointer-events-none"></div>

      <motion.div
        className="flex whitespace-nowrap gap-12 text-[#b026ff]/60 font-medium tracking-widest text-xs uppercase"
        style={{ fontFamily: "var(--font-orbitron)" }}
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
      >
        {items.map((text, i) => (
          <div key={i} className="flex items-center gap-12">
            <span>{text}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]/40 shadow-[0_0_8px_rgba(0,240,255,0.4)]"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
