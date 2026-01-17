import FadeIn from "@/components/animations/FadeIn";

export default function HowToGive() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <FadeIn>
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-neutral-900 md:text-4xl">
            How to Give
          </h2>

          <p className="mb-8 text-lg font-bold text-neutral-900">
            Become one of the 100 monthly partners and help share the gospel to
            the millions yet untold.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mb-12 space-y-6 text-lg leading-relaxed text-neutral-600">
            <p>
              Do you share a passion for reaching the lost? Do you desire to be
              personally involved in the end-time harvest in a meaningful way?
              Paseda Ministries Partnership Program puts you on the front line of
              global evangelism. The ministry partnership program is a practical
              and highly effective initiative that reaches thousands of precious
              souls face to face and millions via television with the gospel of
              Jesus Christ every year. We are on a mission to announce Jesus to
              all nations until He is Believed throughout the world.
            </p>
            <p className="font-bold text-neutral-900">
              You can be a significant part of it!
            </p>
          </div>
        </FadeIn>

        {/* Account Details Image */}
        <FadeIn delay={0.4}>
          <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://placehold.co/800x400/e2e8f0/1e293b?text=Nigerian+Account+Details"
              alt="Nigerian Account Details"
              className="h-auto w-full"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
