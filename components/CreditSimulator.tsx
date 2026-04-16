"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, MessageCircle, Info, Edit2 } from "lucide-react";
import { cars } from "@/data/cars";
import { formatCurrency, buildWhatsAppUrl } from "@/lib/utils";

// 1. IMPORT DATA DATABASE LEASING
import leasingData from "@/data/leasingData.json";

// 2. FUNGSI PENGHITUNG ASURANSI DINAMIS (Berdasarkan Penyusutan & OJK)
const getOjkRate = (currentOtr: number) => {
  return leasingData.ojkWil3.find(
    (rate) => currentOtr > rate.minOtr && currentOtr <= rate.maxOtr
  );
};

const hitungAsuransiKombi = (otr: number, tenorTahun: number) => {
  let totalPremi = 0;
  for (let tahun = 1; tahun <= tenorTahun; tahun++) {
    // @ts-ignore
    const penyusutan = leasingData.depreciation[tahun.toString()] || 0.5;
    const depreciatedOtr = otr * penyusutan;
    const rateOjk = getOjkRate(depreciatedOtr);

    if (rateOjk) {
      if (tahun === 1) {
        totalPremi += depreciatedOtr * rateOjk.allRisk;
      } else {
        totalPremi += depreciatedOtr * rateOjk.tlo;
      }
    }
  }
  return totalPremi + (leasingData.flatFeePerYear * tenorTahun);
};

interface CreditSimulatorProps {
  defaultCarSlug?: string;
}

