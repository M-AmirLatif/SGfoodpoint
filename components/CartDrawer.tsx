"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPKR } from "@/lib/utils";
import { FoodImage } from "@/components/FoodImage";

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal,
    deliveryFee,
    grandTotal,
    freeDeliveryThreshold,
    remainingForFreeDelivery,
    isFreeDeliveryUnlocked,
    setIsCheckoutOpen,
  } = useCart();

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[80] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Drawer Container (Receipt / Ticket Aesthetic) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="relative z-10 w-full max-w-md h-full bg-brand-card border-l border-white/10 shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-brand-bg/80 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-brand-red/15 text-brand-red">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg text-brand-cream">
                    YOUR ORDER SLIP
                  </h3>
                  <span className="text-[11px] text-brand-cream/50 block">
                    S.G Food Point &bull; Kasur
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="p-2 rounded-lg text-white/50 hover:text-brand-red hover:bg-white/5 text-xs transition-colors"
                    title="Clear all items"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-brand-cream"
                  aria-label="Close cart drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Free Delivery Banner inside Cart */}
            <div className="px-5 py-3 bg-brand-bg border-b border-white/5">
              <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-brand-amber" />
                  <span className={isFreeDeliveryUnlocked ? "text-brand-green" : "text-brand-cream"}>
                    {isFreeDeliveryUnlocked
                      ? "Free Delivery Unlocked! 🎉"
                      : `Add ${formatPKR(remainingForFreeDelivery)} for Free Delivery`}
                  </span>
                </div>
                <span className="text-[11px] text-brand-cream/50">
                  Target: {formatPKR(freeDeliveryThreshold)}
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-red to-brand-green transition-all duration-300"
                  style={{
                    width: `${Math.min(100, (subtotal / freeDeliveryThreshold) * 100)}%`,
                  }}
                />
              </div>
            </div>

            {/* Itemized Receipt Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand-cream/30">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-base text-brand-cream">
                    Your cart is currently empty
                  </h4>
                  <p className="text-xs text-brand-cream/50 mt-1 max-w-xs">
                    Satisfy your midnight cravings with our zinger burgers, cheesy shawarmas, or loaded fries!
                  </p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      const el = document.getElementById("menu");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-5 px-5 py-2.5 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-wider shadow-glow-red"
                  >
                    Browse Menu Now
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.cartKey}
                    className="p-3.5 rounded-xl bg-brand-bg/80 border border-white/8 flex items-start gap-3 relative group"
                  >
                    {/* Item Image */}
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white/5 border border-white/10">
                      <FoodImage
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display font-bold text-sm text-brand-cream truncate">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.cartKey)}
                          className="text-white/40 hover:text-brand-red transition-colors shrink-0 p-0.5"
                          title="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.variantName && (
                        <span className="text-[11px] text-brand-amber font-semibold block">
                          {item.variantName}
                        </span>
                      )}

                      {item.sauces && item.sauces.length > 0 && (
                        <div className="text-[10px] text-brand-cream/60 mt-0.5">
                          Sauces: {item.sauces.join(", ")}
                        </div>
                      )}

                      <div className="mt-2 flex items-center justify-between">
                        <span className="font-display font-black text-xs text-brand-amber">
                          {formatPKR(item.price * item.quantity)}
                        </span>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 bg-white/5 rounded-lg border border-white/10 p-0.5">
                          <button
                            onClick={() => updateQuantity(item.cartKey, -1)}
                            className="w-6 h-6 rounded flex items-center justify-center text-brand-cream hover:bg-white/10 active:scale-90"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-bold text-xs text-brand-cream min-w-[16px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartKey, 1)}
                            className="w-6 h-6 rounded flex items-center justify-center text-brand-cream hover:bg-white/10 active:scale-90"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Receipt Summary Footer */}
            {items.length > 0 && (
              <div className="p-5 border-t border-white/10 bg-brand-bg/95 backdrop-blur-md space-y-3">
                {/* Cost breakdown */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-brand-cream/70">
                    <span>Subtotal:</span>
                    <span className="font-semibold text-brand-cream">{formatPKR(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-brand-cream/70">
                    <span>Delivery Fee:</span>
                    {deliveryFee === 0 ? (
                      <span className="font-bold text-brand-green uppercase">FREE (Rs. 500+)</span>
                    ) : (
                      <span className="font-semibold text-brand-cream">{formatPKR(deliveryFee)}</span>
                    )}
                  </div>
                  <div className="pt-2 border-t border-dashed border-white/15 flex justify-between items-baseline">
                    <span className="font-display font-black text-sm text-brand-cream uppercase">
                      Grand Total:
                    </span>
                    <span className="font-display font-black text-xl text-brand-amber">
                      {formatPKR(grandTotal)}
                    </span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full py-3.5 rounded-btn bg-brand-red hover:bg-brand-red-hover text-white font-black text-sm uppercase tracking-wider shadow-glow-red flex items-center justify-center gap-2 active:scale-98 transition-all min-h-[48px]"
                >
                  <span>Checkout on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-center text-brand-cream/40">
                  Instant order confirmation via WhatsApp &bull; Cash on Delivery
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
