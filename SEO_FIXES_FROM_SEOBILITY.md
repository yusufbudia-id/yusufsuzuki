# SEO Fixes from Seobility Report

Base: Phase 5.1 Font Fix

## Issues addressed

### 1. Meta description too long
Updated the global meta description in `app/layout.tsx` to a shorter, keyword-focused version under the Seobility pixel limit.

New focus:
- dealer mobil Suzuki Jogja resmi
- harga OTR
- promo DP ringan
- kredit mudah
- test drive
- Yusuf Suzuki phone number

### 2. Page title/content alignment
The homepage now explicitly mentions the important title terms in visible content:
- Dealer Mobil Suzuki Jogja Resmi
- Harga OTR
- Promo Terbaru

Added a compact SEO intro block in `app/page.tsx` after the hero.

### 3. H1/content alignment
Updated the homepage H1 from the previous split phrase into a more title-aligned phrase:

`Dealer Mobil Suzuki Jogja Resmi Terpercaya`

The same terms are now repeated naturally in the hero paragraph and SEO intro, so the H1 and page body match better.

### 4. Too many headings
Reduced non-structural card headings by converting repeated card titles from `h3` to styled paragraphs in:
- `components/Hero.tsx`
- `components/CarCard.tsx`
- `components/PromoSection.tsx`
- `components/AdvantagesSection.tsx`
- `components/TestimonialSection.tsx`

The homepage now keeps headings mostly for real sections: H1 + section H2s.

### 5. Empty anchor text
Added real hidden text (`sr-only`) or more specific visible text to icon/overlay links in:
- `components/CarCard.tsx`
- `components/PromoSection.tsx`
- `components/TestimonialSection.tsx`

Examples:
- `Lihat detail mobil Suzuki Fronx`
- `Tanya promo Suzuki ... via WhatsApp`

### 6. Repeated anchor text
Made repeated button labels more specific:
- `Detail` → `Detail [nama mobil]`
- `Tanya` → `Tanya [nama mobil]`
- `Detail Promo` → `Detail [nama promo]`

### 7. JavaScript file reduction
Converted multiple homepage components from client components into server components, removing unnecessary client-side JavaScript and Framer Motion from the above-the-fold and homepage content.

Converted/optimized:
- `components/Hero.tsx` no longer uses carousel JS or Framer Motion
- `components/FeaturedCars.tsx` no longer uses Embla carousel JS
- `components/CarCard.tsx` no longer uses Framer Motion
- `components/PromoSection.tsx` no longer uses Framer Motion
- `components/AdvantagesSection.tsx` no longer uses Framer Motion
- `components/TestimonialSection.tsx` no longer uses Framer Motion/modal JS
- `components/ContactCTA.tsx` no longer uses Framer Motion
- `components/Footer.tsx` converted to server component
- `components/WhatsappFloatingButton.tsx` removed Framer Motion
- `components/Navbar.tsx` removed Framer Motion
- `ScrollToTopButton` removed from global layout

### 8. Heavy map iframe removed from homepage
Replaced the embedded Google Maps iframe in `components/MapSection.tsx` with a lightweight static CTA card linking to Google Maps. This avoids loading heavy map scripts on the homepage.

## Validation performed

- `npx tsc --noEmit` passed.
- `npx tailwindcss -i app/globals.css -o /tmp/yusufsuzuki-seo.css --minify` passed.
- `npm run build` compiled successfully, but the container timed out during Next.js post-compile TypeScript/build worker phase. Standalone TypeScript check passed.
