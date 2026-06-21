# Maitland Tractor Sales & Service — Design System

**Direction:** Aged Iron / Fine Whisky  
**Phase B approved:** 2026-06-21

---

## Direction Statement

This site should feel like a 50-year-old institution that has earned its reputation. Not designed by a committee. Not a template. The visual language is heavy, warm, and understated — the same aesthetic you see in Woodford Reserve labels, Filson gear catalogs, and Red Wing Heritage. Colors have history baked in. Nothing is pure black, pure white, or corporate blue.

The primary audience is the working man in Central Florida who already knows what a tractor is and wants to buy or fix one from someone who knows what they're doing. Elegance here means *substance*, not *refinement*.

---

## Color Palette

All values defined in `css/tokens.css`. Never hardcode colors outside of tokens.

| Token | OKLCH | Role |
|---|---|---|
| `--iron` | `oklch(14% 0.022 42)` | Hero, nav, footer, dark sections |
| `--iron-border` | `oklch(22% 0.025 42)` | Subtle borders on dark surfaces |
| `--iron-mid` | `oklch(25% 0.022 42)` | Dividers inside dark sections |
| `--parchment` | `oklch(96% 0.018 82)` | Main page background — aged paper |
| `--parchment-deep` | `oklch(91% 0.022 78)` | Alternate section background |
| `--parchment-border` | `oklch(86% 0.020 78)` | Borders on light surfaces |
| `--rust` | `oklch(52% 0.20 32)` | Primary accent — CTAs, borders, emphasis |
| `--rust-hover` | `oklch(46% 0.20 32)` | CTA hover — same hue, darker |
| `--amber` | `oklch(64% 0.12 66)` | Secondary accent — eyebrows, badges, links on dark |
| `--text-primary` | `oklch(18% 0.02 42)` | Headings + body on light bg |
| `--text-muted` | `oklch(44% 0.018 50)` | Captions, labels, secondary on light bg |
| `--text-on-dark` | `oklch(93% 0.014 82)` | Primary text on iron bg |
| `--text-muted-on-dark` | `oklch(72% 0.018 70)` | Secondary text on iron bg |

**Color logic:** Every color is pulled toward the warm brown-orange-red axis (OKLCH hue 32–82). That's where iron, rust, leather, amber, parchment, and old paper live. The hue shift is intentional — it's what makes the palette feel aged rather than modern.

---

## Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| **Eyebrows / labels / nav** | Oswald | 400 | Small, letter-spaced, ALL CAPS — for categorization and orientation |
| **Hero headline** | Oswald | 700 | Large condensed at `--text-hero`, line-height 0.9 |
| **Section headings** | Playfair Display | 700 | Editorial headings, on both light and dark backgrounds |
| **Body / UI** | DM Sans | 400/500/600 | All body copy, descriptions, prices, form labels |

**Loading via Google Fonts CDN:**
```
family=DM+Sans:wght@400;500;600
family=Oswald:wght@400;500;600;700
family=Playfair+Display:wght@700;900
```

**Scale:** `css/tokens.css` defines 7 fluid steps using `clamp()`. All heading sizes pull from this scale. No hardcoded `px` sizes in component CSS.

---

## Spacing

8pt grid with `--sp-1` through `--sp-12`. All section padding and component gaps use these tokens. No hardcoded pixel values in component or page CSS.

---

## Component Inventory

All components defined in `css/components.css`:

- `.btn`, `.btn-primary`, `.btn-ghost`, `.btn-outline` — three button variants
- `.trust-strip` / `.trust-item` — the three-column "Est. 1972 · phone · location" bar
- `.service-card` — rust top border, numbered, for the services grid
- `.tractor-card` / `.tractor-card-photo` / `.tractor-card-body` / `.tractor-features` / `.feature-badge` — inventory listing card
- `.contact-strip` / `.contact-block` — three-column address/hours/phone strip

Layout shell (`css/layout.css`):
- `.nav` / `.nav-inner` / `.nav-logo` / `.nav-links` / `.nav-phone` / `.nav-toggle` — navigation
- `.footer` / `.footer-inner` — footer
- `.section-inner` / `.section-header` / `.section-eyebrow` / `.section-title` — shared section wrappers
- `.page-header` — dark header for inner pages (non-homepage)

---

## Page Rules

**Every page must include (in this order):**
```html
<link rel="stylesheet" href="../css/tokens.css">
<link rel="stylesheet" href="../css/reset.css">
<link rel="stylesheet" href="../css/layout.css">
<link rel="stylesheet" href="../css/components.css">
<link rel="stylesheet" href="../css/[page-name].css">
```
(index.html uses `css/` not `../css/`)

**Every page must include:**
- The nav header with active link marked `aria-current="page"`
- The contact strip before the footer
- The footer
- Mobile nav JS (can be moved to `js/main.js` in Phase D)

**Photo treatment on dark backgrounds:** `filter: brightness(0.72-0.85) contrast(1.05) sepia(0.1-0.15)`. The sepia push ties photos to the warm palette even when the photo itself is neutral.

**Never:** pure white (`#fff`), pure black (`#000`), hex or HSL color values.

---

## Section Rhythm (Homepage)

| Section | Background | Purpose |
|---|---|---|
| Hero | Iron | First impression, conversion — inventory or phone |
| Trust strip | Iron | Three quick facts beneath the hero |
| Services | Parchment-deep | What we do — 4 service cards |
| Inventory | Parchment | Featured listings — 3 cards |
| About teaser | Iron | Family story — trust and differentiation |
| Contact strip | Parchment-deep | Hours, address, phone |
| Footer | Iron | Brand anchor |

Iron → Parchment-deep → Parchment → Iron → Parchment-deep → Iron: the page alternates warm dark and warm light, never two identical adjacent backgrounds.

---

## Avoid

- `#fff` or `#000` anywhere in the CSS
- Generic drop shadows (`box-shadow: 0 4px 12px rgba(0,0,0,0.1)`) — they read as "template"
- `border-radius` above 2–3px on containers — soft corners undercut the rugged character
- Centered hero text — the split layout is the aesthetic
- Icons or emoji in service cards — the numbered system (`01`, `02`) is cleaner
- Airy whitespace — sections should feel substantial, not minimalist
