"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { Car } from "@/data/cars";
import { buildWhatsAppUrl } from "@/lib/utils";

interface CarCardProps {
  car: Car;
  index?: number;
  cityName?: string; // <-- 1. Tambahkan penerima cityName di sini
}

export default function CarCard({ car, index = 0, cityName }: CarCardProps) {
  
  // 2. BUAT PESAN WHATSAPP OTOMATIS BERDASARKAN KOTA & NAMA MOBIL
  const customWaMsg = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan tertarik dengan mobil ${car.name}. Mohon info harga dan promo terbarunya.`
    : car.whatsappMessage; // Jika tidak ada kota (di Beranda Utama), pakai pesan default dari data

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      // TAMBAHAN: h-full agar tinggi kartu selalu sejajar/rata
      className="group relative bg-white rounded-none overflow-hidden border border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      {/* IMAGE SECTION - Di HP tinggi 130px (h-32), di Laptop 240px (sm:h-60) */}
      <div className="relative h-32 sm:h-60 overflow-hidden bg-gray-100 shrink-0">
        <Image
          src={car.heroImage || "/logo.png"} 
          alt={car.name}
          fill
          // Sizes disesuaikan karena di HP akan muat 2 kartu (50vw)
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        
        {/* BADGES SECTION - Padding dan Font mengecil di HP */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex gap-1 sm:gap-2 flex-wrap z-10">
          <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[8px] sm:text-[10px] uppercase tracking-widest font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-none shadow-sm">
            {car.category}
          </span>
          {car.isNew && (
            <span className="bg-gray-900 text-white text-[8px] sm:text-[10px] uppercase tracking-widest font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-none flex items-center gap-1 sm:gap-1.5 shadow-sm">
              <Sparkles size={10} className="sm:w-3 sm:h-3" /> <span className="hidden sm:inline">Baru</span>
            </span>
          )}
          {car.isBestSeller && (
            <span className="bg-gray-900 text-white text-[8px] sm:text-[10px] uppercase tracking-widest font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-none flex items-center gap-1 sm:gap-1.5 shadow-sm">
              <TrendingUp size={10} className="sm:w-3 sm:h-3" /> <span className="hidden sm:inline">Laris</span>
            </span>
          )}
        </div>
      </div>

      {/* CONTENT SECTION - Padding lebih kecil di HP (p-3) */}
      <div className="p-3 sm:p-6 flex flex-col flex-grow">
        
        {car.promo && (
          <div className="border border-red-200 text-red-600 text-[8px] sm:text-[10px] uppercase tracking-widest font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-none w-fit mb-3 sm:mb-6 line-clamp-1">
            {car.promo}
          </div>
        )}

        <div className="mb-4 sm:mb-8 flex-grow">
          {/* Judul: Dibatasi maksimal 2 baris (line-clamp) agar rapi */}
          <p className="font-black text-gray-900 text-sm sm:text-2xl leading-tight uppercase tracking-tight mb-1 sm:mb-2 group-hover:text-red-600 transition-colors line-clamp-1 sm:line-clamp-2">
            <Link href={`/mobil/${car.slug}`} className="before:absolute before:inset-0">
              {car.name}
            </Link>
          </p>
          <p className="text-gray-900 font-bold text-xs sm:text-xl truncate">{car.startingPrice}</p>
          <p className="text-gray-500 text-[9px] sm:text-sm font-medium mt-0.5 sm:mt-1 truncate">
            Cicilan {car.monthlyInstallment}/bln
          </p>
        </div>

        {/* ACTIONS BUTTON - Dibuat ringkas di HP */}
        <div className="flex items-center gap-2 sm:gap-3 mt-auto relative z-20">
          <Link href={`/mobil/${car.slug}`} className="flex-1 bg-gray-900 group-hover:bg-black text-white text-[9px] sm:text-sm uppercase tracking-widest font-bold py-2 sm:py-3.5 rounded-none text-center transition-colors flex items-center justify-center gap-1 sm:gap-2">
            <span className="hidden sm:inline">Lihat Detail</span>
            <span className="sm:hidden">Detail</span>
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4" />
          </Link>
          
          <a
            href={buildWhatsAppUrl(customWaMsg)} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white border border-gray-300 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white text-[#25D366] p-2 sm:p-3.5 rounded-none transition-all duration-300 group/wa"
            title="Chat WhatsApp"
          >
            <MessageCircle size={16} className="transition-colors sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}