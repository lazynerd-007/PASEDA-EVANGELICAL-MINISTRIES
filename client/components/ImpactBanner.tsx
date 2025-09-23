export default function ImpactBanner() {
  const BG =
    "https://megaharvest.org/wp-content/uploads/2022/12/blak-mhgm.jpg";

  return (
    <section className="relative isolate w-full text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${BG})`, backgroundPosition: "70% 35%" }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/80" aria-hidden="true" />

      {/* Spacer for height; adjust as needed */}
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="min-h-[60vh]" />
      </div>
    </section>
  );
}
