<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
## 2026-03-12 — Replace placeholder images with real Nike Mind CDN images
- `MindProductsPage.tsx`: Mind 002 homme now has 4 real PDP angles from static.nike.com (UUIDs extracted from nike.com/fr PDP)
- Mind 001 mules use official d42a69d1 UUID image; Mind 002 femme uses 01f05788 UUID
- Source: scraped static.nike.com/a/images/t_PDP_1728_v1/ URLs via url_context tool on nike.com/fr

## 2026-03-12 — Fix boutons Acheter → navigation vers MindProductsPage
- `HeroCarousel/index.tsx`: converted 3× `<a href="#">` "Acheter" to `<button onClick={() => onShopMind?.()}>` (hero CTA + 2 guide sections desktop/mobile)

## 2026-03-12 — Remove LocationModal component
- Deleted `src/components/LocationModal.tsx` and removed its usage from `src/App.tsx`

## 2026-03-12 — Fix uploaded-asset image display (object-contain → object-cover, upright)
- `HeroCarousel/index.tsx`: second video section img changed from `object-contain` centered to `object-cover` full-bleed

## 2026-03-12 — Fix mobile responsive layout across HeroCarousel
- `CarouselSlide.tsx`: changed hero aspect ratio from 2/3 → 4/5 on mobile (less tall)
- `HeroCarousel/index.tsx`: reduced h1 from 40px→28px, margins mx-6→mx-4, mt-12→mt-6/8 on mobile
- Mobile feature cards & athlete cards: added real images, better sizing (80vw), snap scroll, smaller text
- Athlete quotes: reduced text size (text-xl vs text-2xl) for better fit

## 2026-03-12 — Replace nike-mind-1.jpg with uploaded asset in HeroCarousel
- `HeroCarousel/index.tsx`: replaced `nike-mind-1.jpg` with `uploaded-asset-1773278542688-0.png` in second video section and both feature card lists (mobile + desktop)

## 2026-03-12 — Fix hero carousel blank display (blob video → static image)
- `CarouselSlide.tsx`: replaced invalid `blob://` VideoPlayer src with hosted Nike Mind image
- Root cause: blob URLs from Nike's original site are not accessible in this environment

## 2026-03-12 — Bring Nike Mind page to life with animations & interactivity
- Added scroll-reveal animations (fade-in-up, stagger) via IntersectionObserver in `src/App.tsx`
- Rebuilt `src/sections/Navbar/index.tsx` with sticky header, mobile hamburger drawer, scroll shadow
- Replaced `src/sections/HeroCarousel/index.tsx` with auto-advancing carousel, dot nav, hero entrance animations
- Added hover effects (`link-hover`, `btn-press`, `img-zoom-container`) via `tailwind.css`
- Added 15+ custom keyframe animations to `tailwind.config.js`
- Made `FooterAccordion` interactive with useState open/close, `LocationModal` animated entrance & dismiss
- Converted all nav links from external URLs to internal anchors (`#`)
</changelog>
