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
      className="group relative bg-white rounded-none overflow-hidden border border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      {/* 1. IMAGE SECTION - Menggunakan Aspect Ratio 4:3 di HP agar mobil tidak gepeng/terpotong */}
      <div className="relative aspect-[4/3] sm:aspect-auto sm:h-60 overflow-hidden bg-gray-100 shrink-0">
        <Image
          src={car.heroImage || "/logo.png"} 
          alt={car.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        
        {/* Badges */}
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

      {/* 2. CONTENT SECTION - Lebih padat dan bersih */}
      <div className="p-3 sm:p-6 flex flex-col flex-grow">
        
        {/* Label promo disembunyikan di layar HP (hidden sm:block) agar tidak makan tempat */}
        {car.promo && (
          <div className="hidden sm:block border border-red-200 text-red-600 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-none w-fit mb-6 line-clamp-1">
            {car.promo}
          </div>
        )}

        <div className="mb-3 sm:mb-8 flex-grow">
          {/* Judul Mobil */}
          <p className="font-black text-gray-900 text-xs sm:text-2xl leading-tight uppercase tracking-tight mb-0.5 sm:mb-2 group-hover:text-red-600 transition-colors line-clamp-1 sm:line-clamp-2">
            <Link href={`/mobil/${car.slug}`} className="before:absolute before:inset-0">
              {car.name}
            </Link>
          </p>
          {/* Harga (Warna merah gelap di desktop, hitam di mobile agar rapi) */}
          <p className="text-gray-900 sm:text-red-600 font-bold text-sm sm:text-xl truncate">
            {car.startingPrice}
          </p>
          {/* Cicilan */}
          <p className="text-gray-400 text-[9px] sm:text-sm font-medium mt-0.5 sm:mt-1 truncate">
            Cicilan {car.monthlyInstallment}/bln
          </p>
        </div>

        {/* 3. ACTIONS BUTTON - Desain baru yang lebih elegan dan tidak berat sebelah */}
        <div className="flex items-stretch gap-1.5 sm:gap-3 mt-auto relative z-20">
          {/* Tombol Detail abu-abu terang */}
          <Link 
            href={`/mobil/${car.slug}`} 
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 text-[9px] sm:text-sm uppercase tracking-widest font-bold py-2 sm:py-3.5 rounded-none text-center transition-colors flex items-center justify-center gap-1 sm:gap-2"
          >
            <span className="sm:hidden">DETAIL</span>
            <span className="hidden sm:inline">LIHAT DETAIL</span>
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4 hidden sm:block" />
          </Link>
          
          {/* Tombol WA Hijau (High Conversion) */}
          <a
            href={buildWhatsAppUrl(customWaMsg)} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#25D366] hover:bg-[#1EBE5D] text-white px-3 sm:px-4 rounded-none transition-all duration-300"
            title="Chat WhatsApp"
          >
            <MessageCircle size={16} className="sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}