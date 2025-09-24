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
        <div className="flex min-h-[50vh] items-center justify-center py-16 lg:py-24">
          <div className="text-center">
            <h2 className="text-[14vw] leading-none font-semibold sm:text-7xl md:text-8xl">100,000</h2>
            <p className="mt-3 text-base font-medium leading-tight tracking-wide text-white/90 sm:text-2xl">
              Annual Souls Goal
            </p>

            <div className="mx-auto mt-10 max-w-3xl text-white">
              <h3 className="text-4xl font-medium leading-tight sm:text-5xl">
                <span className="block">Become a partner.</span>
                <span className="block">Make an eternal impact.</span>
              </h3>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/90">
                Do you share a passion for reaching the lost? Do you desire to be personally involved in the end-time harvest in a meaningful way? Mega Harvest Partnership Program puts you on the front line of global evangelism. The ministry partnership program is a practical and highly effective initiative that reaches thousands of precious souls face to face and millions via television with the gospel of Jesus Christ every year.
              </p>
              <div className="mt-6">
                <a
                  href="https://megaharvest.org/giving"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-black/70 px-8 py-3 text-white ring-1 ring-white/20 transition-colors hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  BECOME A PARTNER
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
