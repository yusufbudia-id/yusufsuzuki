import type { Metadata } from "next";
import CreditSimulator from "@/components/CreditSimulator";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Simulasi Kredit Mobil Suzuki Jogja | Hitung DP & Angsuran Murah",
  description: "Kalkulator simulasi kredit mobil Suzuki Jogja. Hitung estimasi DP ringan, cicilan, dan angsuran per bulan untuk XL7, Carry, Ertiga, Fronx dll. Dapatkan penawaran leasing terbaik.",
  keywords: [
    "Simulasi Kredit Suzuki Jogja",
    "Kredit Mobil Suzuki Yogyakarta",
    "Kalkulator Kredit Mobil",
    "DP Ringan Suzuki Jogja",
    "Angsuran Mobil Suzuki",
    "Promo Kredit Suzuki XL7",
    "Kredit Suzuki Carry Pick Up Jogja",
    "Harga Suzuki Jogja",
    "Dealer Resmi Suzuki Jogja",
    "Sales Suzuki Jogja"
  ],
  alternates: {
    canonical: "https://suzukiautojogja.com/simulasi-kredit", // Sesuaikan dengan domain utama
  },
  openGraph: {
    title: "Kalkulator Simulasi Kredit Suzuki Jogja - Hitung DP Sekarang",
    description: "Rencanakan pembelian mobil Suzuki impian Anda. Hitung estimasi DP dan angsuran per bulan dengan kalkulator pembiayaan kami. Promo khusus wilayah Jogja dan sekitarnya.",
    url: "https://suzukiautojogja.com/simulasi-kredit",
    siteName: "Suzuki Auto Jogja",
    images: [
      {
        url: "/images/og-simulasi-kredit.jpg", // Pastikan gambar ini ada di folder public
        width: 1200,
        height: 630,
        alt: "Simulasi Kredit Mobil Suzuki Jogja",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulasi Kredit Mobil Suzuki Jogja",
    description: "Hitung simulasi kredit mobil Suzuki Anda. Dapatkan estimasi DP, angsuran, dan penawaran terbaik.",
  },
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
          {/* H1 diperkuat dengan keyword utama */}
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Simulasi Kredit Mobil Suzuki
          </h1>
          {/* Subteks disisipi variasi keyword natural */}
          <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Rencanakan pembelian mobil impian Anda di Jogja dengan cerdas. Hitung estimasi Uang Muka (TDP) dan cicilan per bulan untuk berbagai tipe seperti XL7, Carry, maupun Fronx yang sesuai dengan kemampuan finansial Anda.
          </p>
        </div>
      </div>

      {/* Bagian Komponen Simulasi (Efek Mengambang / Overlapping) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 -mt-16 md:-mt-24 relative z-20">
        <CreditSimulator />
      </div>

      {/* SEO Content Section - Sangat penting untuk ranking Google tanpa mengganggu visual */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm text-gray-600 space-y-4 text-sm md:text-base">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">
            Dapatkan Penawaran Kredit Mobil Suzuki Terbaik di Yogyakarta
          </h2>
          <p className="leading-relaxed">
            Fasilitas <strong>kalkulator simulasi kredit mobil</strong> ini kami sediakan untuk memberi gambaran awal pembiayaan kendaraan Anda. Bekerja sama dengan berbagai lembaga pembiayaan (leasing) terpercaya seperti Suzuki Finance, BCA Finance, dan Mandiri Tunas Finance, kami siap membantu Anda mendapatkan persetujuan kredit yang cepat dan mudah di wilayah Yogyakarta, Sleman, Bantul, Gunungkidul, dan Kulon Progo.
          </p>
          <p className="leading-relaxed">
            Hasil perhitungan di atas adalah estimasi. Untuk mendapatkan rincian <strong>promo DP ringan</strong>, diskon cashback terbaru, dan bunga paling kompetitif, silakan konsultasikan langsung hasil simulasi Anda.
          </p>
        </div>
      </div>

      {/* Bagian Bawah Contact CTA */}
      <ContactCTA />
      
    </div>
  );
}