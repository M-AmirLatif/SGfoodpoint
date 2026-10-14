"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ShoppingBag, CheckCircle2, Flame } from "lucide-react";
import { COMBO_DEALS, ComboDeal } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { formatPKR } from "@/lib/utils";

interface ComboCardProps {
  deal: ComboDeal;
}

const ComboCard: React.FC<ComboCardProps> = ({ deal }) => {
  const { addCombo } = useCart();
  const [imgSrc, setImgSrc] = React.useState(deal.image);

  return (
    <div className="rounded-3xl bg-brand-card border border-white/10 hover:border-brand-amber/40 transition-all duration-300 shadow-card hover:shadow-card-hover overflow-hidden flex flex-col justify-between group">
      {/* Top Banner with Image and Badge */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-white/5">
        <Image
          src={imgSrc}
          alt={deal.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() =>
            setImgSrc(
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
            )
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-black/40 to-transparent" />

        {/* Savings Pill */}
        <span className="absolute top-4 left-4 bg-brand-red text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-glow-red">
          SAVE {formatPKR(deal.savings)}
        </span>

        {/* Badge */}
        <span className="absolute top-4 right-4 bg-brand-amber text-black text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
          <Flame className="w-3 h-3 fill-current" />
          <span>{deal.badge}</span>
        </span>

        {/* Bottom title inside banner */}
        <div className="absolute bottom-4 left-5 right-5">
          <h3 className="font-display font-black text-xl sm:text-2xl text-brand-cream">
            {deal.name}
          </h3>
          <p className="text-xs text-brand-cream/80 font-medium mt-0.5">
            {deal.tagline}
          </p>
        </div>
      </div>

      {/* Items List */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-[11px] font-black uppercase tracking-wider text-brand-cream/45 mb-3">
            Bundle Includes:
          </h4>
          <ul className="space-y-2">
            {deal.items.map((itemStr, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-xs sm:text-sm text-brand-cream/85 font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span>{itemStr}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price and CTA */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-brand-cream/40 line-through">
                {formatPKR(deal.originalPrice)}
              </span>
              <span className="text-[10px] font-bold text-brand-green uppercase">
                Bundle Deal
              </span>
            </div>
            <span className="font-display font-black text-xl sm:text-2xl text-brand-amber">
              {formatPKR(deal.discountedPrice)}
            </span>
          </div>

          <button
            onClick={() => addCombo(deal)}
            className="flex items-center gap-2 px-5 py-3 rounded-btn bg-brand-red hover:bg-brand-red-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-glow-red active:scale-95 transition-all min-h-[48px]"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Grab Combo</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const CombosSection: React.FC = () => {
  return (
    <section id="combos" className="py-20 bg-brand-card/40 border-y border-white/5 relative z-10 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-amber/15 border border-brand-amber/30 text-brand-amber text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VALUE BUNDLES &bull; BIGGER SAVINGS</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-brand-cream tracking-tight">
            SIGNATURE COMBO BOXES
          </h2>
          <p className="mt-2 text-sm sm:text-base text-brand-cream/60">
            Engineered for late-night cravings and squad hangouts. Curated combos with automatic bundle savings and instant free delivery eligibility.
          </p>
        </div>

        {/* Combos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {COMBO_DEALS.map((deal) => (
            <ComboCard key={deal.id} deal={deal} />
          ))}
        </div>

      </div>
    </section>
  );
};
