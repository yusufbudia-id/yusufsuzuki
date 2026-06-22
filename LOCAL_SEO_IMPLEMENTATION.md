# Implementasi Local SEO — Halaman /mobil/jimny

## Perubahan yang diterapkan

1. **Perbaikan metadata**
   - Menghapus duplikasi merek seperti `Suzuki Suzuki Jimny` dari title, description, Open Graph, Twitter Card, dan keywords.
   - Mempertahankan intent lokal pada Yogyakarta, Magelang, Kedu, dan Banyumas.
   - Canonical tetap mengarah ke `https://www.suzukiautojogja.com/mobil/jimny`.

2. **Structured data yang selaras dengan halaman**
   - `AutoDealer` dipusatkan di `app/layout.tsx` dengan NAP, jam operasional, map, area layanan, dan social profiles yang konsisten.
   - `Product` dan `AggregateOffer` memuat harga terendah/tertinggi varian serta mata uang IDR.
   - `BreadcrumbList` mengikuti jalur Home → Produk → Suzuki Jimny.
   - `FAQPage` menggunakan pertanyaan dan jawaban yang tampil pada halaman.
   - Menghapus `AggregateRating` dan review yang tidak dapat diverifikasi.

3. **Konten produk Jimny**
   - Mengganti alt text gambar utama menjadi deskriptif dan natural.
   - Menambahkan tabel spesifikasi teknis lengkap: mesin, tenaga, torsi, 4WD, clearance, radius putar, suspensi, rem, kapasitas penumpang, dan fitur keselamatan.
   - Merapikan fitur untuk membedakan 3-Door dan 5-Door bila relevan.

4. **Relevansi promo**
   - Halaman produk sekarang hanya dapat menampilkan promo aktif yang terkait dengan model tersebut.
   - Bila tidak ada promo Jimny aktif, section promo disembunyikan; promo Fronx/produk lain tidak lagi menjadi fallback.

5. **Lokasi dan konsistensi NAP**
   - Memasukkan Google Maps embed yang dimuat secara lazy di halaman produk, home, dan dealer-area.
   - Menautkan tombol ke Google Maps yang diberikan.
   - Menyamakan alamat, telepon, dan jam operasional di schema, footer, dan komponen peta.

## Validasi yang dilakukan

- `npm run build` berhasil melewati compile dan pemeriksaan TypeScript.
- Validasi SSR dengan `next dev`: `GET /mobil/jimny` menghasilkan HTTP 200.
- JSON-LD pada HTML berhasil diparse:
  - AutoDealer: 1
  - BreadcrumbList: 1
  - Product/AggregateOffer: 1
  - FAQPage: 1 dengan 4 pertanyaan
- Tidak ditemukan lagi string `Suzuki Suzuki Jimny` di HTML hasil render.

> Catatan: proses `next build` berhenti saat tahap pengumpulan data statis karena batas waktu sandbox setelah compile dan TypeScript sukses. Ini tidak menunjukkan error TypeScript atau rendering pada halaman Jimny; halaman telah diuji via SSR secara langsung.
