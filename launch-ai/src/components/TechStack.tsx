"use client";

import { Cpu, Network, Link, Smile, Cloud, Box, Layers, Database, Layout, Zap, Palette, Server, ZapOff, Braces } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function TechStack() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 relative" id="stack">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
          
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 mt-8 lg:sticky lg:top-32"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight" style={{ fontFamily: "var(--font-orbitron)" }}>
              CURRENT <br className="hidden lg:block"/> DEPENDENCIES
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We compile applications utilizing the identical frameworks leveraged by hyper-growth tech startups. Bypass the tutorials. Write raw code.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#00f0ff] to-[#b026ff] rounded shadow-[0_0_10px_#00f0ff]"></div>
          </motion.div>
          
          {/* Stack Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            {/* AI / ML */}
            <motion.div variants={itemVariants} className="tech-glass-card p-8 group">
              <h4 className="flex items-center gap-3 mb-6 text-xl font-bold text-white tracking-wider" style={{ fontFamily: "var(--font-orbitron)" }}>
                <Cpu className="text-[#00f0ff] group-hover:animate-spin-slow" size={24} /> AI / ML
              </h4>
              <ul className="space-y-4 font-mono text-xs md:text-sm text-gray-300">
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded border border-white/5 hover:border-[#00f0ff]/50 transition-colors">
                  <span className="text-[#00f0ff]">{"<"}</span> Python & PyTorch <span className="text-[#00f0ff]">{" />"}</span>
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded border border-white/5 hover:border-[#00f0ff]/50 transition-colors">
                  <span className="text-[#b026ff]">{"<"}</span> TensorFlow <span className="text-[#b026ff]">{" />"}</span>
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded border border-white/5 hover:border-[#00f0ff]/50 transition-colors">
                  <span className="text-[#0a66c2]">{"<"}</span> LangChain <span className="text-[#0a66c2]">{" />"}</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Infra */}
            <motion.div variants={itemVariants} className="tech-glass-card p-8 group mt-0 sm:mt-12">
              <h4 className="flex items-center gap-3 mb-6 text-xl font-bold text-white tracking-wider" style={{ fontFamily: "var(--font-orbitron)" }}>
                <Cloud className="text-[#b026ff] group-hover:animate-pulse" size={24} /> INFRA
              </h4>
              <ul className="space-y-4 font-mono text-xs md:text-sm text-gray-300">
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded border border-white/5 hover:border-[#b026ff]/50 transition-colors">
                   AWS / GCP
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded border border-white/5 hover:border-[#b026ff]/50 transition-colors">
                   Docker Containers
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded border border-white/5 hover:border-[#b026ff]/50 transition-colors">
                   Kubernetes
                </li>
              </ul>
            </motion.div>

            {/* Frontend */}
            <motion.div variants={itemVariants} className="tech-glass-card p-8 group">
              <h4 className="flex items-center gap-3 mb-6 text-xl font-bold text-white tracking-wider" style={{ fontFamily: "var(--font-orbitron)" }}>
                <Layout className="text-[#fce000] drop-shadow-[0_0_8px_#fce000]" size={24} /> CLIENT
              </h4>
              <ul className="space-y-4 font-mono text-xs md:text-sm text-gray-300">
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded border border-white/5 hover:border-[#fce000]/50 transition-colors">
                  React 19 / DOM
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded border border-white/5 hover:border-[#fce000]/50 transition-colors">
                  Next.js App Router
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded border border-white/5 hover:border-[#fce000]/50 transition-colors">
                  Tailwind CSS + Motion
                </li>
              </ul>
            </motion.div>

            {/* Backend */}
            <motion.div variants={itemVariants} className="tech-glass-card p-8 group sm:mt-12">
              <h4 className="flex items-center gap-3 mb-6 text-xl font-bold text-white tracking-wider" style={{ fontFamily: "var(--font-orbitron)" }}>
                <Server className="text-[#00ff88] drop-shadow-[0_0_8px_#00ff88]" size={24} /> BACKEND
              </h4>
              <ul className="space-y-4 font-mono text-xs md:text-sm text-gray-300">
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded border border-white/5 hover:border-[#00ff88]/50 transition-colors">
                  Node.js Runtime
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded border border-white/5 hover:border-[#00ff88]/50 transition-colors">
                  FastAPI / Python
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded border border-white/5 hover:border-[#00ff88]/50 transition-colors">
                  Vector Databases (Pinecone, etc)
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
