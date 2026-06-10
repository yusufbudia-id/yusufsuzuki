import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars";
import AdvantagesSection from "@/components/AdvantagesSection";
import PromoSection from "@/components/PromoSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactCTA from "@/components/ContactCTA";
import MapSection from "@/components/MapSection";

function HomeSeoIntro() {
  return (
    <section className="bg-white py-8 lg:py-10">
      <div className="container-main">
        <details className="red-edge border border-gray-200 bg-gray-50 p-5 open:bg-white lg:hidden">
          <summary className="cursor-pointer list-none text-[11px] font-black uppercase tracking-[0.18em] text-gray-950">
            Info singkat dealer Suzuki Jogja
          </summary>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            Yusuf Suzuki melayani cek harga OTR, promo terbaru, DP ringan, simulasi kredit, pilihan unit, dan test drive Suzuki untuk wilayah Jogja dan sekitarnya.
          </p>
        </details>

        <div className="red-edge hidden border border-gray-200 bg-gray-50 p-8 lg:block">
          <h2 className="text-2xl font-black uppercase tracking-tight text-gray-950">
            Dealer Mobil Suzuki Jogja Resmi untuk Harga OTR & Promo Terbaru
          </h2>
          <p className="mt-4 max-w-5xl text-base leading-8 text-gray-600">
            Yusuf Suzuki melayani pembelian mobil Suzuki baru di Jogja melalui dealer resmi Suzuki Sumber Baru Mobil. Anda bisa cek harga OTR, promo terbaru, DP ringan, simulasi kredit, pilihan unit, jadwal test drive, dan konsultasi pembelian Suzuki secara langsung untuk wilayah Yogyakarta, Sleman, Bantul, Kulon Progo, Gunungkidul, Magelang, Klaten, serta sekitarnya.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCars />
      <PromoSection />
      <AdvantagesSection />
      <TestimonialSection />
      <MapSection />
      <HomeSeoIntro />
      <ContactCTA />
    </>
  );
}
