import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Generator & Equipment Rental Dubai | Harma Machinery",
  description:
    "Call 055 455 5786 or WhatsApp us for generator and construction equipment rental. Visit our yard on the E66 in Al Lisaili. We respond within 2 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Generator & Equipment Rental Dubai",
    description:
      "Call 055 455 5786 or WhatsApp us for generator and construction equipment rental. Visit our yard on the E66 in Al Lisaili.",
    url: "/contact",
  },
  twitter: {
    title: "Contact Us | Generator & Equipment Rental Dubai",
    description:
      "Call 055 455 5786 or WhatsApp us for generator and construction equipment rental. Visit our yard on the E66 in Al Lisaili.",
  },
};

const contactMethods = [
  {
    title: "Call / WhatsApp",
    value: "055 455 5786",
    detail: "Alt: 050 484 5636 · Sat–Thu 7am–8pm, Fri 8am–12pm",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    title: "Email Us",
    value: "info@husnainabdulrasheedmachineryrentals.ae",
    detail: "We respond within 2 business hours",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Visit Us",
    value: "Al Lisaili, Dubai–Al Ain Road (E66)",
    detail: "Dubai, United Arab Emirates",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Husnain Abdul Rasheed Construction Machinery Rental L.L.C (Harma Machinery). Have questions about our equipment or need a custom quote? Reach out
            and our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Fill out the form below and we&apos;ll get back to you within 2
                business hours.
              </p>
              <form className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-zinc-900">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-900">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-900">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-900">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="mt-1 block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    placeholder="+971 50 000 0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-900">
                    Subject
                  </label>
                  <select className="mt-1 block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500">
                    <option>General Inquiry</option>
                    <option>Equipment Rental</option>
                    <option>Quote Request</option>
                    <option>Support / Breakdown</option>
                    <option>Billing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-900">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="mt-1 block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    placeholder="Tell us about your project or question..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-amber-500 py-3 text-sm font-semibold text-zinc-900 hover:bg-amber-400 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">
                Contact Information
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Reach us directly through any of these channels.
              </p>
              <div className="mt-8 space-y-6">
                {contactMethods.map((method) => (
                  <div
                    key={method.title}
                    className="flex gap-4 rounded-lg border border-zinc-200 p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900">
                        {method.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-zinc-700">
                        {method.value}
                      </p>
                      <p className="text-xs text-zinc-500">{method.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg border border-zinc-200 p-5">
                <h3 className="font-semibold text-zinc-900">Business Hours</h3>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-600">Saturday – Thursday</span>
                    <span className="font-medium text-zinc-900">7:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-600">Friday</span>
                    <span className="font-medium text-zinc-900">8:00 AM – 12:00 PM</span>
                  </div>
                  <p className="mt-2 text-xs text-zinc-500">
                    24/7 emergency breakdown support available for active rentals.
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/971554555786"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-3 rounded-lg bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>

              {/* Social Links */}
              <div className="mt-6 rounded-lg border border-zinc-200 p-5">
                <h3 className="font-semibold text-zinc-900">Follow Us</h3>
                <div className="mt-3 flex gap-3">
                  <a
                    href="https://www.instagram.com/husnainabdulrasheedconstrucion?igsh=MTM3aTRpb2t3Z3AzNA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors hover:bg-amber-100 hover:text-amber-600"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61578507911629"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors hover:bg-amber-100 hover:text-amber-600"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
