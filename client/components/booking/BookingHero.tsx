import { Play } from "lucide-react";

export default function BookingHero() {
  return (
    <section className="bg-white pb-16 pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        {/* Header Text */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-lg font-medium text-neutral-600">
            Invite Evangelist Jay Achanya
          </p>
          <h1 className="text-4xl font-bold uppercase tracking-wider text-neutral-900 md:text-6xl">
            Preacher Jay
          </h1>
        </div>

        {/* Hero Image Layout */}
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            {/* Left Text (Desktop) */}
            <div className="hidden md:col-span-3 md:block">
              <h2 className="text-2xl font-bold uppercase leading-tight tracking-wide text-neutral-900">
                Encounter the
                <br />
                presence and power
                <br />
                of the holy spirit like
                <br />
                never before...
              </h2>
            </div>

            {/* Center Image */}
            <div className="relative md:col-span-6">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop"
                  alt="Preacher Jay"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Circular Play Button/Badge */}
              <div className="absolute -right-6 bottom-12 z-10 hidden md:block">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-teal-500/10 backdrop-blur-sm">
                  <div className="absolute inset-0 animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="h-full w-full">
                      <defs>
                        <path
                          id="circle"
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        />
                      </defs>
                      <text fontSize="12" fontWeight="bold" letterSpacing="2">
                        <textPath xlinkHref="#circle" className="fill-neutral-900">
                          PLAY VIDEO • PLAY VIDEO • PLAY VIDEO •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <button className="relative z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110">
                    <Play className="ml-1 h-5 w-5 fill-neutral-900 text-neutral-900" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Text (Desktop) */}
            <div className="hidden md:col-span-3 md:block md:pl-8">
              <div className="space-y-2">
                <span className="text-5xl font-bold text-neutral-900 lg:text-6xl">
                  92,000
                </span>
                <p className="text-lg font-medium leading-tight text-neutral-600">
                  Souls saved
                  <br />
                  since 2019
                </p>
              </div>
            </div>

            {/* Mobile Text (Visible only on mobile) */}
            <div className="space-y-8 md:hidden">
              <h2 className="text-xl font-bold uppercase leading-tight tracking-wide text-neutral-900">
                Encounter the presence and power of the holy spirit like never
                before...
              </h2>
              <div className="space-y-1">
                <span className="text-4xl font-bold text-neutral-900">
                  92,000
                </span>
                <p className="text-base font-medium text-neutral-600">
                  Souls saved since 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
