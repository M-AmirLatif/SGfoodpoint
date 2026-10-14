"use client";

import React from "react";
import { MapPin, Phone, MessageCircle, Clock, Navigation, CheckCircle2 } from "lucide-react";

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-brand-bg relative z-10 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/15 border border-brand-red/30 text-brand-cream text-xs font-bold uppercase tracking-wider mb-2.5">
            <MapPin className="w-3.5 h-3.5 text-brand-red" />
            <span>VISIT OUR RESTAURANT</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-brand-cream tracking-tight">
            FIND S.G FOOD POINT
          </h2>
          <p className="mt-2 text-sm sm:text-base text-brand-cream/60">
            Conveniently situated on Qadirabad Road, Kasur. Drop by for fresh dine-in, grab a quick takeaway, or order home delivery.
          </p>
        </div>

        {/* Content Layout: Left Information + Right Styled Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact & Hours Details */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-brand-card border border-white/10 shadow-card space-y-6">
            
            <div className="space-y-6">
              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-red/15 border border-brand-red/30 text-brand-red shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-brand-cream">
                    Exact Address
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-cream/80 mt-1 leading-relaxed">
                    Qadirabad Rd (Kadrabad Road), near Sha G General Store / Al Sayyed General Store, Basti Noor Shah Wali, Kasur, 55050, Punjab, Pakistan
                  </p>
                </div>
              </div>

              {/* Hours Block */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-amber/15 border border-brand-amber/30 text-brand-amber shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-brand-cream">
                    Operating Hours
                  </h3>
                  <div className="mt-1">
                    <span className="text-xs text-brand-cream/60 block">Monday &ndash; Sunday:</span>
                    <span className="text-sm font-black text-brand-amber inline-block">12:00 PM &ndash; 2:00 AM</span>
                  </div>
                  <span className="inline-block mt-1.5 text-[11px] font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">
                    Open Late &bull; Daily Hot Service
                  </span>
                </div>
              </div>

              {/* Services Block */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-green/15 border border-brand-green/30 text-brand-green shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-brand-cream">
                    Available Services
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-brand-cream">
                      Dine-in
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-brand-cream">
                      Takeout
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-brand-green/15 border border-brand-green/30 text-brand-green">
                      Free Delivery (Rs. 500+)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+923032967760"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-card hover:bg-white/10 border border-white/15 text-xs sm:text-sm font-bold text-brand-cream transition-all min-h-[48px]"
              >
                <Phone className="w-4 h-4 text-brand-green" />
                <span>Call Us</span>
              </a>

              <a
                href="https://wa.me/923032967760?text=Salam%20S.G%20Food%20Point!%20Mujhe%20location%20aur%20order%20chahiye."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-green hover:bg-brand-green-hover text-xs sm:text-sm font-bold text-white transition-all shadow-md min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://maps.google.com/?q=Qadirabad+Road+Basti+Noor+Shah+Wali+Kasur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-red hover:bg-brand-red-hover text-xs sm:text-sm font-bold text-white transition-all shadow-glow-red min-h-[48px]"
              >
                <Navigation className="w-4 h-4" />
                <span>Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Styled Map Container */}
          <div className="lg:col-span-7 rounded-3xl bg-brand-card border border-white/10 overflow-hidden shadow-card relative min-h-[360px] flex flex-col justify-between">
            {/* Google Map iframe centered on Kasur Punjab */}
            <div className="relative w-full h-full min-h-[380px] bg-[#111]">
              <iframe
                title="S.G Food Point Kasur Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13636.56843472421!2d74.4361!3d31.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919bda165d4bb9f%3A0x6b872ef21eeea9d!2sKasur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718000000000!5m2!1sen!2s"
                className="w-full h-full border-0 grayscale invert contrast-125 opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Pin Card Overlay */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-brand-bg/95 border border-brand-red/40 backdrop-blur-md p-4 rounded-2xl shadow-floating">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-brand-red animate-ping" />
                  <div>
                    <h4 className="font-display font-black text-sm text-brand-cream">
                      S.G FOOD POINT
                    </h4>
                    <span className="text-[11px] text-brand-amber font-semibold block">
                      Near Sha G / Al Sayyed General Store
                    </span>
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-brand-cream/70">
                  <span>Qadirabad Rd, Kasur</span>
                  <span className="text-brand-green font-bold">Open Late &bull; 2 AM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
