import MissionVision from "@/components/about/MissionVision";
import MottoSection from "@/components/about/MottoSection";
import BeliefsSection from "@/components/about/BeliefsSection";
import GallerySection from "@/components/about/GallerySection";
import ContactSection from "@/components/about/ContactSection";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Add padding-top to account for fixed header if necessary, 
          though the Index page doesn't seem to explicitly add it on 'main', 
          it might be handled by the first section padding or header being overlay.
          Checking App.tsx/Header.tsx, Header is fixed. 
          So we need to ensure content isn't hidden.
          The previous About page had py-24. 
          Our MissionVision has py-16 md:py-24. Should be fine.
      */}
      <div className="pt-20"> {/* Spacer for fixed header */}
        <MissionVision />
        <MottoSection />
        <BeliefsSection />
        <GallerySection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
