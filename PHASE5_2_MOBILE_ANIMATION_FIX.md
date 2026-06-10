# Phase 5.2 — Mobile Copy & Animation Fix

Perbaikan ini dibuat setelah homepage terasa terlalu penuh teks di mobile dan terlalu kaku karena animasi banyak dikurangi saat SEO optimization.

## Fokus perubahan

1. Mobile homepage dibuat lebih ringan dibaca:
   - SEO intro dipindah ke bawah homepage.
   - Di mobile SEO intro dibuat collapsed `<details>`.
   - Subtitle panjang di beberapa section disembunyikan di mobile.
   - Hero mobile hanya menampilkan 2 trust badge utama.
   - Deskripsi panjang trust badge disembunyikan di mobile.
   - CTA hero mobile disederhanakan menjadi Chat Harga OTR dan Test Drive.

2. Animasi dikembalikan tanpa menambah JS berat:
   - Menambahkan CSS-only motion system di `app/globals.css`.
   - Animasi entrance ringan: `motion-enter-up`, `motion-enter-left`, `motion-enter-right`.
   - Animasi glow dan floating halus: `motion-glow-breathe`, `motion-float-slow`.
   - Efek scan line untuk visual automotive hero.
   - Tetap menghormati `prefers-reduced-motion`.

3. Homepage tetap SEO-friendly:
   - H1 masih mengandung keyword utama.
   - SEO text masih tersedia, tetapi tidak mengganggu pengalaman mobile.
   - Meta description dan title dari fase SEO sebelumnya dipertahankan.

## File utama yang diubah

- `app/globals.css`
- `app/page.tsx`
- `components/Hero.tsx`
- `components/FeaturedCars.tsx`
- `components/CarCard.tsx`
- `components/PromoSection.tsx`
- `components/AdvantagesSection.tsx`
- `components/TestimonialSection.tsx`
- `components/MapSection.tsx`
- `components/ContactCTA.tsx`

## Catatan

Animasi sengaja dibuat CSS-only agar tidak menambah bundle JavaScript baru. Ini menjaga keseimbangan antara UX yang terasa hidup dan skor performa/SEO.
