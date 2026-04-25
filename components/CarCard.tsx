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
}

export default function CarCard({ car, index = 0 }: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      // Tambahkan 'relative' di sini sebagai pondasi link transparan
      className="group relative bg-white rounded-none overflow-hidden border border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all duration-500 flex flex-col"
    >
      {/* 1. STRETCHED LINK (Link Transparan penutup seluruh kartu) */}
      <Link 
        href={`/mobil/${car.slug}`} 
        className="absolute inset-0 z-10"
        aria-label={`Lihat detail ${car.name}`} 
      />

      {/* Image Section - Area foto tetap dominan */}
      <div className="relative h-60 overflow-hidden bg-gray-100">
        <Image
          src={car.heroImage || "/logo.png"} 
          alt={car.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap z-20">
          <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-none shadow-sm">
            {car.category}
          </span>
          {car.isNew && (
            <span className="bg-gray-900 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-none flex items-center gap-1.5 shadow-sm">
              <Sparkles size={12} /> Baru
            </span>
          )}
          {car.isBestSeller && (
            <span className="bg-gray-900 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-none flex items-center gap-1.5 shadow-sm">
              <TrendingUp size={12} /> Best Seller
            </span>
          )}
        </div>
      </div>

      {/* Content Section - Jauh lebih bersih dan fokus */}
      <div className="p-6 flex flex-col flex-grow relative z-0">
        
        {car.promo && (
          <div className="border border-red-200 text-red-600 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-none w-fit mb-6 line-clamp-1">
            {car.promo}
          </div>
        )}

        {/* Info Utama: Nama, Harga, Cicilan */}
        <div className="mb-8 flex-grow">
          <h3 className="font-black text-gray-900 text-2xl leading-tight uppercase tracking-tight mb-2 group-hover:text-red-600 transition-colors">
            {car.name}
          </h3>
          <p className="text-gray-900 font-bold text-xl">{car.startingPrice}</p>
          <p className="text-gray-500 text-sm font-medium mt-1">Cicilan mulai {car.monthlyInstallment}/bln</p>
        </div>

        {/* Actions - Tetap tegas */}
        <div className="flex items-center gap-3">
          {/* 2. TOMBOL PALSU (Hanya visual, karena sudah tercover link transparan di atas) */}
          <div
            className="flex-1 bg-gray-900 group-hover:bg-black text-white text-sm uppercase tracking-widest font-bold py-3.5 rounded-none text-center transition-colors flex items-center justify-center gap-2"
          >
            Lihat Detail <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
          
          {/* 3. TOMBOL WA NYATA (z-20 agar posisinya di atas link transparan dan bisa diklik) */}
          <a
            href={buildWhatsAppUrl(car.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 flex items-center justify-center bg-white border border-gray-300 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white text-[#25D366] p-3.5 rounded-none transition-all duration-300 group/wa"
            title="Chat WhatsApp"
          >
            <MessageCircle size={20} className="transition-colors" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}