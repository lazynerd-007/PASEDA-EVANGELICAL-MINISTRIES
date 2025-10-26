const IMG_URL =
  "https://megaharvest.org/wp-content/uploads/2022/12/Screenshot-2022-12-06-at-10.12.04-AM.jpg";

export default function ImageOverlaySection() {
  return (
    <section className="relative isolate w-full bg-black text-white">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <img
          src={IMG_URL}
          alt="Background"
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 20%" }}
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgb(1, 0, 10)", opacity: 0.5 }}
          aria-hidden
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="min-h-[50vh]" />
      </div>
    </section>
  );
}
