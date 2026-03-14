"use client";

import { useState, useEffect } from "react";
import { User, Cpu, Server, Layout, Database } from "lucide-react";
import { motion } from "framer-motion";

/* ── Animated Elements ── */

function NeuralNetwork() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => (prev + 1) % 4);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // 3 layers of nodes
  const layers = [
    [{ x: 20, y: 25 }, { x: 20, y: 55 }, { x: 20, y: 85 }],
    [{ x: 50, y: 15 }, { x: 50, y: 40 }, { x: 50, y: 65 }, { x: 50, y: 90 }],
    [{ x: 80, y: 30 }, { x: 80, y: 60 }, { x: 80, y: 90 }],
  ];

  return (
    <div className="flex items-center justify-center h-full">
      <svg viewBox="0 0 100 110" className="w-full h-full max-w-[200px] max-h-[180px]">
        {/* Connections */}
        {layers.slice(0, -1).map((layer, li) =>
          layer.map((from, fi) =>
            layers[li + 1].map((to, ti) => (
              <motion.line
                key={`${li}-${fi}-${ti}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={pulse === li || pulse === li + 1 ? "#00f0ff" : "#ffffff15"}
                strokeWidth={0.5}
                animate={{
                  opacity: pulse === li ? [0.3, 1, 0.3] : 0.2,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            ))
          )
        )}
        {/* Nodes */}
        {layers.map((layer, li) =>
          layer.map((node, ni) => (
            <motion.circle
              key={`n-${li}-${ni}`}
              cx={node.x}
              cy={node.y}
              r={3}
              fill={pulse === li ? "#00f0ff" : "#ffffff30"}
              animate={{
                r: pulse === li ? [3, 4.5, 3] : 3,
                opacity: pulse === li ? [0.5, 1, 0.5] : 0.4,
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                filter: pulse === li ? "drop-shadow(0 0 4px #00f0ff)" : "none",
              }}
            />
          ))
        )}
      </svg>
    </div>
  );
}

function RoadmapTimeline() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const steps = [0, 1, 2, 3];

  return (
    <div className="flex items-center justify-center h-full gap-2">
      {steps.map((i) => (
        <div key={i} className="flex items-center gap-2">
          <motion.div
            className="w-4 h-4 rounded-full border-2"
            animate={{
              backgroundColor: i <= step ? "#ff2a5f" : "transparent",
              borderColor: i <= step ? "#ff2a5f" : "#ffffff30",
              scale: i === step ? [1, 1.3, 1] : 1,
            }}
            transition={{ duration: 0.5 }}
            style={{
              boxShadow: i <= step ? "0 0 8px rgba(255,42,95,0.5)" : "none",
            }}
          />
          {i < steps.length - 1 && (
            <motion.div
              className="w-6 h-0.5 rounded"
              animate={{
                backgroundColor: i < step ? "#ff2a5f" : "#ffffff15",
              }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function ServerBlink() {
  const [active, setActive] = useState([false, false, false]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive([Math.random() > 0.3, Math.random() > 0.3, Math.random() > 0.4]);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      {active.map((on, i) => (
        <motion.div
          key={i}
          className="w-20 h-5 rounded-sm bg-white/5 border border-white/10 flex items-center px-2 gap-1.5"
          animate={{ borderColor: on ? "#00ff8840" : "#ffffff10" }}
        >
          <motion.div
            className="w-2 h-2 rounded-full"
            animate={{
              backgroundColor: on ? "#00ff88" : "#ffffff20",
              boxShadow: on ? "0 0 6px #00ff88" : "none",
            }}
            transition={{ duration: 0.3 }}
          />
          <div className="flex-1 flex gap-0.5">
            {[0, 1, 2].map((j) => (
              <div key={j} className="h-1 flex-1 rounded-full bg-white/10" />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function LayoutMorph() {
  const [layout, setLayout] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const layouts = ["grid-cols-2", "grid-cols-3", "grid-cols-1"];

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className={`grid ${layouts[layout]} gap-1.5 w-full max-w-[140px]`}
        layout
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="bg-[#fce000]/20 border border-[#fce000]/30 rounded-md h-6 w-full"
            layout
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function DataPipeline() {
  const [dots, setDots] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => prev.map((d) => (d + 1) % 5));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { x: 10, label: "SRC" },
    { x: 30, label: "ETL" },
    { x: 50, label: "VEC" },
    { x: 70, label: "DB" },
    { x: 90, label: "API" },
  ];

  return (
    <div className="flex items-center justify-center h-full w-full">
      <svg viewBox="0 0 100 40" className="w-full max-w-[280px]">
        {/* Connection lines */}
        {nodes.slice(0, -1).map((node, i) => (
          <line
            key={`l-${i}`}
            x1={node.x}
            y1={20}
            x2={nodes[i + 1].x}
            y2={20}
            stroke="#ffffff15"
            strokeWidth={1}
          />
        ))}
        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            <motion.circle
              cx={node.x}
              cy={20}
              r={4}
              fill={dots.some((d) => d === i) ? "#b026ff" : "#ffffff20"}
              animate={{
                r: dots.some((d) => d === i) ? [4, 5.5, 4] : 4,
              }}
              transition={{ duration: 0.5 }}
              style={{
                filter: dots.some((d) => d === i) ? "drop-shadow(0 0 4px #b026ff)" : "none",
              }}
            />
            <text
              x={node.x}
              y={33}
              textAnchor="middle"
              fill="#ffffff40"
              fontSize={4}
              fontFamily="monospace"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ── Main Component ── */

export default function TeamStructure() {
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
            You don&apos;t just write code alone. You join a team of 5–7
            specialists and build one real AI product together.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[180px]">
          {/* AI/ML Engineers — Featured Tall (2-col, 2-row) */}
          <motion.div
            className="md:col-span-2 md:row-span-2 tech-glass bg-gradient-to-b from-[#0a66c2]/10 to-transparent p-6 flex flex-col relative overflow-hidden border border-[#0a66c2]/40 cursor-pointer rounded-xl shadow-[0_0_30px_rgba(10,102,194,0.1)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
            transition={{ duration: 0.5 }}
          >
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#0a66c2]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#0a66c2]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#0a66c2]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#0a66c2]"></div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#0a66c2] text-white font-bold text-[9px] uppercase tracking-widest py-1 px-3 rounded-b shadow-[0_0_10px_#0a66c2]">
              CORE TEAM
            </div>
            <div className="flex-1 mt-4">
              <NeuralNetwork />
            </div>
            <div className="mt-auto">
              <div className="flex items-center gap-3 mb-2">
                <Cpu className="text-[#00f0ff] drop-shadow-[0_0_8px_#00f0ff]" size={20} />
                <div>
                  <div className="text-[10px] font-bold text-[#00f0ff] tracking-widest uppercase" style={{ fontFamily: "var(--font-orbitron)" }}>AI / ML Engineers</div>
                  <span className="text-white font-bold">2–3 Members</span>
                </div>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed">
                Build LLM integrations, implement RAG systems, fine-tune models, and handle AI agent development.
              </p>
            </div>
          </motion.div>

          {/* Product Lead — Standard (2-col, 1-row) */}
          <motion.div
            className="md:col-span-2 tech-glass p-6 flex flex-col relative overflow-hidden group border-t-2 border-t-[#ff2a5f] cursor-pointer rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1">
              <RoadmapTimeline />
            </div>
            <div className="mt-auto">
              <div className="flex items-center gap-3 mb-1">
                <User className="text-[#ff2a5f]" size={18} />
                <div>
                  <div className="text-[10px] font-bold text-[#ff2a5f] tracking-widest uppercase" style={{ fontFamily: "var(--font-orbitron)" }}>Product Lead</div>
                  <span className="text-white font-bold text-sm">1 Member</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Owns the product vision, manages the roadmap, and drives UX decisions.
              </p>
            </div>
          </motion.div>

          {/* Backend Engineer — Standard (2-col, 1-row) */}
          <motion.div
            className="md:col-span-2 tech-glass p-6 flex flex-col relative overflow-hidden group border-t-2 border-t-[#00ff88] cursor-pointer rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1">
              <ServerBlink />
            </div>
            <div className="mt-auto">
              <div className="flex items-center gap-3 mb-1">
                <Server className="text-[#00ff88]" size={18} />
                <div>
                  <div className="text-[10px] font-bold text-[#00ff88] tracking-widest uppercase" style={{ fontFamily: "var(--font-orbitron)" }}>Backend Engineer</div>
                  <span className="text-white font-bold text-sm">1 Member</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Designs APIs, builds scalable architectures, and develops microservices.
              </p>
            </div>
          </motion.div>

          {/* Frontend Engineer — Wide (3-col, 1-row) */}
          <motion.div
            className="md:col-span-2 tech-glass p-6 flex flex-col relative overflow-hidden group border-t-2 border-t-[#fce000] cursor-pointer rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1">
              <LayoutMorph />
            </div>
            <div className="mt-auto">
              <div className="flex items-center gap-3 mb-1">
                <Layout className="text-[#fce000]" size={18} />
                <div>
                  <div className="text-[10px] font-bold text-[#fce000] tracking-widest uppercase" style={{ fontFamily: "var(--font-orbitron)" }}>Frontend Engineer</div>
                  <span className="text-white font-bold text-sm">1 Member</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Builds responsive, interactive UIs with modern frameworks.
              </p>
            </div>
          </motion.div>

          {/* Data Engineer — Wide (2-col, 1-row) */}
          <motion.div
            className="md:col-span-2 tech-glass p-6 flex flex-col relative overflow-hidden group border-t-2 border-t-[#b026ff] cursor-pointer rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1">
              <DataPipeline />
            </div>
            <div className="mt-auto">
              <div className="flex items-center gap-3 mb-1">
                <Database className="text-[#b026ff]" size={18} />
                <div>
                  <div className="text-[10px] font-bold text-[#b026ff] tracking-widest uppercase" style={{ fontFamily: "var(--font-orbitron)" }}>Data Engineer</div>
                  <span className="text-white font-bold text-sm">1 Member</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Builds data pipelines, manages vector databases, and handles ETL workflows.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
