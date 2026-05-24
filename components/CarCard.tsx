"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles, TrendingUp, Tag } from "lucide-react";
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

  const formatMaskedDiscount = (amount: number) => {
    const millions = Math.floor(amount / 1000000).toString();
    if (millions.length > 1) {
      return `${millions[0]}x.000.000`;
    }
    return `${millions}.000.000`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative bg-[#0c0c0c] overflow-hidden border border-white/8 hover:border-red-600/60 transition-all duration-500 flex flex-col h-full"
    >
      {/* ── RED TOP EDGE LINE ── */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-red-600/90 via-red-600/40 to-transparent z-20 pointer-events-none" />

      {/* ══════════════════════════════════════ */}
      {/* 1. IMAGE SECTION                       */}
      {/* ══════════════════════════════════════ */}
      <div className="relative aspect-[4/3] sm:h-60 overflow-hidden bg-[#111] shrink-0">
        <Link href={`/mobil/${car.slug}`} className="absolute inset-0 z-10" aria-label={`Lihat detail ${car.name}`} />

        {/* Car image — grayscale + contrast like reference */}
        <Image
          src={car.heroImage || "/logo.png"}
          alt={car.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale contrast-110 brightness-75"
        />

        {/* Dark vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-black/30 to-black/20 pointer-events-none" />
        {/* Red diagonal light streak (like reference) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "linear-gradient(120deg, transparent 0%, transparent 40%, rgba(220,38,38,0.35) 41%, transparent 44%)",
          }}
        />
        {/* Bottom red glow */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-red-700/20 to-transparent pointer-events-none" />

        {/* ── GEOMETRIC CLIP CORNER (top-left notch like reference) ── */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(135deg, #0c0c0c 18px, transparent 18px)",
          }}
        />

        {/* ── CATEGORY LABEL — mimicking "SUZUKI VISUAL AREA" style ── */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 pointer-events-none">
          <span className="h-2 w-2 bg-red-600 flex-shrink-0" />
          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.22em] text-white/80">
            {car.category}
          </span>
        </div>

        {/* ── STATUS BADGES (top-right) ── */}
        <div className="absolute top-3 right-3 z-20 flex flex-col gap-1.5 pointer-events-none">
          {car.isNew && (
            <span className="bg-red-600 text-white text-[8px] sm:text-[9px] uppercase tracking-[0.18em] font-black px-2 py-1 flex items-center gap-1">
              <Sparkles size={9} /> Baru
            </span>
          )}
          {car.isBestSeller && (
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[8px] sm:text-[9px] uppercase tracking-[0.18em] font-black px-2 py-1 flex items-center gap-1">
              <TrendingUp size={9} /> Laris
            </span>
          )}
        </div>

        {/* ── BOTTOM RED LINE inside image (like reference) ── */}
        <div className="absolute bottom-6 left-4 right-4 h-px bg-gradient-to-r from-red-600/70 via-white/15 to-transparent pointer-events-none z-10" />
      </div>

      {/* ══════════════════════════════════════ */}
      {/* 2. CONTENT SECTION                     */}
      {/* ══════════════════════════════════════ */}
      <div className="p-3 sm:p-5 flex flex-col flex-grow relative bg-[#0c0c0c]">

        {/* Subtle inner top separator */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/5" />

        <div className="mb-4 sm:mb-5 flex-grow">
          {/* Car name */}
          <h3 className="font-black text-white text-sm sm:text-lg leading-tight uppercase tracking-tight mb-3 group-hover:text-red-500 transition-colors duration-300 line-clamp-1">
            <Link href={`/mobil/${car.slug}`} className="before:absolute before:inset-0 before:z-0">
              {car.name}
            </Link>
          </h3>

          {/* Price + discount */}
          <div className="flex flex-col gap-1">
            {car.maxDiscount && car.maxDiscount > 0 ? (
              <span className="text-red-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] flex items-center gap-1">
                <Tag size={9} /> Diskon s/d {formatMaskedDiscount(car.maxDiscount)}
              </span>
            ) : null}

            <p className="text-white font-black text-base sm:text-xl truncate">
              {car.startingPrice}
            </p>
            <p className="text-gray-500 text-[10px] sm:text-xs font-medium uppercase tracking-wider">
              Angsuran {car.monthlyInstallment}/bln
            </p>
          </div>
        </div>

        {/* ── ACTION BUTTONS ── */}
        <div className="grid grid-cols-2 gap-2 mt-auto relative z-20">
          <Link
            href={`/mobil/${car.slug}`}
            className="bg-transparent border border-white/15 hover:border-red-600/70 text-gray-400 hover:text-white text-[9px] sm:text-[10px] uppercase tracking-[0.14em] font-black py-2.5 sm:py-3 flex items-center justify-center gap-1.5 transition-all duration-200"
          >
            Detail
            <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <a
            href={buildWhatsAppUrl(customWaMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white text-[9px] sm:text-[10px] uppercase tracking-[0.14em] font-black py-2.5 sm:py-3 flex items-center justify-center gap-1.5 transition-colors duration-200 border border-red-500"
            title="Chat WhatsApp"
          >
            <MessageCircle size={13} /> Tanya
          </a>
        </div>
      </div>
    </motion.div>
  );
}