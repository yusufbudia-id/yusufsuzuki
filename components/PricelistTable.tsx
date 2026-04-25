"use client";

import { useState } from "react";
import { formatCurrency, buildWhatsAppUrl } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

interface Variant {
  name: string;
  priceAB?: number;
  priceAA?: number;
  price?: number; // fallback
}

interface PricelistTableProps {
  variants: Variant[];
  carName?: string; // Ditambahkan agar pesan WA lebih spesifik
}

export default function PricelistTable({ variants, carName = "" }: PricelistTableProps) {
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
        {/* Header Tabel (Disembunyikan di HP agar lebih bersih, muncul di Tablet/Desktop) */}
        <div className="hidden md:grid grid-cols-12 bg-gray-50 border-b border-gray-200 p-5">
          <div className="col-span-6 text-[10px] font-black text-gray-500 uppercase tracking-widest">
            Tipe / Varian
          </div>
          <div className="col-span-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">
            Harga OTR ({plat})
          </div>
          <div className="col-span-3 text-[10px] font-black text-gray-500 uppercase tracking-widest text-right">
            Aksi
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

            // Logika untuk membersihkan nama agar tidak tumpang tindih (misal: "Fronx Fronx GL MT")
            const cleanCarName = carName.replace(/Suzuki /i, "");
            const isNameIncluded = v.name.toLowerCase().includes(cleanCarName.toLowerCase());
            const finalVariantName = isNameIncluded ? v.name : `${cleanCarName} ${v.name}`;

            // Pesan WA Spesifik per varian
            const waText = `Halo Yusuf Suzuki, saya ingin tanya promo, diskon, dan ketersediaan unit untuk *${finalVariantName}*.`;

            return (
              <div key={i} className="flex flex-col md:grid md:grid-cols-12 p-5 gap-4 md:gap-0 md:items-center hover:bg-gray-50 transition-colors">
                
                {/* Kolom Nama */}
                <div className="md:col-span-6 flex justify-between md:block items-center">
                  <span className="md:hidden text-[10px] font-black text-gray-400 uppercase tracking-widest">Varian</span>
                  <span className="font-bold text-gray-900 text-sm uppercase">{v.name}</span>
                </div>
                
                {/* Kolom Harga */}
                <div className="md:col-span-3 flex justify-between md:block items-center">
                  <span className="md:hidden text-[10px] font-black text-gray-400 uppercase tracking-widest">Harga OTR</span>
                  <span className="font-black text-gray-900 text-sm md:text-base">{safeFormat(displayPrice)}</span>
                </div>
                
                {/* Kolom Tombol Aksi */}
                <div className="md:col-span-3 md:text-right mt-2 md:mt-0">
                  <a
                    href={buildWhatsAppUrl(waText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto inline-flex justify-center items-center gap-2 bg-gray-100 hover:bg-[#25D366] text-gray-600 hover:text-white py-3 md:py-2.5 px-4 font-black text-[10px] uppercase tracking-widest rounded-none transition-all duration-300 border border-gray-200 hover:border-[#25D366]"
                  >
                    <MessageCircle size={14} />
                    Tanya Promo
                  </a>
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