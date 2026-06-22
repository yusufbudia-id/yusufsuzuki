# Pembaruan Spesifikasi Produk

Tanggal implementasi: 22 Juni 2026

## Cakupan
- Sembilan halaman produk: Fronx, XL7, Carry Pick Up, Carry Box, S-Presso, Jimny, Ertiga, APV, dan Grand Vitara.
- `data/carSeo.ts` kini memuat spesifikasi per kategori: Performa, Dimensi & Kapasitas, Sasis & Pengereman, Keselamatan, Kenyamanan & Teknologi, serta Informasi Karoseri untuk Carry Box.
- Total detail spesifikasi diperluas sehingga setiap halaman memiliki ringkasan teknis yang relevan, bukan daftar spesifikasi generik.

## Tampilan dan Schema
- Halaman produk menampilkan setiap kelompok spesifikasi sebagai bagian terpisah agar lebih mudah dipindai.
- Semua detail yang sama diekspor ke `Product.additionalProperty` pada JSON-LD.
- Fitur yang tidak tersedia untuk seluruh tipe diberi keterangan “mengikuti varian”.
- Angka konsumsi BBM yang sebelumnya tidak memiliki konteks pengujian pabrikan diganti dengan keterangan kondisi penggunaan agar tidak terbaca sebagai klaim absolut.

## Sumber rujukan
- Halaman resmi Suzuki Indonesia untuk Fronx, New XL7, New Carry Pick Up, S-Presso, Jimny, All New Ertiga, APV, dan Grand Vitara.
- Carry Box diperlakukan sebagai kendaraan berbasis New Carry dengan spesifikasi karoseri yang harus dikonfirmasi per paket/pemesanan.
