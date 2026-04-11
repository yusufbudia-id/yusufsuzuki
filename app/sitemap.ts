import { MetadataRoute } from "next";
import { cars } from "@/data/cars";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://suzukiautojogja.com"; // <-- Domain diperbarui

  const routes = ["", "/mobil", "/promo", "/simulasi-kredit", "/test-drive"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  const carRoutes = cars.map((car) => ({
    url: `${baseUrl}/mobil/${car.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...routes, ...carRoutes];
}