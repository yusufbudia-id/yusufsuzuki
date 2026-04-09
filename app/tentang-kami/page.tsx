import type { Metadata } from "next";
import { Users, Award, Car, ThumbsUp, MapPin, Phone } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Tentang Kami – Suzuki Sumber Baru Mobil Jogja",
  description: "Dealer resmi Suzuki Yogyakarta, Jl. Magelang KM 8. Lebih dari 10 tahun melayani pelanggan dengan profesional dan amanah.",
};

const stats = [
  { icon: Car, value: "500+", label: "Mobil Terjual" },
  { icon: ThumbsUp, value: "98%", label: "Pelanggan Puas" },
  { icon: Award, value: "10+", label: "Tahun Pengalaman" },
  { icon: Users, value: "1000+", label: "Pelanggan Setia" },
];

export default function TentangKamiPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero / Header - Menempel ke Atas */}
      <div className="bg-gray-900 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <span className="inline-block bg-white/5 text-gray-400 text-[10px] font-bold px-3 py-1 rounded-none mb-4 uppercase tracking-[0.2em] border border-white/10">
            Profil Dealer
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Tentang Suzuki Sumber Baru
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Dealer resmi Suzuki terpercaya di Yogyakarta & sekitarnya sejak lebih dari satu dekade. Komitmen kami adalah pelayanan prima tanpa kompromi.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center mb-24">
          
          {/* Teks Cerita */}
          <div>
            <span className="inline-block bg-gray-100 text-gray-800 text-[10px] font-bold px-4 py-1.5 rounded-none mb-6 uppercase tracking-widest">
              Siapa Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 uppercase tracking-tight leading-tight">
              Dealer Suzuki Terpercaya <br/> di Jantung Jogja
            </h2>
            <div className="space-y-6 text-gray-500 leading-relaxed text-sm md:text-base">
              <p>
                <strong className="text-gray-900">Suzuki Sumber Baru Mobil</strong> adalah dealer resmi PT Suzuki Indomobil Sales yang berlokasi strategis di <strong>Jl. Magelang KM 8, Yogyakarta</strong>. Kami hadir untuk melayani masyarakat Jogja dan sekitarnya dalam mendapatkan lini produk Suzuki terbaik.
              </p>
              <p>
                Dengan pengalaman lebih dari 10 tahun, kami telah membantu lebih dari 500 keluarga dan pelaku usaha mendapatkan kendaraan operasional maupun mobil impian mereka. Kepercayaan pelanggan adalah fondasi mutlak dari bisnis kami.
              </p>
              <p>
                Kami tidak hanya menjual besi dan mesin — kami memastikan setiap pelanggan mendapatkan pengalaman berbelanja yang transparan, mudah, dan tanpa tekanan. Dari konsultasi awal hingga serah terima kunci, kami mendampingi Anda di setiap langkah.
              </p>
            </div>
          </div>

          {/* Foto Showroom Tajam */}
          <div className="relative group">
            <div className="overflow-hidden rounded-none shadow-2xl border border-gray-200">
              <img 
                src="/showroom/showroom.jpg" 
                alt="Showroom Suzuki" 
                className="w-full h-[400px] transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" 
              />
            </div>
            {/* Badge Tahun */}
            <div className="absolute -bottom-8 -left-4 md:-left-8 bg-gray-900 text-white px-8 py-6 rounded-none shadow-xl border border-gray-800">
              <p className="font-black text-4xl mb-1">10<span className="text-gray-400">+</span></p>
              <p className="text-gray-400 text-[9px] uppercase tracking-[0.2em] font-bold">Tahun Melayani</p>
            </div>
          </div>
        </div>

        {/* Statistik Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 mt-12">
          {stats.map((s) => (
            <div key={s.label} className="bg-white border border-gray-200 rounded-none p-8 text-center hover:border-gray-900 transition-colors duration-500 group">
              <div className="w-14 h-14 bg-gray-50 flex items-center justify-center mx-auto mb-6 text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-500">
                <s.icon size={24} strokeWidth={1.5} />
              </div>
              <p className="text-3xl font-black text-gray-900 mb-2 tracking-tighter">{s.value}</p>
              <p className="text-gray-400 text-[9px] uppercase tracking-widest font-bold">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Yusuf Profile - Gaya Editorial Hitam Pekat */}
        <div className="bg-gray-900 rounded-none p-8 md:p-16 text-white relative overflow-hidden group shadow-2xl">
          {/* Garis Dekoratif Latar Belakang */}
          <div className="absolute top-0 right-0 w-64 h-full bg-white/5 skew-x-12 translate-x-32 group-hover:translate-x-20 transition-transform duration-1000" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-center relative z-10">
            {/* Foto Profile Yusuf */}
            <div className="aspect-[3/4] w-full max-w-[260px] mx-auto md:mx-0 overflow-hidden bg-gray-800 rounded-none shadow-2xl relative border border-gray-700">
              <img 
                src="/kontak/photo.jpg" 
                alt="Yusuf Suzuki Sales Executive" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
              />
              <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent" />
            </div>
            
            {/* Teks Deskripsi Yusuf */}
            <div className="md:col-span-2 text-center md:text-left">
              <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-3">Sales Executive</p>
              <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-white">Yusuf Suzuki</h3>
              
              <p className="text-gray-400 leading-relaxed mb-10 text-sm md:text-base max-w-2xl">
                Sebagai konsultan penjualan otomotif profesional, Yusuf selalu menempatkan integritas dan kepuasan pelanggan di atas segalanya. Dengan penguasaan produk yang mendalam, Yusuf siap menjadi mitra Anda dalam menganalisis kebutuhan, memberikan simulasi pembiayaan paling rasional, hingga memastikan unit mendarat sempurna di garasi Anda.
              </p>
              
              {/* Info Kontak Sharp */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex items-center gap-3 border border-gray-700 hover:border-white transition-colors bg-white/5 px-6 py-3.5 rounded-none cursor-default">
                  <Phone size={16} className="text-gray-400" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-200">0821 7463 5218</span>
                </div>
                <div className="flex items-center gap-3 border border-gray-700 hover:border-white transition-colors bg-white/5 px-6 py-3.5 rounded-none cursor-default">
                  <MapPin size={16} className="text-gray-400" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-200">Jl. Magelang KM 8</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      
    </div>
  );
}