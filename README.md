# S.G Food Point — Ultra-Modern Restaurant Web Platform

An elite, high-performance, mobile-first web platform engineered for **S.G Food Point** (also known as *Shah G Food Point* / *Sha G Food Point*), an iconic local fast-food restaurant located on Qadirabad Road, Kasur, Punjab, Pakistan.

Built with an Awwwards/FWA-grade editorial street-food aesthetic, custom vector brand assets, fluid motion physics, interactive scroll storytelling, and a seamless zero-friction WhatsApp order dispatch system.

---

## 🌟 Live Demo & Highlights

- **Bespoke Visual Identity:** High-contrast late-night street-food palette (`#0A0A0A` midnight base, `#E53935` vivid tomato red, `#FFB300` mustard amber, `#4CAF50` fresh green, and `#FFF8F0` warm cream).
- **Mobile-First Ergonomics:** Architected from `360px` compact viewports up to `1440px+` ultra-wide screens. One-thumb thumb zone accessibility with a pinned bottom action bar, min 48px touch targets, and iOS zoom prevention (`16px+` inputs).
- **Pinned Burger Layer Assembly Scroll:** Interactive step-by-step breakdown of the signature zinger fillet (toasted brioche crown, Kasuri secret drizzle, crispy zinger chicken, melted cheddar, crisp iceberg greens, and brioche base).
- **Interactive Menu & Live Cart:** Search bar, category filters, taste tags (`Bestseller`, `Spicy`, `Cheesy`, `Value`), variant selection (5/10 pcs, drink sizes), and Rs. 40 sauce add-on chips.
- **Dynamic Free Delivery Calculator:** Live tracking bar towards the **Rs. 500 Free Delivery** threshold.
- **Direct WhatsApp Checkout:** Instant click-to-chat checkout modal (`wa.me/923032967760`) with auto-generated itemized receipt markdown, customer address, delivery mode, and notes.

---

## 🍗 Real-World Business Information

| Field | Detail |
| :--- | :--- |
| **Brand Name** | S.G Food Point (*Shah G Food Point* / *Sha G Food Point*) |
| **Tagline** | *"Fresh & Delicious"* &bull; *"Garma Garam!"* |
| **Address** | Qadirabad Rd (Kadrabad Road), near Sha G / Al Sayyed General Store, Basti Noor Shah Wali, Kasur, 55050, Punjab, Pakistan |
| **Phone & WhatsApp** | `+92 303 2967760` ([wa.me/923032967760](https://wa.me/923032967760)) |
| **Operating Hours** | 12:00 PM &ndash; 2:00 AM Daily (Late Night Hunger Specialist) |
| **Special Offer** | **100% FREE DELIVERY** on all orders of **Rs. 500** and above |
| **Add-on Sauces** | White Garlic Mayo, Red Chili Szechuan, Yellow Honey Mustard (Rs. 40 each) |

---

## 📋 Complete Menu & Pricing (Exact PKR)

### Burgers (10 Items)
- **Anda Shami Burger:** Rs. 150
- **Double Anda Burger:** Rs. 200
- **Chicken Burger:** Rs. 220
- **Chicken Double Anda Burger:** Rs. 250
- **Chicken Petty Burger:** Rs. 250
- **Chicken Chapli Burger:** Rs. 250
- **Zinger Burger:** Rs. 300 *(Bestseller &bull; Spicy)*
- **Mighty Burger:** Rs. 350
- **Tower Burger:** Rs. 450
- **Super Maga Burger:** Rs. 500 *(Bestseller &bull; Heavyweight)*

### Shawarma
- **Chicken Shawarma:** Rs. 200
- **Chicken Cheese Shawarma:** Rs. 250 *(Bestseller &bull; Cheesy)*
- **Zinger Shawarma:** Rs. 300
- **Zinger Cheese Shawarma:** Rs. 350

### Sandwiches
- **Chicken Club Sandwich:** Rs. 300
- **Zinger Club Sandwich:** Rs. 350
- **Chicken Cheese Sandwich:** Rs. 350
- **Zinger Cheese Sandwich:** Rs. 400

### Paratha Rolls & Wraps
- **Chicken Paratha Roll:** Rs. 250
- **Zinger Paratha Roll:** Rs. 300
- **Chicken Cheese Paratha Roll:** Rs. 300
- **Zinger Cheese Paratha Roll:** Rs. 350
- **Chicken Wrap:** Rs. 400
- **Zinger Wrap:** Rs. 450

### Starters & Fries
- **Nuggets:** 5 pcs = Rs. 250 | 10 pcs = Rs. 500
- **Hot Wings:** 5 pcs = Rs. 300 | 10 pcs = Rs. 600
- **Chicken Loaded Fries:** Rs. 300 *(Bestseller &bull; Cheesy)*
- **Peri Peri Masala Fries:** Rs. 250 *(Spicy)*
- **Plain Fries:** Rs. 200

### Cold Drinks
- **Regular (250ml):** Rs. 70
- **Half Liter (500ml):** Rs. 120
- **1 Liter Bottle:** Rs. 130
- **1.5 Liter Family Bottle:** Rs. 200
- **2.25 Liter Jumbo Bottle:** Rs. 250

### Signature Sauces
- **White Garlic Mayo / Red Chili / Yellow Honey Mustard:** Rs. 40 each

---

## 🛠 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom tokens in `DESIGN_SYSTEM.md`
- **Typography:** `Bricolage Grotesque` (Display) & `Plus Jakarta Sans` (Body) via `next/font/google`
- **Motion & Smooth Experience:**
  - `lenis` for 60fps buttery scrolling
  - `framer-motion` for spring drawers, bottom sheets, and layout shifts
  - `gsap` for timeline animations
- **Icons:** `lucide-react`
- **State Management:** React Context (`CartContext`) backed by `localStorage`
- **SEO & Schema:** Next.js App Router Metadata + JSON-LD (`FastFoodRestaurant`, `PostalAddress`, `OpeningHoursSpecification`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js `18.x` or later (tested on v24.11.1)
- npm `9.x` or later

### Installation

```bash
# Clone or navigate into the project directory
cd d:\ShahGFoodPoint

# Install dependencies
npm install

# Run the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience the site.

### Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

---

## ☁️ Deploying to Vercel

1. Push this repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import your repository.
4. Leave build settings as default:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
5. Click **"Deploy"**. Your site will be live on a global CDN within seconds!

---

## ✅ Definition of Done Verification

- [x] **All menu items & exact prices implemented:** Every single burger, shawarma, sandwich, roll, starter, drink size, and sauce accurately reflected in `data/menu.ts`.
- [x] **Premium, custom Awwwards-grade aesthetic:** Dark mode street energy, custom circular SVG logo badge, vibrant glows, brush badge cues.
- [x] **Preloader & Micro-interactions:** Under 1.5s branded preloader, floating hero parallax burger, ticker, and layer assembly.
- [x] **End-to-end cart & WhatsApp checkout:** Persistent cart, dynamic Free Delivery progress bar, itemized markdown WhatsApp generator to `+923032967760`.
- [x] **Mobile-first responsiveness:** Verified for 360px, 390px, 768px, and 1440px viewports with zero horizontal overflow.
- [x] **Performance & Accessibility:** Semantic tags, high-contrast text, 48px touch targets, zero console warnings or build errors.
- [x] **Documentation:** Comprehensive `DESIGN_SYSTEM.md`, `NOTES.md`, `TASK_CHECKLIST.md`, and `README.md`.
