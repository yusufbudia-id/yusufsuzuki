"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles, TrendingUp, Tag } from "lucide-react";
import { Car } from "@/data/cars";
import { buildWhatsAppUrl, formatCurrency } from "@/lib/utils";

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
      className="group relative bg-white rounded-none overflow-hidden border border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all duration-500 flex flex-col h-full"
    >
      {/* 1. IMAGE SECTION - Tetap Bersih dan Elegan */}
      <div className="relative aspect-[4/3] sm:aspect-auto sm:h-60 overflow-hidden bg-gray-50 shrink-0">
        <Link href={`/mobil/${car.slug}`} className="absolute inset-0 z-10" aria-label={`Lihat detail ${car.name}`}></Link>
        <Image
          src={car.heroImage || "/logo.png"} 
          alt={car.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex gap-1.5 flex-wrap z-20 pointer-events-none">
          <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[8px] sm:text-[10px] uppercase tracking-widest font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-none shadow-sm">
            {car.category}
          </span>
          {car.isNew && (
            <span className="bg-gray-900 text-white text-[8px] sm:text-[10px] uppercase tracking-widest font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-none flex items-center gap-1 shadow-sm">
              <Sparkles size={10} className="w-3 h-3" /> <span className="hidden sm:inline">Baru</span>
            </span>
          )}
          {car.isBestSeller && (
            <span className="bg-gray-900 text-white text-[8px] sm:text-[10px] uppercase tracking-widest font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-none flex items-center gap-1 shadow-sm">
              <TrendingUp size={10} className="w-3 h-3" /> <span className="hidden sm:inline">Laris</span>
            </span>
          )}
        </div>
      </div>

      {/* 2. CONTENT SECTION */}
      <div className="p-3 sm:p-5 flex flex-col flex-grow relative">
        <div className="mb-4 sm:mb-6 flex-grow">
          {/* Judul Mobil */}
          <h3 className="font-black text-gray-900 text-sm sm:text-xl leading-tight uppercase tracking-tight mb-3 group-hover:text-red-600 transition-colors line-clamp-1">
            <Link href={`/mobil/${car.slug}`} className="before:absolute before:inset-0 before:z-0">
              {car.name}
            </Link>
          </h3>
          
          {/* Harga & Promo Info */}
          <div className="flex flex-col gap-1">
            {/* Info Diskon yang rapi dan tidak merusak layout */}
            {car.maxDiscount && car.maxDiscount > 0 && (
              <span className="text-green-600 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                <Tag size={10} /> Diskon s/d {formatCurrency(car.maxDiscount).replace('Rp', '').trim()}
              </span>
            )}
            
            <p className="text-gray-900 font-black text-base sm:text-xl truncate">
              {car.startingPrice}
            </p>
            <p className="text-gray-500 text-[10px] sm:text-xs font-medium">
              Angsuran {car.monthlyInstallment}/bln
            </p>
          </div>
        </div>

        {/* 3. ACTIONS BUTTON - Sejajar 50:50 */}
        <div className="grid grid-cols-2 gap-2 mt-auto relative z-20">
          <Link 
            href={`/mobil/${car.slug}`} 
            className="bg-transparent border border-gray-200 hover:border-gray-900 text-gray-600 hover:text-gray-900 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold py-2.5 sm:py-3 rounded-none flex items-center justify-center gap-1.5 transition-colors"
          >
            Detail <ArrowRight size={12} className="hidden sm:block group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href={buildWhatsAppUrl(customWaMsg)} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1EBE5D] text-white text-[9px] sm:text-[10px] uppercase tracking-widest font-bold py-2.5 sm:py-3 rounded-none flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            title="Chat WhatsApp"
          >
            <MessageCircle size={14} /> Tanya
          </a>
        </div>
      </div>
    </motion.div>
  );
}