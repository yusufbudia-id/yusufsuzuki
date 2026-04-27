"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Car, Calculator, MessageCircle } from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";
import { areas } from "@/data/areas"; // <-- 1. Import data kota

export default function BottomNavigation() {
  const pathname = usePathname();

  // 2. DETEKSI KOTA DARI URL SECARA OTOMATIS
  let cityName = "";
  if (pathname && pathname.startsWith("/dealer/")) {
    const slug = pathname.split("/")[2]; // Mengambil kata setelah "/dealer/"
    const currentArea = areas.find((a) => a.slug === slug);
    if (currentArea) {
      cityName = currentArea.name;
    }
  }

  // 3. PESAN WHATSAPP DINAMIS
  const waMsg = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan ingin tanya promo mobil Suzuki terbaru.`
    : `Halo Yusuf Suzuki, saya ingin tanya promo mobil Suzuki terbaru.`;

  // Daftar menu reguler
  const navItems = [
    { icon: Home, label: "Beranda", href: "/" },
    { icon: Car, label: "Mobil", href: "/mobil" },
    { icon: Calculator, label: "Kredit", href: "/simulasi-kredit" }, 
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-lg border-t border-gray-200/50 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around h-16 px-2">
        
        {/* Render 3 Menu Kiri */}
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.label} 
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                isActive ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <item.icon size={22} strokeWidth={isActive ? 2.5 : 1.5} />
              <span className={`text-[9px] uppercase tracking-wider ${isActive ? "font-bold" : "font-medium"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* 4. TOMBOL WHATSAPP DENGAN PESAN OTOMATIS */}
        <a 
          href={`${WA_BASE_URL}?text=${encodeURIComponent(waMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-full h-full group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 group-active:scale-95 transition-transform mb-0.5">
            <MessageCircle size={20} strokeWidth={2} className="relative z-10" />
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60" />
          </div>
          <span className="text-[9px] uppercase tracking-wider font-bold text-[#25D366]">
            Chat WA
          </span>
        </a>

      </div>
    </div>
  );
}