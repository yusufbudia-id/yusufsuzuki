"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { promos } from "@/data/promos";
import { buildWhatsAppUrl } from "@/lib/utils";

// --- FUNGSI PEMBANTU: PARSE TANGGAL INDONESIA KE DATE OBJECT ---
const parseIndonesianDate = (dateStr: string) => {
  const months: { [key: string]: number } = {
    januari: 0, februari: 1, maret: 2, april: 3, mei: 4, juni: 5,
    juli: 6, agustus: 7, september: 8, oktober: 9, november: 10, desember: 11
  };

  const parts = dateStr.toLowerCase().split(" ");
  if (parts.length !== 3) return new Date(8640000000000000);

  const day = parseInt(parts[0]);
  const month = months[parts[1]];
  const year = parseInt(parts[2]);

  return new Date(year, month, day);
};

// --- KOMPONEN KARTU PROMO REGULER ---
export function PromoCard({ promo, index = 0 }: { promo: typeof promos[0]; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-white border border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all duration-500 flex flex-col h-full rounded-none overflow-hidden"
    >
      <Link href={`/promo/${promo.slug}`} className="absolute inset-0 z-10" aria-label={`Lihat detail promo ${promo.title}`} />
      
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-gray-100">
        <Image 
          src={promo.image} 
          alt={promo.title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out" 
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-gray-900 text-white text-[9px] uppercase tracking-widest font-black px-3 py-1.5 shadow-md">
            {promo.badge}
          </span>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <p className="absolute bottom-4 left-4 right-4 text-white font-black text-sm uppercase tracking-tight leading-tight z-20">
          {promo.highlight}
        </p>
      </div>
      
      <div className="p-5 flex flex-col flex-grow relative z-0">
        <h3 className="font-black text-gray-900 text-lg uppercase tracking-tight mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
          {promo.title}
        </h3>
        
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">
          <Calendar size={12} />
          s.d. {promo.validUntil}
        </div>
        
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Detail <ArrowRight size={14} />
          </span>
          <a
            onClick={(e) => {
              e.stopPropagation();
              const domain = window.location.origin;
              const waText = `Halo Yusuf Suzuki, saya tertarik dengan promo:\n*${promo.title}*\n\nCek promo: ${domain}${promo.image}`;
              window.open(buildWhatsAppUrl(waText), "_blank");
            }}
            href="#"
            className="relative z-20 w-10 h-10 bg-gray-100 hover:bg-[#25D366] hover:text-white text-gray-500 flex items-center justify-center transition-colors"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// --- KOMPONEN UTAMA ---
export default function PromoSection() {
  if (!promos || promos.length === 0) return null;

  // 1. Sortir otomatis berdasarkan urgensi (tanggal terdekat)
  const sortedPromos = [...promos].sort((a, b) => {
    const dateA = parseIndonesianDate(a.validUntil).getTime();
    const dateB = parseIndonesianDate(b.validUntil).getTime();
    return dateA - dateB;
  });

  // 2. Batasi 5 Promo
  const displayPromos = sortedPromos.slice(0, 5); 

  const featuredPromo = displayPromos[0]; 
  const regularPromos = displayPromos.slice(1); 

  return (
    <section className="pt-16 pb-24 bg-gray-50 overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block bg-gray-200 text-gray-800 text-[10px] font-bold px-4 py-1.5 mb-4 uppercase tracking-widest">
            Penawaran Terbatas
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tighter">
            Promo Dealer Suzuki
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
            Manfaatkan penawaran spesial ini sebelum masa berlaku berakhir. Hubungi Yusuf Suzuki untuk konsultasi unit & simulasi kredit terbaik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* --- FEATURED PROMO (SPLIT LAYOUT) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            // Perubahan Utama: Menggunakan flex-col md:flex-row agar di laptop terbelah dua
            className="lg:col-span-8 group relative bg-gray-900 overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-800"
          >
            <Link href={`/promo/${featuredPromo.slug}`} className="absolute inset-0 z-10" />
            
            {/* SISI KIRI: GAMBAR (Mendapat jatah setengah layar di desktop) */}
            <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto bg-black flex items-center justify-center border-r border-gray-800">
              <Image 
                src={featuredPromo.image} 
                alt={featuredPromo.title} 
                fill
                priority
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            
            {/* SISI KANAN: TEKS & TOMBOL */}
            <div className="relative w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center z-20">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-red-600 text-white text-[10px] uppercase tracking-widest font-black px-3 py-1.5 shadow-lg">
                  {featuredPromo.badge}
                </span>
                <span className="bg-gray-800 text-gray-300 text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 border border-gray-700 hidden sm:inline-block">
                  Sisa waktu terbatas
                </span>
              </div>
              
              <h3 className="font-black text-white text-2xl md:text-3xl xl:text-4xl uppercase tracking-tighter leading-tight mb-4 group-hover:text-red-500 transition-colors">
                {featuredPromo.title}
              </h3>
              
              <p className="text-gray-400 text-sm md:text-base font-medium max-w-xl line-clamp-3 leading-relaxed">
                {featuredPromo.highlight}
              </p>
              
              <div className="mt-8">
                <span className="bg-white text-gray-900 px-6 py-3.5 text-[10px] uppercase tracking-widest font-black inline-flex items-center gap-2 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  Ambil Promo <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </motion.div>

          {/* --- 2 PROMO KECIL (Kanan) --- */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {regularPromos.slice(0, 2).map((promo, i) => (
              <PromoCard key={promo.slug} promo={promo} index={i + 1} />
            ))}
          </div>
        </div>

        {/* --- 2 PROMO KECIL (Bawah) --- */}
        {regularPromos.length > 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 lg:mt-8">
            {regularPromos.slice(2, 4).map((promo, i) => (
              <PromoCard key={promo.slug} promo={promo} index={i + 3} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="/promo" 
            className="inline-flex items-center gap-3 bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-[11px] uppercase tracking-widest font-black px-10 py-4 transition-all duration-300 shadow-sm hover:shadow-xl active:scale-95"
          >
            Lihat Semua Promo <ArrowRight size={16} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}