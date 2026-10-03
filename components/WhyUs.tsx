"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

interface Advantage {
  number: string;
  title: string;
  description: string;
  visualType: "brand" | "mobile" | "performance" | "purpose" | "interactions" | "growth";
}

const advantages: Advantage[] = [
  {
    number: "01",
    title: "Built for Your Brand",
    description: "Your website should feel like your business, not a template everyone has already seen.",
    visualType: "brand",
  },
  {
    number: "02",
    title: "Mobile First",
    description: "Designed to work beautifully across phones, tablets and desktops.",
    visualType: "mobile",
  },
  {
    number: "03",
    title: "Performance Focused",
    description: "Clean, efficient implementation with performance considered from the start.",
    visualType: "performance",
  },
  {
    number: "04",
    title: "Purposeful Design",
    description: "Every section has a reason to exist — helping visitors understand your business and take action.",
    visualType: "purpose",
  },
  {
    number: "05",
    title: "Modern Interactions",
    description: "Thoughtful animations and micro-interactions that make the experience feel alive without getting in the way.",
    visualType: "interactions",
  },
  {
    number: "06",
    title: "Ready to Grow",
    description: "Built with a structure that can evolve as your business, content and requirements grow.",
    visualType: "growth",
  },
];

export default function WhyUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAdvantage = advantages[activeIndex];

  // Helper component to render the dynamic visual/content card (reused across desktop and mobile expansion)
  const renderVisualContent = (adv: Advantage) => (
    <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0b0e14]/90 to-slate-950/90 border border-slate-800/80 p-6 sm:p-8 shadow-2xl shadow-indigo-500/5 overflow-hidden flex flex-col justify-between">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

      {/* Top Bar of the Mock Interface Window */}
      <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-pink-500/80" />
          <div className="w-3 h-3 rounded-full bg-purple-500/80" />
          <div className="w-3 h-3 rounded-full bg-indigo-500/80" />
        </div>
        <div className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 tracking-wider">
          webnestle.studio / preview-{adv.number}
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="relative z-10 py-2 space-y-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-purple-500/30 text-xs font-semibold text-pink-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Focus Area {adv.number}</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
            {adv.title}
          </h4>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            {adv.description}
          </p>
        </div>

        {/* Visual Mock Element */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 space-y-3">
          {adv.visualType === "brand" && (
            <div className="flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="text-indigo-300 font-semibold">CUSTOM_IDENTITY</span>
              <span className="text-slate-500">[Tailored Architecture]</span>
            </div>
          )}
          {adv.visualType === "mobile" && (
            <div className="flex items-center justify-around text-xs font-mono text-slate-300 py-1">
              <span className="px-2 py-1 rounded bg-slate-800 text-pink-300">Desktop</span>
              <span className="text-slate-600">→</span>
              <span className="px-2 py-1 rounded bg-slate-800 text-purple-300">Tablet</span>
              <span className="text-slate-600">→</span>
              <span className="px-2 py-1 rounded bg-slate-800 text-indigo-300">Mobile</span>
            </div>
          )}
          {adv.visualType === "performance" && (
            <div className="flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="text-emerald-400 font-semibold">● Lightweight Build</span>
              <span className="text-slate-500">Optimized Assets</span>
            </div>
          )}
          {adv.visualType === "purpose" && (
            <div className="flex items-center justify-around text-xs font-mono text-slate-300 py-1">
              <span className="text-indigo-300">1. Discover</span>
              <span className="text-slate-600">→</span>
              <span className="text-purple-300">2. Explore</span>
              <span className="text-slate-600">→</span>
              <span className="text-pink-300">3. Convert</span>
            </div>
          )}
          {adv.visualType === "interactions" && (
            <div className="flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="text-purple-300 font-semibold">Micro-Motion & Hover</span>
              <span className="text-slate-500">Fluid Transitions</span>
            </div>
          )}
          {adv.visualType === "growth" && (
            <div className="flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="text-pink-300 font-semibold">Scalable Structure</span>
              <span className="text-slate-500">Ready for expansion</span>
            </div>
          )}

          {/* Mini progress line */}
          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="relative z-10 pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>WebNestle Engineering Standards</span>
        <span className="text-indigo-300 font-mono">v2.4</span>
      </div>
    </div>
  );

  return (
    <section
      id="why-us"
      className="relative bg-[#07090e] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden select-none text-slate-100 border-t border-slate-900/50"
    >
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] sm:w-[750px] h-[400px] sm:h-[750px] bg-gradient-to-tr from-indigo-600/10 via-purple-600/10 to-pink-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-400 uppercase mb-4 shadow-sm">
            WHY WEBNESTLE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-sans">
            Not just another website.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            Your website is often the first interaction someone has with your brand. We design that interaction to feel clear, memorable and built around your goals.
          </p>
        </motion.div>

        {/* Responsive Layout */}
        {/* MOBILE LAYOUT: Stacked items with accordion expansion directly below active item */}
        <div className="lg:hidden space-y-3">
          {advantages.map((adv, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={adv.number} className="space-y-2">
                <motion.button
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 group relative overflow-hidden ${
                    isActive
                      ? "bg-slate-900/90 border-purple-500/50 shadow-xl shadow-indigo-500/10"
                      : "bg-[#0b0e14]/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40"
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
                  )}

                  <div className="flex items-center gap-4 relative z-10 min-w-0">
                    <span
                      className={`text-xs font-mono font-semibold transition-colors ${
                        isActive ? "text-pink-400" : "text-slate-500"
                      }`}
                    >
                      {adv.number}
                    </span>

                    <div className="min-w-0">
                      <h3
                        className={`text-base font-bold tracking-tight truncate transition-colors ${
                          isActive ? "text-white" : "text-slate-300"
                        }`}
                      >
                        {adv.title}
                      </h3>
                      <p className="text-xs text-slate-400 truncate mt-0.5 font-normal">
                        {adv.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 relative z-10 ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 border-transparent text-white shadow-md shadow-indigo-500/30 rotate-180"
                        : "bg-slate-900 border-slate-800 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </motion.button>

                {/* Mobile Expanded Content Directly Beneath Selected Item */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden pt-1 pb-3"
                    >
                      {renderVisualContent(adv)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* DESKTOP LAYOUT: Two-column grid (Left list, Right fixed interactive panel) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Advantage List */}
          <div className="lg:col-span-6 space-y-3">
            {advantages.map((adv, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={adv.number}
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 group relative overflow-hidden ${
                    isActive
                      ? "bg-slate-900/90 border-purple-500/50 shadow-xl shadow-indigo-500/10"
                      : "bg-[#0b0e14]/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40"
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
                  )}

                  <div className="flex items-center gap-4 relative z-10 min-w-0">
                    <span
                      className={`text-xs font-mono font-semibold transition-colors ${
                        isActive ? "text-pink-400" : "text-slate-500 group-hover:text-slate-400"
                      }`}
                    >
                      {adv.number}
                    </span>

                    <div className="min-w-0">
                      <h3
                        className={`text-lg font-bold tracking-tight truncate transition-colors ${
                          isActive ? "text-white" : "text-slate-300 group-hover:text-slate-200"
                        }`}
                      >
                        {adv.title}
                      </h3>
                      <p className="text-sm text-slate-400 truncate mt-0.5 font-normal">
                        {adv.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 relative z-10 ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 border-transparent text-white shadow-md shadow-indigo-500/30"
                        : "bg-slate-900 border-slate-800 text-slate-500 group-hover:border-slate-700 group-hover:text-slate-300"
                    }`}
                  >
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? "translate-x-0.5" : ""}`} />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Side: Large Dynamic Interactive Visual Panel */}
          <div className="lg:col-span-6">
            <div className="min-h-[420px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAdvantage.number}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {renderVisualContent(activeAdvantage)}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom CTA to Contact */}
        <div className="mt-20 sm:mt-24 text-center">
          <p className="text-sm text-slate-400 mb-4 font-normal">Ready to build something better?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow-lg shadow-indigo-500/25 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}