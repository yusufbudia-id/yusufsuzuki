import type { Metadata } from "next";
import CreditSimulator from "@/components/CreditSimulator";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Simulasi Kredit Suzuki Jogja – Hitung DP & Angsuran",
  description: "Hitung simulasi kredit mobil Suzuki Anda. Dapatkan estimasi DP, angsuran, dan penawaran terbaik dari leasing rekanan kami. Hubungi Yusuf Suzuki.",
};

export default function SimulasiKreditPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header - Tema Gelap Premium (Menempel ke Atas) */}
      <div className="bg-gray-900 pt-32 pb-24 md:pt-40 md:pb-36 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block bg-white/10 text-gray-300 text-[10px] font-bold px-4 py-1.5 rounded-none mb-6 uppercase tracking-[0.2em] border border-white/10">
            Kalkulator Pembiayaan
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Simulasi Kredit
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Rencanakan pembelian mobil Suzuki Anda dengan cerdas. Hitung estimasi Uang Muka (TDP) dan Angsuran per bulan sesuai dengan budget Anda.
          </p>
        </div>
      </div>

      {/* Bagian Komponen Simulasi (Efek Mengambang / Overlapping) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 -mt-16 md:-mt-24 relative z-20">
        <CreditSimulator />
      </div>

      {/* Bagian Bawah Contact CTA */}
      <ContactCTA />
      
    </div>
  );
}