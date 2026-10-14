"use client";

import React from "react";
import Image from "next/image";
import { Plus, SlidersHorizontal, Flame } from "lucide-react";
import { MenuItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { formatPKR } from "@/lib/utils";

interface MenuItemCardProps {
  item: MenuItem;
  onOpenModal: (item: MenuItem) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onOpenModal }) => {
  const { addItem } = useCart();
  const [imgSrc, setImgSrc] = React.useState(item.image);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.variants) {
      onOpenModal(item);
    } else {
      addItem({ menuItem: item });
    }
  };

  const hasVariants = !!item.variants;

  return (
    <div
      onClick={() => onOpenModal(item)}
      className="interactive-card group relative flex flex-col justify-between rounded-2xl bg-brand-card/90 border border-white/8 hover:border-brand-red/40 transition-all duration-300 shadow-card hover:shadow-card-hover overflow-hidden cursor-pointer"
    >
      {/* Thumbnail Container */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-white/5">
        <Image
          src={imgSrc}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={() => setImgSrc("https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {item.tags?.map((tag) => (
              <span
                key={tag}
                className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-sm ${
                  tag === "Bestseller"
                    ? "bg-brand-amber text-black"
                    : tag === "Spicy"
                    ? "bg-brand-red text-white flex items-center gap-0.5"
                    : tag === "Cheesy"
                    ? "bg-yellow-500 text-black"
                    : "bg-white/20 text-white backdrop-blur-md"
                }`}
              >
                {tag === "Spicy" && <Flame className="w-2.5 h-2.5 fill-current" />}
                {tag}
              </span>
            ))}
          </div>

          {item.urduName && (
            <span className="bg-black/70 backdrop-blur-sm text-brand-amber text-[11px] font-bold px-2 py-0.5 rounded-md border border-white/10">
              {item.urduName}
            </span>
          )}
        </div>
      </div>

      {/* Info Container */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-base sm:text-lg text-brand-cream group-hover:text-brand-amber transition-colors line-clamp-1">
            {item.name}
          </h3>
          <p className="mt-1 text-xs text-brand-cream/65 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-brand-cream/45 uppercase font-bold block">
              {hasVariants ? "Starting from" : "Price"}
            </span>
            <span className="font-display font-black text-base sm:text-lg text-brand-amber">
              {formatPKR(item.price)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleQuickAdd}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all active:scale-95 min-h-[44px] ${
                hasVariants
                  ? "bg-white/10 hover:bg-white/20 text-brand-cream border border-white/10"
                  : "bg-brand-red hover:bg-brand-red-hover text-white shadow-glow-red"
              }`}
              aria-label={`Add ${item.name} to cart`}
            >
              {hasVariants ? (
                <>
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Options</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
