import Link from "next/link";
import { CalendarCheck, Calculator, CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";
import { buildWhatsAppUrl, PHONE_DISPLAY, PHONE_TEL, cn } from "@/lib/utils";

type LeadCaptureCardProps = {
  title?: string;
  description?: string;
  message: string;
  carSlug?: string;
  className?: string;
  dark?: boolean;
};

const proofPoints = ["Fast response", "Cek stok & promo", "Dibantu sampai jelas"];

export default function LeadCaptureCard({
  title = "Butuh penawaran terbaik?",
  description = "Chat Yusuf Suzuki untuk cek promo berjalan, simulasi kredit, dan ketersediaan unit sebelum datang ke showroom.",
  message,
  carSlug,
  className,
  dark = true,
}: LeadCaptureCardProps) {
  const creditHref = carSlug ? `/simulasi-kredit?mobil=${carSlug}` : "/simulasi-kredit";

  return (
    <div
      className={cn(
        "motion-card motion-shine relative overflow-hidden border p-6 shadow-card md:p-7",
        dark ? "border-gray-800 bg-[#050505] text-white shadow-dark-glow" : "border-gray-200 bg-white text-gray-950",
        className
      )}
    >
      <div className={cn("absolute inset-0 motion-glow-breathe", dark ? "bg-red-radial opacity-70" : "bg-[radial-gradient(circle_at_top_right,rgba(227,6,19,0.08),transparent_36%)]")} />
      <div className={cn("absolute inset-0 bg-automotive-grid bg-[size:44px_44px]", dark ? "opacity-25" : "opacity-[0.04]")} />
      <div className="relative z-10">
        <div className="mb-5 flex items-center gap-3">
          <div className={cn("grid h-11 w-11 place-items-center", dark ? "bg-red-600 text-white" : "bg-gray-950 text-white")}>
            <MessageCircle size={20} strokeWidth={1.7} />
          </div>
          <div>
            <p className={cn("text-[9px] font-black uppercase tracking-[0.24em]", dark ? "text-red-400" : "text-red-600")}>Lead Assistant</p>
            <p className={cn("mt-1 text-[10px] font-bold uppercase tracking-[0.2em]", dark ? "text-white/45" : "text-gray-400")}>Yusuf Suzuki</p>
          </div>
        </div>

        <h3 className={cn("text-xl font-black uppercase tracking-tighter", dark ? "text-white" : "text-gray-950")}>{title}</h3>
        <p className={cn("mt-3 text-sm leading-relaxed", dark ? "text-white/55" : "text-gray-500")}>{description}</p>

        <div className="mt-6 grid gap-2">
          {proofPoints.map((point) => (
            <div key={point} className={cn("flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.14em]", dark ? "text-white/65" : "text-gray-500")}>
              <CheckCircle2 size={14} className="text-red-500" />
              {point}
            </div>
          ))}
        </div>

        <div className="mt-7 grid gap-3">
          <a href={buildWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer" className="btn-red w-full py-4">
            <MessageCircle size={16} /> Chat WhatsApp
          </a>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/test-drive"
              className={cn(
                "inline-flex items-center justify-center gap-2 border px-4 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] transition-all",
                dark ? "border-white/15 bg-white/5 text-white/75 hover:border-red-600 hover:text-white" : "border-gray-200 text-gray-600 hover:border-red-600 hover:text-red-600"
              )}
            >
              <CalendarCheck size={14} /> Test Drive
            </Link>
            <Link
              href={creditHref}
              className={cn(
                "inline-flex items-center justify-center gap-2 border px-4 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] transition-all",
                dark ? "border-white/15 bg-white/5 text-white/75 hover:border-red-600 hover:text-white" : "border-gray-200 text-gray-600 hover:border-red-600 hover:text-red-600"
              )}
            >
              <Calculator size={14} /> Kredit
            </Link>
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            className={cn(
              "inline-flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] transition-colors",
              dark ? "text-white/45 hover:text-white" : "text-gray-400 hover:text-gray-950"
            )}
          >
            <PhoneCall size={13} /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  );
}
