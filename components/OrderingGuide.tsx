"use client";

import React from "react";
import { Utensils, MessageSquare, Truck, CheckCircle, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPKR } from "@/lib/utils";

export const OrderingGuide: React.FC = () => {
  const { subtotal, freeDeliveryThreshold, remainingForFreeDelivery, isFreeDeliveryUnlocked, setIsCartOpen } = useCart();

  const progressPercent = Math.min(100, Math.round((subtotal / freeDeliveryThreshold) * 100));

  const steps = [
    {
      step: "01",
      icon: Utensils,
      title: "Pick Your Favorites",
      desc: "Explore burgers, shawarmas, wraps, and select your favorite Kasuri sauces.",
    },
    {
      step: "02",
      icon: MessageSquare,
      title: "Tap WhatsApp Order",
      desc: "No complicated signups or passwords. Your order is automatically formatted into an itemized slip.",
    },
    {
      step: "03",
      icon: Truck,
      title: "Hot Doorstep Arrival",
      desc: "Our rider delivers piping hot food to your home in Kasur within 30–40 minutes.",
    },
  ];

  return (
    <section className="py-20 bg-brand-bg relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/15 border border-brand-green/30 text-brand-green text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Effortless Checkout</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-brand-cream tracking-tight">
            HOW TO ORDER IN 3 EASY STEPS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-brand-cream/60">
            Enjoy Kasur&apos;s fastest late-night food ordering experience with direct WhatsApp confirmation.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-brand-card border border-white/8 shadow-card flex flex-col justify-between group hover:border-brand-amber/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-black text-2xl text-brand-amber">
                      {st.step}
                    </span>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-brand-red" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-cream">
                    {st.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-brand-cream/65 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Live Free Delivery Calculator Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-card via-[#1e1717] to-brand-card border border-brand-amber/30 shadow-card">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="w-full md:w-3/5">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="w-5 h-5 text-brand-amber animate-pulse" />
                <h3 className="font-display font-bold text-lg sm:text-xl text-brand-cream">
                  LIVE FREE DELIVERY CALCULATOR
                </h3>
              </div>

              {isFreeDeliveryUnlocked ? (
                <div className="flex items-center gap-2 text-brand-green font-bold text-sm">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>
                    🎉 Mubarak! You unlocked 100% FREE DELIVERY (Order exceeds {formatPKR(freeDeliveryThreshold)})!
                  </span>
                </div>
              ) : subtotal === 0 ? (
                <p className="text-xs sm:text-sm text-brand-cream/70">
                  Cart is currently empty. Add <span className="text-brand-amber font-bold">{formatPKR(freeDeliveryThreshold)}</span> worth of food to unlock 100% Free Delivery!
                </p>
              ) : (
                <p className="text-xs sm:text-sm text-brand-cream/80">
                  Current subtotal: <span className="font-bold text-brand-cream">{formatPKR(subtotal)}</span>. Add just{" "}
                  <span className="font-black text-brand-amber underline">
                    {formatPKR(remainingForFreeDelivery)}
                  </span>{" "}
                  more to get 100% FREE DELIVERY!
                </p>
              )}

              {/* Progress bar */}
              <div className="mt-4 w-full h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-brand-red via-brand-amber to-brand-green rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="mt-2 flex items-center justify-between text-[11px] font-semibold text-brand-cream/50">
                <span>Rs. 0</span>
                <span>{progressPercent}% towards Free Delivery</span>
                <span>{formatPKR(freeDeliveryThreshold)} (Free)</span>
              </div>
            </div>

            {/* Action button */}
            <div className="w-full md:w-auto shrink-0">
              <button
                onClick={() => setIsCartOpen(true)}
                className="w-full md:w-auto px-6 py-3.5 rounded-btn bg-brand-amber hover:bg-brand-amber-hover text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-glow-amber transition-all active:scale-95 min-h-[48px]"
              >
                Review Cart ({formatPKR(subtotal)})
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
