const IMG_URL =
  "https://megaharvest.org/wp-content/uploads/2023/12/Book-scaled.jpg";

export default function BookingSection() {
  return (
    <section id="booking" aria-label="booking" className="relative isolate w-full text-white">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <img
          src={IMG_URL}
          alt="Booking background"
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 100%" }}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.5 }} aria-hidden />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
          <div className="mb-2.5">
            <h5
              className="inline-block text-[16px] font-semibold leading-[26px] text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(229,229,229), rgb(221,220,193))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Our Generation Shall Be Shaken!
            </h5>
          </div>

          <h2 className="text-[52px] leading-[52px] font-medium text-white">Want to book Preacher Jay?</h2>
          <p className="mt-2.5 mb-2.5 pb-7 text-white">
            Click the link below and fill out our booking form.
          </p>
          <a
            href="https://megaharvest.org/booking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-black px-[42px] py-[25px] font-medium text-white ring-1 ring-white/10 transition duration-300 hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <span>Book Preacher Jay</span>
          </a>
        </div>
      </div>
    </section>
  );
}
