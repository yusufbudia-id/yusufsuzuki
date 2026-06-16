# Mobile Contact Photo Fix

Perubahan ini membuat foto Yusuf pada section **Konsultasi Gratis** tampil juga di mobile.

## File yang diubah

- `components/ContactCTA.tsx`

## Detail perubahan

- Menambahkan kartu foto khusus mobile dengan class `md:hidden`.
- Foto tetap memakai asset yang sama: `/kontak/photo.jpg`.
- Desktop tetap memakai layout foto kiri seperti sebelumnya.
- Mobile sekarang menampilkan foto setelah badge `Konsultasi Gratis` dan sebelum heading CTA.
- Card mobile diberi frame merah, overlay gradient, label `Yusuf`, dan animasi ringan agar tetap sesuai tema dark automotive.

## Validasi

- `npx tsc --noEmit` berhasil.
- `npx tailwindcss -i app/globals.css -o /tmp/yusufsuzuki-mobile-photo.css --minify` berhasil.
