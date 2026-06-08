"use client";

import { useCallback, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import CarCard from "./CarCard";
import { cars } from "@/data/cars";

export default function FeaturedCars({ cityName }: { cityName?: string }) {
  const featured = cars.slice(0, 6);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    loop: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = window.setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0);
    }, 5200);

    return () => window.clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 bg-red-600/5 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 bg-gray-900/5 blur-3xl" />

      <div className="container-main relative">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="section-label">Produk Unggulan</span>
            <h2 className="section-title mt-4">
              Harga Mobil Suzuki {cityName ? cityName : "Jogja"} Terbaru
            </h2>
            <p className="section-subtitle">
              Temukan unit Suzuki populer dengan harga transparan, promo berjalan, dan konsultasi kredit langsung bersama Yusuf Suzuki.
            </p>
          </motion.div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              onClick={scrollPrev}
              className="grid h-14 w-14 place-items-center border border-gray-200 bg-white text-gray-950 transition-all hover:border-red-600 hover:bg-red-600 hover:text-white"
              aria-label="Geser kiri"
              type="button"
            >
              <ChevronLeft size={26} strokeWidth={1.7} />
            </button>
            <button
              onClick={scrollNext}
              className="grid h-14 w-14 place-items-center border border-gray-950 bg-gray-950 text-white transition-all hover:border-red-600 hover:bg-red-600"
              aria-label="Geser kanan"
              type="button"
            >
              <ChevronRight size={26} strokeWidth={1.7} />
            </button>
          </div>
        </div>

        <div className="relative -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5 pb-8 pt-2 sm:gap-6">
              {featured.map((car, index) => (
                <div key={car.slug} className="min-w-0 flex-[0_0_86vw] sm:flex-[0_0_360px] lg:flex-[0_0_390px]">
                  <CarCard car={car} index={index} cityName={cityName} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-center text-[10px] font-black uppercase tracking-[0.24em] text-gray-400 sm:text-left">
            Geser katalog untuk melihat pilihan unit lainnya
          </p>
          <Link href="/mobil" className="btn-dark w-full sm:w-auto">
            Lihat Semua Mobil
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
