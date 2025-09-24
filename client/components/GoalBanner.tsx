export default function GoalBanner() {
  const BG =
    "https://picsum.photos/1920/1080?random=7";

  return (
    <section className="relative isolate w-full text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${BG})`, backgroundPosition: "center" }}
        aria-hidden="true"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(84,84,84,1) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex min-h-[80vh] items-center justify-center py-16 lg:py-24">
          <div className="text-center">
            <h2 className="text-[14vw] leading-none font-medium sm:text-8xl md:text-9xl">100,000</h2>
            <p className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
              Annual Souls Goal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
