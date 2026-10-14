"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { MenuItem, ComboDeal } from "@/data/menu";

export interface CartItem {
  cartKey: string;
  id: string; // original menu item id
  name: string;
  price: number; // unit price including variant and sauces
  basePrice: number;
  quantity: number;
  variantName?: string;
  sauces: string[];
  image: string;
  category?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: {
    menuItem: MenuItem;
    variantName?: string;
    variantPrice?: number;
    sauces?: string[];
    quantity?: number;
  }) => void;
  addCombo: (combo: ComboDeal) => void;
  removeItem: (cartKey: string) => void;
  updateQuantity: (cartKey: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  totalItemsCount: number;
  subtotal: number;
  deliveryFee: number;
  freeDeliveryThreshold: number;
  remainingForFreeDelivery: number;
  isFreeDeliveryUnlocked: boolean;
  grandTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_DELIVERY_THRESHOLD = 500;
const STANDARD_DELIVERY_FEE = 100;
const STORAGE_KEY = "sg_food_point_cart_v1";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore storage failure
    } finally {
      setHasLoaded(true);
    }
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    if (hasLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch {
        // ignore
      }
    }
  }, [items, hasLoaded]);

  const generateCartKey = (id: string, variantName = "", sauces: string[] = []): string => {
    const sortedSauces = [...sauces].sort().join("|");
    return `${id}__${variantName}__${sortedSauces}`;
  };

  const addItem = ({
    menuItem,
    variantName,
    variantPrice,
    sauces = [],
    quantity = 1,
  }: {
    menuItem: MenuItem;
    variantName?: string;
    variantPrice?: number;
    sauces?: string[];
    quantity?: number;
  }) => {
    const baseItemPrice = variantPrice !== undefined ? variantPrice : menuItem.price;
    const sauceTotal = sauces.length * 40;
    const unitPrice = baseItemPrice + sauceTotal;
    const cartKey = generateCartKey(menuItem.id, variantName, sauces);

    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.cartKey === cartKey);
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += quantity;
        return copy;
      }
      return [
        ...prev,
        {
          cartKey,
          id: menuItem.id,
          name: menuItem.name,
          basePrice: baseItemPrice,
          price: unitPrice,
          quantity,
          variantName,
          sauces,
          image: menuItem.image,
          category: menuItem.category,
        },
      ];
    });

    // Provide immediate user feedback by opening drawer on mobile if desired, or can be triggered
  };

  const addCombo = (combo: ComboDeal) => {
    const cartKey = `combo__${combo.id}`;
    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.cartKey === cartKey);
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += 1;
        return copy;
      }
      return [
        ...prev,
        {
          cartKey,
          id: combo.id,
          name: combo.name,
          basePrice: combo.discountedPrice,
          price: combo.discountedPrice,
          quantity: 1,
          variantName: "Special Bundle Deal",
          sauces: [],
          image: combo.image,
          category: "deals",
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeItem = (cartKey: string) => {
    setItems((prev) => prev.filter((i) => i.cartKey !== cartKey));
  };

  const updateQuantity = (cartKey: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.cartKey === cartKey) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItemsCount = items.reduce((acc, curr) => acc + curr.quantity, 0);
  const subtotal = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const isFreeDeliveryUnlocked = subtotal >= FREE_DELIVERY_THRESHOLD;
  const remainingForFreeDelivery = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
  const deliveryFee = subtotal === 0 ? 0 : isFreeDeliveryUnlocked ? 0 : STANDARD_DELIVERY_FEE;
  const grandTotal = subtotal + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        addCombo,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        totalItemsCount,
        subtotal,
        deliveryFee,
        freeDeliveryThreshold: FREE_DELIVERY_THRESHOLD,
        remainingForFreeDelivery,
        isFreeDeliveryUnlocked,
        grandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
