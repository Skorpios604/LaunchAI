"use client";

import { Twitter, Github, Linkedin, Hexagon } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-transparent text-gray-400 relative overflow-hidden border-t border-white/5">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1200px] flex flex-wrap justify-between items-start gap-12 mb-16 border-b border-white/10 pb-16 relative z-10">
        <div className="flex flex-col max-w-sm">
          <div className="flex items-center text-xl font-bold tracking-widest text-white mb-6" style={{ fontFamily: "var(--font-orbitron)" }}>
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <Hexagon className="w-6 h-6 mr-3 text-[#00f0ff]" />
            </motion.div>
            <span>LAUNCH<span className="text-[#00f0ff]">AI</span></span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed font-mono uppercase tracking-wide">
             Accelerating the development timeline for software operators. Compiling theory into raw production logic.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16 lg:gap-24 font-mono text-sm">
          <div className="flex flex-col gap-4">
            <h5 className="text-[#00f0ff] font-bold text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>SYSTEM</h5>
            <a href="#how" className="text-gray-500 hover:text-[#00f0ff] hover:pl-2 transition-all duration-300">{'// Architecture'}</a>
            <a href="#tracks" className="text-gray-500 hover:text-[#00f0ff] hover:pl-2 transition-all duration-300">{'// Nodes'}</a>
            <a href="#stack" className="text-gray-500 hover:text-[#00f0ff] hover:pl-2 transition-all duration-300">{'// Dependencies'}</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-[#b026ff] font-bold text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>ENTITY</h5>
            <a href="#" className="text-gray-500 hover:text-[#b026ff] hover:pl-2 transition-all duration-300">{'// Init'}</a>
            <a href="#" className="text-gray-500 hover:text-[#b026ff] hover:pl-2 transition-all duration-300">{'// Telemetry'}</a>
            <a href="#" className="text-gray-500 hover:text-[#b026ff] hover:pl-2 transition-all duration-300">{'// Pings'}</a>
          </div>
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>UPLINKS</h5>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#00f0ff] hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#00f0ff] hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all duration-300">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#00f0ff] hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 max-w-[1200px] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-widest uppercase text-gray-600 relative z-10">
        <div>
          SYS.DATE: {new Date().getFullYear()} // LAUNCH AI // CONFIDENTIAL
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy.LOG</a>
          <a href="#" className="hover:text-white transition-colors">Terms.LOG</a>
        </div>
      </div>
    </footer>
  );
}
