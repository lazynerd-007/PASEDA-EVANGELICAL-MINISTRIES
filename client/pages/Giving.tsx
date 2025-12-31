import GivingHero from "@/components/giving/GivingHero";
import HowToGive from "@/components/giving/HowToGive";
import Footer from "@/components/Footer";

export default function Giving() {
  return (
    <main className="min-h-screen bg-white">
      <GivingHero />
      <HowToGive />
      <Footer />
    </main>
  );
}
