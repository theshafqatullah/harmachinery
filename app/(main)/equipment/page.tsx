import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Equipment Catalog - HarMachinery",
  description:
    "Browse our full range of heavy equipment available for rent — excavators, cranes, loaders, bulldozers, aerial lifts, and more.",
};

const categories = [
  {
    name: "Excavators",
    slug: "excavators",
    description:
      "Hydraulic excavators from 1.5 to 80 tons for any project scale.",
    count: 24,
    priceFrom: "$350/day",
  },
  {
    name: "Wheel Loaders",
    slug: "wheel-loaders",
    description:
      "Versatile loaders for material handling, loading, and site work.",
    count: 18,
    priceFrom: "$300/day",
  },
  {
    name: "Cranes",
    slug: "cranes",
    description:
      "Mobile and tower cranes with lifting capacities up to 500 tons.",
    count: 12,
    priceFrom: "$800/day",
  },
  {
    name: "Bulldozers",
    slug: "bulldozers",
    description: "Heavy-duty dozers for grading, clearing, and earthmoving.",
    count: 15,
    priceFrom: "$400/day",
  },
  {
    name: "Aerial Lifts",
    slug: "aerial-lifts",
    description:
      "Boom lifts, scissor lifts, and telehandlers for elevated access.",
    count: 30,
    priceFrom: "$200/day",
  },
  {
    name: "Dump Trucks",
    slug: "dump-trucks",
    description: "Articulated and rigid dump trucks for hauling and transport.",
    count: 20,
    priceFrom: "$450/day",
  },
  {
    name: "Compactors",
    slug: "compactors",
    description: "Soil and asphalt compactors for road and foundation work.",
    count: 14,
    priceFrom: "$250/day",
  },
  {
    name: "Generators",
    slug: "generators",
    description:
      "Portable and towable generators from 20kW to 2000kW for site power.",
    count: 22,
    priceFrom: "$150/day",
  },
];

export default function EquipmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Equipment
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Our Equipment Catalog
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Browse our full range of well-maintained heavy equipment available
            for daily, weekly, and monthly rental.
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
    </>
  );
}
