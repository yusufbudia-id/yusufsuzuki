"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // <-- Import sudah benar
import useEmblaCarousel from "embla-carousel-react";
import { formatCurrency } from "@/lib/utils";

interface SimpleCar {
  slug: string;
  name: string;
  category: string;
  startingPriceNum: number;
  heroImage: string;
}

export default function OtherCarsCarousel({ cars }: { cars: SimpleCar[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi) return;
    
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      }
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-6">
          {cars.map((otherCar) => (
            <div 
              key={otherCar.slug} 
              className="flex-none w-full sm:w-1/2 lg:w-1/4 pl-6"
            >
              <Link 
                href={`/mobil/${otherCar.slug}`} 
                className="group bg-gray-50 border border-gray-200 rounded-none overflow-hidden hover:border-gray-900 transition-colors duration-300 flex flex-col h-full"
              >
                {/* Image Box - MENGGUNAKAN NEXT/IMAGE */}
                <div className="relative aspect-[4/3] bg-gray-100 p-6 flex items-center justify-center overflow-hidden border-b border-gray-200">
                  <Image 
                    src={otherCar.heroImage || "/logo.png"} 
                    alt={otherCar.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain scale-100 group-hover:scale-110 transition-transform duration-700 p-4" 
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