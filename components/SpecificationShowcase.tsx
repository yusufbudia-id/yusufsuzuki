import {
  Box,
  ChevronDown,
  CircleCheck,
  Cog,
  Download,
  Gauge,
  Layers,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { CarSpecifications, DetailedSpecification } from "@/data/cars";

type SpecGroup = {
  category: string;
  specifications: DetailedSpecification[];
};

type CategoryPresentation = {
  icon: LucideIcon;
  eyebrow: string;
  description: string;
};

const categoryPresentation: Record<string, CategoryPresentation> = {
  Performa: {
    icon: Gauge,
    eyebrow: "Mesin & penggerak",
    description: "Pahami tenaga, transmisi, dan karakter berkendara.",
  },
  "Dimensi & Kapasitas": {
    icon: Ruler,
    eyebrow: "Ruang & proporsi",
    description: "Ukuran bodi, daya angkut, dan kepraktisan sehari-hari.",
  },
  "Sasis & Pengereman": {
    icon: Wrench,
    eyebrow: "Kendali & tumpuan",
    description: "Komponen penting yang memengaruhi kestabilan dan pengereman.",
  },
  Keselamatan: {
    icon: ShieldCheck,
    eyebrow: "Proteksi berkendara",
    description: "Fitur perlindungan aktif maupun pasif untuk perjalanan lebih tenang.",
  },
  "Kenyamanan & Teknologi": {
    icon: Sparkles,
    eyebrow: "Kabin & konektivitas",
    description: "Fitur yang membuat perjalanan terasa lebih praktis dan menyenangkan.",
  },
  "Informasi Karoseri": {
    icon: Box,
    eyebrow: "Bodi & kebutuhan usaha",
    description: "Detail paket karoseri yang perlu dicocokkan dengan kebutuhan operasional.",
  },
  "Detail Teknis": {
    icon: Cog,
    eyebrow: "Informasi produk",
    description: "Data tambahan untuk membantu membandingkan pilihan varian.",
  },
};

const summaryItems = [
  { key: "mesin", label: "Mesin", icon: Gauge },
  { key: "transmisi", label: "Transmisi", icon: Cog },
  { key: "dimensi", label: "Dimensi", icon: Ruler },
  { key: "konsumsiBBM", label: "Pemakaian BBM", icon: Layers },
] as const;

function getPresentation(category: string): CategoryPresentation {
  return categoryPresentation[category] ?? categoryPresentation["Detail Teknis"];
}

export default function SpecificationShowcase({
  carName,
  summary,
  groups,
  brochureLink,
}: {
  carName: string;
  summary: CarSpecifications;
  groups: SpecGroup[];
  brochureLink: string;
}) {
  return (
    <section
      id="spesifikasi"
      className="relative mt-10 overflow-hidden border border-gray-200 bg-[#f7f7f7] shadow-[0_16px_45px_rgba(15,23,42,0.08)]"
      aria-labelledby="full-specification-heading"
    >
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 border-l border-t border-red-600/25" />

      <div className="relative border-b border-gray-200 bg-white px-5 py-6 md:px-8 md:py-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-red-600">
              <span className="h-2 w-2 bg-red-600" />
              Detail Teknis
            </div>
            <h2 id="full-specification-heading" className="text-2xl font-black uppercase tracking-tighter text-gray-950 md:text-3xl">
              Spesifikasi {carName}
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={brochureLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-red-600 bg-red-600 px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-red-700"
            >
              <Download size={15} /> Unduh E-Brosur
            </a>
            <div className="flex items-center gap-3 border-l-4 border-red-600 bg-gray-950 px-4 py-3 text-white sm:min-w-[220px]">
              <Layers size={19} className="shrink-0 text-red-500" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/50">Data Produk</p>
                <p className="mt-0.5 text-sm font-black">{groups.reduce((total, group) => total + group.specifications.length, 0)} poin spesifikasi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {summaryItems.map((item, index) => {
            const Icon = item.icon;
            const value = summary[item.key];
            const isPrimary = index === 0;

            return (
              <article
                key={item.key}
                className={`group relative min-h-[154px] overflow-hidden border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isPrimary
                    ? "border-gray-950 bg-gray-950 text-white"
                    : "border-gray-200 bg-[#fbfbfb] text-gray-950 hover:border-red-600"
                }`}
              >
                <span className={`absolute right-4 top-3 text-[34px] font-black leading-none ${isPrimary ? "text-white/10" : "text-gray-100 group-hover:text-red-50"}`}>
                  0{index + 1}
                </span>
                <div className={`mb-5 flex h-10 w-10 items-center justify-center border ${isPrimary ? "border-white/15 bg-white/10 text-red-400" : "border-red-100 bg-red-50 text-red-600"}`}>
                  <Icon size={19} strokeWidth={1.8} />
                </div>
                <p className={`text-[10px] font-black uppercase tracking-[0.18em] ${isPrimary ? "text-white/50" : "text-gray-400"}`}>{item.label}</p>
                <p className={`mt-2 pr-4 text-sm font-black leading-snug ${isPrimary ? "text-white" : "text-gray-900"}`}>{value}</p>
                <span className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full ${isPrimary ? "bg-red-600" : "bg-red-600"}`} />
              </article>
            );
          })}
        </div>

        {summary.fitur.length > 0 ? (
          <div className="mt-5 flex flex-col gap-3 border border-gray-200 bg-[#f8f8f8] p-4 md:flex-row md:items-center">
            <div className="flex shrink-0 items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-gray-500">
              <Sparkles size={15} className="text-red-600" />
              Sorotan fitur
            </div>
            <div className="flex flex-wrap gap-2">
              {summary.fitur.slice(0, 7).map((feature) => (
                <span key={feature} className="inline-flex items-center gap-1.5 border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-bold text-gray-700">
                  <CircleCheck size={13} className="text-red-600" />
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="relative p-4 md:p-6 lg:p-8">
        <div className="space-y-3">
          {groups.map(({ category, specifications }, index) => {
            const presentation = getPresentation(category);
            const Icon = presentation.icon;

            return (
              <details key={category} className="group overflow-hidden border border-gray-200 bg-white shadow-sm transition-all open:border-gray-300 open:shadow-md" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-4 outline-none transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-inset md:gap-5 md:px-6 md:py-5 [&::-webkit-details-marker]:hidden">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-red-100 bg-red-50 text-red-600 md:h-12 md:w-12">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 md:text-[10px]">
                      {String(index + 1).padStart(2, "0")} // {presentation.eyebrow}
                    </span>
                    <span className="mt-1 block text-base font-black uppercase tracking-tight text-gray-950 md:text-lg">{category}</span>
                    <span className="mt-1 hidden text-sm leading-relaxed text-gray-500 md:block">{presentation.description}</span>
                  </span>
                  <span className="hidden items-center gap-2 border-l border-gray-200 pl-5 text-right md:flex">
                    <span>
                      <span className="block text-lg font-black leading-none text-gray-950">{specifications.length}</span>
                      <span className="mt-1 block text-[9px] font-black uppercase tracking-[0.16em] text-gray-400">Detail</span>
                    </span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gray-200 bg-white text-gray-500 transition-all group-open:rotate-180 group-open:border-red-600 group-open:bg-red-600 group-open:text-white">
                    <ChevronDown size={18} />
                  </span>
                </summary>

                <div className="border-t border-gray-100 bg-[#fafafa] px-4 py-4 md:px-6 md:py-6">
                  <p className="mb-4 text-sm leading-relaxed text-gray-500 md:hidden">{presentation.description}</p>
                  <dl className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {specifications.map((specification, specificationIndex) => (
                      <div
                        key={`${category}-${specification.label}`}
                        className="group/item relative min-h-[118px] overflow-hidden border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-300 hover:shadow-md"
                      >
                        <span className="absolute right-3 top-3 text-[10px] font-black tracking-[0.16em] text-gray-100 transition-colors group-hover/item:text-red-100">
                          {String(specificationIndex + 1).padStart(2, "0")}
                        </span>
                        <dt className="pr-8 text-[10px] font-black uppercase tracking-[0.16em] text-gray-400">{specification.label}</dt>
                        <dd className="mt-3 text-sm font-bold leading-relaxed text-gray-800">{specification.value}</dd>
                        <span className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all duration-300 group-hover/item:w-full" />
                      </div>
                    ))}
                  </dl>
                </div>
              </details>
            );
          })}
        </div>

        <p className="relative mt-4 border-l-2 border-red-600 bg-white px-4 py-3 text-xs leading-relaxed text-gray-500">
          <span className="font-black uppercase tracking-[0.14em] text-gray-700">Catatan:</span> Spesifikasi, fitur, warna, dan kelengkapan dapat berbeda menurut varian, tahun produksi, serta ketersediaan unit. Konfirmasi detail final sebelum pemesanan.
        </p>
      </div>
    </section>
  );
}
