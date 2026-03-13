"use client";

import { useState, useEffect } from "react";
import { Hexagon } from "lucide-react";
import AnimatedGenerateButton from "@/components/ui/animated-generate-button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6 pointer-events-none"
      }`}
    >
      <div className={`container mx-auto px-6 max-w-[1200px] transition-all duration-300 pointer-events-auto ${
        isScrolled ? "tech-glass rounded-2xl py-3 px-6 shadow-lg shadow-cyan-500/10" : "bg-transparent"
      }`}>
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 font-bold text-xl text-white cursor-pointer group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <Hexagon className="w-7 h-7 text-[#00f0ff] animate-pulse" />
            </motion.div>
            <span className="tracking-widest" style={{ fontFamily: "var(--font-orbitron)" }}>
              LAUNCH<span className="text-[#00f0ff]">AI</span>
            </span>
          </div>
          
          {/* Navigation Links */}
          <ul className="hidden md:flex gap-10 items-center list-none m-0 p-0 text-sm font-semibold tracking-wider text-gray-300">
            {["How it Works", "Tech Stack", "Programs"].map((item, index) => {
              const href = ["#how", "#stack", "#tracks"][index];
              return (
                <li key={item} className="relative group">
                  <a href={href} className="hover:text-white transition-colors duration-300 py-2 inline-block">
                    {item}
                  </a>
                  {/* Glowing Underline */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00f0ff] opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left" style={{ boxShadow: "0 0 8px #00f0ff" }}></div>
                </li>
              );
            })}
            <li>
              <a href="#apply">
                <AnimatedGenerateButton
                  labelIdle="Apply Now"
                  labelActive="Apply Now"
                  highlightHueDeg={185}
                  className="text-xs"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
