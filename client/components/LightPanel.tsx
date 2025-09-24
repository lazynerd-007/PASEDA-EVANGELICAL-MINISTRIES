export default function LightPanel() {
  return (
    <section className="relative isolate w-full">
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: "rgb(245, 246, 248)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: "rgba(221, 230, 245, 0.01)" }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        {/* Content can be added here later */}
        <div className="min-h-[50vh]" />
      </div>
    </section>
  );
}
