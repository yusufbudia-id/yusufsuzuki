"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles, TrendingUp, Tag } from "lucide-react";
import { Car } from "@/data/cars";
import { buildWhatsAppUrl, formatCurrency } from "@/lib/utils"; // Pastikan formatCurrency diimport

interface CarCardProps {
  car: Car;
  index?: number;
  cityName?: string;
}

export default function CarCard({ car, index = 0, cityName }: CarCardProps) {
  
  const customWaMsg = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan tertarik dengan mobil ${car.name}. Mohon info harga dan promo terbarunya.`
    : car.whatsappMessage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative bg-white rounded-none overflow-hidden border border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* 1. IMAGE SECTION */}
      <div className="relative aspect-[4/3] sm:aspect-auto sm:h-60 overflow-hidden bg-gray-50 shrink-0">
        <Link href={`/mobil/${car.slug}`} className="absolute inset-0 z-10" aria-label={`Lihat detail ${car.name}`}></Link>
        
        <Image
          src={car.heroImage || "/logo.png"} 
          alt={car.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Badges (Kategori & Label) */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex flex-col gap-1.5 z-20 pointer-events-none">
          <div className="flex gap-1.5 flex-wrap">
            <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[8px] sm:text-[10px] uppercase tracking-widest font-bold px-2 py-1 sm:px-2.5 sm:py-1 rounded-none shadow-sm">
              {car.category}
            </span>
            {car.isNew && (
              <span className="bg-red-600 text-white text-[8px] sm:text-[10px] uppercase tracking-widest font-bold px-2 py-1 sm:px-2.5 sm:py-1 rounded-none flex items-center gap-1 shadow-sm">
                <Sparkles size={10} /> Baru
              </span>
            )}
            {car.isBestSeller && (
              <span className="bg-gray-900 text-white text-[8px] sm:text-[10px] uppercase tracking-widest font-bold px-2 py-1 sm:px-2.5 sm:py-1 rounded-none flex items-center gap-1 shadow-sm">
                <TrendingUp size={10} /> Laris
              </span>
            )}
          </div>
        </div>

        {/* --- BANNER DISKON (FITUR BARU) --- */}
        {car.maxDiscount && car.maxDiscount > 0 ? (
          <div className="absolute bottom-0 left-0 w-full bg-red-600 text-white z-20 py-1.5 sm:py-2 px-3 flex items-center justify-between pointer-events-none shadow-inner">
            <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Tag size={12} className="hidden sm:block" /> Promo Diskon
            </span>
            <span className="text-xs sm:text-sm font-black tracking-tight">
              S/D {formatCurrency(car.maxDiscount).replace('Rp', '').trim()}
            </span>
          </div>
        ) : null}
      </div>

      {/* 2. CONTENT SECTION */}
      <div className="p-3 sm:p-5 flex flex-col flex-grow relative">
        <div className="mb-4 sm:mb-6 flex-grow">
          {/* Judul Mobil */}
          <h3 className="font-black text-gray-900 text-sm sm:text-2xl leading-none uppercase tracking-tight mb-2 group-hover:text-red-600 transition-colors line-clamp-1">
            <Link href={`/mobil/${car.slug}`} className="before:absolute before:inset-0 before:z-0">
              {car.name}
            </Link>
          </h3>
          
          {/* Harga & Cicilan (Lebih Rapat) */}
          <div className="flex flex-col gap-0.5">
            <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest font-bold">Mulai Dari</p>
            <p className="text-gray-900 font-black text-base sm:text-xl truncate">
              {car.startingPrice}
            </p>
            <p className="text-red-600 text-[10px] sm:text-xs font-bold mt-1">
              Angsuran {car.monthlyInstallment}/bln
            </p>
          </div>
        </div>

        {/* 3. ACTIONS BUTTON (Desain Baru: Tombol WA jadi dominan) */}
        <div className="flex flex-col gap-2 relative z-20">
          <a
            href={buildWhatsAppUrl(customWaMsg)} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-[10px] sm:text-xs uppercase tracking-widest font-black py-2.5 sm:py-3.5 rounded-none text-center transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
            title="Chat WhatsApp"
          >
            <MessageCircle size={16} />
            Minta Penawaran
          </a>
          
          <Link 
            href={`/mobil/${car.slug}`} 
            className="w-full bg-white border border-gray-200 hover:border-gray-900 text-gray-600 hover:text-gray-900 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold py-2 sm:py-2.5 rounded-none text-center transition-colors flex items-center justify-center gap-1.5"
          >
            Lihat Spesifikasi & Detail
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}