"use client";

import { useState, useEffect } from "react";
import { Rocket, Github, Users, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Animated Elements ── */

function RocketLaunch() {
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLaunched(true);
      setTimeout(() => setLaunched(false), 1800);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-full relative overflow-hidden">
      {/* Trail particles */}
      <AnimatePresence>
        {launched &&
          [0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#00f0ff]"
              initial={{ y: 0, x: 0, opacity: 0.8, scale: 1 }}
              animate={{
                y: [0, 40 + i * 15],
                x: [(i - 2) * 3, (i - 2) * 8],
                opacity: [0.8, 0],
                scale: [1, 0.3],
              }}
              transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
              style={{ bottom: "40%" }}
            />
          ))}
      </AnimatePresence>
      <motion.div
        animate={
          launched
            ? { y: [0, -80], scale: [1, 0.8], opacity: [1, 0.6] }
            : { y: 0, scale: 1, opacity: 1 }
        }
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Rocket
          className="text-[#00f0ff] drop-shadow-[0_0_12px_rgba(0,240,255,0.5)]"
          size={48}
        />
      </motion.div>
    </div>
  );
}

function CommitGraph() {
  const [bars, setBars] = useState([3, 5, 2, 7, 4, 6, 3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBars((prev) =>
        prev.map(() => Math.floor(Math.random() * 7) + 1)
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end justify-center h-full gap-1.5 pb-2">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-4 rounded-sm bg-[#b026ff]"
          animate={{ height: h * 8 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
          style={{ opacity: 0.4 + h * 0.08 }}
        />
      ))}
    </div>
  );
}

function TeamOrbit() {
  const colors = ["#00f0ff", "#b026ff", "#00ff88", "#fce000"];

  return (
    <div className="flex items-center justify-center h-full relative">
      {/* Center node */}
      <div className="w-5 h-5 rounded-full bg-white/30 border border-white/50 z-10 shadow-[0_0_12px_rgba(255,255,255,0.2)]" />
      {/* Orbit ring */}
      <div className="absolute w-24 h-24 rounded-full border border-white/10" />
      {/* Orbiting dots */}
      {colors.map((color, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5,
          }}
          // Position dots along the orbit
          initial={{
            x: Math.cos((i * Math.PI) / 2) * 48,
            y: Math.sin((i * Math.PI) / 2) * 48,
          }}
        >
          <motion.div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
            animate={{
              x: [
                Math.cos((i * Math.PI) / 2) * 48,
                Math.cos((i * Math.PI) / 2 + Math.PI / 2) * 48,
                Math.cos((i * Math.PI) / 2 + Math.PI) * 48,
                Math.cos((i * Math.PI) / 2 + (3 * Math.PI) / 2) * 48,
                Math.cos((i * Math.PI) / 2) * 48,
              ],
              y: [
                Math.sin((i * Math.PI) / 2) * 48,
                Math.sin((i * Math.PI) / 2 + Math.PI / 2) * 48,
                Math.sin((i * Math.PI) / 2 + Math.PI) * 48,
                Math.sin((i * Math.PI) / 2 + (3 * Math.PI) / 2) * 48,
                Math.sin((i * Math.PI) / 2) * 48,
              ],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

function SparkleRain() {
  const sparkles = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="flex items-center justify-center h-full relative overflow-hidden">
      {sparkles.map((i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: -30 + Math.random() * 60,
            y: -20,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: [-20, 100],
            opacity: [0, 1, 0.8, 0],
            scale: [0.5, 1, 0.7, 0.3],
            rotate: [0, 180],
          }}
          transition={{
            duration: 2.5 + Math.random(),
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeIn",
          }}
        >
          <Sparkles
            size={12 + Math.random() * 8}
            className="text-[#b026ff]"
            style={{
              filter: `drop-shadow(0 0 4px #b026ff)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* ── Main Component ── */

export default function Benefits() {
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
            WHAT YOU <br /> <span className="text-neon-gradient">GET.</span>
          </h2>
          <p className="text-lg text-gray-400">
            Everything you need to land your first AI engineering role — real
            experience, not certificates.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* 1. Real Project Experience — Tall (2×2) */}
          <motion.div
            className="md:col-span-2 md:row-span-2 tech-glass-card p-8 flex flex-col group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1">
              <RocketLaunch />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[#00f0ff]">
                  <Rocket size={16} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-wide uppercase text-sm">
                  Real Project Experience
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Build and deploy production AI apps — LLM tools, ML models, AI
                agents, and data pipelines.
              </p>
            </div>
          </motion.div>

          {/* 2. GitHub Portfolio — Standard (2×1) */}
          <motion.div
            className="md:col-span-2 tech-glass-card p-8 flex flex-col group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1">
              <CommitGraph />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[#b026ff]">
                  <Github size={16} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-wide uppercase text-sm">
                  GitHub Portfolio
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Walk away with open-source contributions and shipped products
                that prove your skills to employers.
              </p>
            </div>
          </motion.div>

          {/* 3. Team Collaboration — Standard (2×1) */}
          <motion.div
            className="md:col-span-2 tech-glass-card p-8 flex flex-col group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1">
              <TeamOrbit />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[#00f0ff]">
                  <Users size={16} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-wide uppercase text-sm">
                  Team Collaboration
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Work alongside engineers, designers, and product leads in
                cross-functional teams of 5–7.
              </p>
            </div>
          </motion.div>

          {/* 4. Mentorship — Tall (2×2) — positioned to fill right column */}
          <motion.div
            className="md:col-span-2 md:row-span-2 tech-glass-card p-8 flex flex-col group cursor-pointer md:col-start-3 md:row-start-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex-1">
              <SparkleRain />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[#b026ff]">
                  <Sparkles size={16} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-wide uppercase text-sm">
                  Mentorship
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Get code reviews, architectural guidance, and career advice from
                experienced engineers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
