export default function DarkPanel() {
  return (
    <section className="relative isolate w-full bg-black">
      {/* Light gray background layer */}
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: "rgb(245, 246, 248)" }}
        aria-hidden="true"
      />
      {/* Subtle bluish overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: "rgba(221, 230, 245, 0.01)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="min-h-[50vh]" />
      </div>
    </section>
  );
}
