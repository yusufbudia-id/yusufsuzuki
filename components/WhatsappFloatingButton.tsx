"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { areas } from "@/data/areas";
import { WA_BASE_URL } from "@/lib/utils";

export default function WhatsappFloatingButton() {
  const pathname = usePathname();

  const citySlug = pathname?.startsWith("/dealer/") ? pathname.split("/")[2] : "";
  const cityName = citySlug ? areas.find((area) => area.slug === citySlug)?.name ?? "" : "";

  const waMsg = cityName
    ? `Halo Yusuf Suzuki, saya warga ${cityName} dan ingin tanya tentang mobil Suzuki.`
    : "Halo Yusuf Suzuki, saya ingin tanya tentang mobil Suzuki.";

  return (
    <motion.a
      href={`${WA_BASE_URL}?text=${encodeURIComponent(waMsg)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 180 }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.96 }}
      className="group fixed bottom-6 right-6 z-50 hidden items-center gap-3 border border-whatsapp/30 bg-[#050505] px-4 py-3 text-white shadow-dark-glow transition-all hover:border-whatsapp hover:bg-whatsapp md:flex"
      aria-label="Chat WhatsApp Yusuf Suzuki"
    >
      <span className="relative grid h-11 w-11 place-items-center rounded-full bg-whatsapp text-white shadow-[0_10px_24px_rgba(37,211,102,0.35)]">
        <MessageCircle size={22} className="relative z-10" />
        <span className="absolute inset-0 rounded-full bg-whatsapp opacity-35 animate-ping" />
      </span>
      <span className="hidden pr-1 text-left lg:block">
        <span className="block text-[9px] font-black uppercase tracking-[0.22em] text-white/45">Fast Response</span>
        <span className="mt-0.5 block text-[11px] font-black uppercase tracking-[0.18em] text-white">Chat Yusuf</span>
      </span>
    </motion.a>
  );
}
