"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, MapPin, Phone, User, FileText, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPKR, generateWhatsAppOrderUrl } from "@/lib/utils";

export const WhatsAppModal: React.FC = () => {
  const {
    items,
    isCheckoutOpen,
    setIsCheckoutOpen,
    subtotal,
    deliveryFee,
    grandTotal,
    clearCart,
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [orderType, setOrderType] = useState<"Delivery" | "Takeout" | "Dine-in">("Delivery");
  const [specialNotes, setSpecialNotes] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim()) {
      setErrorMsg("Please enter your name");
      return;
    }
    if (!customerPhone.trim() || customerPhone.trim().length < 9) {
      setErrorMsg("Please enter a valid phone or WhatsApp number");
      return;
    }
    if (orderType === "Delivery" && !deliveryAddress.trim()) {
      setErrorMsg("Please enter your complete delivery address in Kasur");
      return;
    }

    setErrorMsg("");

    const itemizedDetails = items.map((i) => ({
      name: i.name,
      variant: i.variantName,
      sauces: i.sauces,
      quantity: i.quantity,
      unitPrice: i.price,
      itemTotal: i.price * i.quantity,
    }));

    const url = generateWhatsAppOrderUrl({
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      deliveryAddress: deliveryAddress.trim(),
      orderType,
      specialNotes: specialNotes.trim(),
      items: itemizedDetails,
      subtotal,
      deliveryFee: orderType === "Delivery" ? deliveryFee : 0,
      grandTotal: orderType === "Delivery" ? grandTotal : subtotal,
    });

    // Open WhatsApp
    window.open(url, "_blank");

    // Close checkout and reset/clear if desired
    setIsCheckoutOpen(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm">
        {/* Backdrop */}
        <div className="absolute inset-0" onClick={() => setIsCheckoutOpen(false)} />

        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 28, stiffness: 350 }}
          className="relative z-10 w-full max-w-lg bg-brand-card border-t sm:border border-white/10 rounded-t-3xl sm:rounded-3xl shadow-floating overflow-hidden max-h-[92dvh] flex flex-col"
        >
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-brand-bg/90">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-brand-green/20 text-brand-green">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-brand-cream">
                  CONFIRM ON WHATSAPP
                </h3>
                <span className="text-[11px] text-brand-cream/50 block">
                  Direct dispatch to +92 303 2967760
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-brand-cream"
              aria-label="Close checkout modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-4 flex-1">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-brand-red/20 border border-brand-red/40 text-xs font-bold text-white">
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Order Type Toggle */}
            <div>
              <label className="text-xs font-bold text-brand-cream uppercase tracking-wider block mb-2">
                Order Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["Delivery", "Takeout", "Dine-in"] as const).map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setOrderType(type)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                      orderType === type
                        ? "bg-brand-red text-white shadow-glow-red/30"
                        : "bg-white/5 border border-white/10 text-brand-cream/70 hover:bg-white/10"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Name */}
            <div>
              <label className="text-xs font-bold text-brand-cream uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-brand-amber" />
                <span>Your Name *</span>
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Ali Ahmed"
                autoComplete="name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-green transition-colors"
              />
            </div>

            {/* Customer Phone */}
            <div>
              <label className="text-xs font-bold text-brand-cream uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-green" />
                <span>Phone / WhatsApp Number *</span>
              </label>
              <input
                type="tel"
                inputMode="tel"
                required
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="e.g. 0303 1234567"
                autoComplete="tel"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-green transition-colors"
              />
            </div>

            {/* Delivery Address (if Delivery) */}
            {orderType === "Delivery" && (
              <div>
                <label className="text-xs font-bold text-brand-cream uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-red" />
                  <span>Kasur Delivery Address *</span>
                </label>
                <textarea
                  rows={2}
                  required
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="e.g. House #, Mohalla, Near landmark, Basti Noor Shah Wali, Kasur"
                  autoComplete="street-address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-base text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-green transition-colors resize-none"
                />
              </div>
            )}

            {/* Special Instructions */}
            <div>
              <label className="text-xs font-bold text-brand-cream uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-brand-cream/60" />
                <span>Special Instructions (Optional)</span>
              </label>
              <input
                type="text"
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                placeholder="e.g. Make it extra spicy, extra napkins"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-base text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:border-brand-green transition-colors"
              />
            </div>

            {/* Order Summary Recap */}
            <div className="pt-3 border-t border-white/10 space-y-1.5 text-xs">
              <div className="flex justify-between text-brand-cream/70">
                <span>Total Items:</span>
                <span className="font-semibold text-brand-cream">{items.length} items</span>
              </div>
              <div className="flex justify-between text-brand-cream/70">
                <span>Subtotal:</span>
                <span className="font-semibold text-brand-cream">{formatPKR(subtotal)}</span>
              </div>
              {orderType === "Delivery" && (
                <div className="flex justify-between text-brand-cream/70">
                  <span>Delivery Fee:</span>
                  <span className={deliveryFee === 0 ? "text-brand-green font-bold" : "text-brand-cream"}>
                    {deliveryFee === 0 ? "FREE" : formatPKR(deliveryFee)}
                  </span>
                </div>
              )}
              <div className="pt-2 border-t border-dashed border-white/15 flex justify-between items-baseline">
                <span className="font-display font-black text-sm text-brand-cream uppercase">
                  Grand Total:
                </span>
                <span className="font-display font-black text-xl text-brand-green">
                  {formatPKR(orderType === "Delivery" ? grandTotal : subtotal)}
                </span>
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-btn bg-brand-green hover:bg-brand-green-hover text-white font-black text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 active:scale-98 transition-all min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Order to Kitchen via WhatsApp</span>
              </button>
              <p className="mt-2 text-[10px] text-center text-brand-cream/40">
                Tapping opens WhatsApp with your pre-formatted order slip
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
