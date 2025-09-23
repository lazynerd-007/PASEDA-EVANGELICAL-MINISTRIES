import { Link } from "react-router-dom";

export default function NextSections() {
  return (
    <section className="relative w-full bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        {/* Vision & Mission */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Vision & Mission</h2>
          <p className="mt-3 text-base text-neutral-600">
            Our mandate is clear and focused.
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-6 shadow-sm transition-colors hover:bg-neutral-50">
            <p className="text-sm font-semibold tracking-wide text-neutral-900">VISION</p>
            <h3 className="mt-2 text-lg font-semibold leading-7 text-neutral-900">
              To be on the frontline of global evangelism
            </h3>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6 shadow-sm transition-colors hover:bg-neutral-50">
            <p className="text-sm font-semibold tracking-wide text-neutral-900">MISSION</p>
            <h3 className="mt-2 text-lg font-semibold leading-7 text-neutral-900">
              To announce Jesus Christ to the Nations untill he is believed throughout the world – 1Tim:3:16
            </h3>
          </div>
        </div>

        {/* About + Images */}
        <div className="mt-20 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              About Preacher Jay
            </h2>
            <p className="mt-6 text-base leading-7 text-neutral-700">
              Evangelist Joseph Achanya is the pioneer of Mega Harvest. He is the host of “Heal the Sick” radio/ TV broadcast and is an active member of Revival Today Evangelistic Association, USA. Evangelist Joseph Achanya believes that people today need to see Jesus the same as people in Bible days. For this reason, he has conducted numerous international open air crusades and outreaches with the theme “THIS SAME JESUS”.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-black/10 transition-colors hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
              >
                READ MORE
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://megaharvest.org/wp-content/uploads/2023/12/kkkk.jpg"
              alt="Crusade"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-sm"
              loading="lazy"
              decoding="async"
            />
            <img
              src="https://megaharvest.org/wp-content/uploads/2023/12/replace--scaled.jpg"
              alt="Outreach"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-sm"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Motto */}
        <div className="mt-20">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center shadow-sm">
            <p className="text-sm font-semibold tracking-wide text-neutral-900">MOTTO</p>
            <blockquote className="mx-auto mt-2 max-w-3xl text-2xl font-medium leading-snug text-neutral-900">
              “Our generation shall be shaken!”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
