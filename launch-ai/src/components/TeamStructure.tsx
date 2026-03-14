"use client";

import { useState, useEffect } from "react";
import { User, Cpu, Server, Layout, Database } from "lucide-react";
import { motion } from "framer-motion";

/* ─── Neural Network Pulse ───
   3-layer neural network with nodes lighting up layer-by-layer,
   connections glowing as "data" flows through. Represents AI/ML work.
*/
function NeuralNetwork() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => (prev + 1) % 4);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const layers = [
    [{ x: 20, y: 25 }, { x: 20, y: 55 }, { x: 20, y: 85 }],
    [{ x: 50, y: 15 }, { x: 50, y: 40 }, { x: 50, y: 65 }, { x: 50, y: 90 }],
    [{ x: 80, y: 30 }, { x: 80, y: 60 }, { x: 80, y: 90 }],
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 100 110" className="w-full h-full max-w-[200px] max-h-[180px]">
        {layers.slice(0, -1).map((layer, li) =>
          layer.map((from, fi) =>
            layers[li + 1].map((to, ti) => (
              <motion.line
                key={`${li}-${fi}-${ti}`}
                x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                stroke={pulse === li || pulse === li + 1 ? "#00f0ff" : "#ffffff15"}
                strokeWidth={0.5}
                animate={{ opacity: pulse === li ? [0.3, 1, 0.3] : 0.2 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            ))
          )
        )}
        {layers.map((layer, li) =>
          layer.map((node, ni) => (
            <motion.circle
              key={`n-${li}-${ni}`}
              cx={node.x} cy={node.y} r={3}
              fill={pulse === li ? "#00f0ff" : "#ffffff30"}
              animate={{
                r: pulse === li ? [3, 4.5, 3] : 3,
                opacity: pulse === li ? [0.5, 1, 0.5] : 0.4,
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ filter: pulse === li ? "drop-shadow(0 0 4px #00f0ff)" : "none" }}
            />
          ))
        )}
      </svg>
    </div>
  );
}

/* ─── Kanban Board ───
   Cards moving between columns: Backlog → In Progress → Done.
   Represents the Product Lead managing sprints and roadmap.
*/
function KanbanBoard() {
  const [cards, setCards] = useState([
    { id: 1, col: 0 },
    { id: 2, col: 0 },
    { id: 3, col: 1 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const movable = prev.filter((c) => c.col < 2);
        if (movable.length === 0) {
          return [
            { id: Date.now(), col: 0 },
            { id: Date.now() + 1, col: 0 },
            { id: Date.now() + 2, col: 1 },
          ];
        }
        const pick = movable[Math.floor(Math.random() * movable.length)];
        return prev.map((c) => (c.id === pick.id ? { ...c, col: c.col + 1 } : c));
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const colLabels = ["TODO", "WIP", "DONE"];
  const colColors = ["#ffffff20", "#ff2a5f40", "#00ff8840"];

  return (
    <div className="w-full h-full flex items-center justify-center gap-2 px-1">
      {colLabels.map((label, ci) => (
        <div key={ci} className="flex-1 flex flex-col items-center gap-1.5">
          <span className="text-[8px] font-mono text-gray-500 tracking-wider">{label}</span>
          <div
            className="w-full rounded-md border border-white/5 p-1 flex flex-col gap-1 min-h-[60px]"
            style={{ background: colColors[ci] }}
          >
            {cards
              .filter((c) => c.col === ci)
              .map((c) => (
                <motion.div
                  key={c.id}
                  layout
                  className="w-full h-4 rounded-sm"
                  style={{
                    background: ci === 2 ? "#00ff8830" : ci === 1 ? "#ff2a5f25" : "#ffffff10",
                    border: `1px solid ${ci === 2 ? "#00ff8840" : ci === 1 ? "#ff2a5f30" : "#ffffff15"}`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Server Blink ───
   Server rack with blinking status LEDs. Each server unit shows
   an activity dot and utilization bars. Represents backend infra.
*/
function ServerBlink() {
  const [active, setActive] = useState([false, false, false]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive([Math.random() > 0.3, Math.random() > 0.3, Math.random() > 0.4]);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
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

/* ─── Layout Morph ───
   Grid columns rearranging between layouts (2-col, 3-col, 1-col).
   Represents the Frontend Engineer building responsive UIs.
*/
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
    <div className="w-full h-full flex items-center justify-center">
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

/* ─── Data Funnel ───
   Raw data particles funneling down through processing stages into
   a structured output. Represents the Data Engineer's ETL work.
*/
function DataFunnel() {
  const [particles, setParticles] = useState<{ id: number; x: number; stage: number }[]>([]);

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      setParticles((prev) => {
        const updated = prev
          .map((p) => ({ ...p, stage: p.stage + 1 }))
          .filter((p) => p.stage < 5);
        if (counter % 2 === 0) {
          updated.push({ id: counter, x: 20 + Math.random() * 60, stage: 0 });
        }
        return updated;
      });
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 100 80" className="w-full max-w-[200px]">
        {/* Funnel outline */}
        <path d="M15 10 L85 10 L60 45 L60 70 L40 70 L40 45 Z" fill="none" stroke="#b026ff20" strokeWidth={0.8} />
        {/* Stage labels */}
        <text x={50} y={8} textAnchor="middle" fill="#ffffff25" fontSize={4} fontFamily="monospace">RAW</text>
        <text x={50} y={55} textAnchor="middle" fill="#ffffff25" fontSize={4} fontFamily="monospace">CLEAN</text>
        <text x={50} y={77} textAnchor="middle" fill="#b026ff50" fontSize={4} fontFamily="monospace">OUTPUT</text>

        {/* Particles */}
        {particles.map((p) => {
          const stageY = [15, 25, 35, 50, 65];
          const stageSpread = [30, 20, 12, 8, 5];
          const centerX = 50;
          const offsetX = (p.x - 50) * (stageSpread[p.stage] / 30);
          return (
            <motion.circle
              key={p.id}
              r={1.5}
              fill="#b026ff"
              initial={{ cx: p.x, cy: stageY[0], opacity: 0 }}
              animate={{
                cx: centerX + offsetX,
                cy: stageY[p.stage],
                opacity: p.stage === 4 ? 0.3 : 0.8,
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{ filter: "drop-shadow(0 0 2px #b026ff)" }}
            />
          );
        })}

        {/* Output indicator */}
        <motion.rect
          x={44} y={63} width={12} height={4} rx={1}
          fill="#b026ff30"
          stroke="#b026ff50"
          strokeWidth={0.5}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

/* ─── Main Component ─── */

export default function TeamStructure() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent" id="how">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[#00f0ff] uppercase tracking-widest text-xs font-bold mb-4 bg-[#00f0ff]/10 px-4 py-1.5 rounded-full border border-[#00f0ff]/30">
            <span className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full animate-ping" />
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

        {/* Bento Grid — 6 columns */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px]">

          {/* AI/ML Engineers — Featured Tall (2-col, 2-row) */}
          <motion.div
            className="md:col-span-2 md:row-span-2 tech-glass bg-gradient-to-b from-[#0a66c2]/10 to-transparent p-6 flex flex-col relative overflow-hidden border border-[#0a66c2]/40 cursor-pointer rounded-xl shadow-[0_0_30px_rgba(10,102,194,0.1)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#0a66c2]" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#0a66c2]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#0a66c2]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#0a66c2]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#0a66c2] text-white font-bold text-[9px] uppercase tracking-widest py-1 px-3 rounded-b shadow-[0_0_10px_#0a66c2]">
              CORE TEAM
            </div>

            <div className="flex-1 min-h-0 mt-4">
              <NeuralNetwork />
            </div>
            <div className="mt-auto flex-shrink-0">
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

          {/* Product Lead — Kanban Board */}
          <motion.div
            className="md:col-span-2 tech-glass p-6 flex flex-col relative overflow-hidden border-t-2 border-t-[#ff2a5f] cursor-pointer rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1 min-h-0">
              <KanbanBoard />
            </div>
            <div className="mt-auto flex-shrink-0">
              <div className="flex items-center gap-3 mb-1">
                <User className="text-[#ff2a5f]" size={18} />
                <div>
                  <div className="text-[10px] font-bold text-[#ff2a5f] tracking-widest uppercase" style={{ fontFamily: "var(--font-orbitron)" }}>Product Lead</div>
                  <span className="text-white font-bold text-sm">1 Member</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Owns the product vision, manages sprints, and drives UX decisions.
              </p>
            </div>
          </motion.div>

          {/* Backend Engineer — Server Blink */}
          <motion.div
            className="md:col-span-2 tech-glass p-6 flex flex-col relative overflow-hidden border-t-2 border-t-[#00ff88] cursor-pointer rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1 min-h-0">
              <ServerBlink />
            </div>
            <div className="mt-auto flex-shrink-0">
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

          {/* Frontend Engineer — Layout Morph */}
          <motion.div
            className="md:col-span-2 tech-glass p-6 flex flex-col relative overflow-hidden border-t-2 border-t-[#fce000] cursor-pointer rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1 min-h-0">
              <LayoutMorph />
            </div>
            <div className="mt-auto flex-shrink-0">
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

          {/* Data Engineer — Data Funnel */}
          <motion.div
            className="md:col-span-2 tech-glass p-6 flex flex-col relative overflow-hidden border-t-2 border-t-[#b026ff] cursor-pointer rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1 min-h-0">
              <DataFunnel />
            </div>
            <div className="mt-auto flex-shrink-0">
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
