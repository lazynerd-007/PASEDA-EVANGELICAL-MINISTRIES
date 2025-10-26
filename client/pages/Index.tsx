import Hero from "@/components/Hero";
import NextSections from "@/components/NextSections";
import ImpactBanner from "@/components/ImpactBanner";
import GoalBanner from "@/components/GoalBanner";
import LightPanel from "@/components/LightPanel";
import DarkPanel from "@/components/DarkPanel";
import PartnerSection from "@/components/PartnerSection";
import ImageOverlaySection from "@/components/ImageOverlaySection";

export default function Index() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      <Hero />
      <NextSections />
      <ImpactBanner />
      <GoalBanner />
      <PartnerSection />
      <ImageOverlaySection />
      <LightPanel />
      <DarkPanel />
    </main>
  );
}
