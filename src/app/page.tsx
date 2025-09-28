import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ButtonsSection from "@/components/ButtonsSection";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <div className="min-h-screen-safe bg-background">
      <Header />
      <HeroBanner />
      <ButtonsSection />
      <Footer />
      <MusicPlayer />

      {/* Future content sections will be added here */}
    </div>
  );
}
