# Spacing fix — spesifikasi dan daftar harga

Perubahan yang diterapkan pada `app/mobil/[slug]/page.tsx`:
- Section spesifikasi: padding `py-16 md:py-20` menjadi `pt-14 pb-10 md:pt-16 md:pb-12`.
- Section daftar harga: padding `py-20` menjadi `pt-10 pb-16 md:pt-12 md:pb-20`.
- Menambahkan anchor `id="daftar-harga"` pada section daftar harga.

Perubahan pada `components/SpecificationShowcase.tsx`:
- Margin sebelum catatan spesifikasi: `mt-6` menjadi `mt-4`.

Hasil: transisi dari spesifikasi ke daftar harga lebih rapat, tetap memiliki pemisah visual, dan lebih nyaman di mobile maupun desktop.
