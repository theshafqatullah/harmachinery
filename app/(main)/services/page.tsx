import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services - Harma Machinery | Equipment Rental Dubai",
  description:
    "Generator rental, equipment hire, certified operators, delivery, maintenance & project consulting. Harma Machinery serves construction, events & industrial projects across UAE.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services - Harma Machinery | Equipment Rental Dubai",
    description:
      "Generator rental, equipment hire, certified operators, delivery, maintenance & project consulting. Harma Machinery serves construction, events & industrial projects across UAE.",
    url: "/services",
  },
  twitter: {
    title: "Our Services - Harma Machinery | Equipment Rental Dubai",
    description:
      "Generator rental, equipment hire, certified operators, delivery, maintenance & project consulting. Harma Machinery serves construction, events & industrial projects across UAE.",
  },
};

const servicesList = [
  {
    title: "Generator & Equipment Rental",
    slug: "equipment-rental",
    description:
      "Access our extensive fleet of generators (10 KVA to 1000 KVA), compactors, air compressors, and construction equipment for any project duration. From daily rentals for farm events to long-term leases for mega construction sites like Dubai South and Expo City.",
    features: [
      "Generators from 10 KVA to 1000 KVA",
      "Flexible daily, weekly, and monthly terms",
      "Silent generators available for events",
      "Event Power Packages (generator + cables + setup)",
    ],
  },
  {
    title: "Certified Operators",
    slug: "operator-services",
    description:
      "Our certified and experienced operators handle your machinery with expertise. All operators are trained on safety protocols and available in Arabic, English, Hindi, and Urdu.",
    features: [
      "Certified and licensed operators",
      "Multilingual team available",
      "Daily or long-term assignments",
      "Safety protocol trained",
    ],
  },
  {
    title: "Equipment Transportation",
    slug: "transportation",
    description:
      "Reliable delivery across all 7 UAE Emirates from our Al Lisaili base. Free delivery within 15 km (Zone A). Our fleet includes low-bed trailers, flatbeds, and specialised transport vehicles.",
    features: [
      "Free delivery within 15 km of Al Lisaili",
      "All 7 Emirates coverage",
      "GPS-tracked deliveries",
      "Same-day delivery available",
    ],
  },
  {
    title: "Maintenance & Breakdown Support",
    slug: "maintenance-repair",
    description:
      "24/7 breakdown hotline with rapid technician dispatch or replacement units. Preventive maintenance programs to keep your equipment running at peak performance throughout your rental.",
    features: [
      "24/7 emergency hotline",
      "Rapid replacement units",
      "Genuine OEM spare parts",
      "On-site and workshop repairs",
    ],
  },
  {
    title: "Project Consulting",
    slug: "consulting",
    description:
      "Our experienced consultants help you select the right generators and equipment for your specific project needs — from construction site power requirements to event power planning.",
    features: [
      "Free initial consultation",
      "Equipment selection guidance",
      "Cost optimisation strategies",
      "Delivery zone planning",
    ],
  },
  {
    title: "Fleet Management & Long-Term Leasing",
    slug: "fleet-management",
    description:
      "For projects lasting 3 months or more, our lease programs offer reduced rates, priority maintenance, and dedicated account management. Ideal for mega projects at Dubai South, Solar Park, and airport expansion.",
    features: [
      "Reduced monthly rates",
      "Priority maintenance scheduling",
      "Real-time GPS tracking",
      "Utilisation analytics",
    ],
  },
];

export default function ServicesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Equipment Rental Services — Harma Machinery",
    description: "Generator rental, equipment hire, certified operators, delivery, maintenance & project consulting across UAE.",
    url: "https://harmachinery.com/services",
    numberOfItems: servicesList.length,
    itemListElement: servicesList.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      description: s.description,
      url: `https://harmachinery.com/services/${s.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
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
