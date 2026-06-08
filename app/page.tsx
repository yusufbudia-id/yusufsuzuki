import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars";
import AdvantagesSection from "@/components/AdvantagesSection";
import PromoSection from "@/components/PromoSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactCTA from "@/components/ContactCTA";
import MapSection from "@/components/MapSection";

function HomeSeoIntro() {
  return (
    <section className="bg-white py-10">
      <div className="container-main">
        <div className="red-edge border border-gray-200 bg-gray-50 p-6 md:p-8">
          <h2 className="text-xl font-black uppercase tracking-tight text-gray-950 md:text-2xl">
            Dealer Mobil Suzuki Jogja Resmi untuk Harga OTR & Promo Terbaru
          </h2>
          <p className="mt-4 max-w-5xl text-sm leading-7 text-gray-600 md:text-base md:leading-8">
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
      <HomeSeoIntro />
      <FeaturedCars />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-gray-200" />
      </div>
      
      <PromoSection />
      <AdvantagesSection />
      <TestimonialSection />
      <MapSection />
      <ContactCTA />
    </>
  );
}
