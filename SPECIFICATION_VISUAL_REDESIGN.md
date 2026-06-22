# Pembaruan UI Spesifikasi Produk

Bagian spesifikasi di semua halaman `/mobil/[slug]` diperbarui dari daftar data statis menjadi **Specification Visual Explorer**.

## Perubahan desain

- **Kartu ringkasan bento** untuk mesin, transmisi, dimensi, dan pemakaian BBM.
- **Sorotan fitur** ditampilkan sebagai chip yang mudah dipindai.
- **Accordion kategori native HTML (`details`)** agar setiap kelompok data dapat dibuka tanpa JavaScript tambahan.
- Setiap kategori sekarang memuat icon, jumlah detail, deskripsi konteks, dan kartu data dengan state hover.
- Tetap server-rendered dan semantik (`section`, `details`, `summary`, `dl`, `dt`, `dd`) agar keterbacaan SEO tetap baik.
- Catatan perbedaan varian tetap dipertahankan di akhir komponen.

## Cakupan

Komponen baru `components/SpecificationShowcase.tsx` digunakan secara otomatis untuk semua halaman produk yang memiliki data spesifikasi lengkap.
