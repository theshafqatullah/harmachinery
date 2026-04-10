import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services - HarMachinery",
  description:
    "Explore HarMachinery's full range of services — equipment rental, operator hire, delivery, maintenance, and project consultation.",
};

const servicesList = [
  {
    title: "Equipment Rental",
    slug: "equipment-rental",
    description:
      "Daily, weekly, and monthly rentals on 500+ machines. No long-term commitments required. Our fleet includes excavators, loaders, cranes, bulldozers, aerial lifts, dump trucks, and more.",
    features: [
      "Flexible rental terms",
      "Well-maintained, job-ready machines",
      "Transparent pricing with no hidden fees",
      "Quick turnaround on availability",
    ],
  },
  {
    title: "Operator Hire",
    slug: "operator-services",
    description:
      "Need a skilled operator? Our certified professionals are experienced with every machine in our fleet and can integrate seamlessly into your project team.",
    features: [
      "Fully certified and insured operators",
      "Experience across all equipment types",
      "Daily or long-term assignments",
      "Safety-compliant practices",
    ],
  },
  {
    title: "On-Site Delivery & Pickup",
    slug: "transportation",
    description:
      "We handle the logistics so you can focus on the job. Our transport team delivers equipment directly to your site using flatbed, lowboy, and float trailers.",
    features: [
      "Regional coverage across the area",
      "Scheduling to match your project timeline",
      "Oversize load permits handled",
      "GPS-tracked deliveries",
    ],
  },
  {
    title: "Maintenance & Breakdown Support",
    slug: "maintenance-repair",
    description:
      "Our 24/7 breakdown hotline ensures you're never stuck. We dispatch technicians or replacement units rapidly to minimize downtime.",
    features: [
      "24/7 emergency hotline",
      "Rapid technician dispatch",
      "Replacement units available",
      "No charge for mechanical failures",
    ],
  },
  {
    title: "Project Consultation",
    slug: "consulting",
    description:
      "Not sure which equipment you need? Our project advisors help you select the right machines for your scope, terrain, and timeline.",
    features: [
      "Free initial consultation",
      "Site assessment support",
      "Equipment recommendations",
      "Cost optimization strategies",
    ],
  },
  {
    title: "Long-Term Lease Programs",
    slug: "fleet-management",
    description:
      "For projects lasting 3 months or more, our lease programs offer reduced rates, priority maintenance, and dedicated account management.",
    features: [
      "Reduced monthly rates",
      "Priority maintenance scheduling",
      "Dedicated account manager",
      "Flexible upgrade options",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Services
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            What We Offer
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            End-to-end equipment solutions — from rental and delivery to
            operator hire and 24/7 maintenance support.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {servicesList.map((service, idx) => (
              <div
                key={service.title}
                className={`grid gap-12 lg:grid-cols-2 ${
                  idx % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-zinc-900">
                      {service.title}
                    </h2>
                  </div>
                  <p className="mt-4 leading-7 text-zinc-600">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-amber-600 hover:text-amber-500"
                  >
                    Learn More →
                  </Link>
                </div>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                    What&apos;s Included
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-zinc-700"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-zinc-800">
            Tell us about your project and we&apos;ll match the right services
            to your needs.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/request-quote"
              className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-900/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
