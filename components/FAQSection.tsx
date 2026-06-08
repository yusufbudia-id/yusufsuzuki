"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection({ cityName }: { cityName?: string }) {
  const faqs = [
    {
      question: "Apa saja syarat pengajuan kredit mobil Suzuki?",
      answer: "Untuk perorangan: KTP Suami Istri, Kartu Keluarga, NPWP, PBB/Rekening Listrik, Slip Gaji untuk karyawan atau NIB/SKU untuk wiraswasta, dan Mutasi Rekening 3 bulan terakhir. Untuk perusahaan: SIUP, TDP, NIB, KTP Direksi, dan Rekening Koran.",
    },
    {
      question: `Apakah melayani pembelian dengan KTP luar ${cityName ? cityName : "Jogja"}?`,
      answer: `Tentu bisa. Kami melayani pembelian untuk wilayah ${cityName ? cityName : "DIY, Kedu, dan Banyumas"}. Untuk KTP luar daerah tersebut, proses tetap bisa dikonsultasikan dengan penyesuaian syarat leasing dan ketentuan pelat nomor atau BBN.`,
    },
    {
      question: "Berapa lama proses ACC leasing setelah berkas masuk?",
      answer: "Jika data lengkap dan kooperatif saat disurvei, proses persetujuan dari pihak leasing biasanya memakan waktu 1 sampai 3 hari kerja.",
    },
    {
      question: "Apakah bisa tukar tambah dengan mobil lama saya?",
      answer: "Bisa. Kami menerima tukar tambah mobil bekas berbagai merek dengan proses appraisal yang transparan. Hasil penjualan mobil lama dapat dipakai sebagai uang muka untuk Suzuki baru.",
    },
    {
      question: "Tipe mobil Suzuki apa saja yang ready stock saat ini?",
      answer: "Lineup populer seperti XL7, Ertiga, Grand Vitara, S-Presso, Baleno, dan Carry Pick Up biasanya tersedia bergantung warna dan varian. Untuk Jimny bisa membutuhkan inden, jadi sebaiknya hubungi Yusuf untuk cek stok terbaru.",
    },
    {
      question: "Apa saja bonus pembelian mobil baru?",
      answer: "Bonus dapat berupa kaca film, karpet, APAR, tatakan plat nomor, merchandise Suzuki, serta gratis biaya jasa servis sesuai program yang sedang berlaku. Detail bonus mengikuti promo periode berjalan.",
    },
    {
      question: "Apakah layanan test drive dipungut biaya?",
      answer: `Gratis. Unit test drive dapat dikonsultasikan sesuai jadwal dan area layanan, khususnya wilayah ${cityName ? cityName : "Jogja"} dan sekitarnya.`,
    },
  ];

  return (
    <section className="relative overflow-hidden border-t border-gray-100 bg-white py-20 md:py-28">
      <div className="container-main max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <div className="mx-auto mb-6 grid h-14 w-14 place-items-center border border-gray-200 bg-gray-950 text-white">
            <HelpCircle size={24} strokeWidth={1.5} />
          </div>
          <span className="section-label justify-center">Bantuan Cepat</span>
          <h2 className="section-title mt-4">FAQ & Informasi</h2>
          <p className="section-subtitle mx-auto">
            Pertanyaan yang sering diajukan seputar pembelian, kredit, promo, dan test drive Suzuki di {cityName ? cityName : "Jogja"}.
          </p>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={faq.question} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
              <Accordion.Item value={`item-${index}`} className="group overflow-hidden border border-gray-200 bg-gray-50 transition-colors duration-300 hover:border-red-600 data-[state=open]:border-red-600 data-[state=open]:bg-white">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-xs font-black uppercase tracking-[0.16em] text-gray-950 focus:outline-none md:px-6 md:text-sm">
                    <span className="pr-4 leading-relaxed">{faq.question}</span>
                    <div className="grid h-9 w-9 shrink-0 place-items-center border border-gray-200 bg-white transition-colors group-hover:border-red-600 group-hover:text-red-600 group-data-[state=open]:border-red-600 group-data-[state=open]:bg-red-600 group-data-[state=open]:text-white">
                      <ChevronDown size={16} strokeWidth={2.2} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden border-t border-gray-100 bg-white data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="p-5 text-sm font-medium leading-relaxed text-gray-500 md:p-6">{faq.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
