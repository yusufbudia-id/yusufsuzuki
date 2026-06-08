"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calculator, Car, Home, Tag } from "lucide-react";
import { areas } from "@/data/areas";
import { cn, WA_BASE_URL } from "@/lib/utils";

const whatsappIconPath =
  "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z";

export default function BottomNavigation() {
  const pathname = usePathname();

  const citySlug = pathname?.startsWith("/dealer/") ? pathname.split("/")[2] : "";
  const cityName = citySlug ? areas.find((area) => area.slug === citySlug)?.name ?? "" : "";

  const waMsg = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan ingin tanya promo mobil Suzuki terbaru.`
    : "Halo Yusuf Suzuki, saya ingin tanya promo mobil Suzuki terbaru.";

  const navItems = [
    { id: "beranda", icon: Home, label: "Beranda", href: "/" },
    { id: "mobil", icon: Car, label: "Mobil", href: "/mobil" },
    { id: "wa", isSpecial: true },
    { id: "kredit", icon: Calculator, label: "Kredit", href: "/simulasi-kredit" },
    { id: "promo", icon: Tag, label: "Promo", href: "/promo" },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 shadow-[0_-18px_45px_-30px_rgba(15,23,42,0.85)] backdrop-blur-xl pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />
      <div className="flex h-16 items-end justify-between px-2 pb-2 pt-1">
        {navItems.map((item) => {
          if (item.isSpecial) {
            return (
              <div key={item.id} className="relative flex w-1/5 flex-col items-center justify-start">
                <a href={`${WA_BASE_URL}?text=${encodeURIComponent(waMsg)}`} target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp Yusuf Suzuki" className="group flex w-full flex-col items-center">
                  <div className="relative -mt-7 mb-1 grid h-[52px] w-[52px] place-items-center rounded-full border-[3px] border-white bg-whatsapp text-white shadow-[0_10px_24px_rgba(37,211,102,0.45)] transition-transform group-active:scale-95">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="relative z-10 h-6 w-6 fill-current">
                      <path d={whatsappIconPath} />
                    </svg>
                    <span className="absolute inset-0 rounded-full bg-whatsapp opacity-35 animate-ping" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.16em] text-whatsapp">Chat WA</span>
                </a>
              </div>
            );
          }

          const isActive = item.href === "/" ? pathname === "/" : pathname === item.href || pathname?.startsWith(`${item.href}/`);
          const Icon = item.icon!;

          return (
            <Link key={item.id} href={item.href!} className={cn("relative flex h-full w-1/5 flex-col items-center justify-end gap-1.5 transition-colors", isActive ? "text-gray-950" : "text-gray-400 hover:text-gray-700")}> 
              <span className={cn("absolute top-0 h-[2px] w-8 transition-opacity", isActive ? "bg-red-600 opacity-100" : "opacity-0")} />
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className={cn("text-[9px] uppercase tracking-[0.14em]", isActive ? "font-black" : "font-bold")}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
