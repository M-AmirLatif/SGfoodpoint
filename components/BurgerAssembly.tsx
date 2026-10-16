"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, Flame, Check } from "lucide-react";

interface BurgerLayer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  bgGlow: string;
  renderElement: () => React.ReactNode;
}

export const BurgerAssembly: React.FC = () => {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);

  const layers: BurgerLayer[] = [
    {
      id: "top-bun",
      title: "Toasted Brioche Top Bun",
      subtitle: "Golden & Buttered",
      description: "Baked daily in Kasur, brushed with melted dairy butter and showered with roasted white sesame seeds for a delicate crunch.",
      color: "text-amber-400",
      bgGlow: "rgba(251, 191, 36, 0.2)",
      renderElement: () => (
        <div className="relative w-56 sm:w-80 h-24 sm:h-28 bg-gradient-to-b from-[#e69138] to-[#b45f06] rounded-t-[100px] border-2 border-[#783f04] shadow-2xl flex items-center justify-center overflow-hidden">
          {/* Sesame seeds dots */}
          <div className="absolute inset-0 flex flex-wrap gap-4 p-4 justify-around opacity-90">
            <span className="w-2.5 h-1.5 bg-brand-cream rounded-full rotate-12" />
            <span className="w-2.5 h-1.5 bg-brand-cream rounded-full -rotate-45" />
            <span className="w-2.5 h-1.5 bg-brand-cream rounded-full rotate-6" />
            <span className="w-2.5 h-1.5 bg-brand-cream rounded-full rotate-45" />
            <span className="w-2.5 h-1.5 bg-brand-cream rounded-full -rotate-12" />
            <span className="w-2.5 h-1.5 bg-brand-cream rounded-full rotate-30" />
            <span className="w-2.5 h-1.5 bg-brand-cream rounded-full -rotate-25" />
          </div>
          <span className="relative z-10 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-amber-950/80 bg-amber-300/40 px-3 py-1 rounded-full">
            Brioche Crown
          </span>
        </div>
      ),
    },
    {
      id: "sauces",
      title: "Kasuri Trio Secret Sauces",
      subtitle: "Garlic Mayo & Chili Burst",
      description: "Generous swirl of creamy garlic white dip combined with spicy tangy red chili dressing that coats every bite.",
      color: "text-red-400",
      bgGlow: "rgba(239, 68, 68, 0.25)",
      renderElement: () => (
        <div className="relative w-52 sm:w-72 h-12 sm:h-14 bg-gradient-to-r from-red-600 via-yellow-400 to-red-500 rounded-full border border-red-300 shadow-glow-red flex items-center justify-center animate-pulse">
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-white drop-shadow">
            Secret Kasuri Drizzle
          </span>
        </div>
      ),
    },
    {
      id: "patty",
      title: "Crispy Zinger Chicken Fillet",
      subtitle: "100% Halal Whole Breast",
      description: "Marinated 12 hours in paprika, black pepper, and yogurt brine, dipped in seasoned flour and fried to sizzling golden perfection.",
      color: "text-amber-500",
      bgGlow: "rgba(217, 119, 6, 0.25)",
      renderElement: () => (
        <div className="relative w-56 sm:w-80 h-16 sm:h-20 bg-gradient-to-r from-[#93441a] via-[#b45f06] to-[#783f04] rounded-2xl border-2 border-[#542a0a] shadow-2xl flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(#3d1e07_2px,transparent_2px)] [background-size:10px_10px] opacity-40" />
          <span className="relative z-10 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-brand-cream bg-black/40 px-3 py-1 rounded-full border border-amber-500/30">
            Sizzling Zinger Fillet
          </span>
        </div>
      ),
    },
    {
      id: "cheese",
      title: "Molten Cheddar Cheese Ribbon",
      subtitle: "Thick & Gooey",
      description: "Warm melted sharp cheddar draped over the sizzling hot fried chicken fillet, sealing in natural juices.",
      color: "text-yellow-400",
      bgGlow: "rgba(250, 204, 21, 0.25)",
      renderElement: () => (
        <div className="relative w-52 sm:w-72 h-10 sm:h-12 bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] rounded-xl shadow-glow-amber flex items-center justify-center rotate-1">
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-amber-950 font-bold">
            Melted Cheddar Slice
          </span>
        </div>
      ),
    },
    {
      id: "lettuce",
      title: "Fresh Shredded Iceberg Lettuce",
      subtitle: "Crisp & Garden Fresh",
      description: "Chilled crunchy green ribbons sourced fresh from Punjab farms every sunrise, providing vibrant textural balance.",
      color: "text-green-400",
      bgGlow: "rgba(34, 197, 94, 0.2)",
      renderElement: () => (
        <div className="relative w-56 sm:w-80 h-10 sm:h-12 bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 rounded-full border border-green-400 flex items-center justify-center shadow-lg -rotate-1">
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-white drop-shadow">
            Farm Crisp Greens
          </span>
        </div>
      ),
    },
    {
      id: "bottom-bun",
      title: "Toasted Brioche Base Bun",
      subtitle: "Sturdy & Pillowy Foundation",
      description: "Lightly grilled on the buttered flat top grill to create a caramelized barrier that locks in the savoriness.",
      color: "text-amber-400",
      bgGlow: "rgba(251, 191, 36, 0.2)",
      renderElement: () => (
        <div className="relative w-56 sm:w-80 h-14 sm:h-16 bg-gradient-to-t from-[#93441a] to-[#d97706] rounded-b-[40px] border-2 border-[#783f04] shadow-2xl flex items-center justify-center">
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-amber-950 font-bold bg-amber-300/40 px-3 py-1 rounded-full">
            Brioche Base
          </span>
        </div>
      ),
    },
  ];

  return (
    <section id="craft" className="py-20 bg-brand-card/40 border-y border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-red/10 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/15 border border-brand-amber/30 text-brand-amber text-xs font-black uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Layer-by-Layer Craft</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-brand-cream tracking-tight">
            ANATOMY OF THE PERFECT ZINGER
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-cream/60">
            Every burger at S.G Food Point is an engineered masterpiece. Tap through each layer to inspect our authentic culinary process.
          </p>
        </div>

        {/* Interactive Layout: Left Layer Selector + Right Exploded Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Layer Cards / Selector */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {layers.map((layer, index) => {
              const isActive = index === activeLayerIndex;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayerIndex(index)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-4 ${
                    isActive
                      ? "bg-brand-card border-brand-red shadow-glow-red/20 scale-[1.02]"
                      : "bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-lg font-black text-xs shrink-0 ${
                      isActive ? "bg-brand-red text-white" : "bg-white/10 text-brand-cream/70"
                    }`}
                  >
                    0{index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-display font-bold text-sm sm:text-base ${isActive ? layer.color : "text-brand-cream"}`}>
                        {layer.title}
                      </h3>
                      {isActive && <Check className="w-4 h-4 text-brand-red" />}
                    </div>
                    <span className="text-[11px] font-semibold text-brand-cream/50 block mt-0.5">
                      {layer.subtitle}
                    </span>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-2 text-xs text-brand-cream/80 leading-relaxed"
                      >
                        {layer.description}
                      </motion.p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Exploded Stack Interactive Canvas */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center min-h-[420px] sm:min-h-[460px] p-4 sm:p-6 rounded-3xl bg-black/40 border border-white/10 relative overflow-hidden">
            
            <div className="text-xs uppercase font-bold tracking-widest text-brand-cream/40 mb-6 flex items-center gap-2">
              <Flame className="w-4 h-4 text-brand-red animate-pulse" />
              <span>Exploded View &bull; Layer 0{activeLayerIndex + 1} of 06</span>
            </div>

            {/* Stacked Layers Representation */}
            <div className="flex flex-col items-center gap-3 sm:gap-4 my-auto">
              {layers.map((layer, index) => {
                const isActive = index === activeLayerIndex;
                return (
                  <motion.div
                    key={layer.id}
                    animate={{
                      scale: isActive ? 1.08 : 0.95,
                      y: isActive ? 0 : index < activeLayerIndex ? -8 : 8,
                      opacity: isActive ? 1 : 0.45,
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    onClick={() => setActiveLayerIndex(index)}
                    className="cursor-pointer"
                  >
                    {layer.renderElement()}
                  </motion.div>
                );
              })}
            </div>

            {/* Active Layer Highlight Pill */}
            <div className="mt-8 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-red/20 border border-brand-red/40 text-brand-cream text-xs font-bold tracking-wide">
                {layers[activeLayerIndex].title} &bull; {layers[activeLayerIndex].subtitle}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
