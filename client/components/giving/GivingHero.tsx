export default function GivingHero() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden md:h-[70vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop"
          alt="Worship Crowd"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="marquee-text whitespace-nowrap text-5xl font-bold text-white md:text-7xl lg:text-9xl">
            The Gospel Invest in The Gospel Invest in The Gospel
          </h1>
        </div>
      </div>

      <style>{`
        .marquee-text {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}
