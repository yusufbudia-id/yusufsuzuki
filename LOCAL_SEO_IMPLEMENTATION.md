# Local SEO Implementation — All Product Pages

## Cakupan
Pembaruan diterapkan pada seluruh halaman katalog berikut:

- Suzuki Fronx
- Suzuki XL7
- Suzuki Carry Pick Up
- Suzuki Carry Box
- Suzuki S-Presso
- Suzuki Jimny
- Suzuki Ertiga
- Suzuki APV
- Suzuki Grand Vitara

## Perubahan yang diterapkan

1. **Metadata lokal per halaman**
   - Title menggunakan pola harga konkret: `Harga [Model] Jogja 2026 | Promo DP Ringan & OTR Mulai Rp ... Juta`.
   - Canonical, Open Graph, Twitter Card, serta alt teks hero tetap spesifik pada model dan lokasi Yogyakarta.

2. **Structured data per model**
   - `BreadcrumbList`: Home → Produk → Model.
   - `Product` dengan `AggregateOffer` untuk rentang harga varian.
   - `FAQPage` menggunakan FAQ yang tampil di halaman.
   - Schema `AutoDealer` tetap dipusatkan di root layout.
   - Tidak ada `aggregateRating`/review buatan dan tidak ada klaim `InStock` tanpa data inventori real-time.

3. **FAQ relevan untuk tiap produk**
   - Fronx: GL vs GX vs SGX.
   - XL7: Zeta vs Hybrid Beta/Alpha/Kuro.
   - Carry: Flat Deck vs Wide Deck.
   - Carry Box: konfigurasi karoseri.
   - S-Presso: MT vs AGS.
   - Jimny: 3-Door vs 5-Door.
   - Ertiga: GL vs Hybrid GX.
   - APV: Blind Van vs Arena.
   - Grand Vitara: one-tone vs two-tone.

4. **Spesifikasi lebih kaya**
   - Semua model memperoleh data spesifikasi terstruktur di `data/carSeo.ts`.
   - Total: 74 entri spesifikasi detail, mencakup varian, kapasitas, transmisi, fitur keselamatan, serta kegunaan utama.

5. **Promo model-aware**
   - Halaman produk hanya menampilkan promo yang terkait dengan model tersebut.
   - Normalisasi slug tambahan menjaga promo Carry lama (`carry-pick-up`) tetap cocok dengan halaman `carry-pickup`.
   - Tanggal promo ditafsirkan sampai 23.59.59 WIB untuk mencegah promo berakhir terlalu dini karena zona waktu server.

6. **NAP dan Google Maps konsisten**
   - Alamat diseragamkan menjadi: Suzuki Sumber Baru Mobil, Jl. Magelang KM 8.5, Mulungan Kidul, Sendangadi, Sleman, DIY 55285.
   - Jam operasional diseragamkan: Senin–Sabtu 08.00–17.00 WIB; Minggu tutup.
   - Embed peta pada halaman kontak dan section showroom memakai URL Google Maps embed yang valid.

## File utama yang diperbarui

- `app/mobil/[slug]/page.tsx`
- `data/carSeo.ts` (baru)
- `data/cars.ts`
- `app/kontak/page.tsx`
- `LOCAL_SEO_IMPLEMENTATION.md`

## Validasi

- `tsc --noEmit`: lulus.
- Pemeriksaan invarian SEO: lulus untuk 9 slug katalog.
- Schema yang dipastikan tersedia di halaman produk: `BreadcrumbList`, `Product`, `AggregateOffer`, `FAQPage`.
- Peta embed dan konsistensi NAP: lulus.
- `next build` berhasil melewati tahap kompilasi produksi dan TypeScript; worker pengumpulan data statis dihentikan oleh batas proses sandbox sebelum build selesai penuh.
