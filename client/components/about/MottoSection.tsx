export default function MottoSection() {
  return (
    <section className="bg-neutral-50">
      <div className="grid md:grid-cols-2">
        {/* Text Side */}
        <div className="flex flex-col justify-center px-8 py-24 text-center md:px-16 lg:text-right">
          <h2 className="mb-4 text-xl font-bold uppercase tracking-widest text-neutral-900">
            Motto
          </h2>
          <p className="text-3xl font-light leading-tight text-neutral-800 md:text-4xl lg:text-5xl">
            Our generation shall be
            <br />
            <span className="font-semibold">shaken!</span>
          </p>
        </div>

        {/* Image Side */}
        <div className="relative h-[500px] w-full md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=2690&auto=format&fit=crop"
            alt="Worship and Prayer"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </section>
  );
}
