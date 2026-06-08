"use client";

import Link from "next/link";
import { Calculator, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, formatCurrency } from "@/lib/utils";

type CarDetailStickyCTAProps = {
  carName: string;
  carSlug: string;
  startingPrice: number;
};

export default function CarDetailStickyCTA({ carName, carSlug, startingPrice }: CarDetailStickyCTAProps) {
  const message = `Halo Yusuf Suzuki, saya ingin tanya detail ${carName}: harga OTR, promo, stok unit, dan simulasi kreditnya.`;

  return (
    <div className="fixed inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-40 border-t border-white/10 bg-[#050505]/95 px-3 py-3 text-white shadow-[0_-18px_45px_-28px_rgba(0,0,0,0.75)] backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[10px] font-black uppercase tracking-[0.18em] text-white/45">{carName}</p>
          <p className="text-sm font-black tracking-tight text-white">Mulai {formatCurrency(startingPrice)}</p>
        </div>
        <Link
          href={`/simulasi-kredit?mobil=${carSlug}`}
          className="grid h-11 w-11 shrink-0 place-items-center border border-white/15 bg-white/5 text-white"
          aria-label={`Hitung simulasi kredit ${carName}`}
        >
          <Calculator size={18} />
        </Link>
        <a
          href={buildWhatsAppUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 bg-red-600 px-4 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-red-glow"
          aria-label={`Chat WhatsApp tentang ${carName}`}
        >
          <MessageCircle size={16} /> Chat
        </a>
      </div>
    </div>
  );
}
