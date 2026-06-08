import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Calculator, BadgePercent, FileCheck2, ShieldCheck } from "lucide-react";
import CreditSimulator from "@/components/CreditSimulator";
import ContactCTA from "@/components/ContactCTA";
import PageHero from "@/components/PageHero";
import { buildWhatsAppUrl } from "@/lib/utils";

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
    canonical: "https://suzukiautojogja.com/simulasi-kredit",
  },
  openGraph: {
    title: "Kalkulator Simulasi Kredit Suzuki Jogja - Hitung DP Sekarang",
    description: "Rencanakan pembelian mobil Suzuki impian Anda. Hitung estimasi DP dan angsuran per bulan dengan kalkulator pembiayaan kami. Promo khusus wilayah Jogja dan sekitarnya.",
    url: "https://suzukiautojogja.com/simulasi-kredit",
    siteName: "Suzuki Auto Jogja",
    images: [
      {
        url: "/images/og-simulasi-kredit.jpg",
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

const creditHighlights = [
  { icon: Calculator, title: "Hitung Realistis", desc: "Estimasi DP, diskon, tenor, dan angsuran bisa disesuaikan." },
  { icon: BadgePercent, title: "Promo Terhubung", desc: "Diskon varian dapat dimasukkan ke skema simulasi." },
  { icon: FileCheck2, title: "Dibantu Pengajuan", desc: "Konsultasi syarat kredit sampai proses ACC lebih jelas." },
  { icon: ShieldCheck, title: "Leasing Resmi", desc: "Estimasi dapat dikonsultasikan dengan opsi pembiayaan terpercaya." },
];

export default function SimulasiKreditPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        eyebrow="Kalkulator Pembiayaan"
        title="Simulasi Kredit Mobil Suzuki"
        description="Rencanakan pembelian mobil Suzuki dengan lebih jelas. Hitung estimasi DP bayar, promo diskon, tenor, dan cicilan bulanan sebelum mengajukan kredit."
        stats={[
          { value: "DP", label: "Bisa Disesuaikan" },
          { value: "12-60", label: "Tenor Bulan" },
          { value: "AB / AA", label: "Area Harga" },
          { value: "WA", label: "Kirim Hasil" },
        ]}
      >
        <a
          href={buildWhatsAppUrl("Halo Yusuf Suzuki, saya ingin konsultasi hasil simulasi kredit mobil Suzuki.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red"
        >
          <MessageCircle size={16} /> Konsultasi Kredit
        </a>
        <Link href="/mobil" className="border border-white/20 bg-white/5 px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10">
          Pilih Mobil
        </Link>
      </PageHero>

      <section className="container-main -mt-10 relative z-20 pb-12 md:-mt-16 md:pb-16">
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
          {creditHighlights.map((item) => (
            <div key={item.title} className="group border border-gray-200 bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:border-red-600 hover:shadow-card-hover">
              <div className="mb-4 flex h-11 w-11 items-center justify-center bg-gray-950 text-white transition-colors group-hover:bg-red-600">
                <item.icon size={19} strokeWidth={1.6} />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-gray-950">{item.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <CreditSimulator />
      </section>

      <section className="container-main max-w-4xl pb-16 md:pb-24">
        <div className="red-edge border border-gray-200 bg-white p-6 shadow-card md:p-10">
          <p className="section-label mb-4">Panduan Kredit</p>
          <h2 className="mb-5 text-2xl font-black uppercase tracking-tighter text-gray-950 md:text-3xl">
            Dapatkan Penawaran Kredit Suzuki Terbaik di Yogyakarta
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-gray-500 md:text-base">
            <p>
              Fasilitas <strong className="text-gray-900">kalkulator simulasi kredit mobil</strong> ini disediakan untuk memberi gambaran awal pembiayaan kendaraan Anda. Estimasi dapat dikonsultasikan kembali agar sesuai dengan tipe mobil, varian, area plat nomor, diskon, tenor, dan program leasing yang berlaku.
            </p>
            <p>
              Hasil perhitungan bukan persetujuan final. Untuk rincian <strong className="text-gray-900">promo DP ringan</strong>, diskon terbaru, serta syarat dokumen, kirim hasil simulasi ke Yusuf Suzuki melalui WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
