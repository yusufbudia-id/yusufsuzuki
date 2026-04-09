"use client";

import { useState } from "react";
import { formatCurrency } from "@/lib/utils";

interface Variant {
  name: string;
  priceAB?: number;
  priceAA?: number;
  price?: number; // fallback
}

interface PricelistTableProps {
  variants: Variant[];
}

export default function PricelistTable({ variants }: PricelistTableProps) {
  // Secara default menampilkan harga Plat AB (Jogja)
  const [plat, setPlat] = useState<"AB" | "AA">("AB");

  // Fungsi aman agar tidak muncul tulisan "NaN" jika data kosong
  const safeFormat = (val?: number) => {
    if (!val) return "Hubungi Sales";
    return formatCurrency(val);
  };

  return (
    <div>
      {/* Tombol Pilihan Plat (Tab Toggle) */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setPlat("AB")}
          className={`px-5 py-3 text-[10px] font-black uppercase tracking-widest transition-all rounded-none border ${
            plat === "AB"
              ? "bg-gray-900 border-gray-900 text-white shadow-md"
              : "bg-white border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900"
          }`}
        >
          Plat AB (Jogja)
        </button>
        <button
          onClick={() => setPlat("AA")}
          className={`px-5 py-3 text-[10px] font-black uppercase tracking-widest transition-all rounded-none border ${
            plat === "AA"
              ? "bg-gray-900 border-gray-900 text-white shadow-md"
              : "bg-white border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900"
          }`}
        >
          Plat AA / R (Kedu & Banyumas)
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-none overflow-hidden shadow-sm">
        {/* Header Tabel */}
        <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200 p-5">
          <div className="col-span-7 md:col-span-8 text-[10px] font-black text-gray-500 uppercase tracking-widest">
            Tipe / Varian
          </div>
          <div className="col-span-5 md:col-span-4 text-[10px] font-black text-gray-500 uppercase tracking-widest text-right">
            Harga OTR ({plat})
          </div>
        </div>
        
        {/* Isi Tabel */}
        <div className="divide-y divide-gray-100">
          {variants.map((v, i) => {
            // Logika cerdas membaca harga sesuai plat yang dipilih
            let displayPrice = 0;
            if (plat === "AB") {
              displayPrice = v.priceAB || v.price || 0;
            } else {
              displayPrice = v.priceAA || v.price || 0;
            }

            return (
              <div key={i} className="grid grid-cols-12 p-5 items-center hover:bg-gray-50 transition-colors">
                <div className="col-span-7 md:col-span-8 font-bold text-gray-900 text-sm">
                  {v.name}
                </div>
                <div className="col-span-5 md:col-span-4 font-black text-gray-900 text-right">
                  {safeFormat(displayPrice)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <p className="text-xs text-gray-400 mt-4 italic font-medium leading-relaxed">
        *Harga yang ditampilkan adalah harga On The Road (OTR) untuk Plat {plat}. Terdapat kemungkinan perbedaan harga berdasarkan warna khusus (misal: Two-Tone). Silakan hubungi kami untuk kepastian diskon/promo.
      </p>
    </div>
  );
}