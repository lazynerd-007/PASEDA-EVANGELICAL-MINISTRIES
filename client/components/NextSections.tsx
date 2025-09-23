import { Link } from "react-router-dom";

export default function NextSections() {
  return (
    <section className="relative w-full bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-brand">OUR CALLING</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Vision & Mission</h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-brand to-transparent" />
        </div>

        {/* Vision & Mission */}
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50/60 p-1">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="group relative p-10">
              <div className="absolute inset-y-0 right-0 hidden w-px bg-neutral-200 md:block" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">Vision</p>
              <h3 className="mt-4 text-2xl font-medium leading-snug text-neutral-900">
                To be on the frontline of global evangelism
              </h3>
            </div>
            <div className="group relative p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">Mission</p>
              <h3 className="mt-4 text-2xl font-medium leading-snug text-neutral-900">
                To announce Jesus Christ to the Nations untill he is believed throughout the world – 1Tim:3:16
              </h3>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mt-24 grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-brand">ABOUT</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Preacher Jay</h2>
            <p className="mt-6 text-lg leading-8 text-neutral-700">
              Evangelist Joseph Achanya is the pioneer of Mega Harvest. He is the host of “Heal the Sick” radio/ TV broadcast and is an active member of Revival Today Evangelistic Association, USA. Evangelist Joseph Achanya believes that people today need to see Jesus the same as people in Bible days. For this reason, he has conducted numerous international open air crusades and outreaches with the theme “THIS SAME JESUS”.
            </p>
            <div className="mt-10">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-brand px-6 py-3 text-sm font-medium text-neutral-900 shadow-[inset_0_0_0_1px_hsl(var(--brand))] transition-colors hover:bg-brand hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
              >
                READ MORE
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <figure className="aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
              <img
                src="https://picsum.photos/seed/crusade/800/1000"
                alt="Crusade"
                className="h-full w-full object-cover grayscale contrast-110"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="flex flex-col gap-4">
              <figure className="aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
                <img
                  src="https://picsum.photos/seed/outreach/800/600"
                  alt="Outreach"
                  className="h-full w-full object-cover grayscale contrast-110"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-brand/40 text-center text-sm text-neutral-600">
                <div>
                  <div className="mx-auto mb-3 h-px w-8 bg-brand/50" />
                  Curated moments from the field
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Motto */}
        <div className="mt-24 text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-brand">MOTTO</p>
          <blockquote className="mx-auto mt-4 max-w-4xl text-balance text-3xl italic leading-[1.35] text-neutral-900 sm:text-4xl">
            “Our generation shall be shaken!”
          </blockquote>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-brand to-transparent" />
        </div>
      </div>
    </section>
  );
}
