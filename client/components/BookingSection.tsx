const IMG_URL =
  "https://megaharvest.org/wp-content/uploads/2023/12/Book-scaled.jpg";

export default function BookingSection() {
  return (
    <section id="booking" aria-label="booking" className="relative isolate w-full text-white">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <img
          src={IMG_URL}
          alt="Booking background"
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 100%" }}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.5 }} aria-hidden />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="min-h-[50vh]" />
      </div>
    </section>
  );
}
