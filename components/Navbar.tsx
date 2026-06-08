"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, MessageCircle, PhoneCall, X } from "lucide-react";
import { getLeadContextFromPath } from "@/lib/leadContext";
import { buildWhatsAppUrl, cn, PHONE_DISPLAY, PHONE_TEL } from "@/lib/utils";

type NavLink =
  | { label: string; href: string; dropdown?: never }
  | { label: string; href?: never; dropdown: { label: string; href: string }[] };

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Mobil", href: "/mobil" },
  { label: "Promo", href: "/promo" },
  { label: "Kredit", href: "/simulasi-kredit" },
  { label: "Test Drive", href: "/test-drive" },
  {
    label: "Informasi",
    dropdown: [
      { label: "Tentang Kami", href: "/tentang-kami" },
      { label: "Berita & Tips", href: "/berita" },
      { label: "FAQ", href: "/faq" },
      { label: "Kontak", href: "/kontak" },
    ],
  },
];

const transparentHeaderRoutes = [
  "/",
  "/mobil",
  "/promo",
  "/kontak",
  "/tentang-kami",
  "/simulasi-kredit",
  "/test-drive",
  "/berita",
  "/faq",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileInfoOpen(false);
  }, [pathname]);

  const leadContext = getLeadContextFromPath(pathname);
  const waMsg = leadContext.message;

  const isTransparent =
    !scrolled &&
    (transparentHeaderRoutes.includes(pathname) ||
      pathname?.startsWith("/mobil/") ||
      pathname?.startsWith("/dealer/") ||
      pathname?.startsWith("/promo/") ||
      pathname?.startsWith("/berita/"));

  const navShell = isTransparent
    ? "border-white/10 bg-[#050505]/35 text-white backdrop-blur-md"
    : "border-gray-200 bg-white/95 text-gray-950 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.7)] backdrop-blur-xl";

  const mutedText = isTransparent ? "text-white/68 hover:text-white" : "text-gray-500 hover:text-gray-950";
  const activeText = isTransparent ? "text-white" : "text-gray-950";
  const underlineColor = isTransparent ? "bg-red-500" : "bg-red-600";

  const isItemActive = (link: NavLink) => {
    if (link.dropdown) {
      return link.dropdown.some((item) => pathname === item.href || pathname?.startsWith(`${item.href}/`));
    }

    if (link.href === "/") return pathname === "/";
    return pathname === link.href || pathname?.startsWith(`${link.href}/`);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-300", navShell)}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/80 to-transparent" />

        <div className="container-main">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link href="/" className="group flex items-center gap-3" aria-label="Yusuf Suzuki Home">
              <div className={cn("flex h-10 items-center border-l-2 border-red-600 pl-3 transition-all duration-300", isTransparent ? "bg-white/0" : "bg-white")}> 
                <img
                  src="/logo.png"
                  alt="Logo Suzuki Sumber Baru Jogja"
                  className={cn(
                    "h-6 w-auto object-contain transition-all duration-300 group-hover:scale-105 md:h-7",
                    isTransparent && "brightness-0 invert"
                  )}
                />
              </div>
              <div className="hidden xl:block">
                <p className={cn("text-[10px] font-black uppercase tracking-[0.22em]", isTransparent ? "text-white/80" : "text-gray-900")}>Yusuf Suzuki</p>
                <p className={cn("mt-0.5 text-[9px] font-bold uppercase tracking-[0.2em]", isTransparent ? "text-white/45" : "text-gray-400")}>Authorized Consultant</p>
              </div>
            </Link>

            <div className="hidden items-center gap-5 lg:flex xl:gap-6">
              {navLinks.map((link) => {
                const active = isItemActive(link);

                if (link.dropdown) {
                  return (
                    <div key={link.label} className="group relative py-7">
                      <button
                        type="button"
                        className={cn(
                          "flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-200",
                          active ? activeText : mutedText
                        )}
                      >
                        {link.label}
                        <ChevronDown size={13} strokeWidth={2.5} className="transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                      <span className={cn("absolute bottom-5 left-0 h-[2px] transition-all duration-300", active ? "w-full" : "w-0 group-hover:w-full", underlineColor)} />

                      <div className="invisible absolute left-0 top-full w-56 translate-y-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="red-edge border border-gray-200 bg-white shadow-[0_30px_80px_-44px_rgba(0,0,0,0.7)]">
                          {link.dropdown.map((item) => {
                            const childActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                  "flex items-center justify-between border-b border-gray-100 px-5 py-4 text-[10px] font-black uppercase tracking-[0.18em] transition-colors last:border-0",
                                  childActive ? "bg-red-50 text-red-600" : "text-gray-500 hover:bg-gray-950 hover:text-white"
                                )}
                              >
                                {item.label}
                                <span className={cn("h-1.5 w-1.5", childActive ? "bg-red-600" : "bg-gray-300")} />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link key={link.href} href={link.href} className="group relative py-7">
                    <span className={cn("text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-200", active ? activeText : mutedText)}>
                      {link.label}
                    </span>
                    <span className={cn("absolute bottom-5 left-0 h-[2px] transition-all duration-300", active ? "w-full" : "w-0 group-hover:w-full", underlineColor)} />
                  </Link>
                );
              })}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={buildWhatsAppUrl(waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 active:scale-95",
                  isTransparent
                    ? "border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-red-500 hover:bg-red-600"
                    : "border border-red-600 bg-red-600 text-white shadow-red-glow hover:border-gray-950 hover:bg-gray-950"
                )}
              >
                <MessageCircle size={15} />
                Chat Yusuf
              </a>
            </div>

            <button
              type="button"
              className={cn("grid h-11 w-11 place-items-center border transition-colors lg:hidden", isTransparent ? "border-white/15 text-white" : "border-gray-200 text-gray-950")}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#050505] text-white lg:hidden"
          >
            <div className="surface-grid absolute inset-0 opacity-40" />
            <div className="absolute inset-0 bg-red-radial" />
            <div className="relative flex h-full flex-col px-5 pb-6 pt-24">
              <div className="mb-5 border-l-2 border-red-600 pl-4">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-red-500">Navigation</p>
                <p className="mt-2 text-2xl font-black uppercase tracking-tighter">Yusuf Suzuki</p>
              </div>

              <div className="flex-1 overflow-y-auto border-y border-white/10 py-2">
                {navLinks.map((link) => {
                  const active = isItemActive(link);

                  if (link.dropdown) {
                    return (
                      <div key={link.label} className="border-b border-white/10">
                        <button
                          type="button"
                          onClick={() => setMobileInfoOpen((open) => !open)}
                          className={cn("flex w-full items-center justify-between py-4 text-left text-xs font-black uppercase tracking-[0.18em]", active || mobileInfoOpen ? "text-white" : "text-white/55")}
                        >
                          {link.label}
                          <ChevronDown size={16} className={cn("transition-transform", mobileInfoOpen && "rotate-180")} />
                        </button>

                        <AnimatePresence initial={false}>
                          {mobileInfoOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="grid gap-2 pb-4 pl-4">
                                {link.dropdown.map((item) => {
                                  const childActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
                                  return (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      className={cn("border-l border-white/10 py-2 pl-4 text-[11px] font-black uppercase tracking-[0.18em]", childActive ? "border-red-600 text-red-500" : "text-white/55")}
                                    >
                                      {item.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn("flex items-center justify-between border-b border-white/10 py-4 text-xs font-black uppercase tracking-[0.18em]", active ? "text-white" : "text-white/55")}
                    >
                      {link.label}
                      <span className={cn("h-1.5 w-1.5", active ? "bg-red-600" : "bg-white/20")} />
                    </Link>
                  );
                })}
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3">
                <a
                  href={buildWhatsAppUrl(waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red w-full"
                >
                  <MessageCircle size={16} />
                  Chat WhatsApp
                </a>
                <a href={`tel:${PHONE_TEL}`} className="inline-flex w-full items-center justify-center gap-2 border border-white/15 px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.18em] text-white/80">
                  <PhoneCall size={16} />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
