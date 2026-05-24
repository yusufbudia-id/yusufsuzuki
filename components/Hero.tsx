"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  CalendarCheck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Fuel,
  Globe,
  Star,
} from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

// --- GAMBAR BANNER ---
const banners = [
  "/mobil/fronx-1.jpg",
  "/mobil/jimny-1.jpg",
  "/mobil/xl7-1.jpg",
];

// --- STAT CARDS BAWAH (Mirip design referensi) ---
const stats = [
  {
    id: 1,
    icon: Globe,
    label: "JARINGAN RESMI",
    sublabel: "NASIONAL",
    value: "400+",
    unit: "DEALER",
  },
  {
    id: 2,
    icon: Fuel,
    label: "EFISIENSI BAHAN BAKAR",
    sublabel: "COMBINED",
    value: "20.4",
    unit: "KM/L*",
  },
  {
    id: 3,
    icon: Star,
    label: "REKAYASA JEPANG",
    sublabel: "WARISAN LEGASI",
    value: "110+",
    unit: "TAHUN",
  },
  {
    id: 4,
    icon: ShieldCheck,
    label: "KEPUASAN PELANGGAN",
    sublabel: "YOGYAKARTA",
    value: "NO.1",
    unit: "TERPERCAYA",
  },
];

const sliderVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export default function Hero({ cityName }: { cityName?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const waMessage = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan ingin tanya tentang mobil Suzuki.`
    : `Halo Yusuf Suzuki, saya ingin tanya tentang mobil Suzuki.`;

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next >= banners.length) return 0;
      if (next < 0) return banners.length - 1;
      return next;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, []);

  const displayCity = cityName || "Daerah Istimewa Yogyakarta";

  return (
    <section className="relative w-full min-h-screen flex flex-col bg-[#0a0a0a] overflow-hidden font-manrope">

      {/* ============================================================ */}
      {/* BACKGROUND: Noise texture + subtle red glow                  */}
      {/* ============================================================ */}
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Red ambient glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-red-700/10 blur-[100px] rounded-full z-0 pointer-events-none" />
      {/* Subtle red glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-red-800/8 blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* Diagonal corner accent — bottom left (red triangle) */}
      <div
        className="absolute bottom-[72px] left-0 w-10 h-10 bg-red-600 z-30 pointer-events-none"
        style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
      />

      {/* ============================================================ */}
      {/* TOP-RIGHT BRAND BADGE                                         */}
      {/* ============================================================ */}
      <div className="absolute top-20 right-6 lg:right-10 z-40 hidden lg:block">
        <div className="border border-red-600/40 bg-black/60 backdrop-blur-md px-5 py-3 text-right">
          {/* Diagonal accent lines (///) */}
          <div className="flex justify-end gap-0.5 mb-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-0.5 h-5 bg-red-600 rotate-[20deg]"
              />
            ))}
          </div>
          <p className="text-white font-black text-xl tracking-widest uppercase leading-none">
            SUZUKI
          </p>
          <p className="text-gray-400 text-[9px] tracking-[0.3em] uppercase mt-0.5">
            SINCE 1909
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MAIN CONTENT AREA (fills above stats bar)                     */}
      {/* ============================================================ */}
      <div className="relative z-20 flex-1 flex flex-col justify-center pt-20 pb-4">
        <div className="max-w-screen-2xl mx-auto w-full px-4 sm:px-8 lg:px-12 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center min-h-[calc(100vh-200px)]">

            {/* ---- LEFT COLUMN ---- */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start justify-center z-30 py-10 lg:py-0">

              {/* Eyebrow: "BUILT FOR MORE" style */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-red-500 opacity-75 rounded-none" />
                  <span className="relative inline-flex h-2 w-2 bg-red-600" />
                </div>
                <span className="text-red-500 font-black text-[11px] tracking-[0.3em] uppercase">
                  Layanan Penjualan Terpercaya
                </span>
              </motion.div>

              {/* Main Headline — matching reference: mixed white + red */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="font-black uppercase leading-[0.95] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
              >
                <span className="text-white block">
                  DEALER SUZUKI
                </span>
                <span className="text-red-600 block">
                  {cityName ? cityName.toUpperCase() : "JOGJA"}
                </span>
                <span className="text-white block">
                  RESMI TERPERCAYA
                </span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-5"
              >
                <div className="h-px w-8 bg-red-600" />
                <span className="text-gray-400 text-[11px] font-bold tracking-[0.15em] uppercase">
                  Pusat Promo & Harga Terbaru
                </span>
                <div className="w-1 h-1 bg-gray-600 rotate-45" />
                <span className="text-gray-400 text-[11px] font-bold tracking-[0.15em] uppercase">
                  Kredit Mudah
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-gray-400 text-sm leading-relaxed max-w-md mb-10"
              >
                Sebagai mitra terpercaya Anda, kami hadir untuk membantu mewujudkan
                mobil impian dengan penawaran harga paling kompetitif di wilayah{" "}
                <span className="text-gray-300">{displayCity}</span>, diskon eksklusif
                bulanan, serta layanan purna jual yang terjamin kualitasnya bersama{" "}
                <strong className="text-white">Yusuf Suzuki</strong>.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex flex-col sm:flex-row gap-3 w-full"
              >
                {/* Primary: red solid */}
                <a
                  href={`${WA_BASE_URL}?text=${encodeURIComponent(waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black text-[11px] tracking-[0.2em] uppercase px-8 py-4 transition-all duration-200 w-full sm:w-auto border border-red-500 hover:border-red-400"
                >
                  <MessageCircle size={15} />
                  Explore Models
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Secondary: dark outline */}
                <Link
                  href="/test-drive"
                  className="group inline-flex items-center justify-center gap-3 bg-transparent text-white border border-gray-600 hover:border-white font-black text-[11px] tracking-[0.2em] uppercase px-8 py-4 transition-all duration-200 w-full sm:w-auto"
                >
                  <CalendarCheck size={15} />
                  Book A Test Drive
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* ---- RIGHT COLUMN: Image area with geometric frames ---- */}
            <div className="lg:col-span-7 xl:col-span-7 relative h-[380px] lg:h-[calc(100vh-200px)] flex items-center justify-center overflow-visible">

              {/* Main image container with angular clip */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative w-full h-full"
              >
                {/* Outer geometric border accent (top-left corner bracket) */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-red-600/70 z-20 pointer-events-none" />
                {/* Bottom-right corner bracket */}
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-red-600/70 z-20 pointer-events-none" />

                {/* Diagonal accent lines top-right */}
                <div className="absolute top-6 right-20 flex gap-1 z-20 pointer-events-none">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-0.5 h-8 bg-red-600/60 rotate-[20deg]" />
                  ))}
                </div>

                {/* Image slider */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }}
                >
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={sliderVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(_, { offset }) => {
                        if (offset.x < -50) paginate(1);
                        else if (offset.x > 50) paginate(-1);
                      }}
                      className="absolute inset-0 cursor-grab active:cursor-grabbing"
                    >
                      <Image
                        src={banners[currentIndex]}
                        alt={`Suzuki ${cityName || "Jogja"} Hero ${currentIndex + 1}`}
                        fill
                        priority
                        quality={90}
                        className="object-cover object-center pointer-events-none"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent pointer-events-none z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/30 pointer-events-none z-10" />
                </div>

                {/* Decorative frame border around image */}
                <div
                  className="absolute inset-0 border border-gray-700/40 pointer-events-none z-10"
                  style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* STATS BAR — 4 columns, matching reference design              */}
      {/* ============================================================ */}
      <div className="relative z-30 border-t border-gray-800/80 bg-black/70 backdrop-blur-md">
        {/* Red line accent top of stats bar */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-red-600/80 via-red-600/20 to-transparent" />

        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-800/60">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.08 }}
                className="flex items-start gap-4 px-6 py-5 group hover:bg-white/[0.02] transition-colors"
              >
                {/* Icon */}
                <div className="pt-0.5 flex-shrink-0">
                  <stat.icon
                    size={18}
                    className="text-red-600 group-hover:text-red-500 transition-colors"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  {/* Label */}
                  <p className="text-gray-500 text-[9px] font-bold tracking-[0.2em] uppercase leading-tight">
                    {stat.label}
                  </p>
                  <p className="text-gray-600 text-[8px] tracking-[0.15em] uppercase mb-1.5">
                    {stat.sublabel}
                  </p>

                  {/* Big value */}
                  <p className="text-red-500 font-black text-2xl sm:text-3xl leading-none tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5">
                    {stat.unit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Slide counter + nav — bottom right inside stats bar */}
        <div className="absolute right-4 sm:right-10 bottom-0 top-0 flex items-center gap-3">
          {/* Slide counter */}
          <span className="text-[10px] font-black tracking-[0.15em] hidden sm:block">
            <span className="text-red-500">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-gray-600"> / </span>
            <span className="text-gray-500">
              {String(banners.length).padStart(2, "0")}
            </span>
          </span>

          {/* Prev / Next */}
          <button
            onClick={() => paginate(-1)}
            className="w-9 h-9 border border-gray-700 hover:border-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-9 h-9 border border-gray-700 hover:border-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>

    </section>
  );
}