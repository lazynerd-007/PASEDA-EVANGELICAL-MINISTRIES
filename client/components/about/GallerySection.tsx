export default function GallerySection() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden md:h-[80vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1533282960533-51328aa49826?q=80&w=2642&auto=format&fit=crop"
          alt="Be Shaken Our Generation"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="px-4 text-center text-5xl font-bold uppercase tracking-tighter text-transparent text-white opacity-90 outline-text md:text-7xl lg:text-9xl">
          <span className="outline-white block md:inline">Be Shaken</span>{" "}
          <span className="block md:inline">Our Generation</span>
        </h2>
      </div>

      {/* Inline styles for text outline effect if tailwind plugin not available */}
      <style>{`
        .outline-text {
          -webkit-text-stroke: 2px white;
          color: transparent;
        }
        @media (min-width: 768px) {
          .outline-text {
            -webkit-text-stroke: 3px white;
          }
        }
      `}</style>
    </section>
  );
}
