import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "FAQ – Pertanyaan Umum Suzuki Sumber Baru Mobil",
  description: "Jawaban atas pertanyaan seputar kredit, test drive, promo, dan pembelian mobil Suzuki di Jogja. Hubungi Yusuf Suzuki: 0821 7463 5218.",
};

export default function FAQPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header - Tema Gelap Premium (Menempel ke Atas) */}
      <div className="bg-gray-900 pt-32 pb-16 md:pt-40 md:pb-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left relative z-10">
          <span className="inline-block bg-white/10 text-gray-300 text-[10px] font-bold px-4 py-1.5 rounded-none mb-6 uppercase tracking-widest border border-white/10">
            Pusat Bantuan
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Pertanyaan Umum
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Temukan panduan lengkap dan jawaban cepat seputar syarat kredit, jadwal test drive, hingga layanan purnajual Suzuki di Yogyakarta.
          </p>
        </div>
      </div>

      {/* Memanggil komponen FAQSection yang sudah kita rombak sebelumnya */}
      <FAQSection />

      {/* Memanggil Call-to-Action di bagian paling bawah */}
      <ContactCTA />
      
    </div>
  );
}