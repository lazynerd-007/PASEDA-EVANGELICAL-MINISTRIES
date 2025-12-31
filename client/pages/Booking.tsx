import BookingHero from "@/components/booking/BookingHero";
import BookingForm from "@/components/booking/BookingForm";
import Footer from "@/components/Footer";

export default function Booking() {
  return (
    <main className="min-h-screen bg-white">
      <BookingHero />
      <BookingForm />
      <Footer />
    </main>
  );
}
