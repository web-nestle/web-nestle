"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Our Work", href: "#work" },
  { name: "Why Us", href: "#why-us" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Force scroll to top on page refresh/load
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  // Handle Navbar background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Robust IntersectionObserver for Active Section Detection
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (isClickScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  // Reliable Smooth Scroll with Navbar Offset & Mobile Menu Closure
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (!targetElement) return;

    setActiveSection(targetId);
    setIsOpen(false);

    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);

    const navbarHeight = 80;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 1000);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4 ${
          scrolled
            ? "bg-[#07090e]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white group cursor-pointer"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-white/20 shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="WebNestle Logo"
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              WebNestle
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-inner">
            {navItems.map((item) => {
              const targetId = item.href.replace("#", "");
              const isActive = activeSection === targetId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full -z-10 shadow-md shadow-pink-500/20"
                      transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-white text-sm overflow-hidden shadow-lg shadow-pink-500/20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden relative p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6 text-pink-400" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#07090e]/95 backdrop-blur-2xl pt-28 px-6 pb-12 flex flex-col justify-between md:hidden overflow-y-auto"
          >
            {/* Mobile Navigation Links List */}
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const targetId = item.href.replace("#", "");
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-pink-500/25"
                        : "text-slate-300 hover:bg-slate-900/80 hover:text-white border border-transparent"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className={`w-2 h-2 rounded-full ${isActive ? "bg-white animate-pulse" : "bg-transparent"}`} />
                  </a>
                );
              })}
            </div>

            {/* Mobile Footer / CTA inside Drawer */}
            <div className="pt-8 border-t border-slate-800/80 flex flex-col space-y-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl shadow-pink-500/25 transition-all cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>WEBNESTLE STUDIO</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  ONLINE
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
