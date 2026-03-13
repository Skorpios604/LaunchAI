"use client";

import { Rocket, Github, Users, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Benefits() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="benefits">
      
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight leading-tight">
            WHAT YOU <br/> <span className="text-neon-gradient">GET.</span>
          </h2>
          <p className="text-lg text-gray-400">
            Everything you need to land your first AI engineering role — real experience, not certificates.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="tech-glass-card p-8 group">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center mb-6 text-[#00f0ff] group-hover:bg-[#00f0ff]/10 group-hover:border-[#00f0ff]/30 transition-all duration-300">
              <Rocket size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white tracking-wide uppercase text-sm">
              Real Project Experience
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Build and deploy production AI apps — LLM tools, ML models, AI agents, and data pipelines.
            </p>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="tech-glass-card p-8 group">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center mb-6 text-[#b026ff] group-hover:bg-[#b026ff]/10 group-hover:border-[#b026ff]/30 transition-all duration-300">
              <Github size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white tracking-wide uppercase text-sm">
              GitHub Portfolio
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Walk away with open-source contributions and shipped products that prove your skills to employers.
            </p>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="tech-glass-card p-8 group">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center mb-6 text-[#00f0ff] group-hover:bg-[#00f0ff]/10 group-hover:border-[#00f0ff]/30 transition-all duration-300">
              <Users size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white tracking-wide uppercase text-sm">
              Team Collaboration
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Work alongside engineers, designers, and product leads in cross-functional teams of 5–7.
            </p>
          </motion.div>
          
          {/* Card 4 */}
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="tech-glass-card p-8 group">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center mb-6 text-[#b026ff] group-hover:bg-[#b026ff]/10 group-hover:border-[#b026ff]/30 transition-all duration-300">
              <Sparkles size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white tracking-wide uppercase text-sm">
              Mentorship
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Get code reviews, architectural guidance, and career advice from experienced engineers.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
