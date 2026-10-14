"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already seen the intro in this browser session
    try {
      const hasSeen = sessionStorage.getItem("sg_intro_seen");
      if (hasSeen) {
        setIsDismissed(true);
        onComplete();
        return;
      }
    } catch {
      // ignore
    }

    // Fast, responsive progress (finishes in ~800ms)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          try {
            sessionStorage.setItem("sg_intro_seen", "true");
          } catch {
            // ignore
          }
          setTimeout(() => {
            setIsDismissed(true);
            setTimeout(onComplete, 200);
          }, 150);
          return 100;
        }
        return prev + 10;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    try {
      sessionStorage.setItem("sg_intro_seen", "true");
    } catch {
      // ignore
    }
    setIsDismissed(true);
    setTimeout(onComplete, 100);
  };

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          key="sg-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-brand-bg px-4 select-none"
        >
          {/* Subtle Ambient Red Glow */}
          <div className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-brand-red/15 blur-[90px]" />

          {/* Central Animated Badge Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center"
          >
            {/* Spinning decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-dashed border-brand-amber/30 pointer-events-none"
            />

            {/* Logo Image */}
            <div className="relative h-28 w-28 md:h-36 md:w-36 drop-shadow-[0_0_30px_rgba(229,57,53,0.4)]">
              <Image
                src="/images/logo.svg"
                alt="S.G Food Point Logo"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Microcopy */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-6 text-center"
            >
              <span className="inline-block rounded-full bg-brand-red/20 border border-brand-red/40 px-3 py-0.5 text-[11px] font-bold tracking-widest text-brand-cream uppercase">
                Garma Garam &bull; Kasur Original
              </span>
              <h2 className="mt-2 font-display text-xl md:text-2xl font-black text-brand-cream tracking-tight">
                S.G FOOD POINT
              </h2>
            </motion.div>

            {/* Progress bar */}
            <div className="mt-6 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-red via-brand-amber to-brand-green"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Quick Skip Button */}
          <button
            onClick={handleSkip}
            className="absolute bottom-8 text-xs font-semibold tracking-wider text-brand-cream/50 hover:text-brand-cream transition-colors py-2 px-4 rounded-full border border-white/10 bg-white/5"
          >
            SKIP INTRO &rarr;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
