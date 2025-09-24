import Hero from "@/components/Hero";
import NextSections from "@/components/NextSections";
import ImpactBanner from "@/components/ImpactBanner";
import GoalBanner from "@/components/GoalBanner";
import LightPanel from "@/components/LightPanel";

export default function Index() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      <Hero />
      <NextSections />
      <ImpactBanner />
      <GoalBanner />
      <LightPanel />
    </main>
  );
}
