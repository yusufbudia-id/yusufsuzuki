import { areas } from "@/data/areas";
import { cars } from "@/data/cars";
import { promos } from "@/data/promos";

export type LeadContext = {
  eyebrow: string;
  floatingLabel: string;
  mobileLabel: string;
  message: string;
  secondaryHref: string;
  secondaryLabel: string;
};

const defaultContext: LeadContext = {
  eyebrow: "Fast Response",
  floatingLabel: "Chat Yusuf",
  mobileLabel: "Chat WA",
  message: "Halo Yusuf Suzuki, saya ingin tanya tentang mobil Suzuki terbaru, promo, dan simulasi kredit.",
  secondaryHref: "/mobil",
  secondaryLabel: "Lihat Mobil",
};

function shortCarName(name: string) {
  return name.replace(/^Suzuki\s+/i, "").trim();
}

function truncateLabel(label: string, max = 16) {
  return label.length > max ? `${label.slice(0, max - 1)}…` : label;
}

export function getLeadContextFromPath(pathname?: string | null): LeadContext {
  if (!pathname) return defaultContext;

  const cleanPath = pathname.split("?")[0].replace(/\/$/, "") || "/";
  const segments = cleanPath.split("/").filter(Boolean);

  if (segments[0] === "dealer" && segments[1]) {
    const area = areas.find((item) => item.slug === segments[1]);
    const areaName = area?.name ?? segments[1].replace(/-/g, " ");

    return {
      eyebrow: `Area ${areaName}`,
      floatingLabel: truncateLabel(`Chat ${areaName}`, 18),
      mobileLabel: "Chat Area",
      message: `Halo Yusuf Suzuki, saya warga ${areaName} dan ingin tanya promo, harga OTR, serta ketersediaan mobil Suzuki terbaru.`,
      secondaryHref: "/mobil",
      secondaryLabel: "Lihat Mobil",
    };
  }

  if (segments[0] === "mobil" && segments[1]) {
    const car = cars.find((item) => item.slug === segments[1]);

    if (car) {
      const model = shortCarName(car.name);
      return {
        eyebrow: "Tanya Unit",
        floatingLabel: truncateLabel(`Tanya ${model}`, 18),
        mobileLabel: "Tanya Unit",
        message: `Halo Yusuf Suzuki, saya ingin tanya detail ${car.name}: harga OTR Jogja, promo terbaru, ketersediaan unit, dan simulasi kreditnya.`,
        secondaryHref: `/simulasi-kredit?mobil=${car.slug}`,
        secondaryLabel: "Hitung Kredit",
      };
    }
  }

  if (segments[0] === "promo" && segments[1]) {
    const promo = promos.find((item) => item.slug === segments[1]);

    if (promo) {
      return {
        eyebrow: "Klaim Promo",
        floatingLabel: "Klaim Promo",
        mobileLabel: "Klaim Promo",
        message: `Halo Yusuf Suzuki, saya ingin klaim promo: ${promo.title}. Mohon info syarat, stok unit, dan simulasi terbaiknya.`,
        secondaryHref: "/promo",
        secondaryLabel: "Promo Lain",
      };
    }
  }

  if (cleanPath === "/simulasi-kredit") {
    return {
      eyebrow: "Konsultasi Kredit",
      floatingLabel: "Tanya Kredit",
      mobileLabel: "Tanya Kredit",
      message: "Halo Yusuf Suzuki, saya ingin dibantu hitung simulasi kredit mobil Suzuki sesuai budget DP dan cicilan saya.",
      secondaryHref: "/mobil",
      secondaryLabel: "Pilih Mobil",
    };
  }

  if (cleanPath === "/test-drive") {
    return {
      eyebrow: "Booking Test Drive",
      floatingLabel: "Booking Test",
      mobileLabel: "Test Drive",
      message: "Halo Yusuf Suzuki, saya ingin booking test drive mobil Suzuki. Mohon dibantu cek jadwal yang tersedia.",
      secondaryHref: "/mobil",
      secondaryLabel: "Pilih Mobil",
    };
  }

  if (cleanPath === "/promo") {
    return {
      eyebrow: "Promo Aktif",
      floatingLabel: "Tanya Promo",
      mobileLabel: "Promo WA",
      message: "Halo Yusuf Suzuki, saya ingin tanya promo mobil Suzuki terbaru yang sedang berlaku bulan ini.",
      secondaryHref: "/mobil",
      secondaryLabel: "Lihat Mobil",
    };
  }

  if (cleanPath === "/kontak") {
    return {
      eyebrow: "Hubungi Yusuf",
      floatingLabel: "Chat Yusuf",
      mobileLabel: "Kontak WA",
      message: "Halo Yusuf Suzuki, saya ingin konsultasi langsung tentang pembelian mobil Suzuki.",
      secondaryHref: "/test-drive",
      secondaryLabel: "Test Drive",
    };
  }

  return defaultContext;
}
