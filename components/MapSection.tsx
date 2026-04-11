import { MapPin, Clock, Phone } from "lucide-react";

export default function MapSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Sisi Kiri: Informasi Teks */}
          <div>
            <span className="inline-block bg-gray-200 text-gray-800 text-[10px] font-bold px-4 py-1.5 rounded-none mb-6 uppercase tracking-widest">
              Lokasi Kami
            </span>
            {/* Heading SEO: Menambahkan kata "Dealer Suzuki Jogja" */}
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 uppercase tracking-tight">
              Kunjungi Dealer Suzuki Jogja
            </h2>
            <p className="text-gray-500 mb-12 text-base leading-relaxed max-w-lg">
              Datang langsung ke showroom kami di Jalan Magelang untuk melihat unit display secara detail, konsultasi, dan jadwalkan test drive Anda.
            </p>
            
            <div className="space-y-8">
              {/* Item Alamat */}
              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-none flex items-center justify-center shrink-0 text-gray-900 group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:text-white transition-all duration-300 shadow-sm">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xs uppercase tracking-widest mb-1.5">Alamat</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Suzuki Sumber Baru Mobil<br />
                    Jl. Magelang KM 8, Mlati, Yogyakarta
                  </p>
                </div>
              </div>
              
              {/* Item Jam Operasional */}
              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-none flex items-center justify-center shrink-0 text-gray-900 group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Clock size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xs uppercase tracking-widest mb-1.5">Jam Operasional</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Senin – Sabtu: 08.00 – 17.00 WIB<br />
                    Minggu: Tutup
                  </p>
                </div>
              </div>
              
              {/* Item Kontak */}
              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-none flex items-center justify-center shrink-0 text-gray-900 group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xs uppercase tracking-widest mb-1.5">Kontak</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Yusuf Suzuki<br />
                    0821 7463 5218
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Peta (Map) */}
          <div className="rounded-none overflow-hidden bg-gray-200 border border-gray-200 hover:border-gray-900 transition-colors duration-500 h-[400px] lg:h-[500px] relative shadow-sm">
            {/* Tautan Embed Peta yang Benar & Valid */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2505680194094!2d110.36035967591605!3d-7.763261677020084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5843a8cdbc93%3A0xcda6c49c7198bb4b!2sSuzuki%20Sumber%20Baru%20Mobil%20-%20Mlati!5e0!3m2!1sid!2sid!4v1714101908079!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Dealer Suzuki Jogja Sumber Baru Mobil"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}