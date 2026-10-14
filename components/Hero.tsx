"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, ArrowDown, Sparkles, MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const Hero: React.FC = () => {
  const { setIsCartOpen } = useCart();

  // Signature food cravings rotating in typewriter animation
  const phrases = [
    "ZINGER & SHAWARMA",
    "CRISPY CHEESE ROLLS",
    "SUPER MAGA BURGER",
    "LOADED PERI FRIES",
    "HOT WINGS & DIPS",
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState(phrases[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === fullText) {
      // Pause after completing phrase
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && currentText === "") {
      // Switch to next phrase after deleting
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      timeout = setTimeout(() => {}, 250);
    } else {
      // Natural human typing cadence: fast deletes, micro-varied typing
      const speed = isDeleting ? 40 : 80 + Math.floor(Math.random() * 35);
      timeout = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIndex]);

  const handleScrollToMenu = () => {
    const el = document.getElementById("menu");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92dvh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-8 overflow-hidden bg-brand-bg">
      {/* Background Atmosphere Gradients & Lights */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Deep ambient red burst top-left */}
        <div className="absolute -top-32 -left-32 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-brand-red/18 blur-[120px]" />
        {/* Warm golden burst center-right */}
        <div className="absolute top-1/4 -right-24 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] rounded-full bg-brand-amber/12 blur-[100px]" />
        {/* Subtle radial grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Localized Street Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/15 border border-brand-red/35 backdrop-blur-md mb-4 sm:mb-6 shadow-glow-red/20"
            >
              <Flame className="w-4 h-4 text-brand-red animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wide text-brand-cream">
                GARMA GARAM &bull; KASUR ORIGINAL
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-brand-amber" />
              <span className="hidden sm:inline-block text-xs font-semibold text-brand-amber">
                FREE DELIVERY ON RS. 500+
              </span>
            </motion.div>

            {/* Giant Display Headline with Dynamic Typewriter Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-brand-cream leading-[1.08]"
            >
              LATE-NIGHT <br />
              <span className="inline-flex items-center flex-wrap text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-amber to-brand-cream">
                <span>{currentText}</span>
                <span className="inline-block w-[3.5px] sm:w-[5px] lg:w-[6px] h-[0.82em] bg-brand-amber ml-1.5 sm:ml-2 rounded-sm animate-pulse shadow-glow-amber shrink-0 align-middle" />
              </span> <br />
              CRAVINGS SOLVED.
            </motion.h1>

            {/* Subtitle / Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-brand-cream-muted max-w-xl font-normal leading-relaxed"
            >
              Kasur&apos;s most beloved crispy burgers, cheese-loaded shawarmas, buttery paratha rolls, and peri peri fries. Freshly grilled, piping hot, delivered till 2:00 AM.
            </motion.p>

            {/* Key Micro-Badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-brand-cream/80"
            >
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-card border border-white/10">
                <span className="text-brand-amber font-black">★ 5.0</span>
                <span>Kasur Foodies</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-card border border-white/10">
                <span className="w-2 h-2 rounded-full bg-brand-green" />
                <span>100% Fresh Halal Chicken</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-card border border-white/10">
                <span>⚡ Fast 30-min Delivery</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              <button
                onClick={handleScrollToMenu}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-btn bg-brand-red hover:bg-brand-red-hover text-brand-cream font-bold text-sm uppercase tracking-wider shadow-glow-red transition-all transform active:scale-95 min-h-[48px]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Explore Full Menu</span>
              </button>

              <a
                href="https://wa.me/923032967760?text=Salam%20S.G%20Food%20Point!%20Mujhe%20menu%20aur%20order%20karna%20hai."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-btn bg-brand-green/20 hover:bg-brand-green/30 border border-brand-green/50 text-brand-green font-bold text-sm tracking-wide transition-all transform active:scale-95 min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Floating Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            
            {/* Glowing Ring Backdrop */}
            <div className="absolute w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full border border-dashed border-brand-amber/30 animate-pulse pointer-events-none" />
            <div className="absolute w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] rounded-full bg-gradient-to-br from-brand-red/20 to-brand-amber/20 blur-3xl pointer-events-none" />

            {/* Floating Burger Centerpiece */}
            <motion.div
              animate={{
                y: [0, -14, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-64 h-64 sm:w-96 sm:h-96 drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
                alt="Signature S.G Crispy Burger"
                fill
                priority
                className="object-cover rounded-3xl border-2 border-brand-amber/30 shadow-2xl"
              />

              {/* Floating Price Pill */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                className="absolute -top-3 -right-3 sm:-right-4 bg-brand-red text-brand-cream px-3.5 py-1.5 rounded-full font-black text-xs sm:text-sm tracking-wider shadow-glow-red border border-white/20 flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-amber" />
                <span>SUPER MAGA &bull; RS. 500</span>
              </motion.div>

              {/* Floating Special Sauce Sticker */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.65, type: "spring", stiffness: 300 }}
                className="absolute -bottom-4 -left-3 sm:-left-6 bg-brand-card/95 border border-brand-green/40 backdrop-blur-md px-3.5 py-2 rounded-xl text-left shadow-card"
              >
                <span className="block text-[10px] font-bold text-brand-green uppercase tracking-wider">
                  ★ Secret Kasuri Sauces
                </span>
                <span className="block text-xs font-black text-brand-cream">
                  White &bull; Red &bull; Yellow
                </span>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Live Scrolling Ticker */}
      <div className="relative z-10 w-full mt-8 py-3 bg-brand-red/90 text-brand-cream border-y border-white/20 overflow-hidden shadow-lg">
        <div className="flex whitespace-nowrap animate-ticker font-display font-black text-xs sm:text-sm tracking-widest uppercase">
          <span className="mx-4 flex items-center gap-3">
            <span>FREE DELIVERY ON RS. 500+</span>
            <span>&bull;</span>
            <span className="text-brand-amber">OPEN LATE TILL 2:00 AM</span>
            <span>&bull;</span>
            <span>FRESH &amp; DELICIOUS</span>
            <span>&bull;</span>
            <span className="text-brand-cream">GARMA GARAM ZINGER BURGERS</span>
            <span>&bull;</span>
            <span>CHEESY SHAWARMAS &bull; PARATHA ROLLS</span>
            <span>&bull;</span>
            <span className="text-brand-amber">WHATSAPP: 0303 2967760</span>
            <span>&bull;</span>
          </span>
          <span className="mx-4 flex items-center gap-3" aria-hidden="true">
            <span>FREE DELIVERY ON RS. 500+</span>
            <span>&bull;</span>
            <span className="text-brand-amber">OPEN LATE TILL 2:00 AM</span>
            <span>&bull;</span>
            <span>FRESH &amp; DELICIOUS</span>
            <span>&bull;</span>
            <span className="text-brand-cream">GARMA GARAM ZINGER BURGERS</span>
            <span>&bull;</span>
            <span>CHEESY SHAWARMAS &bull; PARATHA ROLLS</span>
            <span>&bull;</span>
            <span className="text-brand-amber">WHATSAPP: 0303 2967760</span>
            <span>&bull;</span>
          </span>
        </div>
      </div>
    </section>
  );
};
