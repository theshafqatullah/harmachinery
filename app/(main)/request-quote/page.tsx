import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Request a Quote | Generator & Equipment Rental Dubai | Husnain Abdul Rasheed Machinery Rentals",
  description:
    "Tell us what you need and we'll send you a no-obligation quote within hours. Generators, compactors, jack hammers, power tools — daily, weekly or monthly.",
  alternates: { canonical: "/request-quote" },
  openGraph: {
    title: "Request a Quote | Generator & Equipment Rental Dubai",
    description:
      "Tell us what you need and we'll send you a no-obligation quote within hours. Generators, compactors, power tools and more.",
    url: "/request-quote",
  },
  twitter: {
    title: "Request a Quote | Generator & Equipment Rental Dubai",
    description:
      "Tell us what you need and we'll send you a no-obligation quote within hours. Generators, compactors, power tools and more.",
  },
};

export default function RequestQuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Quote Request
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Request a Quote
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Fill out the form below with your project details. We&apos;ll
            respond with a custom, no-obligation quote within a few hours.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8">
            <h2 className="text-xl font-bold text-zinc-900">
              Project Information
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              The more details you provide, the more accurate your quote will
              be.
            </p>

            <form className="mt-8 space-y-8">
              {/* Contact Info */}
              <fieldset>
                <legend className="text-sm font-semibold text-zinc-900">
                  Contact Details
                </legend>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      placeholder="ABC Construction"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="mt-1 block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      placeholder="+971 50 000 0000"
                    />
                  </div>
                </div>
              </fieldset>

              {/* Equipment Details */}
              <fieldset>
                <legend className="text-sm font-semibold text-zinc-900">
                  Equipment Requirements
                </legend>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700">
                      Project Type
                    </label>
                    <select className="mt-1 block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500">
                      <option>Construction Site</option>
                      <option>Wedding / Private Party</option>
                      <option>Desert Camp / Safari</option>
                      <option>Corporate Event</option>
                      <option>Concert / Festival</option>
                      <option>Film / Media Production</option>
                      <option>Government / Infrastructure</option>
                      <option>Agriculture / Farm</option>
                      <option>Industrial / Warehouse</option>
                      <option>Exhibition / Trade Show</option>
                      <option>Hotel / Hospitality</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700">
                      Equipment Type
                    </label>
                    <select className="mt-1 block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500">
                      <option>Generator (10–50 KVA)</option>
                      <option>Generator (50–100 KVA)</option>
                      <option>Generator (100–250 KVA)</option>
                      <option>Generator (250–500 KVA)</option>
                      <option>Generator (500–1000 KVA)</option>
                      <option>Silent Generator (Events)</option>
                      <option>Compactor / Roller</option>
                      <option>Air Compressor</option>
                      <option>Excavator</option>
                      <option>Boom / Scissor Lift</option>
                      <option>Forklift / Telehandler</option>
                      <option>Light Tower</option>
                      <option>Water Pump</option>
                      <option>Event Power Package (Generator + Cables + Setup)</option>
                      <option>Other Equipment</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700">
                      Quantity
                    </label>
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="mt-1 block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700">
                      Rental Duration
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      placeholder="e.g., 2 weeks, 3 months"
                    />
                  </div>
                </div>
              </fieldset>

              {/* Project Details */}
              <fieldset>
                <legend className="text-sm font-semibold text-zinc-900">
                  Project Details
                </legend>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700">
                      Job Site Location
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      placeholder="e.g., Dubai South, Al Lisaili, DAMAC Hills 2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="mt-1 block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-zinc-700">
                    Additional Details
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    placeholder="Tell us about your project, site conditions, or any specific requirements..."
                  />
                </div>
              </fieldset>

              <div className="flex items-start gap-3 rounded-lg bg-amber-50 p-4">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                <p className="text-sm text-amber-800">
                  This is a no-obligation quote request. We typically respond
                  within 2–4 business hours during business days.
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-amber-500 py-3 text-sm font-semibold text-zinc-900 hover:bg-amber-400 transition-colors"
              >
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
