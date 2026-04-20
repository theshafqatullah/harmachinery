import type { Metadata } from "next";
import Link from "next/link";
import ContactSplit from "../_components/ContactSplit";

export const metadata: Metadata = {
  title: "Equipment Categories | Generators, Compactors, Tools & More for Rent",
  description:
    "Browse our full range: generators, compactors, jack hammers, concrete equipment, cutting machines, power tools, pumps, lighting and landscaping equipment for rent in Dubai.",
  keywords: [
    "generator rental Dubai", "compactor rental Dubai", "jack hammer rental Dubai",
    "concrete mixer rental Dubai", "power tools rental Dubai",
    "heavy equipment rental Dubai", "construction machinery UAE",
    "tower light rental Dubai", "scaffolding rental Dubai",
  ],
  alternates: { canonical: "/equipment" },
  openGraph: {
    title: "Equipment Categories | Generators, Compactors, Tools & More for Rent",
    description:
      "Browse our full range: generators, compactors, jack hammers, concrete equipment, cutting machines, power tools, pumps, lighting and landscaping equipment for rent in Dubai.",
    url: "/equipment",
  },
  twitter: {
    title: "Equipment Categories | Generators, Compactors, Tools & More for Rent",
    description:
      "Browse our full range: generators, compactors, jack hammers, concrete equipment, cutting machines, power tools, pumps, lighting and landscaping equipment for rent in Dubai.",
  },
};

const categories = [
  {
    name: "Generators",
    slug: "generators",
    description:
      "Silent & standard diesel generators from 10 KVA to 1000 KVA for construction, events, weddings, and industrial operations.",
    count: 60,
    priceFrom: "AED 150/day",
  },
  {
    name: "Compactors & Rollers",
    slug: "compactors",
    description:
      "Plate compactors, vibratory rollers, and smooth drum rollers for road and foundation work.",
    count: 14,
    priceFrom: "AED 250/day",
  },
  {
    name: "Air Compressors",
    slug: "air-compressors",
    description:
      "Industrial air compressors for sandblasting, pneumatic tools, and construction applications.",
    count: 12,
    priceFrom: "AED 200/day",
  },
  {
    name: "Excavators",
    slug: "excavators",
    description:
      "Mini to heavy excavators for earthmoving, trenching, and site preparation.",
    count: 18,
    priceFrom: "AED 400/day",
  },
  {
    name: "Aerial Lifts",
    slug: "aerial-lifts",
    description:
      "Boom lifts, scissor lifts, and telehandlers for elevated access on construction and fit-out projects.",
    count: 20,
    priceFrom: "AED 300/day",
  },
  {
    name: "Forklifts",
    slug: "forklifts",
    description:
      "3T to 7T forklifts and telehandlers for material handling at warehouses and construction sites.",
    count: 15,
    priceFrom: "AED 250/day",
  },
  {
    name: "Light Towers",
    slug: "light-towers",
    description:
      "Mobile LED light towers for construction sites, events, and outdoor venue illumination.",
    count: 14,
    priceFrom: "AED 150/day",
  },
  {
    name: "Water Pumps",
    slug: "water-pumps",
    description:
      "Dewatering pumps and irrigation pumps for construction, farms, and event sites.",
    count: 10,
    priceFrom: "AED 120/day",
  },
];

export default function EquipmentPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Equipment Rental Catalog — Husnain Abdul Rasheed Machinery Rentals",
    description: "Browse our full range of construction equipment for rent in Dubai and across the UAE.",
    url: "https://husnainabdulrasheedmachineryrentals.ae/equipment",
    numberOfItems: categories.length,
    itemListElement: categories.map((cat, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: cat.name,
      description: cat.description,
      url: `https://husnainabdulrasheedmachineryrentals.ae/equipment/${cat.slug}`,
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
            Equipment
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Equipment Catalog
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Generators, compactors, air compressors, excavators, and more — well-maintained and ready for daily, weekly, or monthly rental across all 7 UAE Emirates.
          </p>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/equipment/${cat.slug}`}
                className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-amber-300"
              >
                <h2 className="text-lg font-semibold text-zinc-900 group-hover:text-amber-600">
                  {cat.name}
                </h2>
                <p className="mt-3 flex-1 text-sm text-zinc-600">
                  {cat.description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75l-5.571-3m11.142 0L22.5 12l-4.179 2.25m0 0L12 17.25l-5.571-3"
                      />
                    </svg>
                    {cat.count} units
                  </span>
                  <span className="font-medium text-amber-600">
                    From {cat.priceFrom}
                  </span>
                </div>
                <div className="mt-5 flex items-center gap-1 text-sm font-medium text-amber-600">
                  View details
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Can&apos;t Find What You Need?
          </h2>
          <p className="mt-3 text-zinc-600">
            We have access to additional equipment through our partner network.
            Contact us and we&apos;ll source it for you.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/request-quote"
              className="rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-amber-400 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <ContactSplit />
    </>
  );
}
