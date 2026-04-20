import type { Metadata } from "next";
import Link from "next/link";
import {
  dubaiLocations,
  locationsByEmirate,
  locationsByTier,
  locationStats,
  deliveryZones,
} from "@/data/locations";
import ContactSplit from "../_components/ContactSplit";

export const metadata: Metadata = {
  title: "Equipment Delivery Across Dubai & All 7 UAE Emirates | Husnain Abdul Rasheed Machinery Rentals",
  description:
    "We deliver generators and construction equipment to 90+ locations: Dubai South, Expo City, DAMAC Hills, Al Awir, Business Bay, DIP, DSO and more. Same-day from Al Lisaili.",
  keywords: [
    "equipment rental near me Dubai", "generator rental near me UAE",
    "equipment delivery Dubai South", "generator hire Abu Dhabi",
    "equipment rental Sharjah", "machinery rental Al Ain",
    "construction equipment Ras Al Khaimah", "generator hire Fujairah",
  ],
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Equipment Delivery Across Dubai & All 7 UAE Emirates",
    description:
      "90+ delivery locations across all Emirates. Same-day equipment delivery from our Al Lisaili yard.",
    url: "/locations",
  },
  twitter: {
    title: "Service Locations Across UAE - Husnain Abdul Rasheed Machinery Rentals",
    description:
      "Husnain Abdul Rasheed Machinery Rentals delivers generators, compactors & construction equipment across 90+ locations in all 7 UAE emirates. Same-day delivery from Al Lisaili, Dubai.",
  },
};

const emirateDescriptions: Record<string, string> = {
  Dubai: "Our home emirate — fast delivery from our Al Lisaili base to every corner of Dubai.",
  Sharjah: "Cross-emirate service covering Sharjah's industrial and residential growth zones.",
  Ajman: "Equipment rental for Ajman's expanding construction and development projects.",
  "Abu Dhabi": "Serving Al Ain and Abu Dhabi region projects with reliable delivery.",
  "Ras Al Khaimah": "Equipment delivery to RAK's industrial zones, tourism projects & free zones.",
  Fujairah: "East coast coverage for Fujairah's port, industrial and construction projects.",
  "Umm Al Quwain": "Serving UAQ's emerging development zones and coastal event venues.",
};

const tierLabels: Record<number, { label: string; color: string }> = {
  1: { label: "High Priority", color: "bg-green-100 text-green-700" },
  2: { label: "Standard", color: "bg-blue-100 text-blue-700" },
  3: { label: "Extended Range", color: "bg-zinc-100 text-zinc-600" },
};

export default function LocationsPage() {
  const emirates = Object.entries(locationsByEmirate).filter(
    ([, locs]) => locs.length > 0
  );

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Equipment Rental Locations — Husnain Abdul Rasheed Machinery Rentals UAE",
    description: "All UAE locations served by Husnain Abdul Rasheed Machinery Rentals for generator and construction equipment rental.",
    url: "https://husnainabdulrasheedmachineryrentals.ae/locations",
    numberOfItems: dubaiLocations.length,
    itemListElement: dubaiLocations.map((loc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Equipment Rental in ${loc.name}`,
      url: `https://husnainabdulrasheedmachineryrentals.ae/locations/${loc.slug}`,
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
            Service Areas
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Equipment Rental Across All 7 Emirates
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Based in Al Lisaili, Dubai — Husnain Abdul Rasheed Machinery Rentals delivers generators,
            compactors, and construction equipment to {dubaiLocations.length}+
            locations across the UAE. Same-day delivery, competitive rates, and
            24/7 support.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {locationStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-amber-600">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier overview */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-xl font-bold text-zinc-900">
            Delivery Zones from Al Lisaili
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.values(deliveryZones).map((zone) => (
              <div
                key={zone.label}
                className="rounded-xl border border-zinc-200 p-5"
              >
                <p className="text-sm font-semibold text-amber-600">
                  {zone.label}
                </p>
                <p className="mt-1 text-2xl font-bold text-zinc-900">
                  {zone.range}
                </p>
                <p className="mt-1 text-sm text-zinc-500">
                  Delivery: {zone.fee}
                </p>
                <p className="text-xs text-zinc-400">
                  Min rental: {zone.minRental} · {zone.locations.length}{" "}
                  locations
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations by Emirate */}
      {emirates.map(([emirate, locations]) => (
        <section
          key={emirate}
          className="bg-white py-16"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">{emirate}</h2>
              <p className="mt-1 text-sm text-zinc-500">
                {emirateDescriptions[emirate]} · {locations.length} locations
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="group flex items-start justify-between rounded-xl border border-zinc-200 p-5 transition-all hover:border-amber-300 hover:shadow-sm"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-zinc-900 group-hover:text-amber-600">
                        {location.name}
                      </h3>
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium ${tierLabels[location.tier].color}`}
                      >
                        Tier {location.tier}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">
                      {location.distance} from base · {location.markets.length}{" "}
                      markets
                    </p>
                    <p className="mt-1 line-clamp-2 text-sm text-zinc-500">
                      {location.description}
                    </p>
                  </div>
                  <svg
                    className="ml-3 mt-1 h-5 w-5 shrink-0 text-zinc-400 transition-colors group-hover:text-amber-500"
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

      {/* Tier breakdown */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Locations by Priority Tier
          </h2>
          <p className="mt-2 text-zinc-600">
            We prioritize delivery speed based on proximity to our Al Lisaili
            base.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {([1, 2, 3] as const).map((tier) => (
              <div
                key={tier}
                className="rounded-xl border border-zinc-200 bg-white p-6"
              >
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${tierLabels[tier].color}`}
                >
                  Tier {tier} — {tierLabels[tier].label}
                </span>
                <p className="mt-3 text-3xl font-bold text-zinc-900">
                  {locationsByTier[tier].length}
                </p>
                <p className="text-sm text-zinc-500">locations</p>
                <ul className="mt-4 space-y-1">
                  {locationsByTier[tier].slice(0, 5).map((loc) => (
                    <li key={loc.slug} className="text-sm text-zinc-600">
                      <Link
                        href={`/locations/${loc.slug}`}
                        className="hover:text-amber-600"
                      >
                        {loc.name}
                      </Link>
                    </li>
                  ))}
                  {locationsByTier[tier].length > 5 && (
                    <li className="text-xs text-zinc-400">
                      +{locationsByTier[tier].length - 5} more
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't see your area */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Don&apos;t See Your Area?
          </h2>
          <p className="mt-3 text-zinc-600">
            We serve locations beyond what&apos;s listed here. Contact us for
            delivery to your specific project site anywhere in the UAE.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
            >
              Send Inquiry
            </Link>
            <Link
              href="/request-quote"
              className="rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom info */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Husnain Abdul Rasheed Machinery Rentals — Serving All 7 Emirates
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 leading-7 text-zinc-600">
            <p>
              Based in Al Lisaili on the Dubai–Al Ain Road (E66), Husnain Abdul Rasheed Machinery Rentals
              is strategically located to serve construction sites, events, and
              industrial facilities across the entire UAE. Our fleet of
              generators (20–500 kVA), compactors, air compressors, and
              construction equipment is maintained to the highest standards.
            </p>
            <p>
              From mega-projects in Dubai South and Expo City to desert events
              in Margham and coastal developments in Fujairah — we deliver
              reliable equipment with same-day availability. Contact us for a
              free consultation and competitive quote.
            </p>
          </div>
        </div>
      </section>
      <ContactSplit />
    </>
  );
}
