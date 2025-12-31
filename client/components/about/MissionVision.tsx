import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        {/* Left Column */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900">
              Our Mission
            </h2>
            <p className="text-lg font-medium leading-relaxed text-neutral-700">
              To announce Jesus Christ to the Nations until he is believed
              throughout the world – 1Tim:3:16
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
                alt="Preacher Jay"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Circular Text Decoration */}
            <div className="absolute -right-12 -top-12 hidden animate-spin-slow md:block">
               <svg viewBox="0 0 100 100" width="160" height="160">
                <defs>
                  <path
                    id="circle"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text fontSize="11" fontWeight="bold" letterSpacing="2">
                  <textPath xlinkHref="#circle">
                    OUR GENERATION SHALL BE SHAKEN •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900">
              Our Vision
            </h2>
            <p className="text-lg font-medium leading-relaxed text-neutral-700">
              To be on the frontline of global evangelism
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              About
              <br />
              Preacher Jay
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-neutral-600">
              <p>
                Evangelist Joseph Achanya is the pioneer of Mega Harvest. He is
                the host of “Heal the Sick” radio/ TV broadcast and is an active
                member of Revival Today Evangelistic Association, USA.
              </p>
              <p>
                Evangelist Joseph Achanya believes that people today need to see
                Jesus the same as people in Bible days. For this reason, he has
                conducted numerous international open air crusades and outreaches
                with the theme “THIS SAME JESUS”.
              </p>
              <p>
                Evangelist Joseph Achanya is dedicated to winning the lost and
                DEMONSTRATING the power of the resurrected Christ through signs,
                wonders, and miracles. The founding of Mega Harvest was greatly
                inspired by the ministry of Dr. T.L. Osborn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
