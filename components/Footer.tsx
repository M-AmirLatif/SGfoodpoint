"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-card/90 border-t border-white/10 pt-16 pb-36 sm:pb-16 text-brand-cream relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border border-brand-amber/40 shadow-glow-amber/20">
                <Image
                  src="/images/logo.svg"
                  alt="S.G Food Point Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-tight text-brand-cream block leading-tight">
                  S.G FOOD POINT
                </span>
                <span className="text-[11px] font-bold text-brand-amber tracking-widest uppercase">
                  Fresh &amp; Delicious &bull; Kasur Original
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-brand-cream/65 leading-relaxed max-w-sm">
              Kasur&apos;s premier late-night fast-food destination. Sizzling zinger burgers, stuffed cheese shawarmas, crispy paratha rolls, and loaded fries delivered hot to your door until 2:00 AM.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href="https://wa.me/923032967760"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-brand-green/20 border border-brand-green/40 text-brand-green text-xs font-bold hover:bg-brand-green/30 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+923032967760"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-brand-cream/80 text-xs font-bold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>0303 2967760</span>
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-brand-amber">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-brand-cream/75">
              <li>
                <a href="#menu" className="hover:text-brand-red transition-colors">
                  Full Menu (Burgers, Shawarma, Rolls)
                </a>
              </li>
              <li>
                <a href="#combos" className="hover:text-brand-red transition-colors">
                  Value Combo Deals &amp; Bundles
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-brand-red transition-colors">
                  The Zinger Craft &amp; Story
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-brand-red transition-colors">
                  Customer Reviews &amp; 5.0 Rating
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-brand-red transition-colors">
                  Find Us / Qadirabad Road Kasur
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Address (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-brand-amber">
              Store Timings &amp; Location
            </h4>
            <div className="space-y-2 text-xs text-brand-cream/75">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-brand-cream block">Daily Timings:</span>
                  <span>12:00 PM &ndash; 2:00 AM (Midnight Hunger Specialist)</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-brand-cream block">Address:</span>
                  <span>Qadirabad Rd, near Sha G General Store, Basti Noor Shah Wali, Kasur, 55050, Punjab</span>
                </div>
              </div>
              <div className="pt-2 text-[11px] text-brand-green font-bold">
                ★ FREE DELIVERY ON ORDERS OVER RS. 500!
              </div>
            </div>
          </div>

        </div>

        {/* Huge Aesthetic Wordmark */}
        <div className="pt-8 pb-4 text-center select-none overflow-hidden">
          <span className="font-display font-black text-4xl sm:text-7xl lg:text-8xl tracking-tighter text-white/[0.04] uppercase block">
            S.G FOOD POINT
          </span>
        </div>

        {/* Bottom Bar & Demo Notice */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-cream/50 gap-4">
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} S.G Food Point Kasur. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-brand-red fill-current" />
            <span>as a high-performance restaurant showcase.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
