export default function PartnerSection() {
  const CTA = "BECOME A PARTNER";
  return (
    <section className="relative w-full bg-white text-neutral-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 md:grid-cols-2 lg:px-8">
        {/* Left: Heading + Copy + CTA */}
        <div className="flex flex-col justify-center pl-0 text-left md:pl-11">
          <h4 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-4xl">
            <span className="block">Become a partner.</span>
            <span className="block">Make an eternal impact.</span>
          </h4>
          <p className="mt-6 max-w-[700px] text-base leading-7 text-neutral-700">
            Do you share a passion for reaching the lost? Do you desire to be personally involved in the end-time harvest in a meaningful way? Mega Harvest Partnership Program puts you on the front line of global evangelism. The ministry partnership program is a practical and highly effective initiative that reaches thousands of precious souls face to face and millions via television with the gospel of Jesus Christ every year. We are on a mission to announce Jesus to all nations until He is Believed throughout the world. You can be a significant part of it!
          </p>
          <div className="mt-6">
            <a
              href="https://megaharvest.org/giving"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-black px-10 py-3 text-white ring-1 ring-black/10 transition-colors hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
            >
              <span aria-hidden="true">
                {CTA.split("").map((ch, i) =>
                  ch === " " ? (
                    <span key={i} className="mx-1" aria-hidden>
                      {"\u00A0"}
                    </span>
                  ) : (
                    <span
                      key={i}
                      className="inline-block opacity-0 animate-reveal"
                      style={{ animationDelay: `${i * 0.015}s` }}
                    >
                      {ch}
                    </span>
                  ),
                )}
              </span>
              <span className="sr-only">Become a partner</span>
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex items-center justify-center">
          <figure className="w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
            <img
              src="https://megaharvest.org/wp-content/uploads/2023/12/IMG_5948-1024x608.jpg"
              alt="Partnership impact"
              className="aspect-[16/9] h-auto w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
