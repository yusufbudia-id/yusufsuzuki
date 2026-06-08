# Phase 2.5 — Homepage Above The Fold Polish

Fokus phase ini adalah memoles bagian pertama homepage berdasarkan review visual setelah Phase 2.

## Perubahan utama

### Navbar
- Label menu desktop disederhanakan agar tidak terlalu padat:
  - `Produk Mobil` menjadi `Mobil`
  - `Simulasi Kredit` menjadi `Kredit`
- `Kontak` dipindahkan ke dropdown `Informasi`.
- Icon telepon desktop dihapus supaya CTA utama lebih fokus ke `Chat Yusuf`.
- Mobile menu tetap mempertahankan tombol WhatsApp dan nomor telepon.

### Hero copywriting
- Heading diubah menjadi lebih sales-oriented:
  - `Dealer Resmi`
  - `Suzuki Jogja`
  - `Terpercaya`
- Subheadline dibuat lebih tajam: `Promo Resmi & Harga Terbaik` dan `Kredit Mudah`.
- Body copy dipersingkat agar lebih cepat dibaca.

### Hero visual
- Gambar mobil dibuat lebih terang dengan opacity, contrast, dan saturation yang lebih tinggi.
- Overlay gelap dikurangi agar produk mobil lebih menonjol.

### CTA hierarchy
- CTA utama tetap `Chat Sekarang` berwarna merah solid.
- CTA kedua menjadi `Jadwalkan Test Drive` dengan style outline/dark.
- `Lihat Katalog` dibuat lebih subtle sebagai tertiary action.
- CTA row dibuat wrap-safe agar tidak overflow di layar sedang.

### Trust badges
- Benefit cards diperbesar sedikit dan diberi angka/value yang lebih menonjol:
  - `Harga`
  - `8 Tahun`
  - `Hybrid`
  - `50.000 KM`
- Icon diperbesar dan layout card dibuat lebih impactful.

## File yang diubah
- `components/Navbar.tsx`
- `components/Hero.tsx`

## Validasi
- `npx tsc --noEmit` berhasil.
- `npx tailwindcss -i app/globals.css -o /tmp/yusufsuzuki-phase2-5.css --minify` berhasil.
- `npm run build` masih gagal di environment ini karena `next/font` tidak bisa fetch Google Font Manrope dari Google Fonts.