export default function CreditSimulator({ defaultCarSlug }: CreditSimulatorProps) {
  const [selectedSlug, setSelectedSlug] = useState(defaultCarSlug ?? cars[0].slug);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [region, setRegion] = useState<"AB" | "AA">("AB");
  const [paymentType, setPaymentType] = useState<"ADDM" | "ADDB">("ADDB");
  
  // State Input Reverse Calculation
  const [hargaMobil, setHargaMobil] = useState(335200000); 
  const [dpSetor, setDpSetor] = useState(60000000); // Nominal DP Nett yang dibayar
  const [diskon, setDiskon] = useState(10000000); // Diskon Unit
  const [uping, setUping] = useState(1.0); // Mark-up Bunga Sales
  const [tenor, setTenor] = useState(60);
  
  const [result, setResult] = useState({ 
    uangMukaAsli: 0, 
    persenDpAwal: 0,
    cicilan: 0, 
    adminPH: 6300000, 
    asuransiPH: 0, 
    provisiPH: 0,
    tdpKotor: 0,
    pokokUtang: 0,
    bungaJual: 0
  });

  const biayaFidusia = 503000;
  const biayaAdminPH = 6300000; 
  const provisiRate = 0.01; // Provisi 1%

  const currentCar = cars.find((c) => c.slug === selectedSlug);
  // @ts-ignore
  const currentVariants = currentCar?.variants || [];
  const currentVariantName = currentVariants.length > 0 ? currentVariants[selectedVariantIndex]?.name : "";

  // FUNGSI HANDLE CAR CHANGE YANG SEMPAT HILANG
  const handleCarChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSlug(e.target.value);
    setSelectedVariantIndex(0); 
  };

  // Auto-Update Harga OTR berdasarkan pilihan dropdown
  useEffect(() => {
    if (currentCar) {
      if (currentVariants.length > 0 && currentVariants[selectedVariantIndex]) {
        const variant = currentVariants[selectedVariantIndex];
        setHargaMobil(region === "AB" ? variant.priceAB : variant.priceAA);
      } else {
        setHargaMobil(currentCar.startingPriceNum);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSlug, selectedVariantIndex, region]);

  // LOGIKA UTAMA: Reverse Calculation & Asuransi Dinamis
  useEffect(() => {
    const tenorTahun = tenor / 12;
    const tdpKotor = dpSetor + diskon;
    
    // Tarik Rate Bunga Dasar dari JSON
    // @ts-ignore
    const rateBungaDasarString = paymentType === "ADDM" 
      // @ts-ignore
      ? leasingData.interestRates.PASS_DP_RINGAN_ADDM[tenorTahun.toString()] 
      // @ts-ignore
      : leasingData.interestRates.PASS_DP_RINGAN_ADDB[tenorTahun.toString()];
    
    const rateBungaDasar = Number(rateBungaDasarString) / 100;
    const bungaJual = rateBungaDasar + (uping / 100);

    // Kalkulasi Asuransi Dinamis
    const asuransiPH = hitungAsuransiKombi(hargaMobil, tenorTahun);

    let angsuranBulat = 0;

    if (paymentType === "ADDB") {
      let uangMuka = tdpKotor - biayaFidusia;
      let ph = hargaMobil - uangMuka;
      let tph = ph + (ph * provisiRate) + asuransiPH + biayaAdminPH;
      
      let nilaiKredit = tph * (1 + (bungaJual * tenorTahun));
      let angsuranRaw = nilaiKredit / tenor;
      angsuranBulat = Math.round(angsuranRaw / 1000) * 1000;
      
    } else if (paymentType === "ADDM") {
      // Bypass Circular Reference untuk ADDM
      const C = ((1 + provisiRate) * (1 + (bungaJual * tenorTahun))) / tenor;
      const angsuranRaw = (((hargaMobil - tdpKotor + biayaFidusia) * (1 + provisiRate) + asuransiPH + biayaAdminPH) * (1 + (bungaJual * tenorTahun)) / tenor) / (1 - C);
      
      angsuranBulat = Math.round(angsuranRaw / 1000) * 1000;
    }

    // Kalkulasi final state
    let uangMukaFinal = tdpKotor - biayaFidusia - (paymentType === "ADDM" ? angsuranBulat : 0);
    let pokokHutangFinal = hargaMobil - uangMukaFinal;
    let provisiFinal = pokokHutangFinal * provisiRate;
    let tphFinal = pokokHutangFinal + provisiFinal + asuransiPH + biayaAdminPH;
    let persenDp = (uangMukaFinal / hargaMobil) * 100;

    setResult({ 
      uangMukaAsli: uangMukaFinal, 
      persenDpAwal: persenDp,
      cicilan: angsuranBulat, 
      adminPH: biayaAdminPH, 
      asuransiPH: asuransiPH, 
      provisiPH: provisiFinal,
      tdpKotor: tdpKotor,
      pokokUtang: tphFinal,
      bungaJual: bungaJual * 100
    });

  }, [hargaMobil, dpSetor, diskon, tenor, paymentType, uping]);

  const handleNumChange = (setter: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(Number(e.target.value.replace(/[^0-9]/g, "")));
  };

  const waMsg = `Halo Yusuf Suzuki, saya ingin pengajuan kredit:
- Unit: ${currentCar?.name} ${currentVariantName ? `(${currentVariantName})` : ''}
- Wilayah OTR: Plat ${region}
- Harga OTR: ${formatCurrency(hargaMobil)}
- Skema: ${paymentType}
- Tenor: ${tenor} Bulan
- DP Setor (Nett): ${formatCurrency(dpSetor)}
- Angsuran: ${formatCurrency(result.cicilan)}/bln
Mohon info persyaratannya.`;

  return (
    <div className="bg-white rounded-none border border-gray-200 shadow-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Sisi Kiri: Inputs */}
        <div className="lg:col-span-7 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-100">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-900 flex items-center justify-center text-white shrink-0">
                <Calculator size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-xl uppercase tracking-tighter">Simulasi Kredit</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Standard Kombi 1TH</p>
              </div>
            </div>
            <div className="flex bg-gray-100 rounded-md p-1">
              <button
                onClick={() => setPaymentType("ADDM")}
                className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-sm transition-all ${
                  paymentType === "ADDM" ? "bg-white shadow text-gray-900" : "text-gray-400 hover:text-gray-900"
                }`}
              >
                ADDM
              </button>
              <button
                onClick={() => setPaymentType("ADDB")}
                className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-sm transition-all ${
                  paymentType === "ADDB" ? "bg-white shadow text-gray-900" : "text-gray-400 hover:text-gray-900"
                }`}
              >
                ADDB
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

            <div className="grid grid-cols-1 gap-6 pt-2">
              <div className="relative">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Harga OTR</label>
                <div className="flex items-center border-b-2 border-gray-200 focus-within:border-gray-900 transition-colors">
                  <span className="text-sm font-bold text-gray-400 mr-2 py-2">Rp</span>
                  <input type="text" value={hargaMobil === 0 ? "" : new Intl.NumberFormat('id-ID').format(hargaMobil)} onChange={handleNumChange(setHargaMobil)} className="w-full bg-transparent py-2 text-lg font-black text-gray-900 focus:outline-none" />
                </div>
              </div>

              {/* INPUT REVERSE: DP Setor & Diskon */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 text-blue-600">DP Setor (Nett)</label>
                  <div className="flex items-center border-b-2 border-blue-200 focus-within:border-blue-600 transition-colors">
                    <span className="text-sm font-bold text-gray-400 mr-2 py-2">Rp</span>
                    <input type="text" value={dpSetor === 0 ? "" : new Intl.NumberFormat('id-ID').format(dpSetor)} onChange={handleNumChange(setDpSetor)} className="w-full bg-transparent py-2 text-lg font-black text-blue-900 focus:outline-none" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 text-green-600">Diskon Unit</label>
                  <div className="flex items-center border-b-2 border-green-200 focus-within:border-green-600 transition-colors">
                    <span className="text-sm font-bold text-gray-400 mr-2 py-2">Rp</span>
                    <input type="text" value={diskon === 0 ? "" : new Intl.NumberFormat('id-ID').format(diskon)} onChange={handleNumChange(setDiskon)} className="w-full bg-transparent py-2 text-lg font-black text-green-900 focus:outline-none" />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 text-purple-600">Uping Bunga (%)</label>
                <div className="flex items-center border-b-2 border-purple-200 focus-within:border-purple-600 transition-colors">
                  <input type="number" step="0.1" value={uping} onChange={(e) => setUping(Number(e.target.value))} className="w-full bg-transparent py-2 text-lg font-black text-purple-900 focus:outline-none" />
                  <span className="text-sm font-bold text-gray-400 ml-2 py-2">%</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Jangka Waktu</label>
              <div className="grid grid-cols-5 gap-2">
                {[12, 24, 36, 48, 60].map((t) => (
                  <button
                    key={t} onClick={() => setTenor(t)}
                    className={`py-3 text-xs font-black transition-all border ${
                      tenor === t ? "bg-gray-900 border-gray-900 text-white" : "border-gray-200 text-gray-400 hover:border-gray-900 hover:text-gray-900"
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
          <div className="mb-6">
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

          <div className="space-y-3 mb-6 flex-grow">
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">TDP Kotor (DP + Diskon)</span>
              <span className="text-xs font-black text-gray-900">{formatCurrency(result.tdpKotor)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Persentase DP Murni</span>
              <span className="text-xs font-black text-gray-900">{result.persenDpAwal.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Total Pokok Hutang</span>
              <span className="text-xs font-black text-gray-900">{formatCurrency(result.pokokUtang)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Rate Bunga Jual</span>
              <span className="text-xs font-black text-gray-900">{result.bungaJual.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Biaya Masuk PH</span>
              <div className="text-right">
                <span className="text-[9px] font-bold text-gray-500 block">Asuransi Dinamis: {formatCurrency(result.asuransiPH)}</span>
                <span className="text-[9px] font-bold text-gray-500 block">Provisi (1%): {formatCurrency(result.provisiPH)}</span>
                <span className="text-[9px] font-bold text-gray-500 block">Admin: {formatCurrency(result.adminPH)}</span>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex gap-3 text-gray-500 mb-6 bg-gray-200/50 p-4 border-l-4 border-gray-900">
              <Info size={16} className="shrink-0 mt-0.5" />
              <p className="text-[9px] uppercase leading-relaxed font-bold">
                Asuransi dihitung otomatis berdasarkan OJK (Depresiasi Harga Mobil Tahunan). Masukkan nominal DP Setor dan Diskon yang disepakati untuk mendapat angsuran akurat.
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