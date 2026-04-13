"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Car, Calculator, MessageCircle } from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

export default function BottomNavigation() {
  const pathname = usePathname();

  // Daftar menu reguler
  const navItems = [
    { icon: Home, label: "Beranda", href: "/" },
    { icon: Car, label: "Mobil", href: "/mobil" },
    { icon: Calculator, label: "Kredit", href: "/simulasi-kredit" }, // Ganti URL ini jika halaman simulasi kreditmu berbeda
  ];

  return (
    // md:hidden memastikan ini HANYA muncul di layar HP
    // pb-[env(safe-area-inset-bottom)] untuk dukungan area aman iPhone (notch/bar bawah)
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

        {/* Tombol WhatsApp (Dibuat Hidup & Menonjol) */}
        <a 
          href={`${WA_BASE_URL}?text=Halo%20Yusuf%20Suzuki%2C%20saya%20ingin%20tanya%20promo%20mobil%20Suzuki%20terbaru`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-full h-full group"
        >
          {/* Perhatikan penambahan class 'relative' di sini */}
          <div className="relative flex items-center justify-center w-10 h-10 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 group-active:scale-95 transition-transform mb-0.5">
            
            {/* Ikon WA (z-10 agar berada di atas gelombang) */}
            <MessageCircle size={20} strokeWidth={2} className="relative z-10" />
            
            {/* Efek Ping (Gelombang Radar yang Hidup) */}
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