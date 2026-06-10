import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CarCard from "./CarCard";
import { cars } from "@/data/cars";

export default function FeaturedCars({ cityName }: { cityName?: string }) {
  const featured = cars.slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-gray-50 py-14 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      <div className="motion-glow-breathe pointer-events-none absolute right-0 top-0 h-72 w-72 bg-red-600/5 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 bg-gray-900/5 blur-3xl" />

      <div className="container-main relative">
        <div className="motion-enter-up mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="section-label">Produk Unggulan</span>
            <h2 className="section-title mt-4">
              <span className="md:hidden">Mobil Suzuki Terbaru</span>
              <span className="hidden md:inline">Harga Mobil Suzuki {cityName ? cityName : "Jogja"} Terbaru</span>
            </h2>
            <p className="section-subtitle hidden sm:block">
              Temukan unit Suzuki populer dengan harga OTR transparan, promo terbaru, dan konsultasi kredit langsung bersama Yusuf Suzuki.
            </p>
          </div>

          <Link href="/mobil" className="btn-dark hidden md:inline-flex">
            Lihat Semua Mobil Suzuki
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {featured.map((car, index) => (
            <CarCard key={car.slug} car={car} index={index} cityName={cityName} />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="hidden text-center text-[10px] font-black uppercase tracking-[0.24em] text-gray-400 sm:block sm:text-left">
            Katalog Suzuki Jogja: city car, SUV, MPV, hybrid, dan pick up
          </p>
          <Link href="/mobil" className="btn-dark w-full md:hidden">
            Lihat Semua Mobil
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
