import type { Metadata } from "next";
// Sesuaikan path import di bawah ini dengan lokasi file KatalogClient-mu
import KatalogClient from "./KatalogClient"; 

export const metadata: Metadata = {
  title: "Katalog Mobil Suzuki Jogja & Magelang | Daftar Harga OTR Terbaru",
  description: "Lihat daftar lengkap katalog mobil Suzuki terbaru di Sumber Baru Mobil. Tersedia detail harga OTR Plat AB (Jogja) dan Plat AA (Magelang). Dapatkan promo diskon hari ini!",
  keywords: [
    "dealer suzuki jogja", 
    "harga mobil suzuki jogja", 
    "kredit suzuki magelang",
    "promo suzuki bantul", 
    "showroom suzuki sleman", 
    "harga suzuki plat ab",
    "suzuki sumber baru mobil", 
    "beli mobil suzuki diy",
    "harga suzuki fronx jogja",
    "kredit carry pick up magelang"
  ],
  alternates: {
    canonical: "https://www.suzukiautojogja.com/mobil",
  },
  openGraph: {
    title: "Katalog Mobil Suzuki Terlengkap - Dealer Resmi Jogja",
    description: "Cari mobil Suzuki impianmu di sini. Cek spesifikasi lengkap, harga OTR wilayah Jogja & Magelang, serta promo DP ringan terbaru.",
    url: "https://www.suzukiautojogja.com/mobil",
    siteName: "Suzuki Auto Jogja",
    images: [
      {
        url: "/hero/banner-1.jpg", // Pastikan banner ini tersedia di public folder
        width: 1200,
        height: 630,
        alt: "Katalog Mobil Suzuki Jogja",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function MobilPage() {
  // Komponen ini (Server Component) hanya bertugas memuat SEO,
  // lalu memanggil tampilan interaktif (Client Component) di bawahnya.
  return <KatalogClient />;
}