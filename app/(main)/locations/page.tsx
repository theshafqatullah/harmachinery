import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Locations - HarMachinery",
  description:
    "HarMachinery serves construction sites across the region. Find equipment rental services near your project location.",
};

const regions = [
  {
    name: "Metro Houston",
    type: "Primary Service Area",
    count: 12,
    locations: [
      { name: "Downtown Houston", slug: "downtown-houston" },
      { name: "The Woodlands", slug: "the-woodlands" },
      { name: "Katy", slug: "katy" },
      { name: "Sugar Land", slug: "sugar-land" },
      { name: "Pearland", slug: "pearland" },
      { name: "Pasadena", slug: "pasadena" },
      { name: "League City", slug: "league-city" },
      { name: "Baytown", slug: "baytown" },
      { name: "Missouri City", slug: "missouri-city" },
      { name: "Conroe", slug: "conroe" },
      { name: "Spring", slug: "spring" },
      { name: "Cypress", slug: "cypress" },
    ],
  },
  {
    name: "Dallas-Fort Worth",
    type: "Major Service Area",
    count: 8,
    locations: [
      { name: "Downtown Dallas", slug: "downtown-dallas" },
      { name: "Fort Worth", slug: "fort-worth" },
      { name: "Arlington", slug: "arlington" },
      { name: "Plano", slug: "plano" },
      { name: "Irving", slug: "irving" },
      { name: "Frisco", slug: "frisco" },
      { name: "McKinney", slug: "mckinney" },
      { name: "Denton", slug: "denton" },
    ],
  },
  {
    name: "Austin & San Antonio",
    type: "Expanding Coverage",
    count: 6,
    locations: [
      { name: "Downtown Austin", slug: "downtown-austin" },
      { name: "Round Rock", slug: "round-rock" },
      { name: "Georgetown", slug: "georgetown" },
      { name: "San Antonio", slug: "san-antonio" },
      { name: "New Braunfels", slug: "new-braunfels" },
      { name: "San Marcos", slug: "san-marcos" },
    ],
  },
  {
    name: "Industrial Zones",
    type: "Specialized Services",
    count: 6,
    locations: [
      { name: "Houston Ship Channel", slug: "houston-ship-channel" },
      { name: "Texas City Industrial", slug: "texas-city-industrial" },
      { name: "Port of Houston", slug: "port-of-houston" },
      { name: "Deer Park", slug: "deer-park" },
      { name: "La Porte", slug: "la-porte" },
      { name: "Galveston", slug: "galveston" },
    ],
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Service Areas
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Equipment Rental Across the Region
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            HarMachinery delivers heavy equipment to construction sites across
            Texas. Fast delivery, competitive rates, and 24/7 support wherever
            your project is.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "Service Areas", value: "30+" },
              { label: "Machines Available", value: "500+" },
              { label: "24/7 Support", value: "Yes" },
              { label: "Same-Day Delivery", value: "Available" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-amber-600">{stat.value}</p>
                <p className="mt-1 text-sm text-zinc-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations by Region */}
      {regions.map((region) => (
        <section
          key={region.name}
          className="border-b border-zinc-200 bg-white py-16"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900">
                  {region.name}
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  {region.type} · {region.count} locations
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {region.locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-zinc-200 p-5 transition-all hover:border-amber-300 hover:shadow-sm"
                >
                  <div>
                    <h3 className="font-semibold text-zinc-900 group-hover:text-amber-600">
                      {location.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500">
                      Equipment rental &amp; delivery
                    </p>
                  </div>
                  <svg
                    className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Don't see your area */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Don&apos;t See Your Area?
          </h2>
          <p className="mt-3 text-zinc-600">
            We serve locations beyond what&apos;s listed here. Contact us for
            delivery to your specific project site. Our fleet can reach
            anywhere!
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
            >
              Send Inquiry
            </Link>
            <a
              href="tel:+15551234567"
              className="rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
            >
              Call +1 (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Bottom info */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            HarMachinery — Serving the Entire Region
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-zinc-600 leading-7">
            <p>
              HarMachinery is the region&apos;s leading equipment rental
              company, providing high-quality construction machinery across more
              than 30 locations. Whether you&apos;re working on a commercial
              development in downtown Houston, a residential project in The
              Woodlands, or an industrial facility near the ship channel, we
              deliver the right equipment to your site.
            </p>
            <p>
              Our comprehensive fleet includes excavators, cranes, loaders,
              bulldozers, aerial lifts, and generators from top brands. With
              same-day delivery available and 24/7 emergency support,
              HarMachinery ensures your project never stops.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
