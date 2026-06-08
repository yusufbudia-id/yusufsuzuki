# Phase 1 Style Foundation

Arah visual project ini distandarkan menjadi **dark premium automotive**: hitam/putih sebagai dasar, merah Suzuki sebagai conversion accent, typography uppercase yang tegas, card sharp, dan CTA WhatsApp yang menonjol.

## File yang diubah

- `tailwind.config.ts`
  - Menambahkan token warna `brand.*`, `whatsapp.*`, shadow, background image, animation, dan font alias.
  - Mempertahankan token lama `suzuki.*` agar komponen lama tidak rusak.
  - Menambahkan alias `font-manrope` dan `font-bank-gothic` agar class yang sudah dipakai komponen tetap aktif.

- `app/globals.css`
  - Menghapus import Google Font manual karena font sudah dikelola oleh `next/font`.
  - Menambahkan CSS variable brand dan UI token.
  - Meng-upgrade class reusable: button, section, card, badge, surface, input.
  - Mengubah style lama agar lebih sharp, bold, dan conversion-focused.

- `app/layout.tsx`
  - Menambahkan `manrope.variable` pada body supaya Tailwind class berbasis `var(--font-manrope)` bekerja konsisten.

## Utility class utama

### Layout

```tsx
<section className="section-padding">
  <div className="container-main">...</div>
</section>
```

### Section heading

```tsx
<p className="section-label">Promo Suzuki</p>
<h2 className="section-title">Pilihan Mobil Terbaik</h2>
<p className="section-subtitle">Deskripsi singkat section.</p>
```

Untuk background gelap:

```tsx
<p className="section-label">Dealer Resmi</p>
<h2 className="section-title-dark">Suzuki Jogja</h2>
<p className="section-subtitle-dark">Deskripsi singkat section.</p>
```

### Button

```tsx
<a className="btn-primary">CTA Utama</a>
<a className="btn-secondary">CTA Outline</a>
<a className="btn-dark">CTA Dark</a>
<a className="btn-white">CTA White</a>
<a className="btn-whatsapp">Chat WhatsApp</a>
```

### Card

```tsx
<div className="card-sharp red-edge">
  ...
</div>
```

### Dark section

```tsx
<section className="surface-dark section-padding">
  <div className="absolute inset-0 surface-grid opacity-40" />
  ...
</section>
```

## Prinsip untuk Phase berikutnya

1. Gunakan `container-main` dan `section-padding` untuk semua section baru.
2. Gunakan `section-label`, `section-title`, dan `section-subtitle` agar heading seragam.
3. Gunakan `btn-*` reusable, jangan membuat button style baru sembarangan.
4. Gunakan `card-sharp` untuk card terang dan `card-dark` untuk card gelap.
5. Merah dipakai untuk CTA/action. Biru Suzuki cukup sebagai brand accent sekunder.
6. Hindari rounded besar kecuali ada alasan UX spesifik.
7. Pertahankan gaya uppercase, font-black, dan tracking lebar untuk label/CTA.
