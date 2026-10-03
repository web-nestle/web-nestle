"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#07090e]"
    >
      {/* Background Video & Cinematic Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#07090e]">
        {/* Fallback Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19] via-[#07090e] to-[#040507]" />

        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Video Background (Gracefully falls back if video file doesn't exist yet) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-75 scale-105"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/40 to-[#07090e]/30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center mt-6 sm:mt-0">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md mb-6 shadow-xl shadow-black/30"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-xs sm:text-sm font-medium tracking-widest text-slate-200 uppercase">
            WEB DESIGN AGENCY • INDIA
          </span>
        </motion.div>

        {/* Huge Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] sm:leading-[1.15] mb-6 drop-shadow-md"
        >
          Your business deserves a website that{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
            feels like a brand.
          </span>
        </motion.h1>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed mb-10 drop-shadow"
        >
          WebNestle crafts high-end, modern digital experiences and high-converting web applications that turn visitors into loyal clients.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <a
            href="#contact"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-white overflow-hidden shadow-2xl shadow-indigo-600/30 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all duration-300 group-hover:scale-105" />
            <span className="relative flex items-center gap-2 text-base">
              <span>Start Your Project</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-slate-200 hover:text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/20 backdrop-blur-md transition-all duration-300 active:scale-95 group shadow-lg cursor-pointer"
          >
            <span className="flex items-center gap-2 text-base">
              <span>View Our Work</span>
              <ChevronRight className="w-4 h-4 text-slate-300 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </motion.div>

        {/* Supporting Brand Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-16 sm:mt-20 flex items-center gap-3 text-xs sm:text-sm text-slate-300 font-medium tracking-wider uppercase drop-shadow"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>WebNestle Digital Studio • @web_nestle</span>
        </motion.div>

      </div>
    </section>
  );
}