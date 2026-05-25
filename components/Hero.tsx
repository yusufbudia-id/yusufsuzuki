"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  CalendarCheck,
  ArrowRight,
  BatteryCharging,
  Cpu,
  Wrench,
  TrendingUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Car,
} from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

const banners = [
  "/mobil/jimny-1.jpg",
  "/mobil/xl7-1.jpg",
  "/mobil/fronx-1.jpg",
];

const heroCarImage = "/hero/banner-4.png";

const trustBadges = [
  {
    id: 1,
    title: "Beli Suzuki Pasti Untung",
    desc: "Harga terbaik & nilai jual tinggi",
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "Garansi Baterai 8 Tahun",
    desc: "Lithium-ion s/d 160.000 km",
    icon: BatteryCharging,
  },
  {
    id: 3,
    title: "Smart Hybrid Vehicle",
    desc: "Teknologi ISG hemat energi",
    icon: Cpu,
  },
  {
    id: 4,
    title: "Gratis Servis Berkala",
    desc: "Jasa & suku cadang s/d 50.000 km",
    icon: Wrench,
  },
];

const sliderVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1.02,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.98,
  }),
};

export default function Hero({ cityName }: { cityName?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const locationName = cityName || "Jogja";

  const waMessage = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan ingin tanya tentang mobil Suzuki.`
    : "Halo Yusuf Suzuki, saya ingin tanya tentang mobil Suzuki.";

  const paginate = (newDirection: number) => {
    setDirection(newDirection);

    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;

      if (nextIndex >= banners.length) return 0;
      if (nextIndex < 0) return banners.length - 1;

      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      paginate(1);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] pt-16 font-manrope text-white md:pt-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(220,38,38,0.13),transparent_30%),radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.055),transparent_24%),linear-gradient(135deg,#050505_0%,#0a0c0f_48%,#020202_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/88 to-[#050505]/45" />

      {/* SUBTLE TECHNICAL LINES */}
      <div className="pointer-events-none absolute left-6 top-8 z-10 hidden h-[calc(100%-96px)] w-px bg-red-600/35 md:block" />
      <div className="pointer-events-none absolute left-6 top-8 z-10 hidden w-24 border-t border-red-600/35 md:block" />
      <div className="pointer-events-none absolute right-12 top-28 z-10 hidden h-px w-64 bg-gradient-to-r from-transparent via-red-600/30 to-transparent lg:block" />

      {/* RIGHT VISUAL AREA - DESKTOP */}
<div className="absolute inset-y-0 right-0 z-10 hidden w-[58%] lg:block">
  <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-[#050505]" />

  {/* MAIN VISUAL FRAME */}
  <div
    className="absolute right-10 top-[16%] h-[54%] w-[74%] overflow-hidden border border-white/10 bg-[#080b0f]/80 shadow-2xl"
    style={{
      clipPath:
        "polygon(5% 0, 94% 0, 100% 9%, 100% 100%, 0 100%, 0 10%)",
    }}
  >
    {/* Background ambience */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_46%,rgba(220,38,38,0.20),transparent_34%),linear-gradient(135deg,#111827_0%,#050505_58%,#020202_100%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:54px_54px] opacity-25" />

    {/* Soft floor glow */}
    <div className="absolute bottom-6 left-[14%] h-24 w-[70%] rounded-full bg-black/70 blur-3xl" />
    <div className="absolute bottom-4 left-[20%] h-20 w-[58%] rounded-full bg-red-600/15 blur-[70px]" />

    {/* Label */}
    <div className="absolute left-8 top-8 z-20 flex items-center gap-2">
      <span className="h-2 w-2 bg-red-600" />
      <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/75">
        Suzuki Fronx
      </span>
    </div>

    {/* Brand mini card dibuat lebih kecil dan tidak terlalu dominan */}
    <div className="absolute right-7 top-7 z-20 border border-red-600/25 bg-black/55 px-6 py-4 backdrop-blur-md">
      <p className="text-base font-black uppercase tracking-widest text-red-500">
        Suzuki
      </p>
      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
        Built for more
      </p>
    </div>

    {/* Main car image */}
    <motion.div
      initial={{ opacity: 0, x: 32, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      className="absolute bottom-[-4%] right-[-4%] z-10 h-[82%] w-[94%]"
    >
      <Image
        src={heroCarImage}
        alt="Suzuki Fronx"
        fill
        priority
        quality={95}
        className="object-contain drop-shadow-[0_32px_60px_rgba(0,0,0,0.62)]"
      />
    </motion.div>

    {/* Overlay tipis supaya mobil lebih menyatu dengan dark theme */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
    <div className="pointer-events-none absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-black/55 to-transparent" />

    {/* Bottom accent line */}
    <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-red-600/60 via-white/20 to-transparent" />
  </div>

  {/* Ambient red glow outside frame */}
  <div className="pointer-events-none absolute bottom-[16%] right-[12%] h-40 w-[52%] bg-red-600/10 blur-[90px]" />
</div>

      {/* BOTTOM BADGES */}
      <div className="relative z-30 mx-auto mt-8 w-full max-w-7xl px-4 pb-24 sm:px-6 lg:absolute lg:bottom-8 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2 lg:px-8 lg:pb-0">
        <div className="grid grid-cols-2 gap-3 lg:max-w-3xl lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div
              key={badge.id}
              className="group relative min-h-[142px] overflow-hidden border border-white/10 bg-black/70 p-5 text-left backdrop-blur-md transition-all hover:-translate-y-1 hover:border-red-600/65 hover:bg-black/85"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-red-600/70 via-white/20 to-transparent opacity-70" />

              <div className="mb-4 inline-flex border border-white/10 bg-[#0b0d10] p-2.5 transition-colors group-hover:border-red-600/50">
                <badge.icon
                  size={20}
                  className="text-red-500"
                  strokeWidth={2.2}
                />
              </div>

              <h3 className="text-[11px] font-black uppercase leading-[1.45] tracking-[0.1em] text-white transition-colors group-hover:text-red-400">
                {badge.title}
              </h3>

              <p className="mt-2 text-[10px] font-semibold uppercase leading-[1.6] tracking-[0.06em] text-gray-400">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SLIDER CONTROL */}
      <div className="absolute bottom-6 right-4 z-40 flex items-center gap-4 sm:right-8">
        <div className="hidden items-center gap-3 sm:flex">
          <span className="text-xs font-black uppercase tracking-[0.22em] text-red-500">
            0{currentIndex + 1}
          </span>

          <div className="h-px w-28 bg-white/15">
            <div
              className="h-px bg-red-600 transition-all duration-500"
              style={{
                width: `${((currentIndex + 1) / banners.length) * 100}%`,
              }}
            />
          </div>

          <span className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
            03
          </span>
        </div>

        <button
          type="button"
          onClick={() => paginate(-1)}
          className="grid h-11 w-11 place-items-center border border-white/15 bg-black/60 text-white backdrop-blur-md transition-colors hover:border-red-600 hover:text-red-500"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          type="button"
          onClick={() => paginate(1)}
          className="grid h-11 w-11 place-items-center border border-white/15 bg-black/60 text-white backdrop-blur-md transition-colors hover:border-red-600 hover:text-red-500"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* SCROLL HINT */}
      <div className="absolute bottom-6 left-4 z-40 hidden items-center gap-3 md:flex lg:left-8">
        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-500">
          Discover More
        </span>

        <div className="grid h-7 w-7 place-items-center border border-white/15 bg-black/60">
          <ChevronDown
            className="animate-bounce text-red-500"
            size={14}
            strokeWidth={3}
          />
        </div>
      </div>
    </section>
  );
}