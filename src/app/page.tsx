import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ButtonsSection from "@/components/ButtonsSection";
import StripCarousel from "@/components/StripCarousel";

export default function Home() {
  return (
    <div className="min-h-screen-safe bg-background">
      <Header />
      <HeroBanner />
      <ButtonsSection />
      <StripCarousel />

      {/* Future content sections will be added here */}
    </div>
  );
}
