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

        {/* Account Details */}
        <FadeIn delay={0.4}>
          <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl bg-neutral-50 border border-neutral-200 shadow-lg">
            <div className="bg-neutral-900 px-6 py-4">
              <h3 className="text-xl font-bold text-white">
                Nigerian Account Details
              </h3>
            </div>
            <div className="p-8 space-y-6 text-left md:px-12">
              <div className="flex flex-col gap-1 border-b border-neutral-200 pb-4">
                <span className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                  Bank Name
                </span>
                <span className="text-2xl font-bold text-neutral-900">
                  Zenith Bank
                </span>
              </div>
              <div className="flex flex-col gap-1 border-b border-neutral-200 pb-4">
                <span className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                  Account Name
                </span>
                <span className="text-xl font-bold text-neutral-900">
                  Paseda Evangelical Ministries
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                  Account Number
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-mono font-bold text-neutral-900 tracking-wider">
                    1015678901
                  </span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("1015678901");
                      // You might want to add a toast notification here if desired
                    }}
                    className="rounded-md bg-neutral-200 px-3 py-1 text-xs font-bold uppercase text-neutral-700 hover:bg-neutral-300 transition-colors"
                    title="Copy Account Number"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
