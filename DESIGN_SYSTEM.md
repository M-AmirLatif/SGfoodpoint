# S.G FOOD POINT — DESIGN SYSTEM SPECIFICATION

> **Design Philosophy:** Late-night Pakistani street-food electricity meets high-craft editorial design. Visceral, tactile, appetizing, high-contrast, and uncompromisingly mobile-ergonomic. Zero generic template traits.

---

## 1. Color Palette Tokens

| Token Name | Hex Code | Semantic Role | Usage & Accessibility |
| :--- | :--- | :--- | :--- |
| `--color-bg-base` | `#0A0A0A` | Canvas Background | Deepest midnight black foundation |
| `--color-surface-card` | `#141414` | Card / Container Surface | Elevated dark container with subtle border |
| `--color-surface-elevated` | `#1F1F1F` | Modal / Drawer / Dropdown | High-elevation interactive surface |
| `--color-border-subtle` | `rgba(255, 255, 255, 0.08)` | Dividers & Outlines | Hairline separation without visual noise |
| `--color-border-accent` | `rgba(229, 57, 53, 0.3)` | Active / Highlighted Borders | Tonal glow on active selection |
| `--color-red-primary` | `#E53935` | Primary Accent / Appetite Driver | Brand hero red; buttons, sale tags, brush badges |
| `--color-red-dark` | `#C62828` | Hover / Pressed State | Grounded red for tactile depth |
| `--color-amber-gold` | `#FFB300` | Sizzle / Warmth Accent | Mustard yellow; stars, ratings, free delivery highlights |
| `--color-green-fresh` | `#4CAF50` | Freshness / WhatsApp / Value | Lettuce green, WhatsApp CTA, open badge, veggie cues |
| `--color-text-cream` | `#FFF8F0` | Primary Typography | Warm off-white, prevents harsh eye fatigue |
| `--color-text-muted` | `#9E9E9E` | Secondary Copy / Descriptions | High-contrast muted neutral for secondary information |
| `--color-text-dim` | `#666666` | Microcopy & Meta | Subtle helper strings and fine print |
| `--color-sauce-white` | `#FFFDE7` | Garlic Mayo Sauce Indicator | Visual chip for white sauce |
| `--color-sauce-red` | `#FF5252` | Spicy Red Chilli Sauce Indicator | Visual chip for red sauce |
| `--color-sauce-yellow` | `#FFD54F` | Honey Mustard Sauce Indicator | Visual chip for yellow sauce |

---

## 2. Typography Hierarchy

### Typefaces
- **Display Headings:** `Bricolage Grotesque` / `Cabinet Grotesque` (variable optical weights, punchy street-poster aesthetic)
- **Body & Numerical Interface:** `Plus Jakarta Sans` (optimized for legibility on small screens, clear tabular numbers for Rs. prices)
- **Urdu Micro-flair / Accents:** Handwritten display accents for localized authenticity ("Garma Garam", "Zabardast Zaiqa")

### Scale Tokens

| Token | Size | Line Height | Tracking | Weight | Used In |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `text-display` | `clamp(2.75rem, 8vw, 5.5rem)` | `1.02` | `-0.03em` | `800` | Hero billboard titles |
| `text-h1` | `clamp(2rem, 5vw, 3.25rem)` | `1.1` | `-0.02em` | `800` | Major section headlines |
| `text-h2` | `clamp(1.5rem, 3.5vw, 2.25rem)` | `1.2` | `-0.015em` | `700` | Section headers & feature titles |
| `text-h3` | `clamp(1.15rem, 2vw, 1.35rem)` | `1.3` | `-0.01em` | `700` | Menu item names, modal titles |
| `text-body-lg`| `1.125rem (18px)` | `1.6` | `0` | `500` | Hero intro, key selling statements |
| `text-body` | `0.9375rem (15px)` / `1rem (16px)` | `1.55` | `0` | `400` | Menu item descriptions, reviews |
| `text-micro` | `0.8125rem (13px)` | `1.4` | `+0.02em` | `600` | Chips, badges, sauce addons, timestamps |
| `text-price` | `1.25rem (20px)` | `1.1` | `-0.02em` | `800` | Tabular currency figures (Rs. 350) |

---

## 3. Spacing Grid & Layout Metrics

Base 4px incremental scale:
- `space-1` = `4px`
- `space-2` = `8px`
- `space-3` = `12px`
- `space-4` = `16px` (Mobile gutter standard)
- `space-6` = `24px`
- `space-8` = `32px`
- `space-12` = `48px` (Touch target minimum standard)
- `space-16` = `64px` (Desktop section rhythm)
- `space-24` = `96px` (Grand section breaks)

### Viewport Breakpoints
- **Mobile Compact:** `360px` (Strict validation baseline; no side overflows)
- **Mobile Standard:** `390px - 414px` (iPhone 13-15, modern Androids)
- **Tablet / Large Mobile:** `768px` (iPad Mini & split views)
- **Desktop Standard:** `1024px` (Laptops)
- **Desktop Ultra / Wide:** `1440px+` (Max container constraint `1280px` centered)

---

## 4. Border Radii & Depth System

- **Pill / Circular:** `9999px` (Badges, quick filter chips, sticky action bar, round avatar badges)
- **Card Radius:** `18px` (Menu cards, combo boxes, review cards)
- **Button Radius:** `12px` (Tactile press buttons, inputs)
- **Sheet Radius:** `24px 24px 0 0` (Mobile bottom sheet drawers)

### Shadow & Elevation Levels
- `elevation-card`: `0 8px 30px rgba(0, 0, 0, 0.45)` with `1px inset rgba(255, 255, 255, 0.05)`
- `elevation-glow-red`: `0 0 40px rgba(229, 57, 53, 0.25)`
- `elevation-glow-amber`: `0 0 35px rgba(255, 179, 0, 0.22)`
- `elevation-floating`: `0 16px 48px rgba(0, 0, 0, 0.65), 0 0 1px 1px rgba(255, 255, 255, 0.1)`

---

## 5. Motion Physics & GSAP/Framer Specifications

- **Easing Curve (Snappy Entrance):** `cubic-bezier(0.16, 1, 0.3, 1)` (Custom Apple/FWA snappy curve)
- **Spring Transition (UI Feedback):** `{ type: "spring", stiffness: 400, damping: 28 }`
- **Burger Layer Scroll:** GSAP `ScrollTrigger` pinned canvas, scrubbing discrete `y` and `rotation` offsets for Bun, Cheese, Sauce, Patty, Lettuce, and Base.
- **Micro-Interactions:**
  - Button tap: `scale(0.96)` for 120ms with haptic feel.
  - Cart item counter bump: `scale(1.2)` pop on increment.
  - Free delivery milestone trigger: Confetti pop or amber pulse when subtotal reaches Rs. 500.

---

## 6. Accessibility & Mobile Ergonomics Floor

1. **One-Thumb Zone Rule:** All primary navigation, checkout actions, category scrolling, and WhatsApp ordering are reachable within the bottom 45% of the mobile viewport.
2. **Minimum Tap Targets:** All clickable interactive elements are at least `48x48px` or have a minimum `12px` touch bounding padding.
3. **Form Inputs:** Always set `font-size: 16px` on mobile text/tel inputs to prevent iOS automatic zoom jumps.
4. **Contrast Compliance:** WCAG AAA on all core text against dark backgrounds (`#FFF8F0` on `#0A0A0A` has a 18.2:1 contrast ratio; `#FFB300` on `#141414` has a 9.4:1 ratio).
