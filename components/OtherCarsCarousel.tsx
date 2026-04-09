"use client";

import { useEffect } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { formatCurrency } from "@/lib/utils";

// Tipe data sederhana untuk mobil
interface SimpleCar {
  slug: string;
  name: string;
  category: string;
  startingPriceNum: number;
  heroImage: string;
}

export default function OtherCarsCarousel({ cars }: { cars: SimpleCar[] }) {
  // Setup Embla dengan opsi align start dan loop
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  // Efek Auto Sliding
  useEffect(() => {
    if (!emblaApi) return;
    
    // Bergeser setiap 3 detik
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      }
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Container Embla */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Negative margin untuk mengakali gap/jarak antar kartu */}
        <div className="flex -ml-6">
          {cars.map((otherCar) => (
            // Ukuran responsif: 1 kartu di HP, 2 di Tablet, 4 di Desktop
            <div 
              key={otherCar.slug} 
              className="flex-none w-full sm:w-1/2 lg:w-1/4 pl-6"
            >
              <Link 
                href={`/mobil/${otherCar.slug}`} 
                className="group bg-gray-50 border border-gray-200 rounded-none overflow-hidden hover:border-gray-900 transition-colors duration-300 flex flex-col h-full"
              >
                {/* Image Box */}
                <div className="aspect-[4/3] bg-gray-100 p-6 flex items-center justify-center overflow-hidden border-b border-gray-200">
                  <img 
                    src={otherCar.heroImage} 
                    alt={otherCar.name} 
                    className="w-full h-full object-contain scale-100 group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                {/* Info Box */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{otherCar.category}</p>
                    <h3 className="font-black text-gray-900 text-lg uppercase tracking-tight mb-2">{otherCar.name}</h3>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Mulai Dari</p>
                    <p className="font-black text-gray-900">{formatCurrency(otherCar.startingPriceNum)}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}