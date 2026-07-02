# SUITD × GYM SKIN — Front-end Storefront Design

Approved by Paul on 2026-07-02 ("good to build").

## Goal
Front-end-only ecommerce site for a suit brand collaboration (SUITD × GYM SKIN),
matching the dark-luxury reference mockups in ~/Downloads/gym skin.

## Stack
- Vite + React + React Router
- Plain CSS with custom properties (no UI library)
- Cart state in React context, persisted to localStorage
- Fonts: Cormorant Garamond (serif display), Jost (letter-spaced sans)

## Visual language
- Deep navy-black backgrounds (#070d1a–#101a2e), gold-bronze accent (#b3905a)
- Gold serif display headlines with trailing periods ("POWER. PRECISION. PRESENCE.")
- Uppercase letter-spaced labels, thin gold divider lines, gold outline buttons with →
- "S" monogram, giant watermark letters in section backgrounds

## Pages
1. **Home** — hero (headline left, cropped suit portrait right), 3-feature icon strip,
   featured collection teaser, editorial split section, dark quote band, footer w/ newsletter
2. **Collection** (`/collection`) — product grid; navy DB suit is flagship, 5 elegant
   "coming soon" placeholder cards awaiting more product images
3. **Product detail** (`/product/:id`) — gallery (front/back/side/close-up), price,
   size selector (36–48), details accordion, Add to Cart
4. **Cart drawer** — slides from right; qty controls, subtotal, front-end-only checkout button

## Data
`src/data/products.js` — single editable file (names, prices in GBP, image paths).
Images live in `public/images/` (optimized JPGs derived from the reference PNGs;
hero cropped free of baked-in mockup text).

## Out of scope
Real checkout/payment, backend, auth, CMS.
