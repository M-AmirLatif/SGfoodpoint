"use client";

import React, { useState } from "react";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HighlightsStrip } from "@/components/HighlightsStrip";
import { SignatureCarousel } from "@/components/SignatureCarousel";
import { BurgerAssembly } from "@/components/BurgerAssembly";
import { MenuSection } from "@/components/MenuSection";
import { CombosSection } from "@/components/CombosSection";
import { OrderingGuide } from "@/components/OrderingGuide";
import { GallerySection } from "@/components/GallerySection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsAppModal } from "@/components/WhatsAppModal";
import { StickyBottomBar } from "@/components/StickyBottomBar";
import { MenuItem } from "@/data/menu";
import { ItemModal } from "@/components/ItemModal";

export default function HomePage() {
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-brand-bg text-brand-cream overflow-x-hidden selection:bg-brand-red selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Highlights Value Strip */}
          <HighlightsStrip />

          {/* Signature Popular Items Carousel */}
          <SignatureCarousel onSelectItem={(item) => setSelectedItemForModal(item)} />

          {/* Interactive Burger Layer Assembly Craft Section */}
          <BurgerAssembly />

          {/* Full Interactive Menu with Search, Category Filter, and Add-ons */}
          <MenuSection />

          {/* Value Combos & Deals */}
          <CombosSection />

          {/* Ordering Guide & Live Free Delivery Calculator */}
          <OrderingGuide />

          {/* Visual Gallery Grid */}
          <GallerySection />

          {/* Customer Reviews & 5.0 Rating */}
          <ReviewsSection />

          {/* Location, Contact & Map */}
          <LocationSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating & Drawer Elements */}
        <CartDrawer />
        <WhatsAppModal />
        <StickyBottomBar />

        {/* Global Item Modal for Signature Carousel */}
        <ItemModal
          item={selectedItemForModal}
          onClose={() => setSelectedItemForModal(null)}
        />
      </div>
    </SmoothScroll>
  );
}
