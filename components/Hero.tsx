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
  Award,
} from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

// --- BANNERS ---
const banners = [
  "/hero/banner-1.jpg",
  "/hero/banner-2.jpg",
  "/hero/banner-3.jpg",
];

// --- STATS CARDS (bottom row, matching reference design) ---
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
    label: "EFISIENSI BBM",
    sublabel: "COMBINED",
    value: "20.4",
    unit: "KM/L*",
  },
  {
    id: 3,
    icon: Award,
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
    unit: "TERPERCAYA*",
  },
];

const sliderVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? "100%" : "-100%", opacity: 0 }),
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
      const next = prev + newDirection;
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
    <section className="relative w-full bg-[#0a0a0a] font-manrope text-white overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* =========================================================== */}
      {/* BACKGROUND LAYERS                                            */}
      {/* =========================================================== */}

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Red ambient glow — bottom center */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[220px] w-[70%] -translate-x-1/2 bg-red-700/10 blur-[90px]" />
      {/* Red glow behind right image area */}
      <div className="pointer-events-none absolute right-0 top-0 z-0 h-full w-[55%] bg-gradient-to-l from-red-900/12 via-transparent to-transparent" />
      {/* Left vignette so text stays legible over images */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />

      {/* =========================================================== */}
      {/* RED VERTICAL LINE — far left (exact match to reference)      */}
      {/* =========================================================== */}
      <div className="pointer-events-none absolute left-[22px] top-0 z-20 hidden h-full w-px bg-red-600/60 lg:block" />
      {/* Horizontal cap at top */}
      <div className="pointer-events-none absolute left-[22px] top-[80px] z-20 hidden h-px w-16 bg-red-600/60 lg:block" />

      {/* =========================================================== */}
      {/* RED TRIANGLE — bottom-left corner (exact reference detail)   */}
      {/* =========================================================== */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-40 h-10 w-10"
        style={{ background: "#dc2626", clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
      />

      {/* =========================================================== */}
      {/* RIGHT VISUAL PANEL — two layered geometric image frames      */}
      {/* =========================================================== */}
      <div className="absolute inset-y-0 right-0 z-10 w-[55%] hidden lg:block">

        {/* ── BACK FRAME (smaller, top-left of right panel) ── */}
        {/* Matches the Jimny / back-car frame in reference */}
        <div
          className="absolute left-[4%] top-[12%] h-[46%] w-[62%] overflow-hidden border border-white/10 bg-[#111]"
          style={{
            clipPath:
              "polygon(0 0, 88% 0, 100% 6%, 100% 94%, 96% 100%, 12% 100%, 0 94%, 0 0)",
          }}
        >
          {/* Red accent vertical stripe left edge */}
          <div className="absolute left-0 top-0 z-10 h-full w-1 bg-red-600/70" />

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`back-${currentIndex}`}
              custom={direction}
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={banners[(currentIndex + 1) % banners.length]}
                alt="Suzuki Model Back"
                fill
                quality={85}
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a]/60" />
        </div>

        {/* ── FRONT FRAME (larger, bottom-right, overlapping) ── */}
        {/* Matches the Baleno / main hero car in reference */}
        <div
          className="absolute bottom-[10%] right-[2%] h-[60%] w-[78%] overflow-hidden border border-white/8 bg-[#0d0d0d]"
          style={{
            clipPath: "polygon(4% 0, 96% 0, 100% 5%, 100% 100%, 0 100%, 0 5%)",
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`front-${currentIndex}`}
              custom={direction}
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.85, ease: "easeInOut" }}
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
                alt={`Suzuki ${cityName || "Jogja"} Hero`}
                fill
                priority
                quality={90}
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a]/30" />
          {/* Bottom red line inside frame */}
          <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-red-600/60 via-white/15 to-transparent" />
        </div>

        {/* ── DIAGONAL ACCENT LINES (///) — top-right of right panel ── */}
        <div className="absolute right-[10%] top-[10%] z-20 flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-10 w-0.5 rotate-[18deg] bg-red-600/80" />
          ))}
        </div>

        {/* ── SUZUKI BRAND BADGE — top-right corner ── */}
        <div
          className="absolute right-[5%] top-[10%] z-30 border border-red-600/40 bg-black/80 backdrop-blur-sm"
          style={{ clipPath: "polygon(8% 0, 92% 0, 100% 12%, 100% 100%, 0 100%, 0 12%)" }}
        >
          <div className="flex justify-end gap-0.5 px-6 pt-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-4 w-[2px] rotate-[18deg] bg-red-600" />
            ))}
          </div>
          <div className="px-6 pb-4 pt-1 text-right">
            <p className="text-lg font-black uppercase tracking-[0.22em] text-red-500">SUZUKI</p>
            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-gray-500">SINCE 1909</p>
          </div>
        </div>
      </div>

      {/* =========================================================== */}
      {/* MAIN CONTENT (LEFT COLUMN)                                   */}
      {/* =========================================================== */}
      <div className="relative z-20 flex items-center" style={{ minHeight: "calc(100svh - 148px)" }}>
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16 py-20 lg:py-0">

          {/* "BUILT FOR MORE" eyebrow — exact reference style */}
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 text-[11px] font-black uppercase tracking-[0.32em] text-red-500"
          >
            Layanan Penjualan Terpercaya
          </motion.p>

          {/* BIG HEADLINE — 3 lines, line 2 in red (matches "BOLD" in reference) */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="font-black uppercase leading-[0.93] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.2rem)" }}
          >
            <span className="block text-white">
              {cityName ? `Dealer Resmi` : "Dealer Suzuki"}
            </span>
            <span className="block text-red-600">
              {cityName ? cityName.toUpperCase() : "JOGJA"}
            </span>
            <span className="block text-white">
              {cityName ? "Suzuki Terpercaya" : "Resmi Terpercaya"}
            </span>
          </motion.h1>

          {/* Sub-caption */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18 }}
            className="mt-5 flex flex-wrap items-center gap-3"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              Pusat Promo & Harga Terbaru
            </span>
            <span className="inline-block h-1 w-1 rotate-45 bg-gray-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              Proses Kredit Mudah
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-5 max-w-[480px] text-sm leading-[1.8] text-gray-400"
          >
            Sebagai mitra terpercaya Anda, kami hadir untuk membantu mewujudkan
            mobil impian dengan penawaran harga paling kompetitif di wilayah{" "}
            <span className="text-gray-300">{displayCity}</span>, diskon eksklusif
            bulanan, serta layanan purna jual yang terjamin kualitasnya bersama{" "}
            <strong className="font-black text-white">Yusuf Suzuki</strong>.
          </motion.p>

          {/* CTA BUTTONS — matching reference: red solid + dark outline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={`${WA_BASE_URL}?text=${encodeURIComponent(waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-red-600 px-7 py-[14px] text-[11px] font-black uppercase tracking-[0.18em] text-white transition-all hover:bg-red-700 border border-red-500"
            >
              <MessageCircle size={15} strokeWidth={2.5} />
              Explore Models
              <ArrowRight
                size={14}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <Link
              href="/test-drive"
              className="group inline-flex items-center gap-3 border border-gray-600 bg-transparent px-7 py-[14px] text-[11px] font-black uppercase tracking-[0.18em] text-white transition-all hover:border-white"
            >
              <CalendarCheck size={15} strokeWidth={2.5} />
              Book A Test Drive
              <ArrowRight
                size={14}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* =========================================================== */}
      {/* STATS BAR — 4 cards, bottom strip (exact reference layout)   */}
      {/* =========================================================== */}
      <div className="relative z-30 border-t border-gray-800/70 bg-black/75 backdrop-blur-sm"
        style={{ height: "148px" }}
      >
        {/* Red gradient top edge */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-red-600/90 via-red-600/30 to-transparent" />

        <div className="mx-auto h-full max-w-7xl px-6 sm:px-10 lg:px-16">
          {/* Cards grid — left-aligned like reference (doesn't span full width) */}
          <div className="flex h-full items-stretch">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.07 }}
                className={`flex items-center gap-4 px-6 py-5 border-r border-gray-800/60 transition-colors hover:bg-white/[0.025] min-w-[160px] ${idx === 0 ? "pl-0" : ""}`}
              >
                {/* Icon */}
                <stat.icon
                  size={20}
                  className="shrink-0 text-red-600"
                  strokeWidth={2}
                />
                {/* Text stack */}
                <div>
                  <p className="text-[8px] font-black uppercase tracking-[0.22em] text-gray-500 leading-tight">
                    {stat.label}
                  </p>
                  <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-gray-600 mt-0.5 mb-2">
                    {stat.sublabel}
                  </p>
                  <p className="text-[1.75rem] font-black leading-none tracking-tight text-red-500">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.18em] text-gray-500">
                    {stat.unit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── SLIDE COUNTER + PREV/NEXT ARROWS (bottom-right) ── */}
        <div className="absolute bottom-0 right-4 top-0 flex items-center gap-4 sm:right-8 lg:right-14">
          {/* Counter: "01 / 03" style */}
          <div className="hidden items-center gap-2 sm:flex">
            <span className="text-sm font-black tracking-[0.14em] text-red-500">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-600">/</span>
            <span className="text-sm font-black tracking-[0.14em] text-gray-500">
              {String(banners.length).padStart(2, "0")}
            </span>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center border border-gray-700 bg-black/60 text-gray-300 transition-all hover:border-red-600 hover:text-red-500"
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center border border-gray-700 bg-black/60 text-gray-300 transition-all hover:border-red-600 hover:text-red-500"
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* =========================================================== */}
      {/* MOBILE: image placeholder card (shown below fold on mobile)  */}
      {/* =========================================================== */}
      <div className="relative z-20 block lg:hidden">
        <div className="relative h-[260px] w-full overflow-hidden border-t border-gray-800/60">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`mobile-${currentIndex}`}
              custom={direction}
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={banners[currentIndex]}
                alt="Suzuki Mobile Hero"
                fill
                quality={80}
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
          {/* Mobile slide dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                className={`h-1 transition-all ${i === currentIndex ? "w-6 bg-red-600" : "w-3 bg-gray-600"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}