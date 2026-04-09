import type { Metadata } from "next";
import TestDriveForm from "@/components/TestDriveForm";
import { CarFront, MapPin, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Booking Test Drive Suzuki Jogja – Gratis!",
  description: "Booking test drive mobil Suzuki Jogja gratis. Bisa di showroom atau lokasi Anda. Hubungi Yusuf Suzuki: 0821 7463 5218.",
};

const benefits = [
  { icon: CarFront, title: "Semua Tipe Tersedia", desc: "Test drive tersedia untuk semua tipe mobil Suzuki terbaru." },
  { icon: MapPin, title: "Antar ke Lokasi Anda", desc: "Bisa dilakukan di showroom atau kami antar langsung ke lokasi Anda." },
  { icon: Clock, title: "Jadwal Fleksibel", desc: "Senin – Sabtu, mulai dari pukul 08.00 hingga 17.00 WIB." },
  { icon: ShieldCheck, title: "Gratis & Tanpa Ribet", desc: "Tidak ada biaya apapun, dan pastinya tidak ada paksaan untuk membeli." },
];

export default function TestDrivePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header - Tema Gelap Premium (Menempel ke Atas) */}
      <div className="bg-gray-900 pt-32 pb-24 md:pt-40 md:pb-36 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block bg-white/10 text-gray-300 text-[10px] font-bold px-4 py-1.5 rounded-none mb-6 uppercase tracking-[0.2em] border border-white/10">
            Coba Dulu Sebelum Beli
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Booking Test Drive
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Rasakan langsung sensasi berkendara, performa mesin, dan kenyamanan interior Suzuki impian Anda. Gratis, tanpa syarat yang memberatkan.
          </p>
        </div>
      </div>

      {/* Area Konten Utama (Efek Overlapping / Mengambang) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 -mt-16 md:-mt-24 relative z-20">
        
        {/* Layout Grid: Kiri Form (Lebih Lebar), Kanan Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Kolom Kiri: Form Test Drive */}
          <div className="lg:col-span-7">
            <TestDriveForm />
          </div>

          {/* Kolom Kanan: Keuntungan */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-none border border-gray-200 shadow-2xl p-6 md:p-10 sticky top-24">
              <h2 className="font-black text-gray-900 text-lg uppercase tracking-tighter mb-8 border-b border-gray-100 pb-5">
                Mengapa Test Drive?
              </h2>
              
              <div className="space-y-8">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-5 items-start group">
                    {/* Icon Box dengan Efek Hover Monokrom */}
                    <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-none flex items-center justify-center shrink-0 text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 shadow-sm">
                      <b.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      {/* Judul & Deskripsi Rapi */}
                      <p className="font-bold text-gray-900 text-xs uppercase tracking-widest mb-1.5">
                        {b.title}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}