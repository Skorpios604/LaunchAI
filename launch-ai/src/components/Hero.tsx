"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <header ref={ref} className="min-h-[100vh] flex flex-col justify-center pt-32 pb-0 relative overflow-hidden" id="hero">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#b026ff] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse hidden md:block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse hidden md:block" style={{ animationDelay: "2s" }}></div>

      <motion.div 
        style={{ y: textY, opacity }}
        className="container mx-auto px-6 max-w-[1200px] mb-20 text-center flex flex-col items-center relative z-10"
      >
        
        {/* Tech Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-gray-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-10 tracking-[0.2em] uppercase backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff] animate-pulse"></span>
          System Online // Cohort 1 Active
        </motion.div>
        
        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl mb-6 text-white leading-tight max-w-5xl mx-auto drop-shadow-2xl"
        >
          BUILD <span className="text-neon-gradient">FUTURE</span> APPS
          <br className="hidden md:block" /> WITH REAL SQUADS.
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Escape tutorial hell. Enter the matrix of production-grade engineering. 
          Ship LLM architectures, construct vector pipelines, and compile a verifiable portfolio.
        </motion.p>
        
        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md mx-auto sm:max-w-none"
        >
          <a
            href="#apply"
            className="tech-btn-primary px-10 py-4 text-base w-full sm:w-auto text-center"
          >
            Deploy Application
          </a>
          <a
            href="#how"
            className="px-10 py-4 text-base w-full sm:w-auto bg-white/5 text-white border border-white/20 hover:bg-white/10 transition-all text-center tracking-widest uppercase font-semibold text-sm flex items-center justify-center backdrop-blur-md"
          >
            View Docs
          </a>
        </motion.div>
      </motion.div>

    </header>
  );
}
