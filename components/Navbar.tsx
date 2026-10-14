"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Phone, Menu as MenuIcon, X, MapPin, Clock } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { getStoreStatus } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [storeStatus, setStoreStatus] = useState({
    isOpen: true,
    statusText: "OPEN NOW",
    subText: "Closes 2 AM",
  });

  useEffect(() => {
    setStoreStatus(getStoreStatus());
    const interval = setInterval(() => {
      setStoreStatus(getStoreStatus());
    }, 60000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Combos & Deals", href: "#combos" },
    { name: "Our Craft", href: "#craft" },
    { name: "Reviews", href: "#reviews" },
    { name: "Find Us", href: "#location" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "pt-[max(0.75rem,env(safe-area-inset-top,0px))] pb-3 bg-brand-bg/95 backdrop-blur-md border-b border-white/10 shadow-2xl"
            : "pt-[max(1rem,env(safe-area-inset-top,0px))] pb-3.5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Brand Logo & Title */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0"
              aria-label="S.G Food Point Homepage"
            >
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden border border-brand-amber/40 shadow-glow-amber/20 group-hover:scale-105 transition-transform shrink-0">
                <Image
                  src="/images/logo.svg"
                  alt="S.G Food Point Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-black text-base sm:text-xl tracking-tight text-brand-cream leading-tight group-hover:text-brand-amber transition-colors whitespace-nowrap">
                  S.G FOOD POINT
                </span>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-brand-cream/60 tracking-wider whitespace-nowrap mt-0.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse shrink-0" />
                  <span>{storeStatus.statusText}</span>
                  <span className="text-brand-cream/40">&bull;</span>
                  <span>{storeStatus.subText}</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-brand-card/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-card">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-brand-cream/80 hover:text-brand-cream hover:bg-white/5 rounded-full transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs (Call + Cart) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+923032967760"
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-brand-cream transition-colors min-h-[44px]"
                aria-label="Call restaurant directly"
              >
                <Phone className="w-3.5 h-3.5 text-brand-green" />
                <span>0303 2967760</span>
              </a>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-red hover:bg-brand-red-hover text-brand-cream font-bold text-xs uppercase tracking-wider shadow-glow-red transition-all transform active:scale-95 min-h-[44px]"
                aria-label={`Open shopping cart with ${totalItemsCount} items`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Cart</span>
                {totalItemsCount > 0 && (
                  <span className="flex items-center justify-center h-5 min-w-[20px] px-1 rounded-full bg-brand-cream text-brand-bg font-black text-[11px]">
                    {totalItemsCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Header Actions (Cart + Menu Toggle) */}
            <div className="flex sm:hidden items-center gap-2 shrink-0">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full bg-brand-card border border-white/10 text-brand-cream min-h-[48px] min-w-[48px] flex items-center justify-center active:scale-90 transition-transform"
                aria-label="Open Cart"
              >
                <ShoppingBag className="w-5 h-5 text-brand-amber" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex items-center justify-center h-5 min-w-[20px] px-1 rounded-full bg-brand-red text-white font-bold text-[10px] animate-bounce">
                    {totalItemsCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-brand-cream min-h-[48px] min-w-[48px] flex items-center justify-center active:scale-90 transition-transform"
                aria-label="Open Navigation Menu"
              >
                <MenuIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Slide-Over Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex justify-end sm:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              className="w-4/5 max-w-sm h-full bg-brand-card border-l border-white/10 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="relative h-9 w-9 rounded-full overflow-hidden border border-brand-amber/40">
                      <Image
                        src="/images/logo.svg"
                        alt="S.G Food Point Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="font-display font-black text-brand-cream text-base">
                      S.G FOOD POINT
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-white/5 text-brand-cream hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Status info */}
                <div className="mt-4 p-3 rounded-xl bg-brand-bg/60 border border-white/5 flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-brand-green" />
                  <div className="text-xs">
                    <span className="text-brand-green font-bold">Open Late</span>
                    <span className="text-brand-cream/60"> &bull; Closes 2:00 AM</span>
                  </div>
                </div>

                {/* Nav Links */}
                <nav className="mt-6 flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-xl text-base font-medium text-brand-cream hover:bg-brand-red/10 hover:text-brand-red border border-transparent hover:border-brand-red/30 transition-all flex items-center justify-between"
                    >
                      <span>{link.name}</span>
                      <span className="text-xs text-white/40">&rarr;</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Bottom Quick Contact in Mobile Drawer */}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="tel:+923032967760"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-brand-cream active:scale-98"
                >
                  <Phone className="w-4 h-4 text-brand-green" />
                  <span>Call 0303 2967760</span>
                </a>
                <div className="text-[11px] text-center text-brand-cream/50 flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3 text-brand-red" />
                  <span>Qadirabad Rd, Kasur, Punjab</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
