"use client";

import React, { useState, useMemo } from "react";
import { Search, Flame, Sparkles, Filter, X } from "lucide-react";
import { MENU_ITEMS, MenuItem, SAUCE_OPTIONS } from "@/data/menu";
import { MenuItemCard } from "@/components/MenuItemCard";
import { ItemModal } from "@/components/ItemModal";
import { useCart } from "@/context/CartContext";

const CATEGORIES = [
  { id: "all", label: "Full Menu" },
  { id: "burgers", label: "Burgers (10)" },
  { id: "shawarma", label: "Shawarma (4)" },
  { id: "sandwiches", label: "Sandwiches (4)" },
  { id: "rolls", label: "Paratha Rolls (6)" },
  { id: "starters", label: "Starters & Fries (5)" },
  { id: "drinks", label: "Cold Drinks" },
];

const FILTER_TAGS = ["All", "Bestseller", "Spicy", "Cheesy", "Value"];

export const MenuSection: React.FC = () => {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalItem, setModalItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      // Tag match
      const matchesTag =
        selectedTag === "All" || (item.tags && item.tags.includes(selectedTag as any));

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.urduName && item.urduName.includes(query));

      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [selectedCategory, selectedTag, searchQuery]);

  return (
    <section id="menu" className="py-20 bg-brand-bg relative z-10 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/15 border border-brand-red/30 text-brand-cream text-xs font-bold uppercase tracking-wider mb-2.5">
            <Flame className="w-3.5 h-3.5 text-brand-red animate-pulse" />
            <span>AUTHENTIC STREET FLAVORS</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-brand-cream tracking-tight">
            EXPLORE THE FULL S.G MENU
          </h2>
          <p className="mt-2 text-sm sm:text-base text-brand-cream/60">
            Handcrafted with 100% fresh chicken, toasted brioche, flaky lachha parathas, and signature Kasuri sauces.
          </p>
        </div>

        {/* Search & Tag Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-cream/40" />
            <input
              type="text"
              placeholder="Search burgers, shawarmas, fries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-card/90 border border-white/10 rounded-xl pl-10 pr-10 py-2.5 text-sm text-brand-cream placeholder:text-brand-cream/35 focus:outline-none focus:border-brand-red transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Tags */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 scrollbar-none no-scrollbar">
            <div className="flex items-center gap-1.5 text-xs text-brand-cream/50 pr-1 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>
            {FILTER_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 min-h-[36px] ${
                  selectedTag === tag
                    ? "bg-brand-red text-white shadow-glow-red/30"
                    : "bg-brand-card border border-white/10 text-brand-cream/70 hover:bg-white/5"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Sticky Horizontally-Scrolling Category Bar */}
        <div className="sticky top-[68px] z-30 -mx-4 px-4 sm:mx-0 sm:px-0 py-3 bg-brand-bg/95 backdrop-blur-md border-y border-white/5 mb-8">
          <div className="flex gap-2 overflow-x-auto scrollbar-none no-scrollbar pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 min-h-[42px] ${
                  selectedCategory === cat.id
                    ? "bg-brand-cream text-brand-bg shadow-md"
                    : "bg-white/5 text-brand-cream/70 hover:bg-white/10 hover:text-brand-cream border border-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-brand-card/50 rounded-2xl border border-white/5">
            <Sparkles className="w-8 h-8 text-brand-amber mx-auto mb-3 opacity-60" />
            <h3 className="font-display font-bold text-lg text-brand-cream">
              No matching food items found
            </h3>
            <p className="text-xs text-brand-cream/60 mt-1">
              Try adjusting your search query or reset category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedTag("All");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-brand-red text-xs font-bold text-white uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onOpenModal={(selected) => setModalItem(selected)}
              />
            ))}
          </div>
        )}

        {/* Add-on Sauces Highlight Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-brand-card via-[#1c1414] to-brand-card border border-brand-red/30 shadow-card">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-brand-amber/20 text-brand-amber text-[10px] font-black uppercase tracking-widest mb-1.5">
                ★ Kasuri Dip Trio
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-brand-cream">
                ADD EXTRA SIGNATURE SAUCES &bull; RS. 40 EACH
              </h3>
              <p className="text-xs sm:text-sm text-brand-cream/70 mt-1 max-w-xl">
                Elevate your zinger or loaded fries with our house-crafted White Garlic Mayo, Fiery Red Chili Szechuan, or Sweet Tangy Yellow Mustard dips.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              {SAUCE_OPTIONS.map((sauce) => (
                <button
                  key={sauce.id}
                  onClick={() =>
                    addItem({
                      menuItem: {
                        id: `sauce-${sauce.id}`,
                        name: sauce.name,
                        category: "starters",
                        price: sauce.price,
                        description: sauce.flavor,
                        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=400&q=80",
                      },
                    })
                  }
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-brand-cream transition-all min-h-[44px]"
                >
                  <span
                    className="w-3 h-3 rounded-full border border-white/40"
                    style={{ backgroundColor: sauce.color }}
                  />
                  <span>+ {sauce.name.split(" ")[0]} Dip (Rs. 40)</span>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Item Customization Modal */}
      <ItemModal item={modalItem} onClose={() => setModalItem(null)} />
    </section>
  );
};
