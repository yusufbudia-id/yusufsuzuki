import Hero from "@/components/Hero";
// import FeaturedCars from "@/components/FeaturedCars"; // Bisa dihapus
import AdvantagesSection from "@/components/AdvantagesSection";
import PromoSection from "@/components/PromoSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactCTA from "@/components/ContactCTA";
import MapSection from "@/components/MapSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <FeaturedCars /> dihapus karena sudah masuk ke Hero */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-gray-200/10" /> {/* Ganti warna hr agar cocok kalau background bawahnya juga dark */}
      </div>
      
      <PromoSection />
      <AdvantagesSection />
      <TestimonialSection />
      <MapSection />
      <ContactCTA />
    </>
  );
}