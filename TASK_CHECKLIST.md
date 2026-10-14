# S.G Food Point — Implementation Task Checklist

## Phase 0: Foundations & Architecture
- [x] Read agent skill `frontend-design` & establish anti-generic design guidelines
- [x] Create `DESIGN_SYSTEM.md` with color tokens, typography scale, spacing grid, motion curves, component specs
- [x] Create `NOTES.md` documenting architectural decisions, assumptions, and localized nuance
- [x] Scaffold Next.js (App Router) project with TypeScript, Tailwind CSS, Lucide icons, Framer Motion, GSAP, and Lenis

## Phase 1: Brand Assets & Structured Data
- [x] Craft bespoke SVG vector logo for "S.G FOOD POINT" (circular badge with burger, roll, and steam elements)
- [x] Generate high-res appetizing food visuals and SVGs for burgers, wraps, shawarmas, loaded fries, sauces
- [x] Create `data/menu.ts` containing all 10 burgers, 4 shawarmas, 4 sandwiches, 6 paratha rolls/wraps, 5 starters, cold drinks, sauces with exact Rs. pricing, descriptions, and dietary tags
- [x] Create combo packages data with bundle savings calculation
- [x] Set up SEO metadata, Open Graph tags, and comprehensive JSON-LD structured schema (Restaurant + Menu + LocalBusiness)

## Phase 2: Core Components & State Management
- [x] Implement Cart context (`CartContext.tsx`) with localStorage persistence, add/remove, quantity, variants, and sauces
- [x] Implement Free Delivery threshold calculator (Rs. 500 target with dynamic progress bar)
- [x] Implement smooth scrolling provider (Lenis + GSAP ScrollTrigger synchronization)
- [x] Build Mobile-first Navigation: Floating desktop pill nav + mobile drawer + live "Open · Closes 2 AM" status pill
- [x] Build Sticky Mobile Action Bar (Call | WhatsApp | Cart with live counter & subtotal)

## Phase 3: Hero & Interactive Storytelling
- [x] Build branded animated Preloader (skippable, elegant badge reveal under 1.5s)
- [x] Build Hero Section with bold typography, floating 3D/parallax burger element, localized badge ("Garma Garam"), and live ticker
- [x] Build Highlights Strip (Free Delivery Rs. 500+, Open till 2 AM, Dine-in / Takeout / Delivery)
- [x] Build Burger Layer-by-Layer Assembly Scroll Storytelling section (interactive pinned scroll showing top bun, cheese, sauce, crisp patty, lettuce, bottom bun)
- [x] Build Desktop Magnetic Food Cursor (disabled on touch devices)

## Phase 4: Menu, Search, Filtering & Combos
- [x] Build Signature Items Showcase / Carousel
- [x] Build Full Interactive Menu section with sticky category tabs, search input, and filter chips (Bestseller, Spicy, Cheesy, Value)
- [x] Build MenuItemCard with image, tags, pricing, and variant/sauce bottom sheet trigger
- [x] Build Item Customization Sheet (variant sizes/pieces selection + White/Red/Yellow sauce add-ons @ Rs. 40)
- [x] Build Combos & Deals section with 4 handcrafted value deals and 1-click add to cart

## Phase 5: Ordering Experience & Social Proof
- [x] Build How to Order 3-step guide + live cart delivery calculator
- [x] Build Visual Gallery showcasing the street food craft and late-night atmosphere
- [x] Build Reviews & Social Proof section (5.0 Google rating badge + genuine customer testimonials)
- [x] Build Location & Contact section (exact Kasur address, styled map container, one-tap directions, direct call and WhatsApp links)
- [x] Build Footer with hours, wordmark, quick navigation, and developer demo notice

## Phase 6: Cart & WhatsApp Checkout System
- [x] Build Slide-out / Bottom-sheet Cart Drawer with receipt-style ticket design
- [x] Build WhatsApp Checkout modal with input validation (Name, Phone `tel`, Address, Order Type, Special Instructions)
- [x] Implement instant WhatsApp message generator with itemized pricing, subtotal, delivery fee status, and recipient `wa.me/923032967760`

## Phase 7: Polish, Performance & Verification
- [x] Verify zero horizontal overflow on mobile viewports (360px, 390px, 768px, 1440px)
- [x] Verify touch targets (min 48px), 16px+ inputs to prevent iOS zoom, safe-area-inset padding
- [x] Check console for zero errors/warnings and test production build (`npm run build`)
- [x] Generate comprehensive `README.md` and review against Definition of Done
