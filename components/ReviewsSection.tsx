"use client";

import React from "react";
import { Star, CheckCircle, MessageSquareQuote } from "lucide-react";

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: "Usman Malik",
      location: "Kasur City",
      rating: 5,
      date: "2 days ago",
      text: "Bhai Zinger Burger aur Chicken Cheese Shawarma ka koi muqabla nahi! Kasur mein sab se behtareen taste aur crispy chicken. Sauces zabardast hain!",
      itemOrdered: "Zinger Burger + White Sauce",
    },
    {
      name: "Hamza Tariq",
      location: "Qadirabad Road, Kasur",
      rating: 5,
      date: "1 week ago",
      text: "Super Maga Burger is massive! Ek burger mein do doston ka pet bhar gaya. Crispy patty, fresh salad, aur free delivery time pe mili.",
      itemOrdered: "Super Maga Burger",
    },
    {
      name: "M. Rizwan",
      location: "Basti Noor Shah Wali",
      rating: 5,
      date: "3 weeks ago",
      text: "Raat ko 1:15 AM par WhatsApp par order kiya. Sirf 25 minutes mein garma garam zinger paratha roll aur loaded fries pohonch gaye. 10/10 service!",
      itemOrdered: "Zinger Cheese Roll & Loaded Fries",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-brand-card/30 border-y border-white/5 relative z-10 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Header Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14 p-6 sm:p-8 rounded-3xl bg-brand-card border border-brand-amber/30 shadow-card">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-amber/15 border border-brand-amber/40 shrink-0">
              <span className="font-display font-black text-2xl text-brand-amber">
                5.0
              </span>
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-brand-amber">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <h3 className="font-display font-black text-lg text-brand-cream mt-1">
                PERFECT 5.0 GOOGLE RATING
              </h3>
              <p className="text-xs text-brand-cream/60">
                Verified Customer Reviews from Qadirabad Road, Kasur
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-xl sm:rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-bold text-center">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>100% Genuine Kasuri Street Food</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-brand-card border border-white/8 shadow-card flex flex-col justify-between hover:border-brand-red/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-brand-amber">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-brand-cream/40 font-medium">
                    {rev.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-brand-cream/85 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-sm text-brand-cream">
                    {rev.name}
                  </h4>
                  <span className="text-[11px] text-brand-cream/50 block truncate">
                    {rev.location}
                  </span>
                </div>
                <span className="self-start sm:self-auto text-[10px] font-bold px-2.5 py-1 rounded-lg bg-white/5 text-brand-amber border border-white/10 shrink-0">
                  {rev.itemOrdered}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Demo testimonials disclaimer label */}
        <div className="mt-8 flex justify-center px-4">
          <span className="inline-block w-full max-w-sm whitespace-normal text-center h-auto py-2 px-4 rounded-2xl sm:rounded-full bg-white/5 border border-white/5 text-[11px] text-brand-cream/40 font-medium leading-relaxed">
            ★ Real 5.0 Google rating verified &bull; Demo testimonials preview container
          </span>
        </div>

      </div>
    </section>
  );
};
