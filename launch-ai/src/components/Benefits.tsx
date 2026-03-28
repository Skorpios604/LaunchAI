"use client";

import { useState, useEffect } from "react";
import { Rocket, Github, Users, Sparkles, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Rocket Launch ───
   Vertical rocket starting at the bottom, launching upward with
   an exhaust trail of fading particles behind it.
*/
function RocketLaunch() {
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLaunched(true);
      setTimeout(() => setLaunched(false), 2000);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden flex items-end justify-center pb-12">
      {/* Straight Vertical Rocket */}
      <motion.div
        className="relative z-10"
        animate={
          launched
            ? { y: [0, -800], opacity: [1, 1, 0] }
            : { y: 0, opacity: 1 }
        }
        transition={launched ? {
          duration: 2,
          ease: "linear",
          times: [0, 1]
        } : { duration: 0 }}
      >
        <div className="relative">
          <Rocket
            className="text-[#00f0ff] -rotate-45 drop-shadow-[0_0_20px_rgba(0,240,255,0.8)]"
            size={80}
            strokeWidth={1.5}
          />
          
          {/* Enhanced Engine Core Glow */}
          {launched && (
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-12 bg-gradient-to-t from-transparent via-[#00f0ff80] to-[#00f0ff] blur-[3px] rounded-full z-[-1]"
              animate={{ opacity: [0.6, 1, 0.6], scaleX: [1, 1.2, 1] }}
              transition={{ duration: 0.1, repeat: Infinity }}
            />
          )}

          {/* Prompt Exhaust Trail */}
          <AnimatePresence>
            {launched &&
              Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={`trail-${i}`}
                  className="absolute left-1/2"
                  style={{
                    width: 8 + Math.random() * 6,
                    height: 25 + Math.random() * 15,
                    bottom: -30,
                    background: "linear-gradient(to top, transparent, #b026ff, #00f0ff)",
                    filter: "blur(2px)",
                  }}
                  initial={{ opacity: 0.9, scaleY: 1, x: "-50%" }}
                  animate={{ 
                    opacity: 0, 
                    scaleY: 2, 
                    y: 60 + Math.random() * 30,
                    x: ["-50%", `${-50 + (Math.random() - 0.5) * 15}%`]
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.05,
                    repeat: Infinity
                  }}
                />
              ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Launch Glow */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full"
        animate={{
          opacity: launched ? [0, 0.4, 0] : 0,
          scale: launched ? [1, 2, 0.5] : 1,
        }}
        transition={{ duration: 1 }}
        style={{
          background: "radial-gradient(circle, #00f0ff60 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

/* ─── Commit Graph ───
   GitHub-style contribution bars pulsing to random heights.
   Fixed height container prevents text below from jumping.
*/
function CommitGraph() {
  const [bars, setBars] = useState([3, 5, 2, 7, 4, 6, 3, 5, 2, 6]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBars((prev) => prev.map(() => Math.floor(Math.random() * 7) + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-end justify-center gap-1.5 px-2">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-3 rounded-sm bg-[#b026ff] flex-shrink-0"
          animate={{ height: h * 10 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: i * 0.04,
          }}
          style={{ opacity: 0.35 + h * 0.09 }}
        />
      ))}
    </div>
  );
}

/* ─── Team Orbit ───
   Four colored dots orbiting a central node on a circular path.
   Constrained to stay fully inside the card.
*/
function TeamOrbit() {
  const colors = ["#00f0ff", "#b026ff", "#00ff88", "#fce000"];
  const radius = 36;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Center node */}
      <div className="w-5 h-5 rounded-full bg-white/30 border border-white/50 z-10 shadow-[0_0_12px_rgba(255,255,255,0.2)]" />
      {/* Orbit ring */}
      <div
        className="absolute rounded-full border border-white/10"
        style={{ width: radius * 2 + 12, height: radius * 2 + 12 }}
      />
      {/* Orbiting dots — each dot uses pure CSS-style rotate transform */}
      {colors.map((color, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}`,
          }}
          animate={{
            x: Array.from({ length: 61 }, (_, f) =>
              Math.cos(((f / 60) * 2 * Math.PI) + (i * Math.PI) / 2) * radius
            ),
            y: Array.from({ length: 61 }, (_, f) =>
              Math.sin(((f / 60) * 2 * Math.PI) + (i * Math.PI) / 2) * radius
            ),
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Mentorship Pulse ───
   A mentor node sending knowledge pulse waves to 3 student nodes,
   representing guidance and code review feedback flowing outward.
*/
function MentorshipPulse() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => (p + 1) % 300); // 300-frame cycle (~4.8s)
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const students = [
    { x: 25, y: 25 },
    { x: 75, y: 20 },
    { x: 55, y: 78 },
  ];
  const mentor = { x: 50, y: 48 };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Connection lines from mentor to each student */}
        {students.map((s, i) => {
          const localPulse = (pulse + i * 100) % 300;
          let progress = 0;
          let lineOpacity = 0;

          if (localPulse < 80) {
            progress = localPulse / 80;
            lineOpacity = 0.3 + progress * 0.6;
          } else if (localPulse < 220) {
            progress = 1.0;
            lineOpacity = 0.6 + 0.2 * Math.sin(localPulse * 0.15);
          } else if (localPulse < 260) {
            progress = 1.0;
            lineOpacity = ((260 - localPulse) / 40) * 0.6;
          }

          return (
            <g key={`line-group-${i}`}>
              <line
                x1={mentor.x}
                y1={mentor.y}
                x2={s.x}
                y2={s.y}
                stroke="#ffffff10"
                strokeWidth={0.8}
                strokeDasharray="2 2"
              />
              {/* Glowing animated line trail */}
              {lineOpacity > 0 && (
                <line
                  x1={mentor.x}
                  y1={mentor.y}
                  x2={mentor.x + (s.x - mentor.x) * progress}
                  y2={mentor.y + (s.y - mentor.y) * progress}
                  stroke="#b026ff"
                  strokeWidth={1}
                  strokeDasharray="2 2"
                  opacity={lineOpacity}
                  style={{ filter: "drop-shadow(0 0 2px #b026ff)" }}
                />
              )}
            </g>
          );
        })}

        {/* Student nodes (drawn first so pulse renders on top) */}
        {students.map((s, i) => (
          <g key={`student-${i}`}>
            <circle cx={s.x} cy={s.y} r={6} fill="#ffffff08" stroke="#ffffff20" strokeWidth={0.5} />
            <circle cx={s.x} cy={s.y} r={3} fill="#ffffff40" />
            <text x={s.x} y={s.y + 14} textAnchor="middle" fill="#ffffff30" fontSize={5} fontFamily="monospace">
              {["ENG", "DEV", "OPS"][i]}
            </text>
          </g>
        ))}

        {/* Pulse dots traveling from mentor to students and resting */}
        {students.map((s, i) => {
          const localPulse = (pulse + i * 100) % 300;
          let progress = 0;
          let opacity = 0;
          let isResting = false;

          if (localPulse < 80) {
            // Traveling (80 frames = ~1.28s)
            progress = localPulse / 80;
            opacity = 0.3 + progress * 0.7; // Fade in as it moves
          } else if (localPulse < 220) {
            // Resting and glowing at the student (140 frames = ~2.24s)
            progress = 1.0;
            isResting = true;
            opacity = 1.0;
          } else if (localPulse < 260) {
            // Fading out (40 frames = ~0.64s)
            progress = 1.0;
            isResting = true;
            opacity = (260 - localPulse) / 40;
          }

          if (opacity <= 0) return null;

          const px = mentor.x + (s.x - mentor.x) * progress;
          const py = mentor.y + (s.y - mentor.y) * progress;
          const radius = isResting ? 3 : 2; // Match the inner gray dot (r=3) when resting
          // Pulse the drop shadow while resting for a dynamic glow effect
          const blur = isResting ? 4 + 2 * Math.sin(localPulse * 0.15) : 3;

          return (
            <circle
              key={`pulse-${i}`}
              cx={px}
              cy={py}
              r={radius}
              fill="#b026ff"
              opacity={opacity}
              style={{ filter: `drop-shadow(0 0 ${blur}px #b026ff)` }}
            />
          );
        })}

        {/* Mentor node (larger, glowing) */}
        <circle cx={mentor.x} cy={mentor.y} r={9} fill="#b026ff15" stroke="#b026ff50" strokeWidth={1} />
        <circle cx={mentor.x} cy={mentor.y} r={5} fill="#b026ff" style={{ filter: "drop-shadow(0 0 6px #b026ff)" }} />
        <MessageCircle x={mentor.x - 5} y={mentor.y - 5} width={10} height={10} stroke="#fff" strokeWidth={1} fill="none" />
      </svg>
    </div>
  );
}

/* ─── Main Component ─── */

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
          {/* 1. Real Project Experience — Tall (2×2) */}
          <motion.div
            className="md:col-span-2 md:row-span-2 tech-glass-card p-8 flex flex-col cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, transition: { duration: 0.1, ease: "easeOut", delay: 0 } }}
            transition={{ duration: 0.5, scale: { duration: 0.1, ease: "easeOut", delay: 0 } }}
          >
            <div className="mb-4 flex-shrink-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[#00f0ff]">
                  <Rocket size={16} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-white tracking-wide uppercase">
                  Real Project Experience
                </h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                Build and deploy production AI apps — LLM tools, ML models, AI
                agents, and data pipelines.
              </p>
            </div>
            <div className="flex-1 min-h-0">
              <RocketLaunch />
            </div>
          </motion.div>

          {/* 2. GitHub Portfolio — Standard (2×1) */}
          <motion.div
            className="md:col-span-2 tech-glass-card p-8 flex flex-col cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, scale: { duration: 0.1, ease: "easeOut", delay: 0 } }}
            whileHover={{ scale: 1.02, transition: { duration: 0.1, ease: "easeOut", delay: 0 } }}
          >
            <div className="mb-4 flex-shrink-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[#b026ff]">
                  <Github size={16} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-white tracking-wide uppercase">
                  GitHub Portfolio
                </h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                Walk away with open-source contributions and shipped products
                that prove your skills to employers.
              </p>
            </div>
            <div className="flex-1 min-h-0">
              <CommitGraph />
            </div>
          </motion.div>

          {/* 3. Team Collaboration — Standard (2×1) */}
          <motion.div
            className="md:col-span-2 tech-glass-card p-8 flex flex-col cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, scale: { duration: 0.1, ease: "easeOut", delay: 0 } }}
            whileHover={{ scale: 1.02, transition: { duration: 0.1, ease: "easeOut", delay: 0 } }}
          >
            <div className="mb-4 flex-shrink-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[#00f0ff]">
                  <Users size={16} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-white tracking-wide uppercase">
                  Team Collaboration
                </h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                Work alongside engineers, designers, and product leads in
                cross-functional teams of 5–7.
              </p>
            </div>
            <div className="flex-1 min-h-0">
              <TeamOrbit />
            </div>
          </motion.div>

          {/* 4. Mentorship — Tall (2×2) */}
          <motion.div
            className="md:col-span-2 md:row-span-2 tech-glass-card p-8 flex flex-col cursor-pointer md:col-start-3 md:row-start-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, scale: { duration: 0.1, ease: "easeOut", delay: 0 } }}
            whileHover={{ scale: 1.02, transition: { duration: 0.1, ease: "easeOut", delay: 0 } }}
          >
            <div className="mb-4 flex-shrink-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[#b026ff]">
                  <Sparkles size={16} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-white tracking-wide uppercase">
                  Mentorship
                </h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                Get code reviews, architectural guidance, and career advice from
                experienced engineers.
              </p>
            </div>
            <div className="flex-1 min-h-0">
              <MentorshipPulse />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
