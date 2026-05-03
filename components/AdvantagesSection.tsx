"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, CreditCard, BadgePercent, CarFront, MessageCircle } from "lucide-react";

export default function AdvantagesSection({ cityName }: { cityName?: string }) {
  
  // Array diperbarui dengan penambahan kelas warna dinamis dari Tailwind
  const advantages = [
    { 
      icon: ShieldCheck, 
      title: "Dealer Resmi", 
      desc: "Suzuki Sumber Baru Mobil adalah dealer resmi PT Suzuki Indomobil Sales dengan garansi resmi pabrik.",
      iconBg: "bg-blue-50",
      iconText: "text-blue-600",
      hoverIconBg: "group-hover:bg-blue-600",
      hoverBorder: "hover:border-blue-500"
    },
    { 
      icon: MapPin, 
      title: `Area ${cityName ? cityName : "Jogja"} & Sekitarnya`, 
      desc: `Kami melayani pengiriman dan layanan sales untuk seluruh warga ${cityName ? cityName : "Yogyakarta, Magelang, Klaten, Purworejo, dan sekitarnya"}.`,
      iconBg: "bg-teal-50",
      iconText: "text-teal-600",
      hoverIconBg: "group-hover:bg-teal-600",
      hoverBorder: "hover:border-teal-500"
    },
    { 
      icon: CreditCard, 
      title: "Kredit Mudah", 
      desc: "Proses kredit cepat, ACC 2-3 hari kerja. Didukung multi-finance terpercaya.",
      iconBg: "bg-orange-50",
      iconText: "text-orange-600",
      hoverIconBg: "group-hover:bg-orange-600",
      hoverBorder: "hover:border-orange-500"
    },
    { 
      icon: BadgePercent, 
      title: "DP Ringan", 
      desc: "Program DP ringan mulai 15% dengan tenor fleksibel hingga 60 bulan.",
      iconBg: "bg-red-50",
      iconText: "text-red-600",
      hoverIconBg: "group-hover:bg-red-600",
      hoverBorder: "hover:border-red-500"
    },
    { 
      icon: CarFront, 
      title: "Test Drive Gratis", 
      desc: "Coba dulu sebelum beli! Test drive gratis ke lokasi Anda, tanpa perlu ke showroom.",
      iconBg: "bg-violet-50",
      iconText: "text-violet-600",
      hoverIconBg: "group-hover:bg-violet-600",
      hoverBorder: "hover:border-violet-500"
    },
    { 
      icon: MessageCircle, 
      title: "Fast Response", 
      desc: "Yusuf Suzuki siap membantu via WhatsApp. Fast response, ramah, dan profesional.",
      iconBg: "bg-[#25D366]/10", // Warna Hijau khas WhatsApp
      iconText: "text-[#25D366]",
      hoverIconBg: "group-hover:bg-[#25D366]",
      hoverBorder: "hover:border-[#25D366]"
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gray-200 text-gray-800 text-[10px] font-bold px-4 py-1.5 rounded-none mb-4 uppercase tracking-widest">
            Mengapa Kami?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Keunggulan Dealer Resmi Suzuki {cityName ? cityName : "Jogja"}
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
              // Tambahan border dinamis saat di-hover
              className={`bg-white border border-gray-200 rounded-none p-8 transition-all duration-500 group flex flex-col hover:shadow-2xl ${item.hoverBorder}`}
            >
              {/* Ikon dengan warna dinamis */}
              <div className={`w-14 h-14 flex items-center justify-center mb-6 rounded-none transition-colors duration-300 ${item.iconBg} ${item.iconText} ${item.hoverIconBg} group-hover:text-white`}>
                <item.icon size={26} strokeWidth={1.5} />
              </div>
              
              <p className="font-black text-gray-900 text-lg uppercase tracking-tight mb-3 group-hover:text-gray-900 transition-colors">
                {item.title}
              </p>
              
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