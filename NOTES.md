# Architectural Assumptions & Field Notes

## 1. Restaurant Context & Localized Grounding
- **Location:** Qadirabad Rd (also phonetically rendered as "Kadrabad Road" on local shop boards), near Sha G / Al Sayyed General Store, Basti Noor Shah Wali, Kasur, Punjab 55050.
- **Operating Hours:** Open late until 2:00 AM PKT. Late-night hunger is a huge driver in Kasur fast-food culture; the website features a live dynamic clock badge that verifies if current time is before 2 AM and displays "OPEN LATE TILL 2 AM" with a glowing green pulse.
- **Microcopy & Voice:** Genuine street-food warmth. Instead of cold corporate slogans, we blend English with authentic Pakistani food expressions: *"Garma Garam!"* (piping hot), *"Asli Zaiqa"* (authentic taste), *"Order Karein"* (place order), and *"Bhai jaldi bhejna"* in optional delivery instructions.
- **Free Delivery Threshold:** Rs. 500. Average single order is Rs. 300 - 450 (e.g. Zinger + Fries), so Rs. 500 is an achievable up-sell trigger. The cart UI features an interactive progress bar showing exactly how many rupees are needed to unlock 100% Free Delivery.

## 2. Technical Stack Decisions
- **Framework:** Next.js 15+ (App Router) with TypeScript.
- **Styling:** Tailwind CSS with custom theme extensions mapped to `DESIGN_SYSTEM.md`.
- **Motion & Smooth Experience:**
  - `lenis/react` for buttery 60fps smooth scrolling.
  - `gsap` + `ScrollTrigger` for the pinned burger layer explosion/assembly sequence.
  - `framer-motion` for springy layout transitions, modal sheets, and reactive cart fly-ins.
- **State Management:** Light, zero-boilerplate React Context (`CartContext`) backed by `localStorage` for offline persistence across tabs.
- **Checkout Bridge:** Direct WhatsApp Click-to-Chat deep link (`wa.me/923032967760`) with an automatically formatted markdown order slip including customer address, delivery type, itemized costs, sauce add-ons, and calculated total.

## 3. Performance & Ergonomic Guardrails
- Mobile-first CSS: Base classes are tailored for `360px` viewport with thumb-friendly bottom pinned action bar.
- Touch targets strictly ≥ 48px.
- Zero horizontal layout shift (overflow hidden on structural shells, safe-area-inset padding for iPhone bottom home bar).
- Visual assets: Crisp optimized vector illustrations + CSS food art layers + curated high-res WebP photography for appetizing real-world presentation.
