"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle } from "lucide-react";

// Data FAQ disatukan di sini agar mudah diedit dan disesuaikan
const faqs = [
  {
    question: "Apa saja syarat pengajuan kredit mobil Suzuki?",
    answer: "Untuk perorangan: KTP Suami Istri, Kartu Keluarga, NPWP, PBB/Rekening Listrik, Slip Gaji (karyawan) atau NIB/SKU (wiraswasta), dan Mutasi Rekening 3 bulan terakhir. Untuk perusahaan: SIUP, TDP, NIB, KTP Direksi, dan Rekening Koran."
  },
  {
    question: "Apakah melayani pembelian dengan KTP luar Jogja?",
    answer: "Tentu bisa! Kami melayani pembelian untuk wilayah DIY, Kedu, dan Banyumas. Untuk KTP luar daerah tersebut, tetap bisa diproses dengan penyesuaian syarat dan ketentuan leasing terkait pelat nomor (BBN)."
  },
  {
    question: "Berapa lama proses ACC leasing setelah berkas masuk?",
    answer: "Jika data Anda lengkap dan kooperatif saat disurvei, proses persetujuan (ACC) dari pihak leasing biasanya hanya memakan waktu 1 hingga 3 hari kerja."
  },
  {
    question: "Apakah bisa tukar tambah (Trade-In) dengan mobil lama saya?",
    answer: "Sangat bisa! Kami menerima tukar tambah mobil bekas segala merk dengan harga penawaran yang transparan dan kompetitif. Hasil penjualan mobil lama Anda bisa langsung dijadikan Uang Muka (DP) untuk Suzuki baru Anda."
  },
  {
    question: "Tipe mobil Suzuki apa saja yang ready stock saat ini?",
    answer: "Sebagian besar lineup unggulan kami ready stock, seperti Suzuki XL7, Ertiga, Grand Vitara, S-Presso, Baleno, dan Carry Pick Up. Untuk Jimny (3-door & 5-door) mungkin memerlukan inden, silakan hubungi Yusuf untuk cek ketersediaan warna."
  },
  {
    question: "Apa saja bonus yang saya dapatkan untuk pembelian mobil baru?",
    answer: "Setiap pembelian unit baru akan mendapatkan Free Kaca Film, Karpet Lembaran, APAR (Alat Pemadam Api Ringan), Tatakan Plat Nomor, Payung Suzuki, serta Gratis Biaya Jasa Servis hingga 50.000 KM atau 3 Tahun."
  },
  {
    question: "Apakah layanan Test Drive dipungut biaya?",
    answer: "100% Gratis! Anda tidak akan dipungut biaya apapun. Unit test drive bahkan bisa kami antarkan langsung ke rumah atau kantor Anda (khusus wilayah Jogja dan sekitarnya) sesuai dengan jadwal yang Anda tentukan."
  }
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-12 h-12 bg-gray-900 flex items-center justify-center text-white mx-auto mb-6 rounded-none">
            <HelpCircle size={24} strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            FAQ & Informasi
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Pertanyaan yang sering diajukan seputar proses pembelian Suzuki.
          </p>
        </motion.div>

        {/* Accordion FAQ */}
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Accordion.Item 
                value={`item-${i}`} 
                className="bg-gray-50 border border-gray-200 rounded-none overflow-hidden hover:border-gray-900 transition-colors duration-300 group"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-bold text-gray-900 text-xs md:text-sm uppercase tracking-widest focus:outline-none">
                    <span className="leading-relaxed pr-4">{faq.question}</span>
                    <div className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 group-hover:border-gray-900 group-data-[state=open]:bg-gray-900 group-data-[state=open]:border-gray-900 transition-colors shrink-0">
                      <ChevronDown 
                        size={16} 
                        strokeWidth={2}
                        className="text-gray-400 group-hover:text-gray-900 group-data-[state=open]:text-white transition-transform duration-300 group-data-[state=open]:rotate-180" 
                      />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up bg-white border-t border-gray-100">
                  <p className="p-6 text-sm text-gray-500 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>

      </div>
    </section>
  );
}