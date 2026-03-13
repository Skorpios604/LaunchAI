"use client";

import { User, Cpu, Server, Layout, Database } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function TeamStructure() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-transparent" id="how">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[#00f0ff] uppercase tracking-widest text-xs font-bold mb-4 bg-[#00f0ff]/10 px-4 py-1.5 rounded-full border border-[#00f0ff]/30">
            <span className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full animate-ping"></span>
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">
            YOUR <span className="text-neon-gradient">TEAM.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            You don&apos;t just write code alone. You join a team of 5–7 specialists and build one real AI product together.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
        >
          {/* Product Lead Card */}
          <motion.div variants={itemVariants} className="tech-glass p-6 flex flex-col relative overflow-hidden group border-t-2 border-t-[#ff2a5f]">
            <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="text-[#ff2a5f] text-[10px] font-mono">ROLE: PL</span>
            </div>
            <div className="flex items-center gap-4 mb-4 mt-2">
              <div className="w-12 h-12 bg-white/5 border border-[#ff2a5f]/40 text-[#ff2a5f] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,42,95,0.2)]">
                <User size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#ff2a5f] tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-orbitron)" }}>Product Lead</div>
                <h3 className="text-xl font-bold text-white">1 Member</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed border-l border-white/10 pl-4 mt-2">
              Owns the product vision, manages the roadmap, coordinates sprints, and drives user experience decisions.
            </p>
          </motion.div>

          {/* AI/ML Card */}
          <motion.div variants={itemVariants} className="tech-glass bg-gradient-to-b from-[#0a66c2]/10 to-transparent p-6 flex flex-col relative overflow-hidden group border-t-2 border-t-[#0a66c2] transform md:-translate-y-4 shadow-[0_0_30px_rgba(10,102,194,0.1)]">
            <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="text-[#0a66c2] text-[10px] font-mono">ROLE: AI</span>
            </div>
            <div className="flex items-center gap-4 mb-4 mt-2">
              <div className="w-12 h-12 bg-[#0a66c2]/20 border border-[#0a66c2]/50 text-[#00f0ff] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(10,102,194,0.4)]">
                <Cpu size={24} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#00f0ff] tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-orbitron)" }}>AI / ML Engineers</div>
                <h3 className="text-xl font-bold text-white">2–3 Members</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed border-l border-[#0a66c2]/30 pl-4 mt-2">
              Build LLM integrations, implement RAG systems, fine-tune models, and handle AI agent development and deployment.
            </p>
          </motion.div>

          {/* Backend Card */}
          <motion.div variants={itemVariants} className="tech-glass p-6 flex flex-col relative overflow-hidden group border-t-2 border-t-[#00ff88]">
            <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="text-[#00ff88] text-[10px] font-mono">ROLE: BE</span>
            </div>
            <div className="flex items-center gap-4 mb-4 mt-2">
              <div className="w-12 h-12 bg-white/5 border border-[#00ff88]/40 text-[#00ff88] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,255,136,0.2)]">
                <Server size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#00ff88] tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-orbitron)" }}>Backend Engineer</div>
                <h3 className="text-xl font-bold text-white">1 Member</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed border-l border-white/10 pl-4 mt-2">
              Designs APIs, builds scalable database architectures, and develops server-side services and microservices.
            </p>
          </motion.div>

          {/* Frontend Card */}
          <motion.div variants={itemVariants} className="tech-glass p-6 flex flex-col relative overflow-hidden group lg:col-start-1 border-t-2 border-t-[#fce000]">
            <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="text-[#fce000] text-[10px] font-mono">ROLE: FE</span>
            </div>
            <div className="flex items-center gap-4 mb-4 mt-2">
              <div className="w-12 h-12 bg-white/5 border border-[#fce000]/40 text-[#fce000] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(252,224,0,0.2)]">
                <Layout size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#fce000] tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-orbitron)" }}>Frontend Engineer</div>
                <h3 className="text-xl font-bold text-white">1 Member</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed border-l border-white/10 pl-4 mt-2">
              Builds responsive, interactive user interfaces with modern frameworks and design systems.
            </p>
          </motion.div>

          {/* Data Card */}
          <motion.div variants={itemVariants} className="tech-glass p-6 flex flex-col relative overflow-hidden group border-t-2 border-t-[#b026ff]">
            <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="text-[#b026ff] text-[10px] font-mono">ROLE: DE</span>
            </div>
            <div className="flex items-center gap-4 mb-4 mt-2">
              <div className="w-12 h-12 bg-white/5 border border-[#b026ff]/40 text-[#b026ff] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(176,38,255,0.2)]">
                <Database size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#b026ff] tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-orbitron)" }}>Data Engineer</div>
                <h3 className="text-xl font-bold text-white">1 Member</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed border-l border-white/10 pl-4 mt-2">
              Builds data pipelines, manages vector databases, and handles data preprocessing and ETL workflows.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
