"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Check, Sparkles } from "lucide-react";
import { MenuItem, SAUCE_OPTIONS } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { formatPKR } from "@/lib/utils";
import { FoodImage } from "@/components/FoodImage";

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose }) => {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<{ name: string; price: number } | null>(null);
  const [selectedSauces, setSelectedSauces] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (item) {
      if (item.variants && item.variants.options.length > 0) {
        setSelectedVariant(item.variants.options[0]);
      } else {
        setSelectedVariant(null);
      }
      setSelectedSauces([]);
      setQuantity(1);
    }
  }, [item]);

  if (!item) return null;

  const toggleSauce = (sauceName: string) => {
    setSelectedSauces((prev) =>
      prev.includes(sauceName)
        ? prev.filter((s) => s !== sauceName)
        : [...prev, sauceName]
    );
  };

  const basePrice = selectedVariant ? selectedVariant.price : item.price;
  const saucesPrice = selectedSauces.length * 40;
  const unitPrice = basePrice + saucesPrice;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    addItem({
      menuItem: item,
      variantName: selectedVariant?.name,
      variantPrice: selectedVariant?.price,
      sauces: selectedSauces,
      quantity,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm">
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 28, stiffness: 350 }}
          className="relative z-10 w-full max-w-lg bg-brand-card border-t sm:border border-white/10 rounded-t-3xl sm:rounded-3xl shadow-floating overflow-hidden max-h-[90dvh] flex flex-col"
        >
          {/* Header image banner */}
          <div className="relative h-44 w-full bg-white/5 shrink-0">
            <FoodImage
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-black/40 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white/90 hover:bg-black/90 active:scale-90 transition-all border border-white/15"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-red bg-brand-red/20 border border-brand-red/30 px-2.5 py-0.5 rounded-full">
                  {item.category.toUpperCase()}
                </span>
                <h3 className="font-display font-black text-xl text-brand-cream mt-1 leading-tight">
                  {item.name}
                </h3>
              </div>
              {item.urduName && (
                <span className="text-sm font-bold text-brand-amber bg-black/70 px-2 py-0.5 rounded-lg border border-white/10">
                  {item.urduName}
                </span>
              )}
            </div>
          </div>

          {/* Modal Body / Scrollable */}
          <div className="p-5 overflow-y-auto space-y-6 flex-1">
            <p className="text-xs sm:text-sm text-brand-cream/75 leading-relaxed">
              {item.description}
            </p>

            {/* Variants Selector (if applicable) */}
            {item.variants && (
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-brand-amber block mb-2.5">
                  {item.variants.label}
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {item.variants.options.map((option) => {
                    const isSelected = selectedVariant?.name === option.name;
                    return (
                      <button
                        key={option.name}
                        onClick={() => setSelectedVariant(option)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? "bg-brand-red/20 border-brand-red text-white"
                            : "bg-white/5 border-white/10 text-brand-cream/70 hover:bg-white/10"
                        }`}
                      >
                        <div className="text-xs font-bold">{option.name}</div>
                        <div className="text-xs text-brand-amber font-black mt-1">
                          {formatPKR(option.price)}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Add-on Sauces (Rs. 40 each) */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-black uppercase tracking-wider text-brand-cream block">
                  Add Secret Sauces
                </label>
                <span className="text-[11px] font-bold text-brand-amber">
                  +Rs. 40 each
                </span>
              </div>
              <div className="space-y-2">
                {SAUCE_OPTIONS.map((sauce) => {
                  const isChecked = selectedSauces.includes(sauce.name);
                  return (
                    <button
                      key={sauce.id}
                      onClick={() => toggleSauce(sauce.name)}
                      className={`w-full p-3 rounded-xl border flex items-center justify-between transition-all ${
                        isChecked
                          ? "bg-white/10 border-brand-amber"
                          : "bg-white/5 border-white/5 hover:border-white/15"
                      }`}
                    >
                      <div className="flex items-center gap-3 text-left">
                        <div
                          className="w-4 h-4 rounded-full border border-white/30"
                          style={{ backgroundColor: sauce.color }}
                        />
                        <div>
                          <div className="text-xs font-bold text-brand-cream">
                            {sauce.name}
                          </div>
                          <div className="text-[11px] text-brand-cream/50">
                            {sauce.flavor}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          isChecked
                            ? "bg-brand-amber border-brand-amber text-black"
                            : "border-white/20 text-transparent"
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cream">
                Quantity
              </span>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-brand-cream flex items-center justify-center active:scale-90"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-display font-black text-sm text-brand-cream min-w-[20px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-brand-cream flex items-center justify-center active:scale-90"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-4 border-t border-white/10 bg-brand-bg/90">
            <button
              onClick={handleAddToCart}
              className="w-full py-3.5 rounded-btn bg-brand-red hover:bg-brand-red-hover text-white font-bold text-sm uppercase tracking-wider shadow-glow-red flex items-center justify-center gap-2 active:scale-98 transition-all min-h-[48px]"
            >
              <Sparkles className="w-4 h-4 text-brand-amber" />
              <span>Add to Cart &bull; {formatPKR(totalPrice)}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
