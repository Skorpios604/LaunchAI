"use client";

import { useState } from "react";
import { Network, Rocket, Terminal, Mail } from "lucide-react";
import AnimatedGenerateButton from "@/components/ui/animated-generate-button";
import { motion } from "framer-motion";

export default function VisionApply() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        (e.target as HTMLFormElement).reset();
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="apply">

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Vision Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight" style={{ fontFamily: "var(--font-orbitron)" }}>
              READY TO <br/> <span className="text-neon-gradient">START?</span>
            </h2>
            <div className="text-lg text-gray-400 mb-10 border-l-2 border-[#00f0ff] pl-6 bg-[#00f0ff]/5 py-4 rounded-r text-sm leading-relaxed">
              The entry-level experience gap is real — employers want experience, but you need the job to get it.<br/><br/>
              LaunchAI bridges that gap. Join a real team, build a real product, and walk away with proof you can do the work.
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-white/5 border border-white/10 text-[#00f0ff] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                  <Network size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 tracking-widest uppercase text-xs">Industry Network</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Connect with engineers and mentors who are working in AI professionally and can help guide your career.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-white/5 border border-white/10 text-[#b026ff] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(176,38,255,0.1)]">
                  <Rocket size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 tracking-widest uppercase text-xs">Launch Potential</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Top projects get featured and connected to real opportunities — from hiring partners to startup incubators.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-white/5 border border-white/10 text-[#fce000] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(252,224,0,0.1)]">
                  <Terminal size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 tracking-widest uppercase text-xs">Career Growth</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Learn production-grade patterns, deployment strategies, and engineering best practices used in the industry.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="tech-glass rounded-lg border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] max-w-lg mx-auto w-full relative overflow-hidden"
          >
            {/* Form Header */}
            <div className="bg-black/60 px-6 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="text-[#00f0ff] font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                <Mail size={14} /> Apply
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div className="mb-8">
                <p className="text-white text-sm font-semibold mb-2">Join the next cohort</p>
                <p className="text-gray-400 text-xs">Fill out the form below and we&apos;ll be in touch with next steps.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-[#00f0ff] tracking-widest uppercase mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="tech-input w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold text-[#b026ff] tracking-widest uppercase mb-2">Select Your Track</label>
                  <div className="relative">
                    <select
                      required
                      className="tech-input w-full appearance-none pr-10 text-gray-300"
                    >
                      <option value="" disabled selected hidden>Choose a track...</option>
                      <option value="beginner" className="bg-black text-white">Beginner Track</option>
                      <option value="ai-eng" className="bg-black text-white">AI Engineer Track</option>
                      <option value="ml-eng" className="bg-black text-white">ML Engineer Track</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <AnimatedGenerateButton
                    type="submit"
                    disabled={isSubmitting}
                    generating={isSubmitting}
                    labelIdle="Submit Application"
                    labelActive="Submitting..."
                    highlightHueDeg={185}
                    className="w-full"
                  />
                  <p className="text-[10px] text-gray-500 font-mono text-center mt-4">
                    Your information is secure and will never be shared.
                  </p>
                </div>
              </form>

              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex items-center justify-center gap-2 text-[#00ff88] font-mono text-xs bg-[#00ff88]/10 border border-[#00ff88]/30 py-3 rounded px-4"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Application received! We&apos;ll be in touch soon.
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
