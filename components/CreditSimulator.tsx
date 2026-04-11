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
    12: 5.00,  // 1 Tahun
    24: 5.25,  // 2 Tahun
    36: 5.50,  // 3 Tahun
    48: 5.75,  // 4 Tahun
    60: 6.00   // 5 Tahun
  };

  // Mengubah harga mobil jika dropdown kendaraan diganti
  useEffect(() => {
    const car = cars.find((c) => c.slug === selectedSlug);
    if (car) setHargaMobil(car.startingPriceNum);
  }, [selectedSlug]);

  // Handle Input Harga Manual (hanya menerima angka)
  const handleHargaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setHargaMobil(Number(value));
  };

  // Logika Perhitungan "TDP All-In" (Skema ADDM)
  useEffect(() => {
    // Ambil bunga standar dari map
    let bungaTahun = bungaMap[tenor] || 10;
    
    // LOGIKA KHUSUS SUZUKI CARRY: Bunga +1.00%
    // Mengecek apakah slug mobil mengandung kata "carry"
    if (selectedSlug.toLowerCase().includes("carry")) {
      bungaTahun += 1.00;
    }

    const tenorTahun = tenor / 12;
    
    // Target Total DP (TDP) dari persentase yang dipilih
    const targetTDP = Math.ceil((dpPct / 100) * hargaMobil);

    // Biaya Admin (Estimasi Leasing Retail)
    const admin = tenor <= 24 ? 3000000 : 4500000; 
    
    // Biaya Asuransi (Kombinasi: 1.8% per tahun)
    const asuransiPct = 0.018; 
    const asuransi = Math.ceil(hargaMobil * asuransiPct * tenorTahun);
    const biayaLain = admin + asuransi;

    // Kalkulasi Aljabar untuk mencari Pokok Utang & DP Murni jika TDP sudah FIX
    // Rumus C-Factor (Faktor Pengali Cicilan) menggunakan bunga yang sudah disesuaikan
    const c_factor = (1 + (bungaTahun / 100) * tenorTahun) / tenor;

    // Rumus mencari Pokok Utang dari TDP (karena TDP = DP Murni + Biaya Lain + Cicilan 1)
    let pokokUtang = (hargaMobil - targetTDP + biayaLain) / (1 - c_factor);
    let dpMurni = hargaMobil - pokokUtang;

    // Proteksi: Jika TDP terlalu kecil untuk cover admin+asuransi+cicilan (DP Murni minus)
    if (dpMurni <= 0) {
      dpMurni = 0;
      pokokUtang = hargaMobil; // Full kredit tanpa DP Murni
    }

    const cicilan = Math.ceil(pokokUtang * c_factor);
    
    // Hitung ulang Final TDP 
    const totalDP = dpMurni + admin + asuransi + cicilan;

    setResult({ dpMurni, cicilan, admin, asuransi, totalDP, pokokUtang });
  }, [hargaMobil, dpPct, tenor, selectedSlug]); // Pastikan selectedSlug masuk ke dependency array

  const selectedCar = cars.find((c) => c.slug === selectedSlug);

  const waMsg = `Halo Yusuf Suzuki, saya ingin pengajuan kredit ${selectedCar?.name}:
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
            <div className="w-12 h-12 bg-gray-900 flex items-center justify-center text-white">
              <Calculator size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-black text-gray-900 text-xl uppercase tracking-tighter">Simulasi Kredit</h3>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Skema All-In (ADDM)</p>
            </div>
          </div>

          <div className="space-y-8">
            
            {/* 1. Pilih Mobil */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Unit Kendaraan</label>
              <select
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="w-full border-b-2 border-gray-200 bg-transparent py-2 text-lg font-bold text-gray-900 focus:outline-none focus:border-gray-900 transition-colors appearance-none cursor-pointer"
              >
                {cars.map((c) => (
                  <option key={c.slug} value={c.slug}>{c.name.toUpperCase()}</option>
                ))}
              </select>
            </div>

            {/* 2. Harga Mobil (Bisa Diubah Manual) */}
            <div className="relative">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Harga OTR (Bisa Diubah)</label>
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

            {/* 3. DP Range (Target TDP) */}
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

            {/* 4. Tenor Chips */}
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
                className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter"
              >
                {formatCurrency(result.cicilan)}<span className="text-base md:text-lg text-gray-400 ml-1 font-bold">/BLN</span>
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