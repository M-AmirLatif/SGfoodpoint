"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Plus, Sparkles } from "lucide-react";
import { MENU_ITEMS, MenuItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { formatPKR } from "@/lib/utils";
import { FoodImage } from "@/components/FoodImage";

interface SignatureCarouselProps {
  onSelectItem: (item: MenuItem) => void;
}

export const SignatureCarousel: React.FC<SignatureCarouselProps> = ({ onSelectItem }) => {
  const { addItem } = useCart();
  const carouselRef = useRef<HTMLDivElement>(null);

  // Top signature items
  const popularIds = [
    "zinger-burger",
    "chicken-cheese-shawarma",
    "super-maga-burger",
    "chicken-loaded-fries",
    "peri-peri-masala-fries",
    "zinger-cheese-paratha-roll",
  ];

  const signatureItems = MENU_ITEMS.filter((item) => popularIds.includes(item.id));

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-widest mb-1.5">
              <Sparkles className="w-4 h-4 text-brand-amber" />
              <span>Crowd Favorites &bull; Kasur Stars</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-brand-cream tracking-tight">
              SIGNATURE SHOWCASE
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-brand-card border border-white/10 text-brand-cream hover:bg-white/10 active:scale-90 transition-all min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-brand-card border border-white/10 text-brand-cream hover:bg-white/10 active:scale-90 transition-all min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Snap-scrolling Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory scrollbar-none no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {signatureItems.map((item) => (
            <div
              key={item.id}
              className="flex-none w-[280px] sm:w-[320px] snap-start rounded-2xl bg-brand-card border border-white/10 hover:border-brand-red/40 transition-all duration-300 shadow-card flex flex-col justify-between overflow-hidden group"
            >
              {/* Image & Badges */}
              <div className="relative h-48 w-full overflow-hidden bg-white/5">
                <FoodImage
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 280px, 320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-80" />

                {/* Tag Pill */}
                {item.tags && item.tags.length > 0 && (
                  <span className="absolute top-3 left-3 bg-brand-red text-white text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                    {item.tags[0]}
                  </span>
                )}

                {/* Urdu Name Accent */}
                {item.urduName && (
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-brand-amber text-xs font-bold px-2 py-0.5 rounded-lg border border-white/10">
                    {item.urduName}
                  </span>
                )}
              </div>

              {/* Content Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-brand-cream group-hover:text-brand-amber transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-brand-cream/65 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-brand-cream/50 uppercase font-bold block">
                      Price
                    </span>
                    <span className="font-display font-black text-lg text-brand-amber">
                      {formatPKR(item.price)}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      if (item.variants) {
                        onSelectItem(item);
                      } else {
                        addItem({ menuItem: item });
                      }
                    }}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider shadow-glow-red transition-all active:scale-95 min-h-[44px]"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{item.variants ? "Options" : "Add"}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
