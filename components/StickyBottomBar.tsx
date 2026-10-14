"use client";

import React from "react";
import { Phone, MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPKR } from "@/lib/utils";

export const StickyBottomBar: React.FC = () => {
  const { totalItemsCount, subtotal, setIsCartOpen } = useCart();

  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0A0A0A] border-t border-white/15 px-4 py-3 shadow-[0_-10px_35px_rgba(0,0,0,0.95)] pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Quick Call */}
        <a
          href="tel:+923032967760"
          className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-brand-cream hover:bg-white/10 active:scale-95 transition-transform shrink-0"
          aria-label="Call S.G Food Point"
        >
          <Phone className="w-4 h-4 text-brand-green" />
          <span className="text-[10px] font-bold mt-0.5 text-brand-cream/80">Call</span>
        </a>

        {/* Quick WhatsApp */}
        <a
          href="https://wa.me/923032967760?text=Salam%20S.G%20Food%20Point!%20Mujhe%20order%20karna%20hai."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-brand-green/20 border border-brand-green/30 text-brand-green hover:bg-brand-green/30 active:scale-95 transition-transform shrink-0"
          aria-label="Message S.G Food Point on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-[10px] font-bold mt-0.5">Chat</span>
        </a>

        {/* View Cart / Subtotal */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex-1 h-12 px-3 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white flex items-center justify-between shadow-glow-red active:scale-98 transition-all min-w-0 gap-2"
          aria-label={`View cart with ${totalItemsCount} items, total ${formatPKR(subtotal)}`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="relative shrink-0">
              <ShoppingBag className="w-5 h-5" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-2 flex items-center justify-center h-4 min-w-[16px] px-1 rounded-full bg-brand-cream text-brand-bg font-black text-[9px]">
                  {totalItemsCount}
                </span>
              )}
            </div>
            <div className="text-left leading-tight truncate">
              <span className="text-[10px] uppercase font-bold text-white/80 block truncate">
                {totalItemsCount > 0 ? `${totalItemsCount} ${totalItemsCount === 1 ? "Item" : "Items"}` : "Cart"}
              </span>
              <span className="font-display font-black text-xs text-brand-cream truncate block">
                {totalItemsCount > 0 ? formatPKR(subtotal) : "Empty"}
              </span>
            </div>
          </div>

          <span className="text-[11px] font-black uppercase tracking-wider bg-black/25 px-2.5 py-1.5 rounded-lg shrink-0">
            {totalItemsCount > 0 ? "Review →" : "Add Food"}
          </span>
        </button>
      </div>
    </aside>
  );
};
