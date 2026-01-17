export default function ImpactBanner() {
  const BG =
    "https://pasedaministries.org/wp-content/uploads/2022/12/blak-pm.jpg";    

  return (
    <section id="counter" aria-label="counter" className="relative isolate w-full text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${BG})`, backgroundPosition: "70% 35%" }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/80" aria-hidden="true" />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex min-h-[40vh] items-center justify-center py-16 lg:py-20">
          <div className="text-center">
            <h1 className="inline-block text-[62px] font-medium leading-none sm:text-[62px]">
              141,244
            </h1>
            <div className="mt-2 text-base tracking-[0.05em] text-white/90">
              SOULS SAVED SINCE 2019
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
