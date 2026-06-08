# Phase 5 — Polish & Performance

Phase ini fokus pada penyempurnaan akhir setelah style, halaman, dan conversion layer sudah stabil.

## Perubahan utama

### 1. Build lebih aman tanpa fetch Google Font

`app/layout.tsx` tidak lagi memakai `next/font/google` agar proses build tidak bergantung pada koneksi ke Google Fonts. Font stack tetap memakai token Manrope/fallback melalui `globals.css`.

### 2. Script tracking dibuat aman

Google Analytics dan Meta Pixel sekarang hanya dimuat jika environment variable tersedia:

- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`

Ini mencegah script dengan ID `undefined` atau placeholder ikut termuat di production.

### 3. Accessibility polish

Ditambahkan skip link:

```txt
Lewati ke konten utama
```

Main content juga diberi `id="main-content"` agar navigasi keyboard lebih baik.

### 4. Reduced motion support

`globals.css` sekarang menghormati preferensi `prefers-reduced-motion`, sehingga animasi/transisi dipangkas untuk user yang mengaktifkan pengurangan motion.

### 5. Safe-area mobile polish

Sticky CTA detail mobil diposisikan lebih aman terhadap bottom navigation dan safe area iPhone.

### 6. Empty state reusable

Ditambahkan:

```txt
components/EmptyState.tsx
```

Sudah dipakai di katalog mobil ketika filter/search tidak menemukan hasil. Empty state sekarang punya CTA reset filter.

### 7. Scroll to top desktop

Ditambahkan:

```txt
components/ScrollToTopButton.tsx
```

Tombol ini muncul setelah user scroll cukup jauh, tanpa mengganggu floating WhatsApp.

### 8. 404 dan error page

Ditambahkan:

```txt
app/not-found.tsx
app/error.tsx
```

Keduanya mengikuti tema dark automotive dan tetap menyediakan CTA ke katalog/WhatsApp.

### 9. Article content polish

Konten artikel yang masih membawa style lama seperti `text-blue-600`, `border-blue-600`, dan gambar rounded sekarang dioverride secara global di `.article-content-block` agar tampil konsisten dengan tema merah-hitam.

### 10. Legacy component polish

`CarDetailClient.tsx` dan `SpecificationTabs.tsx` ikut dipoles agar tidak tertinggal dengan gaya lama biru/rounded-soft. Walaupun route detail terbaru memakai page utama, komponen legacy ini sekarang tetap aman jika digunakan kembali.

## Validasi

Berhasil:

```bash
npx tsc --noEmit
npx tailwindcss -i app/globals.css -o /tmp/yusufsuzuki-phase5.css --minify
```

`npm run build` sudah melewati tahap compile dan TypeScript. Di environment ini proses berhenti karena batas waktu saat Next.js masuk ke tahap `Collecting page data using 18 workers`, bukan karena error compile atau type-check.
