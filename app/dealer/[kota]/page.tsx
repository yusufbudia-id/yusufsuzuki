import { notFound } from "next/navigation";
import { areas } from "@/data/areas";
import type { Metadata } from "next";

// Import SEMUA komponen dari Beranda Utama
import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars";
import AdvantagesSection from "@/components/AdvantagesSection";
import PromoSection from "@/components/PromoSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactCTA from "@/components/ContactCTA";
import MapSection from "@/components/MapSection";

interface AreaPageProps {
  params: Promise<{ kota: string }>;
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { kota } = await params;
  const area = areas.find((a) => a.slug === kota);
  
  if (!area) return { title: "Dealer Tidak Ditemukan" };

  // --- KODE BARU: Array Keywords Dinamis (Hyper-Local SEO) ---
  // Pastikan huruf kecil semua agar rapi di mata Google
  const cityName = area.name.toLowerCase();
  const dynamicKeywords = [
    `mobil suzuki ${cityName}`,
    `dealer mobil suzuki ${cityName}`,
    `promo mobil suzuki ${cityName}`,
    `harga mobil suzuki ${cityName}`,
    `kredit mobil suzuki ${cityName}`,
    `harga fronx ${cityName}`,
    `promo xl7 ${cityName}`,
    `kredit carry pick up ${cityName}`,
    `harga ertiga ${cityName}`,
    `showroom mobil suzuki ${cityName}`,
    `sales mobil suzuki ${cityName}`
  ];

  return {
    // ---> UPDATE SEO: PENAMBAHAN KATA "MOBIL" <---
    title: `Dealer Resmi Mobil Suzuki ${area.name} | Promo & Harga Terbaru`,
    description: area.description,
    keywords: dynamicKeywords, // <--- Menanamkan 11 kata kunci dinamis yang lebih tertarget
    alternates: {
      canonical: `/dealer/${area.slug}`,
    },
    openGraph: {
      // ---> UPDATE SEO: PENAMBAHAN KATA "MOBIL" <---
      title: `Dealer Resmi Mobil Suzuki ${area.name} | Promo & Harga Terbaru`,
      description: area.description,
      url: `https://suzukiautojogja.com/dealer/${area.slug}`,
      siteName: 'Suzuki Auto Jogja',
      images: [
        {
          url: '/hero/banner-1.jpg', 
          width: 1200,
          height: 630,
          alt: `Promo Mobil Suzuki XL7 di ${area.name}`,
        },
      ],
      locale: 'id_ID',
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return areas.map((area) => ({
    kota: area.slug,
  }));
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { kota } = await params;
  const area = areas.find((a) => a.slug === kota);

  if (!area) notFound();

  return (
    <>
      <Hero cityName={area.name} />
      <FeaturedCars cityName={area.name} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-gray-200" />
      </div>
      
      <PromoSection cityName={area.name} />
      <AdvantagesSection cityName={area.name} />
      <TestimonialSection cityName={area.name} />
      <MapSection cityName={area.name} />
      <ContactCTA cityName={area.name} />
    </>
  );
}