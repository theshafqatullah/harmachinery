import Link from "next/link";

type ContactSplitProps = {
  heading?: string;
  subheading?: string;
  tone?: "light" | "dark";
};

export default function ContactSplit({
  heading = "We provide top-quality branded equipment based on your specific needs.",
  subheading = "Tell us about your project and we'll put together a tailored rental package.",
  tone = "light",
}: ContactSplitProps) {
  const isDark = tone === "dark";
  return (
    <section className={isDark ? "bg-zinc-900 py-20" : "bg-white py-20"}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`text-sm font-semibold uppercase tracking-widest ${
              isDark ? "text-amber-400" : "text-amber-600"
            }`}
          >
            Get in touch
          </p>
          <h2
            className={`mt-3 text-2xl font-bold tracking-tight sm:text-3xl ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            {heading}
          </h2>
          <p
            className={`mt-3 text-base ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            {subheading}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div
            className={`rounded-2xl p-6 sm:p-8 lg:col-span-3 ${
              isDark
                ? "bg-zinc-800 ring-1 ring-white/10"
                : "bg-zinc-50 ring-1 ring-zinc-200"
            }`}
          >
            <h3
              className={`text-lg font-semibold ${
                isDark ? "text-white" : "text-zinc-900"
              }`}
            >
              Send us a message
            </h3>
            <form action="/contact" method="get" className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="cs-name"
                    className={`block text-xs font-semibold ${
                      isDark ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    Full name
                  </label>
                  <input
                    id="cs-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className={`mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-amber-500 ${
                      isDark
                        ? "border-white/10 bg-zinc-900 text-white placeholder-zinc-500"
                        : "border-zinc-300 bg-white text-zinc-900"
                    }`}
                  />
                </div>
                <div>
                  <label
                    htmlFor="cs-phone"
                    className={`block text-xs font-semibold ${
                      isDark ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    Phone
                  </label>
                  <input
                    id="cs-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="+971 55 455 5786"
                    className={`mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-amber-500 ${
                      isDark
                        ? "border-white/10 bg-zinc-900 text-white placeholder-zinc-500"
                        : "border-zinc-300 bg-white text-zinc-900"
                    }`}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="cs-email"
                  className={`block text-xs font-semibold ${
                    isDark ? "text-zinc-300" : "text-zinc-700"
                  }`}
                >
                  Email
                </label>
                <input
                  id="cs-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                  className={`mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-amber-500 ${
                    isDark
                      ? "border-white/10 bg-zinc-900 text-white placeholder-zinc-500"
                      : "border-zinc-300 bg-white text-zinc-900"
                  }`}
                />
              </div>
              <div>
                <label
                  htmlFor="cs-message"
                  className={`block text-xs font-semibold ${
                    isDark ? "text-zinc-300" : "text-zinc-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="cs-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us what equipment you need, where, and for how long."
                  className={`mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-amber-500 ${
                    isDark
                      ? "border-white/10 bg-zinc-900 text-white placeholder-zinc-500"
                      : "border-zinc-300 bg-white text-zinc-900"
                  }`}
                />
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
                >
                  Send Message
                </button>
                <Link
                  href="https://wa.me/971554555786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition-colors ${
                    isDark
                      ? "border-white/20 text-white hover:bg-white/5"
                      : "border-zinc-300 text-zinc-800 hover:bg-zinc-50"
                  }`}
                >
                  <svg
                    className="h-4 w-4 text-[#25D366]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.15 1.6 5.95L2 22l4.25-1.68a9.93 9.93 0 0 0 5.79 1.85h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.02A9.85 9.85 0 0 0 12.04 2Z" />
                  </svg>
                  WhatsApp Us
                </Link>
              </div>
            </form>
          </div>

          <div
            className={`rounded-2xl p-6 sm:p-8 lg:col-span-2 ${
              isDark ? "bg-amber-500 text-zinc-900" : "bg-zinc-900 text-white"
            }`}
          >
            <h3
              className={`text-lg font-semibold ${
                isDark ? "text-zinc-900" : "text-white"
              }`}
            >
              Contact information
            </h3>
            <p
              className={`mt-2 text-sm ${
                isDark ? "text-zinc-800" : "text-zinc-400"
              }`}
            >
              Do you have questions about how we can help? Send us a message and
              we&apos;ll get in touch shortly.
            </p>

            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                    isDark
                      ? "bg-zinc-900/10 text-zinc-900"
                      : "bg-amber-500 text-zinc-900"
                  }`}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </span>
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      isDark ? "text-zinc-800" : "text-zinc-400"
                    }`}
                  >
                    Address
                  </p>
                  <p
                    className={`mt-1 text-sm ${
                      isDark ? "text-zinc-900" : "text-white"
                    }`}
                  >
                    Al Lisaili, Dubai–Al Ain Road (E66)
                    <br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                    isDark
                      ? "bg-zinc-900/10 text-zinc-900"
                      : "bg-amber-500 text-zinc-900"
                  }`}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </span>
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      isDark ? "text-zinc-800" : "text-zinc-400"
                    }`}
                  >
                    Phone
                  </p>
                  <p
                    className={`mt-1 text-sm ${
                      isDark ? "text-zinc-900" : "text-white"
                    }`}
                  >
                    <a href="tel:+971554555786" className="hover:underline">
                      +971 55 455 5786
                    </a>
                    <br />
                    <span
                      className={isDark ? "text-zinc-800" : "text-zinc-400"}
                    >
                      24/7 hotline for breakdowns
                    </span>
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                    isDark
                      ? "bg-zinc-900/10 text-zinc-900"
                      : "bg-amber-500 text-zinc-900"
                  }`}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      isDark ? "text-zinc-800" : "text-zinc-400"
                    }`}
                  >
                    Email
                  </p>
                  <p
                    className={`mt-1 text-sm ${
                      isDark ? "text-zinc-900" : "text-white"
                    }`}
                  >
                    <a
                      href="mailto:info@husnainabdulrasheedmachineryrentals.ae"
                      className="break-all hover:underline"
                    >
                      info@husnainabdulrasheedmachineryrentals.ae
                    </a>
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                    isDark
                      ? "bg-zinc-900/10 text-zinc-900"
                      : "bg-amber-500 text-zinc-900"
                  }`}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      isDark ? "text-zinc-800" : "text-zinc-400"
                    }`}
                  >
                    Hours
                  </p>
                  <p
                    className={`mt-1 text-sm ${
                      isDark ? "text-zinc-900" : "text-white"
                    }`}
                  >
                    Sat–Thu: 7am – 8pm · Fri: 8am – 12pm
                    <br />
                    <span
                      className={isDark ? "text-zinc-800" : "text-zinc-400"}
                    >
                      24/7 emergency support
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
