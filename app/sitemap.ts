import { MetadataRoute } from "next";
import { cars } from "@/data/cars";
import { promos } from "@/data/promos"; // <-- Tambahkan import data promos

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://suzukiautojogja.com";

  // 1. Rute Halaman Statis (Menu Utama)
  const routes = [
    "", 
    "/mobil", 
    "/promo", 
    "/simulasi-kredit", 
    "/test-drive"
    // Catatan: Jika kamu punya halaman "/kontak" atau "/tentang-kami", tambahkan di atas ini.
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // 2. Rute Dinamis Detail Mobil (/mobil/[slug])
  const carRoutes = cars.map((car) => ({
    url: `${baseUrl}/mobil/${car.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const, // Mobil jarang berubah, jadi monthly
    priority: 0.9,
  }));

  // 3. Rute Dinamis Detail Promo (/promo/[slug]) <-- TAMBAHAN BARU
  const promoRoutes = promos.map((promo) => ({
    url: `${baseUrl}/promo/${promo.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const, // Promo sering berubah/berakhir, jadi weekly
    priority: 0.8,
  }));

  // Gabungkan semua rute dan serahkan ke Google
  return [...routes, ...carRoutes, ...promoRoutes];
}