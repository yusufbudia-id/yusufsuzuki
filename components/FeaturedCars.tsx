"use client";

import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import CarCard from "./CarCard";
import { cars } from "@/data/cars";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedCars({ cityName }: { cityName?: string }) {
  const featured = cars.slice(0, 6);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: "start",
    containScroll: "trimSnaps"
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 4000); 

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="pt-24 pb-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left max-w-2xl"
          >
            <span className="inline-block bg-gray-200 text-gray-800 text-[10px] font-bold px-4 py-1.5 rounded-none mb-4 uppercase tracking-widest">
              Produk Unggulan
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">
              Harga Mobil Suzuki {cityName ? cityName : "Jogja"} Terbaru
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Temukan mobil Suzuki impian Anda dengan teknologi terkini dan harga terbaik di {cityName ? cityName : "Jogja"}.
            </p>
          </motion.div>

          <div className="hidden lg:flex items-center gap-2">
            <button 
              onClick={scrollPrev}
              className="w-14 h-14 bg-transparent flex items-center justify-center text-gray-900 hover:text-gray-200 hover:bg-red-600 transition-all duration-300 rounded-none active:scale-95"
              aria-label="Geser Kiri"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-14 h-14 bg-transparent flex items-center justify-center text-gray-900 hover:text-gray-200 hover:bg-red-600 transition-all duration-300 rounded-none active:scale-95"
              aria-label="Geser Kanan"
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* AREA SLIDER */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 pb-8 pt-4">

              {featured.map((car, i) => (
                <div 
                  key={car.slug} 
                  // KITA KEMBALIKAN KE 85vw agar di HP terlihat pas dan proporsional
                  className="flex-[0_0_85vw] sm:flex-[0_0_340px] lg:flex-[0_0_380px] min-w-0"
                >
                  <CarCard car={car} index={i} cityName={cityName} />
                </div>
              ))}
              
              {/* Kartu "Lihat Semua" yang di dalam slider SAYA HAPUS agar tidak dobel */}

            </div>
          </div>
        </div>

        {/* TOMBOL LIHAT SEMUA (Tampil elegan di bawah slider) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center lg:justify-end"
        >
          <Link 
            href="/mobil" 
            className="group flex items-center gap-3 bg-gray-900 hover:bg-red-600 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors w-full sm:w-auto justify-center"
          >
            Lihat Semua Mobil 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}