"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, CreditCard, BadgePercent, CarFront, MessageCircle } from "lucide-react";

export default function AdvantagesSection({ cityName }: { cityName?: string }) {
  
  const advantages = [
    { 
      icon: ShieldCheck, 
      title: "Dealer Resmi", 
      desc: "Suzuki Sumber Baru Mobil adalah dealer resmi PT Suzuki Indomobil Sales dengan garansi resmi pabrik.",
      iconBg: "bg-blue-600",
      iconText: "text-white",
      hoverIconBg: "group-hover:bg-blue-50",
      hoverIconText: "group-hover:text-blue-600",
      hoverBorder: "hover:border-blue-500"
    },
    { 
      icon: MapPin, 
      title: `Area ${cityName ? cityName : "Jogja"} & Sekitarnya`, 
      desc: `Kami melayani pengiriman dan layanan sales untuk warga ${cityName ? cityName : "Yogyakarta, Magelang, Klaten, Purworejo, dan sekitarnya"}.`,
      iconBg: "bg-teal-600",
      iconText: "text-white",
      hoverIconBg: "group-hover:bg-teal-50",
      hoverIconText: "group-hover:text-teal-600",
      hoverBorder: "hover:border-teal-500"
    },
    { 
      icon: CreditCard, 
      title: "Kredit Mudah", 
      desc: "Proses kredit cepat, ACC 2-3 hari kerja. Didukung multi-finance terpercaya.",
      iconBg: "bg-orange-600",
      iconText: "text-white",
      hoverIconBg: "group-hover:bg-orange-50",
      hoverIconText: "group-hover:text-orange-600",
      hoverBorder: "hover:border-orange-500"
    },
    { 
      icon: BadgePercent, 
      title: "DP Ringan", 
      desc: "Program DP ringan mulai 15% dengan tenor fleksibel hingga 60 bulan.",
      iconBg: "bg-red-600",
      iconText: "text-white",
      hoverIconBg: "group-hover:bg-red-50",
      hoverIconText: "group-hover:text-red-600",
      hoverBorder: "hover:border-red-500"
    },
    { 
      icon: CarFront, 
      title: "Test Drive Gratis", 
      desc: "Coba dulu sebelum beli! Test drive gratis ke lokasi Anda, tanpa perlu ke showroom.",
      iconBg: "bg-violet-600",
      iconText: "text-white",
      hoverIconBg: "group-hover:bg-violet-50",
      hoverIconText: "group-hover:text-violet-600",
      hoverBorder: "hover:border-violet-500"
    },
    { 
      icon: MessageCircle, 
      title: "Fast Response", 
      desc: "Yusuf Suzuki siap membantu via WhatsApp. Fast response, ramah, dan profesional.",
      iconBg: "bg-[#25D366]",
      iconText: "text-white",
      hoverIconBg: "group-hover:bg-[#25D366]/10",
      hoverIconText: "group-hover:text-[#25D366]",
      hoverBorder: "hover:border-[#25D366]"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        
        {/* Header Section (Diberi padding di mobile karena container atasnya px-0) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16 px-4 sm:px-0"
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

        {/* CONTAINER BERUBAH: Flex/Scroll di HP, Grid di Desktop */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory px-4 sm:px-0 pb-8 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              // KARTU BERUBAH: Punya lebar fixed di HP (85vw) agar bisa digeser
              className={`shrink-0 w-[85vw] sm:w-auto snap-center bg-white border border-gray-200 rounded-none p-6 md:p-8 transition-all duration-500 group flex flex-col hover:shadow-2xl ${item.hoverBorder}`}
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-5 md:mb-6 rounded-none transition-colors duration-300 ${item.iconBg} ${item.iconText} ${item.hoverIconBg} ${item.hoverIconText}`}>
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              
              <p className="font-black text-gray-900 text-base md:text-lg uppercase tracking-tight mb-2 md:mb-3 group-hover:text-gray-900 transition-colors">
                {item.title}
              </p>
              
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}