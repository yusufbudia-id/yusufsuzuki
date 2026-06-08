# Phase 4 — Conversion Layer Upgrade

Phase ini fokus meningkatkan jalur pengunjung menjadi lead WhatsApp, terutama pada halaman mobil, promo, simulasi kredit, dan test drive.

## Perubahan utama

### 1. Context-aware WhatsApp CTA

Ditambahkan helper:

```txt
lib/leadContext.ts
```

CTA WhatsApp sekarang menyesuaikan pesan berdasarkan halaman aktif:

- Detail mobil: pesan otomatis membawa nama unit.
- Detail promo: pesan otomatis membawa nama promo.
- Simulasi kredit: pesan fokus ke konsultasi kredit.
- Test drive: pesan fokus ke booking jadwal.
- Dealer area: pesan membawa nama area.

Komponen yang memakai sistem ini:

```txt
components/Navbar.tsx
components/BottomNavigation.tsx
components/WhatsappFloatingButton.tsx
```

### 2. Mobile bottom navigation lebih kontekstual

Tombol WhatsApp tengah pada mobile tidak lagi memakai pesan umum saja. Label dan isi pesan ikut berubah sesuai halaman, misalnya:

- Tanya Unit
- Klaim Promo
- Tanya Kredit
- Test Drive

### 3. Floating WhatsApp desktop lebih relevan

Floating WhatsApp desktop sekarang menampilkan konteks halaman, bukan selalu “Chat Yusuf”.

### 4. Lead Capture Card reusable

Ditambahkan komponen:

```txt
components/LeadCaptureCard.tsx
```

Komponen ini dipakai untuk mendorong pengunjung chat, telepon, test drive, atau simulasi kredit dari titik penting halaman.

Sudah dipasang pada:

```txt
app/mobil/[slug]/page.tsx
app/promo/[slug]/page.tsx
```

### 5. Sticky CTA halaman detail mobil mobile

Ditambahkan komponen:

```txt
components/CarDetailStickyCTA.tsx
```

Pada mobile, halaman detail mobil sekarang punya CTA spesifik unit di atas bottom navigation:

- harga mulai
- tombol simulasi kredit
- tombol chat unit

### 6. Form conversion polish

CTA utama pada komponen ini dibuat lebih jelas karena aksinya membuka WhatsApp:

```txt
components/CreditSimulator.tsx
components/TestDriveForm.tsx
```

Tombol utama diganti menjadi hijau WhatsApp dan copy lebih eksplisit:

- Kirim ke WhatsApp
- Kirim ke WhatsApp

## Catatan implementasi

- Nomor telepon distandarkan di `lib/utils.ts` melalui `PHONE_DISPLAY` dan `PHONE_TEL`.
- `WA_NUMBER` dan `WA_BASE_URL` tetap dipertahankan agar kompatibel dengan komponen lama.
- Tidak ada perubahan data mobil/promo.
- Fokus phase ini adalah kualitas lead dan konteks pesan, bukan perubahan layout besar-besaran.
