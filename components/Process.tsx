"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, ChevronDown, Layers, Code, Rocket, Compass, FileText } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  actionText?: string;
  visualType: "tell" | "plan" | "design" | "build" | "launch";
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Tell Us",
    description: "Tell us about your business, your goals and what you want your website to achieve.",
    details: [
      "Project requirements & scope",
      "Business information & identity",
      "Core goals & target audience",
      "References & aesthetic inspiration",
      "Preferred features & functionality",
    ],
    actionText: "Share Your Idea",
    visualType: "tell",
  },
  {
    number: "02",
    title: "Plan",
    description: "We turn your requirements into a clear structure and direction for the project.",
    details: [
      "Sitemap architecture",
      "Content & information structure",
      "User flow mapping",
      "Feature planning & scoping",
      "Project direction alignment",
    ],
    visualType: "plan",
  },
  {
    number: "03",
    title: "Design",
    description: "We shape the visual experience around your brand, audience and goals.",
    details: [
      "Layout & spatial composition",
      "Typography & hierarchy",
      "Visual direction & branding",
      "Responsive layout adaptation",
      "UI component styling",
    ],
    visualType: "design",
  },
  {
    number: "04",
    title: "Build",
    description: "We turn the approved direction into a responsive, functional website.",
    details: [
      "Frontend Next.js development",
      "Responsive multi-device implementation",
      "Interactive motion & transitions",
      "Integrations where required",
      "Rigorous quality & performance testing",
    ],
    visualType: "build",
  },
  {
    number: "05",
    title: "Launch",
    description: "After the final checks, your website is ready to go live.",
    details: [
      "Final review & polish",
      "Cross-browser responsive checks",
      "Performance & asset optimization",
      "Deployment & domain configuration",
      "Client handover & support",
    ],
    visualType: "launch",
  },
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = processSteps[activeIndex];

  // Reusable visual panel content for both desktop central panel and mobile accordion expansion
  const renderStepVisual = (step: ProcessStep) => (
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
        <div className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 tracking-wider uppercase">
          Stage {step.number} // {step.title}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-2 space-y-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-purple-500/30 text-xs font-semibold text-pink-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Phase {step.number} of 05</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
            {step.title} Phase Overview
          </h4>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            {step.description}
          </p>
        </div>

        {/* Deliverables checklist */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 space-y-3">
          <div className="text-xs font-mono font-semibold text-indigo-300 uppercase tracking-widest mb-2">
            Key Focus Deliverables:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {step.details.map((detail, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Action Button for Step 1 */}
        {step.actionText && (
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow-lg shadow-indigo-500/20 transition-all duration-200 transform hover:scale-[1.02]"
            >
              <span>{step.actionText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      {/* Bottom Footer Info */}
      <div className="relative z-10 pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>WebNestle Workflow Protocol</span>
        <span className="text-indigo-300 font-mono">Step {step.number}</span>
      </div>
    </div>
  );

  return (
    <section
      id="process"
      className="relative bg-[#07090e] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden select-none text-slate-100 border-t border-slate-900/50"
    >
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] sm:w-[750px] h-[400px] sm:h-[750px] bg-gradient-to-tr from-purple-600/10 via-indigo-600/10 to-pink-500/10 rounded-full blur-[150px] pointer-events-none" />

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
            HOW IT WORKS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-sans">
            From idea to launch.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            Every project follows a clear path — from understanding what you need to launching an experience built around your goals.
          </p>
        </motion.div>

        {/* MOBILE LAYOUT: Vertical Stacked Accordion */}
        <div className="lg:hidden space-y-3">
          {processSteps.map((step, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={step.number} className="space-y-2">
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
                      {step.number}
                    </span>

                    <div className="min-w-0">
                      <h3
                        className={`text-base font-bold tracking-tight truncate transition-colors ${
                          isActive ? "text-white" : "text-slate-300"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400 truncate mt-0.5 font-normal">
                        {step.description}
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
                      {renderStepVisual(step)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* DESKTOP LAYOUT: Horizontal Timeline + Central Detail Panel */}
        <div className="hidden lg:block space-y-12">
          {/* Timeline Navigation Bar */}
          <div className="relative flex items-center justify-between max-w-5xl mx-auto px-4">
            {/* Connecting background line */}
            <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-[2px] bg-slate-800/80 z-0" />
            
            {processSteps.map((step, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={step.number}
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, y: -15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono text-sm font-bold transition-all duration-300 border ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 border-transparent text-white shadow-lg shadow-indigo-500/30 scale-110"
                        : "bg-[#0b0e14] border-slate-800 text-slate-400 group-hover:border-slate-700 group-hover:text-white"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`mt-3 text-xs sm:text-sm font-semibold tracking-tight transition-colors ${
                      isActive ? "text-white" : "text-slate-400 group-hover:text-slate-300"
                    }`}
                  >
                    {step.title}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Central Detail Panel */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.number}
                initial={{ opacity: 0, y: 15, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.99 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {renderStepVisual(activeStep)}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Section CTA */}
        <div className="mt-24 text-center">
          <p className="text-sm text-slate-400 mb-2 font-normal">Ready to get started?</p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 tracking-tight">
            Let&apos;s build your next digital experience.
          </h3>
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