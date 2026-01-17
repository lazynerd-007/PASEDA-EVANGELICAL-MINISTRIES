import { cn } from "@/lib/utils";
import FadeIn from "@/components/animations/FadeIn";

const BG_IMAGE = "/images/hero-bg.jpg";
const CENTER_IMAGE = "/images/hero-center.jpg";
const CTA_TEXT = "BECOME A PARTNER";

export default function Hero() {
  return (
    <section
      id="Hero"
      aria-label="Hero"
      className="relative isolate flex min-h-screen w-full items-center justify-center bg-black text-white"
    >
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE}
          alt="Background"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-16 md:py-24">
        <div className="h-10" />
        <FadeIn className="w-full text-center" direction="down">
          <div className="inline-block w-full">
            <div className="relative inline-block">
              <img
                src={CENTER_IMAGE}
                alt="Rehoboth"
                className={cn(
                  "mx-auto h-auto select-none",
                  "w-[min(90vw,768px)] max-w-[768px]"
                )}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </FadeIn>

        <div className="mt-11" />

        <FadeIn className="relative z-10 text-center" delay={0.3}>
          <a
            href="https://pasedaministries.org/giving"  
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center justify-center font-medium",
              "rounded-md bg-black px-10 py-4 text-white",
              "ring-1 ring-white/20 transition-colors hover:bg-neutral-900",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            )}
          >
            <span aria-hidden="true">
              {CTA_TEXT.split("").map((ch, i) =>
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
                )
              )}
            </span>
            <span className="sr-only">Become a partner</span>
          </a>
        </FadeIn>

        <FadeIn delay={0.5} fullWidth>
          <p className="mt-8 text-center text-sm text-white/90 md:text-base">
            Become one of the 100 monthly partners and help share the gospel to
            the millions yet untold.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
