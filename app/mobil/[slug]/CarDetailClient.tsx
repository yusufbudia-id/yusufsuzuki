"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Download, ChevronRight, Tag, Send, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Car } from "@/data/cars";
import CarGallery from "@/components/CarGallery";
import SpecificationTabs from "@/components/SpecificationTabs";
import CreditSimulator from "@/components/CreditSimulator";
import { buildWhatsAppUrl } from "@/lib/utils";

const schema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter"),
  hp: z.string().min(10, "Nomor HP tidak valid"),
  pesan: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

export default function CarDetailClient({ car }: { car: Car }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const msg = `Halo Yusuf Suzuki, saya tertarik dengan *${car.name}*.\n\n👤 Nama: ${data.nama}\n📱 HP: ${data.hp}\n💬 Pesan: ${data.pesan || "Mohon info harga dan promo terkini."}\n\nMohon informasinya. Terima kasih!`;
    setSubmitted(true);
    setTimeout(() => window.open(buildWhatsAppUrl(msg), "_blank"), 500);
  };

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-xs text-gray-400">
        <Link href="/" className="hover:text-suzuki-blue transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link href="/mobil" className="hover:text-suzuki-blue transition-colors">Produk Mobil</Link>
        <ChevronRight size={12} />
        <span className="text-gray-700 font-medium">{car.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Gallery + Specs */}
          <div className="lg:col-span-3 space-y-8">
            {/* Gallery */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <CarGallery images={car.gallery} name={car.name} />
            </motion.div>

            {/* Specs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="font-bold text-gray-900 text-xl mb-4">Spesifikasi</h2>
              <SpecificationTabs spec={car.specifications} />
            </motion.div>

            {/* Credit Simulator */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <CreditSimulator defaultCarSlug={car.slug} />
            </motion.div>
          </div>

          {/* Right: Info + Actions */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              {/* Category + badges */}
              <div className="flex gap-2 flex-wrap mb-3">
                <span className="bg-suzuki-blue/10 text-suzuki-blue text-xs font-semibold px-3 py-1 rounded-full">{car.category}</span>
                {car.isNew && <span className="bg-suzuki-blue text-white text-xs font-semibold px-3 py-1 rounded-full">✨ Baru</span>}
                {car.isBestSeller && <span className="bg-suzuki-red text-white text-xs font-semibold px-3 py-1 rounded-full">🔥 Best Seller</span>}
              </div>

              <h1 className="text-3xl font-black text-gray-900 mb-2">{car.name}</h1>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{car.description}</p>

              {/* Price */}
              <div className="bg-suzuki-gray-light rounded-2xl p-5 mb-5">
                <p className="text-gray-500 text-xs mb-1">Harga OTR Jogja mulai</p>
                <p className="text-3xl font-black text-suzuki-blue">{car.startingPrice}</p>
                <p className="text-gray-400 text-sm mt-1">Cicilan mulai <span className="font-semibold text-gray-700">{car.monthlyInstallment}</span>/bulan</p>
              </div>

              {/* Promo */}
              {car.promo && (
                <div className="bg-suzuki-red/10 border border-suzuki-red/20 rounded-xl px-4 py-3 flex items-start gap-3 mb-5">
                  <Tag size={16} className="text-suzuki-red shrink-0 mt-0.5" />
                  <p className="text-suzuki-red font-medium text-sm">{car.promo}</p>
                </div>
              )}

              {/* Colors */}
              <div className="mb-5">
                <p className="text-sm font-semibold text-gray-700 mb-2">Pilihan Warna: <span className="text-suzuki-blue font-bold">{car.colors[selectedColor].name}</span></p>
                <div className="flex gap-2 flex-wrap">
                  {car.colors.map((c, i) => (
                    <button key={c.name} onClick={() => setSelectedColor(i)} title={c.name}
                      className={`w-8 h-8 rounded-full border-4 transition-all ${i === selectedColor ? "border-suzuki-blue scale-110" : "border-gray-200 hover:border-gray-400"}`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <a href={buildWhatsAppUrl(car.whatsappMessage)} target="_blank" rel="noopener noreferrer"
                  className="btn-primary w-full justify-center py-3.5">
                  <MessageCircle size={18} /> Chat Yusuf Suzuki
                </a>
                <a href={car.brochureUrl} className="btn-secondary w-full justify-center py-3.5">
                  <Download size={18} /> Download Brosur
                </a>
              </div>
            </motion.div>

            {/* Interest Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">Saya Minat dengan {car.name}</h3>
              {submitted ? (
                <div className="text-center py-4">
                  <CheckCircle2 size={40} className="text-green-500 mx-auto mb-2" />
                  <p className="text-gray-600 text-sm">Anda akan diarahkan ke WhatsApp Yusuf Suzuki!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                  <div>
                    <input {...register("nama")} placeholder="Nama Lengkap *" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-suzuki-blue/40 focus:border-suzuki-blue transition" />
                    {errors.nama && <p className="text-red-500 text-xs mt-1">{errors.nama.message}</p>}
                  </div>
                  <div>
                    <input {...register("hp")} placeholder="Nomor HP / WhatsApp *" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-suzuki-blue/40 focus:border-suzuki-blue transition" />
                    {errors.hp && <p className="text-red-500 text-xs mt-1">{errors.hp.message}</p>}
                  </div>
                  <textarea {...register("pesan")} rows={3} placeholder="Pesan (opsional)" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-suzuki-blue/40 focus:border-suzuki-blue transition resize-none" />
                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send size={16} /> Kirim via WhatsApp
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
