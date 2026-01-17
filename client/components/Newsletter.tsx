import { useState } from "react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const BG_IMAGE = "/images/footer-bg.jpg";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        toast.error("EmailJS configuration is missing. Please check your .env file.");
        console.error("Missing EmailJS env vars");
        setSubmitStatus("error");
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          email: email,
        },
        publicKey
      );

      setSubmitStatus("success");
      setEmail("");
      toast.success("Subscribed to newsletter successfully!");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      toast.error("Failed to subscribe. Please try again.");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="newsletter"
      aria-label="newsletter signup"
      className="relative isolate w-full overflow-hidden"
    >
      {/* Background container with image and overlay */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <img
          src={BG_IMAGE}
          alt="Newsletter background"
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.94)",
            opacity: 0.95,
          }}
          aria-hidden
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="flex min-h-[50vh] flex-col items-center justify-center text-center text-white">
          {/* Subtitle */}
          <div className="mb-4">
            <h5 className="text-sm font-semibold leading-6 text-white/80 uppercase tracking-wider">
              Stay Updated
            </h5>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Subscribe to Our Newsletter
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base text-white/90 sm:text-lg">
            Get the latest updates, news, and events delivered straight to your
            inbox. Join our community today.
          </p>

          {/* Newsletter form */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 w-full max-w-md space-y-4 sm:flex sm:space-y-0 sm:space-x-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={isSubmitting}
              className={cn(
                "w-full rounded-md bg-white/10 px-4 py-3 text-white placeholder-white/60",
                "border border-white/20 backdrop-blur-sm",
                "transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                "disabled:opacity-50 disabled:cursor-not-allowed",
              )}
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full rounded-md bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {submitStatus === "success" && (
            <p className="mt-4 text-green-400">Thanks for subscribing!</p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 text-red-400">Something went wrong. Try again.</p>
          )}
        </div>
      </div>
    </section>
  );
}
