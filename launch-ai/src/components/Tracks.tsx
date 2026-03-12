"use client";

import { Compass, Bot, GitBranch, CheckSquare } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Tracks() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 relative bg-transparent" id="tracks">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-[#00ff88] uppercase tracking-widest text-xs font-bold mb-4 bg-[#00ff88]/10 px-4 py-1.5 rounded-full border border-[#00ff88]/30">
            <span className="w-1.5 h-1.5 bg-[#00ff88] rounded-full animate-pulse"></span>
            Curriculum Matrix
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight" style={{ fontFamily: "var(--font-orbitron)" }}>
            INITIALIZE <span className="text-[#00ff88]">TRACK.</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Select the specialization vector that aligns with your operational deployment goals.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-8 max-w-5xl mx-auto"
        >
          {/* Beginner Track */}
          <motion.div variants={itemVariants} className="tech-glass p-8 flex flex-col group border-t-2 border-t-[#0a66c2]/50 hover:border-t-[#0a66c2] transition-colors relative overflow-hidden">
            {/* Glow sweep */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-[#0a66c2]/10 opacity-40 group-hover:animate-sweep"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Compass className="text-[#0a66c2]" size={28} />
                <h3 className="text-xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: "var(--font-orbitron)" }}>
                  Level 1
                </h3>
              </div>
              <p className="text-xs text-gray-400 mb-8 leading-relaxed font-mono uppercase">
                Base environment setup for uninitiated users.
              </p>
              <ul className="space-y-4 text-gray-300 font-mono text-sm mb-8 flex-grow">
                <li className="flex items-start gap-3"><CheckSquare className="text-[#0a66c2] shrink-0 mt-0.5" size={16} /> Python Runtimes</li>
                <li className="flex items-start gap-3"><CheckSquare className="text-[#0a66c2] shrink-0 mt-0.5" size={16} /> Basic Inference</li>
                <li className="flex items-start gap-3"><CheckSquare className="text-[#0a66c2] shrink-0 mt-0.5" size={16} /> Data Vectors</li>
                <li className="flex items-start gap-3"><CheckSquare className="text-[#0a66c2] shrink-0 mt-0.5" size={16} /> REST Integrations</li>
              </ul>
              <a href="#apply" className="tech-btn-primary w-full mt-auto" style={{ border: "1px solid #0a66c2", color: "#0a66c2", boxShadow: "none" }}>Mount Data</a>
            </div>
          </motion.div>

          {/* AI Engineer Track (Featured) */}
          <motion.div variants={itemVariants} className="tech-glass p-8 flex flex-col border border-[#00f0ff] relative bg-[#00f0ff]/5 transform md:-translate-y-4 shadow-[0_0_30px_rgba(0,240,255,0.15)] overflow-hidden">
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00f0ff]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00f0ff]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00f0ff]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00f0ff]"></div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#00f0ff] text-black font-bold text-[10px] uppercase tracking-widest py-1 px-4 shadow-[0_0_10px_#00f0ff]">
              OPTIMAL PATH
            </div>
            
            <div className="relative z-10 mt-4">
              <div className="flex items-center gap-3 mb-6 mt-2">
                <Bot className="text-[#00f0ff] drop-shadow-[0_0_8px_#00f0ff]" size={32} />
                <h3 className="text-2xl font-bold text-white tracking-widest uppercase text-neon-gradient" style={{ fontFamily: "var(--font-orbitron)" }}>
                  AI ARCHITECT
                </h3>
              </div>
              <p className="text-xs text-gray-400 mb-8 leading-relaxed font-mono uppercase">
                Requires admin clearance. Deploy autonomous systems.
              </p>
              <ul className="space-y-4 text-white font-mono text-sm mb-8 flex-grow">
                <li className="flex items-start gap-3"><CheckSquare className="text-[#00f0ff] shrink-0 mt-0.5" size={16} /> Multi-Model Architecture</li>
                <li className="flex items-start gap-3"><CheckSquare className="text-[#00f0ff] shrink-0 mt-0.5" size={16} /> Advanced RAG Pipelines</li>
                <li className="flex items-start gap-3"><CheckSquare className="text-[#00f0ff] shrink-0 mt-0.5" size={16} /> Latency Optimization</li>
                <li className="flex items-start gap-3"><CheckSquare className="text-[#00f0ff] shrink-0 mt-0.5" size={16} /> Multi-Agent Swarms</li>
              </ul>
              <a href="#apply" className="tech-btn-primary w-full mt-auto">Execute</a>
            </div>
          </motion.div>

          {/* ML Engineer Track */}
          <motion.div variants={itemVariants} className="tech-glass p-8 flex flex-col group border-t-2 border-t-[#b026ff]/50 hover:border-t-[#b026ff] transition-colors relative overflow-hidden">
             {/* Glow sweep */}
             <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-[#b026ff]/10 opacity-40 group-hover:animate-sweep"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <GitBranch className="text-[#b026ff]" size={28} />
                <h3 className="text-xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: "var(--font-orbitron)" }}>
                  Data Ops
                </h3>
              </div>
              <p className="text-xs text-gray-400 mb-8 leading-relaxed font-mono uppercase">
                For tensor manipulation and cluster orchestration.
              </p>
              <ul className="space-y-4 text-gray-300 font-mono text-sm mb-8 flex-grow">
                <li className="flex items-start gap-3"><CheckSquare className="text-[#b026ff] shrink-0 mt-0.5" size={16} /> Weights Extraction</li>
                <li className="flex items-start gap-3"><CheckSquare className="text-[#b026ff] shrink-0 mt-0.5" size={16} /> Data Preprocessing</li>
                <li className="flex items-start gap-3"><CheckSquare className="text-[#b026ff] shrink-0 mt-0.5" size={16} /> CI/CD Integrations</li>
                <li className="flex items-start gap-3"><CheckSquare className="text-[#b026ff] shrink-0 mt-0.5" size={16} /> Parameter Tuning</li>
              </ul>
              <a href="#apply" className="tech-btn-primary w-full mt-auto" style={{ border: "1px solid #b026ff", color: "#b026ff", boxShadow: "none" }}>Mount Data</a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
