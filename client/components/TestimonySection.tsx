export default function TestimonySection() {
  return (
    <section
      id="testimony"
      aria-label="testimony"
      className="relative w-full bg-white text-neutral-900"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Powerful Testimonies
        </h2>

        <div className="mt-14 grid items-start gap-10 md:grid-cols-3 md:gap-12">
          {/* Left quote */}
          <figure className="order-1 md:order-none">
            <blockquote className="text-balance text-[15px] leading-7 text-neutral-700 sm:text-base">
              "I battled an intestinal infection for 14 months, you prayed for me, and I was healed in the name of Jesus. I have already gained 7 pounds! Thank you, Jesus."
            </blockquote>
            <figcaption className="mt-4 text-xs text-neutral-500">
              Bianca Matsa (Houston, TX)
            </figcaption>
          </figure>

          {/* Center phone/video */}
          <div className="mx-auto w-[240px] sm:w-[280px] md:w-[300px]">
            <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-neutral-200 bg-black shadow-xl ring-1 ring-black/5">
              <img
                src="https://megaharvest.org/wp-content/uploads/2023/12/IMG_5948-1024x608.jpg"
                alt="Testimony video preview"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/20" aria-hidden />
            </div>
          </div>

          {/* Right quote */}
          <figure>
            <blockquote className="text-balance text-[15px] leading-7 text-neutral-700 sm:text-base">
              "At the crusade, I was suffering from severe chest pain caused by gastric ulcers. It was so bad that I couldn’t eat certain foods, like gari, for almost two years because of the pain. On the third day of the crusade, you prayed specifically for those with ulcers. On the final day, you declared that the ulcers were gone. I couldn’t believe it, but God did it! Praise the Lord, I am healed! Since then, I have felt no pain at all. I even drank gari yesterday without any discomfort. To God be the glory!"
            </blockquote>
            <figcaption className="mt-4 text-xs text-neutral-500">
              Alibabra Philip (Gombe State, Nigeria)
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
