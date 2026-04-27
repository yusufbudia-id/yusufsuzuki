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

  return {
    title: `Dealer Resmi Suzuki ${area.name} | Promo & Harga Terbaru`,
    description: area.description,
    alternates: {
      canonical: `/dealer/${area.slug}`,
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
      {/* Semua komponen sekarang tinggal menerima "titipan" nama kota! */}
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