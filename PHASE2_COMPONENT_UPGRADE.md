# Phase 2 — Component Upgrade

Phase ini meng-upgrade komponen utama agar mengikuti foundation Phase 1: dark premium automotive, sharp cards, uppercase typography, aksen merah, dan CTA WhatsApp yang konsisten.

## Komponen yang di-upgrade

- `components/Navbar.tsx`
  - Header lebih premium dengan red top line, glass/dark transparent state, white scrolled state, active underline merah, dropdown sharp, dan mobile menu fullscreen dark automotive.

- `components/CarCard.tsx`
  - Card produk menjadi pattern utama: red edge, image hover scale, badge kategori/status, harga lebih menonjol, diskon/angsuran rapi, CTA Detail + WhatsApp konsisten.

- `components/FeaturedCars.tsx`
  - Section katalog memakai token global `container-main`, `section-label`, `section-title`, dan navigation carousel yang lebih tegas.

- `components/PromoSection.tsx`
  - Promo section dibuat lebih agresif: background dark tech, featured promo besar, regular promo card tajam, CTA WhatsApp langsung, dan tombol detail yang jelas.

- `components/AdvantagesSection.tsx`
  - Menghapus gaya warna-warni lama dan mengganti semua advantage card menjadi sistem hitam/merah/putih yang konsisten.

- `components/TestimonialSection.tsx`
  - Testimonial card diselaraskan dengan `card-sharp`, red edge, badge mobil, dan lightbox yang lebih premium.

- `components/MapSection.tsx`
  - Section lokasi memakai heading/token global, info card sharp, icon hover merah, dan map framed dengan red edge.

- `components/FAQSection.tsx`
  - Accordion FAQ diselaraskan dengan visual system baru: border tajam, state active merah, typography uppercase.

- `components/ContactCTA.tsx`
  - CTA akhir dibuat lebih conversion-oriented: dark tech background, proof points, CTA WhatsApp merah, CTA telepon secondary.

- `components/Footer.tsx`
  - Footer menjadi lebih kuat sebagai closing conversion area: top CTA strip, dark grid, social links sharp, link hover line, dan contact info dengan aksen merah.

- `components/BottomNavigation.tsx`
  - Mobile bottom nav dibuat lebih premium dengan active indicator merah dan tombol WhatsApp tengah yang lebih menonjol.

- `components/WhatsappFloatingButton.tsx`
  - Floating WhatsApp desktop berubah dari circle sederhana menjadi pill CTA dengan label fast response.

## Catatan implementasi

- Style lama tidak dihapus total; komponen yang memakai token global Phase 1 tetap backward-compatible.
- Warna utama distandarkan ke hitam/putih/abu/merah, sementara WhatsApp tetap hijau khusus untuk aksi chat.
- Desain card sengaja dibuat sharp dan border-based agar terasa lebih premium dan otomotif.

## Validasi

- `npx tsc --noEmit` berhasil.
- `npx tailwindcss -i app/globals.css -o /tmp/yusufsuzuki-phase2.css --minify` berhasil.
- `npm run build` masih gagal karena `next/font` tidak bisa fetch Google Font Manrope dari environment ini. Error berasal dari koneksi ke Google Fonts, bukan dari perubahan komponen.
