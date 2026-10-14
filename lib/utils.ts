import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format price in Pakistani Rupees (Rs.)
 */
export function formatPKR(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}

/**
 * Check if the restaurant is currently open (Kasur PKT time: Closes 2:00 AM)
 * Fast food restaurants in Punjab usually open ~ 1:00 PM and close at 2:00 AM late night.
 */
export function getStoreStatus(): {
  isOpen: boolean;
  statusText: string;
  subText: string;
} {
  try {
    const now = new Date();
    // Get Pakistan Standard Time (UTC+5)
    const utcOffset = 5 * 60; // in minutes
    const localOffset = now.getTimezoneOffset(); // in minutes
    const pktTime = new Date(now.getTime() + (utcOffset + localOffset) * 60000);
    const hours = pktTime.getHours();

    // Open from 12:00 PM (12) to 2:00 AM (2)
    const isOpen = hours >= 12 || hours < 2;

    if (isOpen) {
      return {
        isOpen: true,
        statusText: "OPEN NOW",
        subText: "Closes 2 AM",
      };
    } else {
      return {
        isOpen: false,
        statusText: "OPENS AT 12 PM",
        subText: "Pre-orders welcome",
      };
    }
  } catch {
    return {
      isOpen: true,
      statusText: "OPEN LATE",
      subText: "Closes 2 AM",
    };
  }
}

/**
 * Generate formatted WhatsApp message and link for instant order dispatch
 */
export interface OrderDetails {
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  orderType: "Delivery" | "Takeout" | "Dine-in";
  specialNotes?: string;
  items: {
    name: string;
    variant?: string;
    sauces?: string[];
    quantity: number;
    unitPrice: number;
    itemTotal: number;
  }[];
  subtotal: number;
  deliveryFee: number;
  grandTotal: number;
}

export function generateWhatsAppOrderUrl(details: OrderDetails): string {
  const WHATSAPP_NUMBER = "923032967760";

  const lines: string[] = [
    `🍔 *NEW ORDER — S.G FOOD POINT* 🍔`,
    `_Basti Noor Shah Wali, Qadirabad Rd, Kasur_`,
    `──────────────────────────`,
    `👤 *Name:* ${details.customerName}`,
    `📞 *Phone:* ${details.customerPhone}`,
    `📦 *Order Type:* ${details.orderType.toUpperCase()}`,
  ];

  if (details.orderType === "Delivery") {
    lines.push(`📍 *Delivery Address:* ${details.deliveryAddress}`);
  }

  lines.push(`──────────────────────────`);
  lines.push(`🛒 *ITEMIZED ORDER:*`);

  details.items.forEach((item, idx) => {
    let itemLine = `${idx + 1}. *${item.name}*`;
    if (item.variant) {
      itemLine += ` (${item.variant})`;
    }
    itemLine += ` x${item.quantity} = ${formatPKR(item.itemTotal)}`;
    lines.push(itemLine);

    if (item.sauces && item.sauces.length > 0) {
      lines.push(`   ↳ _Add-on Sauces: ${item.sauces.join(", ")}_`);
    }
  });

  lines.push(`──────────────────────────`);
  lines.push(`💰 *Subtotal:* ${formatPKR(details.subtotal)}`);
  
  if (details.orderType === "Delivery") {
    if (details.deliveryFee === 0) {
      lines.push(`🚚 *Delivery:* FREE (Order over Rs. 500 🎉)`);
    } else {
      lines.push(`🚚 *Delivery Fee:* ${formatPKR(details.deliveryFee)}`);
    }
  }

  lines.push(`⭐ *GRAND TOTAL:* *${formatPKR(details.grandTotal)}*`);

  if (details.specialNotes && details.specialNotes.trim()) {
    lines.push(`──────────────────────────`);
    lines.push(`📝 *Special Instructions:* ${details.specialNotes.trim()}`);
  }

  lines.push(`──────────────────────────`);
  lines.push(`_Bhai please jaldi confirm karein aur garma garam bhejein! Shukriya!_ 🙏`);

  const encodedMessage = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
