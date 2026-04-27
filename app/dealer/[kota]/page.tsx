import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, MapPin } from "lucide-react";
import { areas } from "@/data/areas";
import type { Metadata } from "next";
import { WA_BASE_URL } from "@/lib/utils";

// Import komponen-komponen Beranda
import PromoSection from "@/components/PromoSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactCTA from "@/components/ContactCTA";

interface AreaPageProps {
  params: Promise<{ kota: string }>;
}

// GENERATE SEO OTOMATIS UNTUK TIAP KOTA
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

  // Pesan WA yang otomatis menyebutkan asal kota pengunjung
  const waMsg = `Halo Yusuf Suzuki, saya warga ${area.name} dan tertarik untuk konsultasi pembelian mobil Suzuki. Mohon infonya.`;

  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION (Banner Utama Mirip Beranda) */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden pt-20">
        
        {/* Gambar Latar Belakang Hero */}
        {/* Ganti '/hero-bg.jpg' dengan path gambar banner beranda utamamu jika ada */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/showroom/showroom.jpg" 
            alt={`Dealer Suzuki ${area.name}`} 
            fill 
            className="object-cover opacity-40 scale-105" 
            priority
          />
          {/* Gradien Hitam agar teks mudah dibaca */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30" />
        </div>

        {/* Konten Hero */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-10">
          
          <span className="inline-flex items-center gap-2 bg-red-600 text-white text-[10px] font-black px-4 py-2 uppercase tracking-widest mb-6 shadow-xl">
            <MapPin size={14} /> Melayani Wilayah {area.name} & Sekitarnya
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
            Dealer Resmi Suzuki <br className="hidden sm:block" />
            <span className="text-red-600">{area.name}</span>
          </h1>
          
          <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-10">
            {area.description} Hubungi Yusuf Suzuki (0821-7463-5218) untuk test drive langsung di rumah Anda area {area.name}.
          </p>
          
          {/* Tombol Aksi */}
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
              Katalog Mobil <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- KOMPONEN BERANDA LAINNYA --- */}
      
      {/* Bagian Promo */}
      <PromoSection />

      {/* Bagian Testimoni */}
      <TestimonialSection />

      {/* Bagian Call to Action Kontak */}
      <ContactCTA />

    </main>
  );
}