"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { areas } from "@/data/areas"; // <-- 1. Import data kota

export default function WhatsappFloatingButton() {
  const pathname = usePathname();

  // 2. DETEKSI KOTA DARI URL
  let cityName = "";
  if (pathname && pathname.startsWith("/dealer/")) {
    const slug = pathname.split("/")[2]; // Mengambil slug kota
    const currentArea = areas.find((a) => a.slug === slug);
    if (currentArea) {
      cityName = currentArea.name;
    }
  }

  // 3. PESAN WA DINAMIS
  const waMsg = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan ingin tanya tentang mobil Suzuki.`
    : `Halo Yusuf Suzuki, saya ingin tanya tentang mobil Suzuki.`;

  return (
    <motion.a
      href={`${WA_BASE_URL}?text=${encodeURIComponent(waMsg)}`} // <-- 4. Pasang pesan dinamis ke sini
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      // 'hidden md:flex' memastikan ini hanya muncul di layar besar (Desktop/Tablet)
      className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl items-center justify-center transition-colors group"
      aria-label="Chat WhatsApp Yusuf Suzuki"
    >
      <MessageCircle size={26} className="group-hover:scale-110 transition-transform" />
      {/* Ping ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40" />
    </motion.a>
  );
}