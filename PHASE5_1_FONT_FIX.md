# Phase 5.1 - Font Fix

Perbaikan kecil setelah Phase 5.

## Masalah

Pada Phase 5, `next/font/google` dihapus agar proses build tidak gagal saat environment tidak bisa fetch Google Fonts. Efek sampingnya, beberapa tampilan jatuh ke fallback font dan terasa kurang premium.

## Perbaikan

- Menambahkan runtime Google Fonts stylesheet untuk Manrope di `app/layout.tsx`.
- Build tetap tidak bergantung pada fetch font dari `next/font`.
- Memperbaiki fallback font di `globals.css` dan `tailwind.config.ts`.
- Class lama `font-bank-gothic` tetap didukung, tetapi tidak lagi jatuh ke `Arial Narrow` yang membuat tampilan terasa jelek.
- Heading tetap menggunakan font display yang sama agar feel automotive tetap tegas dan modern.
