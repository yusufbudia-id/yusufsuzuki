import type { Metadata } from "next";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { WA_BASE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kontak – Suzuki Sumber Baru Mobil Jogja | Yusuf Suzuki 0821 7463 5218",
  description: "Hubungi Yusuf Suzuki di Suzuki Sumber Baru Mobil, Jl. Magelang KM 8 Yogyakarta. WhatsApp: 0821 7463 5218. Senin–Sabtu 08.00–17.00.",
};

export default function KontakPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header - Tema Gelap Premium (Menempel ke Atas) */}
      <div className="bg-gray-900 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-white/10 text-gray-300 text-[10px] font-bold px-4 py-1.5 rounded-none mb-6 uppercase tracking-[0.2em] border border-white/10">
            Hubungi Kami
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Kontak & Lokasi
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Kami siap melayani Anda dengan sepenuh hati. Silakan kunjungi showroom kami atau hubungi via WhatsApp untuk respon cepat.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Bagian Atas: Info Kontak & Peta */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-24">
          
          {/* Kolom Kiri: Informasi Kontak */}
          <div className="space-y-8">
            <div className="bg-white rounded-none border border-gray-200 shadow-2xl p-8 md:p-12">
              <h2 className="font-black text-gray-900 text-xl mb-8 uppercase tracking-tighter border-b border-gray-100 pb-5">
                Informasi Dealer
              </h2>
              
              <div className="space-y-8">
                {[
                  { icon: Phone, label: "Nomor WhatsApp", value: "0821 7463 5218\n(Yusuf Suzuki)" },
                  { icon: MapPin, label: "Alamat Showroom", value: "Suzuki Sumber Baru Mobil\nJl. Magelang KM 8, Sendangadi, Mlati, Sleman, Yogyakarta" },
                  { icon: Clock, label: "Jam Operasional", value: "Senin – Sabtu: 08.00 – 17.00 WIB\nMinggu: Tutup (Bisa Janjian)" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-5 items-start group">
                    <div className="w-12 h-12 rounded-none border border-gray-200 bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300 shadow-sm text-gray-900">
                      <item.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-xs uppercase tracking-widest mb-1.5">{item.label}</p>
                      <p className="text-gray-500 text-sm whitespace-pre-line leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tombol WhatsApp Sharp */}
            <a
              href={`${WA_BASE_URL}?text=Halo%20Yusuf%20Suzuki%2C%20saya%20ingin%20tanya%20tentang%20mobil%20Suzuki`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-900 hover:bg-black text-white py-5 flex justify-center items-center gap-3 transition-all font-black text-xs uppercase tracking-[0.2em] shadow-lg"
            >
              <MessageCircle size={18} />
              Chat Yusuf Via WhatsApp
            </a>
          </div>

          {/* Kolom Kanan: Google Maps (Full Color - Pointing ke Lokasi Asli) */}
          <div className="rounded-none overflow-hidden border border-gray-200 shadow-2xl h-[450px] md:h-auto relative bg-gray-200 min-h-[500px]">
            <iframe
              src="https://maps.google.com/maps?q=Suzuki%20Mlati%20Sumber%20Baru%20Mobil,%20Sleman&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", top: 0, left: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Suzuki Sumber Baru Mobil – Jl. Magelang KM 8"
            />
          </div>
        </div>

        {/* Bagian Bawah: Profil Yusuf (Kartu Nama Eksklusif) */}
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