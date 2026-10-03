"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, Phone, Mail } from "lucide-react";

const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Our Work", href: "#work" },
  { name: "Why WebNestle", href: "#why-us" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

const serviceCategories = [
  "Business Websites",
  "Landing Pages",
  "E-commerce",
  "Portfolio Websites",
  "Website Redesign",
  "UI/UX & Interactions",
];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#07090e] text-slate-100 pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-slate-800/80">
      {/* Subtle Background Glow & Radial Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[800px] h-[300px] sm:h-[400px] bg-gradient-to-tr from-indigo-600/10 via-purple-600/10 to-pink-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Large Final CTA Section */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#0b0f19]/80 border border-slate-800/80 rounded-3xl p-8 sm:p-12 lg:p-16 mb-16 sm:mb-24 shadow-2xl shadow-black/50 backdrop-blur-xl overflow-hidden text-center flex flex-col items-center justify-center"
        >
          {/* Top Gradient Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md mb-6 shadow-xl shadow-black/30">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-xs sm:text-sm font-medium tracking-widest text-slate-200 uppercase">
              FINAL SIGNATURE
            </span>
          </div>

          {/* Main Statement */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-4 max-w-3xl">
            Let&apos;s build something worth remembering.
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
            Have an idea? Let&apos;s turn it into a digital experience.
          </p>

          {/* Action Button */}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium text-white overflow-hidden shadow-xl shadow-pink-500/30 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 active:scale-[0.99] transition-all duration-300 cursor-pointer"
          >
            <span className="relative flex items-center justify-center gap-2 text-base font-semibold">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </motion.div>

        {/* Multi-Column Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-800/80">
          
          {/* LEFT / BRAND AREA (Cols 1-4) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col space-y-4"
          >
            {/* Logo / Brand Name */}
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight text-white group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform">
                <span className="text-white font-extrabold text-lg">W</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                WebNestle
              </span>
            </a>

            {/* Short Description */}
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Modern websites and digital experiences built around your brand.
            </p>

            {/* Live Status Indicator */}
            <div className="pt-2 flex items-center gap-2.5 text-xs text-slate-400 font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>AVAILABLE FOR NEW PROJECTS</span>
            </div>
          </motion.div>

          {/* NAVIGATE COLUMN (Cols 5-7) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col space-y-4"
          >
            <h3 className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SERVICES COLUMN (Cols 8-9) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col space-y-4"
          >
            <h3 className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceCategories.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, "#services")}
                    className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer block hover:translate-x-1 duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONNECT COLUMN (Cols 10-12) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 flex flex-col space-y-4"
          >
            <h3 className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
              Connect
            </h3>
            <div className="flex flex-col space-y-3">
              {/* Instagram Link */}
              <a
                href="https://instagram.com/web_nestle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WebNestle Instagram"
                className="inline-flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group cursor-pointer w-fit"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform flex-shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
                <span>@web_nestle</span>
              </a>

              {/* Email Link */}
              <a
                href="mailto:web.nestle.og@gmail.com"
                aria-label="WebNestle Email"
                className="inline-flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group cursor-pointer w-fit"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>web.nestle.og@gmail.com</span>
              </a>

              {/* Phone Link */}
              <a
                href="tel:+919876543210"
                aria-label="WebNestle Phone"
                className="inline-flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group cursor-pointer w-fit"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 72910 92008</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Bottom Copyright & Intention Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {currentYear} WebNestle. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-mono">
            <span>Built with intention.</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
          </p>
        </div>

      </div>
    </footer>
  );
}