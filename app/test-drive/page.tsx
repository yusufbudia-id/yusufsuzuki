import type { Metadata } from "next";
import Link from "next/link";
import TestDriveForm from "@/components/TestDriveForm";
import PageHero from "@/components/PageHero";
import { CarFront, MapPin, Clock, ShieldCheck, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Booking Test Drive Suzuki Jogja – Gratis!",
  description: "Booking test drive mobil Suzuki Jogja gratis. Bisa di showroom atau lokasi Anda. Hubungi Yusuf Suzuki: 0821 7463 5218.",
};

const benefits = [
  { icon: CarFront, title: "Semua Tipe Tersedia", desc: "Test drive tersedia untuk berbagai tipe mobil Suzuki terbaru." },
  { icon: MapPin, title: "Showroom / Lokasi Anda", desc: "Bisa dilakukan di showroom atau lokasi pilihan sesuai jadwal." },
  { icon: Clock, title: "Jadwal Fleksibel", desc: "Senin–Sabtu, mulai 08.00 sampai 17.00 WIB." },
  { icon: ShieldCheck, title: "Gratis & Tanpa Ribet", desc: "Tidak ada biaya test drive dan tidak ada paksaan pembelian." },
];

export default function TestDrivePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        eyebrow="Coba Dulu Sebelum Beli"
        title="Booking Test Drive Suzuki"
        description="Rasakan langsung performa, kenyamanan, dan fitur mobil Suzuki pilihan Anda. Jadwalkan test drive gratis di showroom atau lokasi yang disepakati."
        stats={[
          { value: "Gratis", label: "Biaya Test Drive" },
          { value: "08-17", label: "Jam Layanan" },
          { value: "Showroom", label: "Atau Lokasi Anda" },
          { value: "WA", label: "Konfirmasi Cepat" },
        ]}
      >
        <a
          href={buildWhatsAppUrl("Halo Yusuf Suzuki, saya ingin booking test drive mobil Suzuki.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red"
        >
          <MessageCircle size={16} /> Chat Jadwal
        </a>
        <Link href="/mobil" className="border border-white/20 bg-white/5 px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10">
          Pilih Mobil
        </Link>
      </PageHero>

      <section className="container-main -mt-10 relative z-20 pb-16 md:-mt-16 md:pb-24">
        <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <TestDriveForm />
          </div>

          <div className="lg:col-span-5">
            <div className="red-edge sticky top-24 border border-gray-200 bg-white p-6 shadow-card-hover md:p-10">
              <p className="section-label mb-4">Keuntungan</p>
              <h2 className="mb-8 text-2xl font-black uppercase tracking-tighter text-gray-950">Mengapa Test Drive?</h2>
              <div className="space-y-7">
                {benefits.map((b) => (
                  <div key={b.title} className="group flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gray-200 bg-gray-50 text-gray-900 shadow-sm transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
                      <b.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="mb-1.5 text-xs font-black uppercase tracking-widest text-gray-900">{b.title}</p>
                      <p className="text-sm leading-relaxed text-gray-500">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
