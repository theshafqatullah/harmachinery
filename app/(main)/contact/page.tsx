import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - HarMachinery",
  description:
    "Get in touch with HarMachinery for equipment rentals, quotes, and support. Call, email, or visit us.",
};

const contactMethods = [
  {
    title: "Call Us",
    value: "+1 (555) 123-4567",
    detail: "Mon–Fri 7am–6pm, Sat 8am–2pm",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    title: "Email Us",
    value: "info@harmachinery.com",
    detail: "We respond within 2 business hours",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Visit Us",
    value: "1234 Industrial Blvd, Suite 100",
    detail: "Houston, TX 77001",
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
            Have questions about our equipment or need a custom quote? Reach out
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
                    placeholder="+1 (555) 000-0000"
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
                    <span className="text-zinc-600">Monday – Friday</span>
                    <span className="font-medium text-zinc-900">7:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-600">Saturday</span>
                    <span className="font-medium text-zinc-900">8:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-600">Sunday</span>
                    <span className="font-medium text-zinc-900">Closed</span>
                  </div>
                  <p className="mt-2 text-xs text-zinc-500">
                    24/7 emergency breakdown support available for active rentals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
