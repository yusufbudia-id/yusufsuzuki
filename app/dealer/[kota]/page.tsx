import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import { areas } from "@/data/areas";
import type { Metadata } from "next";

// Import komponen-komponen beranda yang sudah kamu miliki
// (Pastikan path import ini sesuai dengan struktur kodemu)
import PromoSection from "@/components/PromoSection";
import TestimonialSection from "@/components/TestimonialSection";

interface AreaPageProps {
  params: Promise<{ kota: string }>;
}

// 1. GENERATE SEO OTOMATIS UNTUK TIAP KOTA
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

// 2. GENERATE STATIC PAGES (Biar web super cepat)
export async function generateStaticParams() {
  return areas.map((area) => ({
    kota: area.slug,
  }));
}

// 3. TAMPILAN HALAMANNYA
export default async function AreaPage({ params }: AreaPageProps) {
  const { kota } = await params;
  const area = areas.find((a) => a.slug === kota);

  if (!area) notFound();

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      
      {/* HEADER KHUSUS KOTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors font-bold text-[10px] uppercase tracking-[0.2em] mb-8"
        >
          <ArrowLeft size={14} />
          Kembali ke Beranda Utama
        </Link>

        <div className="bg-gray-50 border border-gray-200 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="w-16 h-16 bg-red-600 text-white flex items-center justify-center shrink-0">
            <MapPin size={32} />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-4">
              Dealer Resmi Suzuki <span className="text-red-600">{area.name}</span>
            </h1>
            <p className="text-gray-600 font-medium leading-relaxed max-w-3xl">
              {area.description} Hubungi Yusuf Suzuki (0821-7463-5218) untuk konsultasi pembelian, simulasi kredit, dan jadwal Test Drive khusus di wilayah {area.name}.
            </p>
          </div>
        </div>
      </div>

      {/* PANGGIL KOMPONEN BERANDA (Gunakan ulang komponen yang sudah ada) */}
      {/* Karena Promo dan Testimoni sudah kita buat sebelumnya, kita tinggal panggil lagi di sini! */}
      <PromoSection />
      <TestimonialSection />

    </main>
  );
}