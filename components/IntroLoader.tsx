"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroLoaderProps {
  onComplete?: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [typedWord, setTypedWord] = useState("");
  const [showDot, setShowDot] = useState(false);
  const [isZooming, setIsZooming] = useState(false);

  const wordPart = "WebNestle";

  useEffect(() => {
    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsLoading(false);
      onComplete?.();
      return;
    }

    // Lock scroll during intro
    document.body.style.overflow = "hidden";

    let charIndex = 0;
    let typingInterval: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;
    let zoomTimeout: NodeJS.Timeout;

    // Type out the brand name letter by letter smoothly
    typingInterval = setInterval(() => {
      if (charIndex <= wordPart.length) {
        setTypedWord(wordPart.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setShowDot(true);

        // Pause briefly (700ms) to let the completed wordmark register
        pauseTimeout = setTimeout(() => {
          setIsZooming(true);

          // Wait for the cinematic zoom-and-fade animation to finish before unmounting
          zoomTimeout = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "";
            onComplete?.();
          }, 900); // Matches animation duration below
        }, 700);
      }
    }, 110);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(pauseTimeout);
      clearTimeout(zoomTimeout);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isZooming ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07090e] overflow-hidden select-none"
        aria-label="Loading Intro Animation"
      >
        {/* Subtle Ambient Glow Background */}
        <motion.div
          animate={{ opacity: isZooming ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden"
        >
          <div className="w-[350px] h-[350px] sm:w-[650px] sm:h-[650px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-500/15 rounded-full blur-[100px]" />
        </motion.div>

        {/* Cinematic Scaling Container: Smoothly scales up and opens up into the homepage */}
        <motion.div
          animate={
            isZooming
              ? { scale: 45, opacity: 0 }
              : { scale: 1, opacity: 1 }
          }
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1], // High-end agency cubic-bezier curve
          }}
          style={{ transformOrigin: "center center", willChange: "transform, opacity" }}
          className="relative z-10 flex items-center justify-center px-4"
        >
          <div className="flex items-center text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-sans">
            {/* Wordmark and Full Stop */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-400 drop-shadow-2xl">
              {typedWord}
              <span className={showDot ? "inline" : "hidden"}>.</span>
            </span>

            {/* Blinking Typing Cursor */}
            {!showDot && (
              <span className="inline-block w-[3px] sm:w-[5px] h-7 sm:h-12 ml-1.5 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 animate-pulse rounded-full shadow-lg shadow-indigo-500/50" />
            )}
          </div>
        </motion.div>

        {/* Minimal Agency Footer Watermark */}
        <motion.div
          animate={{ opacity: isZooming ? 0 : 0.6 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs sm:text-sm font-medium tracking-widest text-slate-500 uppercase"
        >
          WebNestle Studio
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}