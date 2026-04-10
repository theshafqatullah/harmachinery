import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  dubaiLocations,
  getLocationBySlug,
  getRelatedLocations,
} from "@/data/locations";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
  };
}

export function generateStaticParams() {
  return dubaiLocations.map((loc) => ({ slug: loc.slug }));
}

const regionLabels: Record<string, string> = {
  premium: "Premium Zone",
  residential: "Residential Area",
  commercial: "Commercial Hub",
  industrial: "Industrial Zone",
  events: "Events & Entertainment",
  desert: "Desert & Safari",
  infrastructure: "Infrastructure Corridor",
  sharjah: "Sharjah",
  ajman: "Ajman",
  "al-ain": "Al Ain",
  rak: "Ras Al Khaimah",
  fujairah: "Fujairah",
  uaq: "Umm Al Quwain",
};

const marketLabels: Record<string, string> = {
  construction: "Construction",
  events: "Events",
  industrial: "Industrial",
  government: "Government",
  hospitality: "Hospitality",
  agriculture: "Agriculture",
  "desert-events": "Desert Events",
  sports: "Sports",
  "film-media": "Film & Media",
  logistics: "Logistics",
};

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const related = getRelatedLocations(slug, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Link
            href="/locations"
            className="inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-500"
          >
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
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            All Locations
          </Link>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Equipment Rental in {location.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              {location.emirate}
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
              {regionLabels[location.region] || location.region}
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
              Tier {location.tier}
            </span>
            <span className="text-xs text-zinc-400">
              {location.distance} from Al Lisaili base
            </span>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            {location.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request-quote"
              className="rounded-lg bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
            >
              Get a Quote for {location.name}
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Key Details */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Why target */}
            <div className="rounded-xl border border-zinc-200 p-6">
              <h2 className="text-lg font-bold text-zinc-900">
                Why We Serve {location.name}
              </h2>
              <p className="mt-3 leading-7 text-zinc-600">
                {location.whyTarget}
              </p>
            </div>

            {/* Equipment demand */}
            <div className="rounded-xl border border-zinc-200 p-6">
              <h2 className="text-lg font-bold text-zinc-900">
                Equipment in Demand
              </h2>
              <p className="mt-3 leading-7 text-zinc-600">
                {location.equipmentDemand}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Markets served */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Markets We Serve in {location.name}
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {location.markets.map((market) => (
              <span
                key={market}
                className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700"
              >
                {marketLabels[market] || market}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Available Equipment */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Equipment Available in {location.name}
          </h2>
          <p className="mt-2 text-zinc-600">
            Full range of generators and construction equipment for immediate
            rental
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Generators",
              "Compactors",
              "Air Compressors",
              "Concrete Equipment",
              "Power Tools",
              "Pumps",
              "Lighting",
              "Scaffolding",
            ].map((type) => (
              <Link
                key={type}
                href="/machinery"
                className="rounded-xl border border-zinc-200 p-5 text-center transition-all hover:border-amber-300 hover:shadow-sm"
              >
                <h3 className="font-semibold text-zinc-900">{type}</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Available for rent
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Why Choose HarMachinery in {location.name}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Same-Day Delivery",
                description:
                  "Get equipment on your site the same day you order — no delays.",
              },
              {
                title: "24/7 Support",
                description:
                  "Round-the-clock technical support and emergency assistance.",
              },
              {
                title: "Competitive Rates",
                description:
                  "Transparent pricing with flexible daily, weekly, and monthly terms.",
              },
              {
                title: "Well-Maintained Fleet",
                description:
                  "All machinery is regularly serviced and inspected before every delivery.",
              },
              {
                title: "UAE-Wide Coverage",
                description:
                  "From our Al Lisaili base, we serve all 7 emirates reliably.",
              },
              {
                title: "Complete Documentation",
                description:
                  "Full paperwork, insurance, and compliance documentation included.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-zinc-200 bg-white p-6"
              >
                <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Locations */}
      {related.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-zinc-900">
              Nearby Service Areas
            </h2>
            <p className="mt-2 text-zinc-600">
              We also serve these locations near {location.name}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/locations/${rel.slug}`}
                  className="group rounded-xl border border-zinc-200 p-5 transition-all hover:border-amber-300 hover:shadow-sm"
                >
                  <h3 className="font-semibold text-zinc-900 group-hover:text-amber-600">
                    {rel.name}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-400">
                    {rel.emirate} · {rel.distance}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-zinc-500">
                    {rel.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-amber-500 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Ready to Rent Equipment in {location.name}?
          </h2>
          <p className="mt-3 text-zinc-800">
            Contact us today for competitive rates, same-day delivery, and 24/7
            support.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/request-quote"
              className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
            >
              Request a Quote
            </Link>
            <Link
              href="/machinery"
              className="rounded-lg border-2 border-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
            >
              Browse Equipment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
