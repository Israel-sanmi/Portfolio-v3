"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingSteps = [
  "INITIALIZING SYSTEM",
  "FETCHING PROJECTS",
  "LOADING DOOTLING & SELFANA",
  "COMPILING INTERFACES",
  "EXPERIENCE READY",
];

export default function Loader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        // Accelerate smoothly
        const increment = Math.max(1, Math.floor(Math.random() * 8) + 2);
        const next = Math.min(100, prev + increment);

        // Update status text dynamically
        if (next < 25) setStepIndex(0);
        else if (next < 50) setStepIndex(1);
        else if (next < 75) setStepIndex(2);
        else if (next < 95) setStepIndex(3);
        else setStepIndex(4);

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07070b] text-white select-none overflow-hidden"
        >
          {/* Ambient background glow */}
          <div className="absolute w-[500px] h-[500px] bg-accent-violet/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
          <div className="absolute w-[400px] h-[400px] bg-accent-cyan/15 rounded-full blur-[100px] pointer-events-none -bottom-20 -right-20" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center">
            {/* Monogram / Brand Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl glass-strong flex items-center justify-center mb-8 border border-accent-violet/30 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            >
              <span className="font-heading font-bold text-2xl gradient-text">
                AI
              </span>
            </motion.div>

            {/* Percentage Number */}
            <div className="flex items-baseline justify-center gap-1 font-heading font-extrabold text-6xl md:text-7xl tracking-tighter">
              <span className="gradient-text">{progress}</span>
              <span className="text-2xl text-accent-cyan font-normal">%</span>
            </div>

            {/* Dynamic Status Text */}
            <div className="h-6 mt-4 flex items-center justify-center">
              <motion.span
                key={stepIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-xs uppercase tracking-[0.25em] text-slate-400 font-mono"
              >
                {loadingSteps[stepIndex]}
              </motion.span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-[3px] bg-slate-800/80 rounded-full mt-6 overflow-hidden relative border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-pink rounded-full relative"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full blur-[2px] shadow-[0_0_10px_#fff]" />
              </motion.div>
            </div>

            {/* Bottom subtle indicator */}
            <p className="mt-8 text-[11px] text-slate-500 font-mono tracking-wider">
              ADETOMOKUN ISRAEL • PORTFOLIO V3
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
