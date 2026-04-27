import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, MapPin } from "lucide-react";
import { areas } from "@/data/areas";
import type { Metadata } from "next";
import { WA_BASE_URL } from "@/lib/utils";

// --- IMPORT SEMUA KOMPONEN DARI HOMEPAGE ---
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

  // Pesan WA spesifik sesuai kota
  const waMsg = `Halo Yusuf Suzuki, saya warga ${area.name} dan tertarik untuk konsultasi pembelian mobil Suzuki. Mohon infonya.`;

  return (
    <>
      {/* 1. HERO KHUSUS KOTA (Pengganti <Hero /> agar teksnya sesuai kota) */}
      <section className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Kamu bisa ganti /showroom/showroom.jpg dengan gambar Hero andalanmu */}
          <Image 
            src="/showroom/showroom.jpg" 
            alt={`Dealer Suzuki ${area.name}`} 
            fill 
            className="object-cover opacity-40 scale-105" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16 md:mt-0">
          <span className="inline-flex items-center gap-2 bg-red-600 text-white text-[10px] font-black px-4 py-2 uppercase tracking-widest mb-6 shadow-xl">
            <MapPin size={14} /> Melayani Wilayah {area.name}
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
            Dealer Resmi Suzuki <br className="hidden sm:block" />
            <span className="text-red-600">{area.name}</span>
          </h1>
          
          <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-10">
            {area.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`${WA_BASE_URL}?text=${encodeURIComponent(waMsg)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto bg-white hover:bg-gray-200 text-gray-900 text-[11px] font-black uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-2 transition-colors duration-300 shadow-xl"
            >
              <MessageCircle size={18} /> Hubungi Sales {area.name}
            </a>
            <Link 
              href="/mobil" 
              className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white text-[11px] font-black uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-2 transition-colors duration-300"
            >
              Lihat Katalog Mobil <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- STRUKTUR KE BAWAH 100% SAMA DENGAN HOMEPAGE --- */}
      
      <FeaturedCars />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-gray-200" />
      </div>
      
      <PromoSection />
      <AdvantagesSection />
      <TestimonialSection />
      <MapSection />
      <ContactCTA />
      
    </>
  );
}