"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Our Work", href: "#work", id: "work" },
  { name: "Why Us", href: "#why-us", id: "why-us" },
  { name: "Process", href: "#process", id: "process" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  // 1. Refresh & Initial Mount: Always ensure page starts at top / home
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  // Handle Navbar background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Intersection Observer for Automatic Active Section Detection while Scrolling
  useEffect(() => {
    const sectionIds = ["home", "services", "work", "why-us", "process", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveId(id);

          // Update URL hash cleanly without filling browser history stack
          if (id === "home") {
            if (window.location.hash) {
              window.history.replaceState(null, "", window.location.pathname);
            }
          } else {
            window.history.replaceState(null, "", `#${id}`);
          }
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-15% 0px -45% 0px",
      threshold: 0.05,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle click on nav link
  const handleNavClick = (id: string, href: string) => {
    setActiveId(id);
    setIsOpen(false);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      if (id === "home") {
        window.history.replaceState(null, "", window.location.pathname);
      } else {
        window.history.replaceState(null, "", href);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090e]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Branding */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home", "#home");
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/40 group-hover:scale-105 transition-transform">
            W
          </div>
          <span className="text-lg font-bold tracking-tight text-white font-sans">
            Web<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Nestle</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-full shadow-inner">
          {navItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.href)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg shadow-pink-500/40 scale-105"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact", "#contact");
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 shadow-xl shadow-pink-500/35 transition-all duration-200 transform hover:scale-[1.02]"
          >
            <span>Start Project</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#07090e]/95 backdrop-blur-xl border-b border-slate-800/80 px-4 pt-4 pb-6 space-y-2 shadow-2xl overflow-hidden"
          >
            {navItems.map((item) => {
              const isActive = activeId === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.href)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg shadow-pink-500/40"
                      : "text-slate-300 hover:bg-slate-900/80 hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-white shadow-md shadow-white animate-pulse" />}
                </button>
              );
            })}

            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact", "#contact");
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl shadow-pink-500/40"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}