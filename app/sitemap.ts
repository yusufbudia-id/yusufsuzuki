import { MetadataRoute } from "next";
import { cars } from "@/data/cars";
import { promos } from "@/data/promos";
import { areas } from "@/data/areas"; // <-- Import data area yang baru

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://suzukiautojogja.com";

  // 1. Rute Halaman Statis (Menu Utama)
  const routes = [
    "", 
    "/mobil", 
    "/promo", 
    "/simulasi-kredit", 
    "/test-drive"
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
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // 3. Rute Dinamis Detail Promo (/promo/[slug])
  const promoRoutes = promos.map((promo) => ({
    url: `${baseUrl}/promo/${promo.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 4. Rute Dinamis Dealer per Area (/dealer/[slug]) <-- TAMBAHAN BARU
  const areaRoutes = areas.map((area) => ({
    url: `${baseUrl}/dealer/${area.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const, // Karena konten wilayah jarang berubah drastis
    priority: 0.7, // Prioritas sedikit di bawah promo/mobil
  }));

  // Gabungkan semua rute: Statis + Mobil + Promo + Area Kota
  return [...routes, ...carRoutes, ...promoRoutes, ...areaRoutes];
}