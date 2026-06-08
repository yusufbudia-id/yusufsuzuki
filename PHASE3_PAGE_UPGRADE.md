# Phase 3 — Page-Level Upgrade

Phase ini merapikan halaman-halaman penting agar semua mengikuti visual system Phase 1, Phase 2, dan polish Phase 2.5.

## Fokus Perubahan

- Menyatukan header halaman internal memakai gaya dark tech automotive.
- Membuat halaman katalog, promo, kredit, test drive, kontak, tentang kami, FAQ, dan berita lebih konsisten.
- Menambah reusable component `PageHero` untuk menghindari duplikasi header gelap di banyak halaman.
- Menguatkan CTA WhatsApp di halaman yang berpotensi menghasilkan lead.
- Mengurangi nuansa biru lama pada halaman artikel/kredit agar lebih selaras dengan arah hitam-merah-putih.
- Memperbaiki hierarchy konten: hero, proof/stat, filter/action, konten utama, CTA akhir.

## File Baru

- `components/PageHero.tsx`

## File yang Di-upgrade

- `app/mobil/KatalogClient.tsx`
- `app/promo/page.tsx`
- `app/simulasi-kredit/page.tsx`
- `app/kontak/page.tsx`
- `app/test-drive/page.tsx`
- `app/tentang-kami/page.tsx`
- `app/faq/page.tsx`
- `app/berita/page.tsx`
- `app/berita/[slug]/page.tsx`
- `app/promo/[slug]/page.tsx`
- `app/mobil/[slug]/page.tsx`
- `components/CreditSimulator.tsx`

## Catatan Design

Gunakan `PageHero` untuk halaman internal baru agar konsisten:

```tsx
<PageHero
  eyebrow="Label Kecil"
  title="Judul Halaman"
  description="Deskripsi singkat halaman."
  stats={[{ value: "WA", label: "Respon Cepat" }]}
>
  <a className="btn-red">CTA Utama</a>
</PageHero>
```

Pola yang dipakai:

- Hero gelap dengan grid, red radial glow, dan technical line.
- Heading uppercase besar.
- Badge kecil dengan pulse red dot.
- Stats ringkas untuk trust/conversion.
- CTA utama merah, CTA sekunder translucent dark.
- Card putih sharp dengan border tipis dan hover border merah.

## Validasi

- `npx tsc --noEmit` berhasil.
- `npx tailwindcss -i app/globals.css -o /tmp/yusufsuzuki-phase3.css --minify` berhasil.
- `npm run build` belum bisa selesai di environment ini karena `next/font` gagal mengambil Google Font Manrope dari Google Fonts. Error ini berasal dari akses network environment, bukan dari perubahan kode Phase 3.
