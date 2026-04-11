"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, MessageCircle, Info, Edit2 } from "lucide-react";
import { cars } from "@/data/cars";
import { formatCurrency, buildWhatsAppUrl } from "@/lib/utils";

interface CreditSimulatorProps {
  defaultCarSlug?: string;
}

export default function CreditSimulator({ defaultCarSlug }: CreditSimulatorProps) {
  const [selectedSlug, setSelectedSlug] = useState(defaultCarSlug ?? cars[0].slug);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [region, setRegion] = useState<"AB" | "AA">("AB"); // State baru untuk Wilayah Plat
  const [hargaMobil, setHargaMobil] = useState(cars[0].startingPriceNum);
  const [dpPct, setDpPct] = useState(20);
  const [tenor, setTenor] = useState(60);
  
  const [result, setResult] = useState({ 
    dpMurni: 0, 
    cicilan: 0, 
    admin: 0, 
    asuransi: 0, 
    totalDP: 0,
    pokokUtang: 0
  });

  // Bunga Leasing Retail Standar (Flat per Tahun)
  const bungaMap: Record<number, number> = {
    12: 5.50,
    24: 5.75,
    36: 6.00,
    48: 6.25,
    60: 6.50
  };

  const currentCar = cars.find((c) => c.slug === selectedSlug);
  // @ts-ignore
  const currentVariants = currentCar?.variants || [];
  const currentVariantName = currentVariants.length > 0 ? currentVariants[selectedVariantIndex]?.name : "";

  // 1. Reset Varian saat Model diganti
  const handleCarChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSlug(e.target.value);
    setSelectedVariantIndex(0); 
  };

  // 2. Auto-Update Harga OTR berdasarkan Varian DAN Wilayah (AB / AA)
  useEffect(() => {
    if (currentCar) {
      if (currentVariants.length > 0 && currentVariants[selectedVariantIndex]) {
        // Ambil harga berdasarkan region yang dipilih
        const variant = currentVariants[selectedVariantIndex];
        setHargaMobil(region === "AB" ? variant.priceAB : variant.priceAA);
      } else {
        // Fallback jika varian belum diisi di data
        setHargaMobil(currentCar.startingPriceNum);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSlug, selectedVariantIndex, region]);

  // Handle Input Harga Manual
  const handleHargaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setHargaMobil(Number(value));
  };

  // Logika Kalkulasi
  useEffect(() => {
    let bungaTahun = bungaMap[tenor] || 10;
    
    if (selectedSlug.toLowerCase().includes("carry")) {
      bungaTahun += 0.5;
    }

    const tenorTahun = tenor / 12;
    const targetTDP = Math.ceil((dpPct / 100) * hargaMobil);
    const admin = tenor <= 24 ? 3000000 : 4500000; 
    const asuransiPct = 0.018; 
    const asuransi = Math.ceil(hargaMobil * asuransiPct * tenorTahun);
    const biayaLain = admin + asuransi;
    const c_factor = (1 + (bungaTahun / 100) * tenorTahun) / tenor;

    let pokokUtang = (hargaMobil - targetTDP + biayaLain) / (1 - c_factor);
    let dpMurni = hargaMobil - pokokUtang;

    if (dpMurni <= 0) {
      dpMurni = 0;
      pokokUtang = hargaMobil;
    }

    const cicilan = Math.ceil(pokokUtang * c_factor);
    const totalDP = dpMurni + admin + asuransi + cicilan;

    setResult({ dpMurni, cicilan, admin, asuransi, totalDP, pokokUtang });
  }, [hargaMobil, dpPct, tenor, selectedSlug]);

  const waMsg = `Halo Yusuf Suzuki, saya ingin pengajuan kredit:
- Unit: ${currentCar?.name} ${currentVariantName ? `(${currentVariantName})` : ''}
- Wilayah OTR: Plat ${region}
- Harga OTR: ${formatCurrency(hargaMobil)}
- Tenor: ${tenor} Bulan
- Total DP (TDP): ${formatCurrency(result.totalDP)}
- Angsuran: ${formatCurrency(result.cicilan)}/bln
Mohon info persyaratannya.`;

  return (
    <div className="bg-white rounded-none border border-gray-200 shadow-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Sisi Kiri: Inputs */}
        <div className="lg:col-span-7 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-100">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-gray-900 flex items-center justify-center text-white shrink-0">
              <Calculator size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-black text-gray-900 text-xl uppercase tracking-tighter">Simulasi Kredit</h3>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Skema All-In (ADDM)</p>
            </div>
          </div>

          <div className="space-y-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* 1. Pilih Model Kendaraan */}
              <div className="sm:col-span-2">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Unit Kendaraan</label>
                <select
                  value={selectedSlug}
                  onChange={handleCarChange}
                  className="w-full border-b-2 border-gray-200 bg-transparent py-2 text-base font-bold text-gray-900 focus:outline-none focus:border-gray-900 transition-colors appearance-none cursor-pointer"
                >
                  {cars.map((c) => (
                    <option key={c.slug} value={c.slug}>{c.name.toUpperCase()}</option>
                  ))}
                </select>
              </div>

              {/* 2. Pilih Varian / Tipe */}
              {currentVariants.length > 0 && (
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Tipe / Varian</label>
                  <select
                    value={selectedVariantIndex}
                    onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
                    className="w-full border-b-2 border-gray-200 bg-transparent py-2 text-base font-bold text-gray-900 focus:outline-none focus:border-gray-900 transition-colors appearance-none cursor-pointer"
                  >
                    {currentVariants.map((v: any, idx: number) => (
                      <option key={idx} value={idx}>{v.name.toUpperCase()}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* 3. Pilih Wilayah (AB/AA) */}
              {currentVariants.length > 0 && (
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Wilayah OTR</label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value as "AB" | "AA")}
                    className="w-full border-b-2 border-gray-200 bg-transparent py-2 text-base font-bold text-gray-900 focus:outline-none focus:border-gray-900 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="AB">PLAT AB (JOGJA)</option>
                    <option value="AA">PLAT AA (KEDU/MAGELANG)</option>
                  </select>
                </div>
              )}
            </div>

            {/* 4. Harga Mobil */}
            <div className="relative">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Harga OTR (Bisa Diubah Sesuai Diskon)</label>
              <div className="flex items-center border-b-2 border-gray-200 focus-within:border-gray-900 transition-colors">
                <span className="text-lg font-bold text-gray-400 mr-2 py-2">Rp</span>
                <input
                  type="text"
                  value={hargaMobil === 0 ? "" : new Intl.NumberFormat('id-ID').format(hargaMobil)}
                  onChange={handleHargaChange}
                  className="w-full bg-transparent py-2 text-xl font-black text-gray-900 focus:outline-none"
                  placeholder="0"
                />
                <Edit2 size={16} className="text-gray-300" />
              </div>
            </div>

            {/* 5. DP Range */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Total DP (TDP)</label>
                <span className="text-xl font-black text-gray-900">{dpPct}%</span>
              </div>
              <input
                type="range" min={15} max={50} step={5} value={dpPct}
                onChange={(e) => setDpPct(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-100 accent-gray-900 appearance-none cursor-pointer"
              />
            </div>

            {/* 6. Tenor Chips */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Jangka Waktu</label>
              <div className="grid grid-cols-5 gap-2">
                {[12, 24, 36, 48, 60].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTenor(t)}
                    className={`py-3 text-xs font-black transition-all border ${
                      tenor === t
                        ? "bg-gray-900 border-gray-900 text-white"
                        : "border-gray-200 text-gray-400 hover:border-gray-900 hover:text-gray-900"
                    }`}
                  >
                    {t/12} THN
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sisi Kanan: Hasil Kalkulasi */}
        <div className="lg:col-span-5 bg-gray-50 p-6 md:p-10 flex flex-col">
          <div className="mb-8">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Estimasi Angsuran</p>
            <AnimatePresence mode="wait">
              <motion.p 
                key={result.cicilan}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-4xl xl:text-5xl font-black text-gray-900 tracking-tighter"
              >
                {formatCurrency(result.cicilan)}<span className="text-base md:text-sm xl:text-lg text-gray-400 ml-1 font-bold">/BLN</span>
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Breakdown Pembiayaan */}
          <div className="space-y-4 mb-8 flex-grow">
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Pokok Utang</span>
              <span className="text-xs font-black text-gray-900">{formatCurrency(result.pokokUtang)}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">DP Murni</span>
              <span className="text-xs font-black text-gray-900">{formatCurrency(result.dpMurni)}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Admin + Asuransi</span>
              <span className="text-xs font-black text-gray-900">{formatCurrency(result.admin + result.asuransi)}</span>
            </div>
            
            <div className="flex justify-between py-5 mt-4 bg-gray-900 px-4 text-white shadow-lg">
              <div>
                <span className="block text-xs font-bold uppercase tracking-[0.2em]">Total Bayar Pertama</span>
                <span className="block text-[9px] text-gray-400 mt-0.5">TDP (Sesuai DP {dpPct}%)</span>
              </div>
              <span className="text-xl font-black self-center">{formatCurrency(result.totalDP)}</span>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex gap-3 text-gray-500 mb-6 bg-gray-200/50 p-4 border-l-4 border-gray-900">
              <Info size={16} className="shrink-0 mt-0.5" />
              <p className="text-[9px] uppercase leading-relaxed font-bold">
                Angka di atas adalah Total Bayar Pertama (TDP). Sudah mencakup DP Murni, Asuransi Kombinasi (1.8%), Admin, dan Angsuran Bulan ke-1.
              </p>
            </div>

            <a
              href={buildWhatsAppUrl(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-900 hover:bg-black text-white py-5 flex justify-center items-center gap-3 transition-all font-black text-xs uppercase tracking-[0.2em]"
            >
              <MessageCircle size={18} />
              Ajukan Kredit Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}