# Phase 5.3 — Internal Page Animations

Tujuan phase ini adalah membuat halaman internal terasa lebih hidup tanpa menambah beban JavaScript besar.

## Prinsip

- Animasi utama memakai CSS-only agar lebih ringan untuk SEO dan performa.
- Halaman yang sudah memakai komponen interaktif tetap dipertahankan, tetapi tidak ditambah wrapper JS baru.
- Animasi tetap mengikuti `prefers-reduced-motion` agar ramah aksesibilitas.

## Utility animasi baru

Ditambahkan di `app/globals.css`:

- `motion-section` — reveal halus untuk section besar.
- `motion-card` — pop/reveal ringan untuk kartu.
- `motion-reveal-left` — reveal dari kiri.
- `motion-reveal-right` — reveal dari kanan.
- `motion-pop` — animasi masuk ringan untuk panel/form.
- `motion-hover-lift` — hover naik halus.
- `motion-shine` — sweep highlight saat hover.
- `motion-icon-float` — icon/visual mengambang lembut.
- `motion-border-glow` — glow merah lembut.

## Area yang di-upgrade

- `components/PageHero.tsx`
- `components/CarCard.tsx`
- `components/PromoSection.tsx`
- `components/ContactCTA.tsx`
- `components/LeadCaptureCard.tsx`
- `components/MapSection.tsx`
- `components/FAQSection.tsx`
- `components/CreditSimulator.tsx`
- `components/TestDriveForm.tsx`
- `components/PricelistTable.tsx`
- `components/SpecificationTabs.tsx`
- `components/OtherCarsCarousel.tsx`
- `components/EmptyState.tsx`

Halaman yang ikut terkena efek:

- Katalog mobil
- Detail mobil
- Promo
- Detail promo
- Simulasi kredit
- Test drive
- Kontak
- Tentang kami
- FAQ
- Berita
- Detail berita
- Halaman dealer area

## Validasi

Berhasil:

```bash
npx tsc --noEmit
npx tailwindcss -i app/globals.css -o /tmp/yusufsuzuki-animated-pages.css --minify
```

`npm run build` berhasil sampai compile dan TypeScript, lalu berhenti timeout di environment ini pada tahap `Collecting page data using 18 workers`, sama seperti phase sebelumnya.
