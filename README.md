# Suzuki Sumber Baru Mobil – Website Dealer Resmi

Website dealer resmi Suzuki untuk area Jogja & sekitarnya.

## Stack
- **Next.js 14** App Router
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (Radix UI primitives)
- **Framer Motion** – animasi
- **Embla Carousel** – slider promo & gallery
- **React Hook Form + Zod** – form validation
- **Recharts** – (tersedia jika diperlukan)
- **Lucide React** – icons

## Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Install tailwindcss-animate (plugin accordion)
npm install tailwindcss-animate

# 3. Jalankan dev server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## Struktur Folder

```
/app
  page.tsx                    ← Homepage
  layout.tsx                  ← Root layout + SEO + schema
  globals.css

  /mobil
    page.tsx                  ← Daftar semua mobil + filter
    /[slug]
      page.tsx                ← Static params + metadata
      CarDetailClient.tsx     ← Detail mobil (client)

  /promo           page.tsx   ← Grid semua promo
  /simulasi-kredit page.tsx   ← Kalkulator kredit
  /test-drive      page.tsx   ← Form booking test drive
  /tentang-kami    page.tsx   ← Profil dealer + Yusuf
  /faq             page.tsx   ← FAQ accordion
  /kontak          page.tsx   ← Kontak + Google Maps

/components
  Navbar.tsx                  ← Sticky, transparan → putih scroll
  Footer.tsx                  ← Footer lengkap
  Hero.tsx                    ← Hero homepage
  FeaturedCars.tsx             ← Grid 6 mobil unggulan
  CarCard.tsx                 ← Reusable car card
  PromoSection.tsx            ← Slider promo + PromoCard
  AdvantagesSection.tsx       ← 6 keunggulan dealer
  TestimonialSection.tsx      ← 4 testimoni pelanggan
  ContactCTA.tsx              ← CTA section biru
  MapSection.tsx              ← Google Maps embed
  CreditSimulator.tsx         ← Kalkulator kredit interaktif
  TestDriveForm.tsx           ← Form test drive → WA
  FAQSection.tsx              ← FAQ accordion (Radix)
  CarGallery.tsx              ← Carousel + lightbox
  SpecificationTabs.tsx       ← Tab spesifikasi mobil
  WhatsappFloatingButton.tsx  ← Floating WA button

/data
  cars.ts          ← 9 mobil Suzuki dengan data lengkap
  promos.ts        ← 6 promo aktif
  testimonials.ts  ← 4 testimoni + 8 FAQ

/lib
  utils.ts         ← cn(), formatCurrency(), buildWhatsAppUrl(), dll
```

## Kontak Sales
**Yusuf Suzuki** – WhatsApp: [0821 7463 5218](https://wa.me/6282174635218)

## Fitur Utama
- ✅ Fully responsive & mobile-first
- ✅ Sticky navbar transparan → putih on scroll
- ✅ Hero section dengan overlay & animasi Framer Motion
- ✅ 9 produk Suzuki lengkap dengan spesifikasi, warna, promo
- ✅ Filter & search mobil
- ✅ Detail mobil dinamis (`/mobil/[slug]`)
- ✅ Simulasi kredit real-time
- ✅ Form test drive → redirect WhatsApp otomatis
- ✅ Form minat mobil → redirect WhatsApp
- ✅ Gallery carousel dengan lightbox
- ✅ FAQ accordion
- ✅ Google Maps embed
- ✅ WhatsApp floating button
- ✅ SEO metadata + Open Graph + JSON-LD schema
