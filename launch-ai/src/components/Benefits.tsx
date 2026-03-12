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
            ACCELERATE <br/> <span className="text-neon-gradient">VELOCITY.</span>
          </h2>
          <p className="text-lg text-gray-400">
            Provisioning the infrastructure, talent density, and computational resources required to deploy AI at scale.
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
              Live Endpoints
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Compile and deploy LLM microservices and autonomous agents into production environments.
            </p>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="tech-glass-card p-8 group">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center mb-6 text-[#b026ff] group-hover:bg-[#b026ff]/10 group-hover:border-[#b026ff]/30 transition-all duration-300">
              <Github size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white tracking-wide uppercase text-sm">
              Commit History
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Generate a high-signal open-source footprint to bypass automated resume filters.
            </p>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="tech-glass-card p-8 group">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center mb-6 text-[#00f0ff] group-hover:bg-[#00f0ff]/10 group-hover:border-[#00f0ff]/30 transition-all duration-300">
              <Users size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white tracking-wide uppercase text-sm">
              Node Network
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Integrate with highly concurrent, cross-functional engineering pods of top-tier talent.
            </p>
          </motion.div>
          
          {/* Card 4 */}
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="tech-glass-card p-8 group">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center mb-6 text-[#b026ff] group-hover:bg-[#b026ff]/10 group-hover:border-[#b026ff]/30 transition-all duration-300">
              <Sparkles size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white tracking-wide uppercase text-sm">
              Admin Access
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Download architectural patterns and code review cycles directly from senior staff.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
