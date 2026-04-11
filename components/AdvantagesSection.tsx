"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, CreditCard, BadgePercent, CarFront, MessageCircle } from "lucide-react";

// Warna pelangi dihapus, kita buat seragam dan minimalis
const advantages = [
  { icon: ShieldCheck, title: "Dealer Resmi", desc: "Suzuki Sumber Baru Mobil adalah dealer resmi PT Suzuki Indomobil Sales dengan garansi resmi pabrik." },
  { icon: MapPin, title: "Area Jogja & Sekitarnya", desc: "Kami melayani seluruh wilayah Yogyakarta, Magelang, Klaten, Purworejo, dan sekitarnya." },
  { icon: CreditCard, title: "Kredit Mudah", desc: "Proses kredit cepat, ACC 2-3 hari kerja. Didukung multi-finance terpercaya." },
  { icon: BadgePercent, title: "DP Ringan", desc: "Program DP ringan mulai 15% dengan tenor fleksibel hingga 60 bulan." },
  { icon: CarFront, title: "Test Drive Gratis", desc: "Coba dulu sebelum beli! Test drive gratis ke lokasi Anda, tanpa perlu ke showroom." },
  { icon: MessageCircle, title: "Fast Response", desc: "Yusuf Suzuki siap membantu via WhatsApp. Fast response, ramah, dan profesional." },
];

export default function AdvantagesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - Disesuaikan dengan tipografi monokrom tajam */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gray-200 text-gray-800 text-[10px] font-bold px-4 py-1.5 rounded-none mb-4 uppercase tracking-widest">
            Mengapa Kami?
          </span>
          {/* Heading SEO: Menggunakan kata kunci Dealer Resmi Suzuki Jogja */}
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Keunggulan Dealer Resmi Suzuki Jogja
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Beli mobil Suzuki impian Anda dengan kemudahan proses, harga transparan, dan pelayanan terbaik dari Yusuf Suzuki.
          </p>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              /* Bingkai kotak tajam dengan efek hover tegas */
              className="bg-white border border-gray-200 rounded-none p-8 hover:border-gray-900 hover:shadow-2xl transition-all duration-500 group flex flex-col"
            >
              {/* Icon Box - Transisi dari abu-abu ke hitam pekat */}
              <div className="w-14 h-14 bg-gray-100 flex items-center justify-center mb-6 text-gray-900 rounded-none group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                <item.icon size={26} strokeWidth={1.5} />
              </div>
              
              <h3 className="font-black text-gray-900 text-lg uppercase tracking-tight mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}