"use client";

import React from "react";
import { Truck, UtensilsCrossed, Moon, ShieldCheck } from "lucide-react";

export const HighlightsStrip: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: "FREE DELIVERY",
      highlight: "Orders Rs. 500+",
      desc: "Instant doorstep delivery across Kasur city",
      color: "text-brand-amber",
      borderColor: "hover:border-brand-amber/40",
    },
    {
      icon: UtensilsCrossed,
      title: "DINE-IN & TAKEOUT",
      highlight: "Family Friendly",
      desc: "Cozy seating & quick takeaway packing",
      color: "text-brand-red",
      borderColor: "hover:border-brand-red/40",
    },
    {
      icon: Moon,
      title: "OPEN TILL 2:00 AM",
      highlight: "Night Owl Favorite",
      desc: "Midnight cravings satisfied every single day",
      color: "text-brand-green",
      borderColor: "hover:border-brand-green/40",
    },
    {
      icon: ShieldCheck,
      title: "100% FRESH HALAL",
      highlight: "Premium Poultry",
      desc: "Freshly minced & marinated daily, never frozen",
      color: "text-brand-amber",
      borderColor: "hover:border-brand-amber/40",
    },
  ];

  return (
    <section className="py-8 bg-brand-bg relative z-10 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className={`p-5 rounded-2xl bg-brand-card/90 border border-white/8 ${f.borderColor} transition-all duration-300 shadow-card flex items-start gap-4 group`}
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  <Icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-black text-sm tracking-wide text-brand-cream uppercase">
                      {f.title}
                    </h3>
                  </div>
                  <span className={`block text-xs font-bold ${f.color} mt-0.5`}>
                    {f.highlight}
                  </span>
                  <p className="text-xs text-brand-cream/60 mt-1 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
