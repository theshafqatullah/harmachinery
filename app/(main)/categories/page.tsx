import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Equipment Categories - Harma Machinery | Dubai",
  description:
    "Browse Harma Machinery's complete fleet of generators, compactors, air compressors & construction equipment. Available for rent across all 7 UAE Emirates.",
  alternates: { canonical: "/categories" },
  openGraph: {
    title: "Equipment Categories - Harma Machinery | Dubai",
    description:
      "Browse Harma Machinery's complete fleet of generators, compactors, air compressors & construction equipment. Available for rent across all 7 UAE Emirates.",
    url: "/categories",
  },
  twitter: {
    title: "Equipment Categories - Harma Machinery | Dubai",
    description:
      "Browse Harma Machinery's complete fleet of generators, compactors, air compressors & construction equipment. Available for rent across all 7 UAE Emirates.",
  },
};

const featuredCategories = [
  {
    name: "Generators",
    slug: "generators",
    description: "Silent & standard diesel generators from 10 KVA to 1000 KVA for construction, events, weddings, and desert camps.",
    count: 60,
    specs: ["10 - 1000 KVA", "Silent & Standard"],
    popular: true,
  },
  {
    name: "Compactors & Rollers",
    slug: "compactors",
    description: "Plate compactors, vibratory rollers, and smooth drum rollers for road and foundation work.",
    count: 14,
    specs: ["Plate & Roller", "Vibratory"],
    popular: true,
  },
  {
    name: "Air Compressors",
    slug: "air-compressors",
    description: "Industrial air compressors for sandblasting, pneumatic tools, and construction applications.",
    count: 12,
    specs: ["100 - 1600 CFM", "Diesel Powered"],
    popular: true,
  },
  {
    name: "Excavators",
    slug: "excavators",
    description: "Mini to heavy excavators for earthmoving, trenching, and site preparation across Dubai and UAE.",
    count: 18,
    specs: ["1.5 - 35 Tons", "Tracked & Mini"],
    popular: true,
  },
  {
    name: "Light Towers",
    slug: "light-towers",
    description: "Mobile LED light towers for construction sites, night work, events, and outdoor venues.",
    count: 14,
    specs: ["LED & Metal Halide", "Diesel Powered"],
    popular: true,
  },
  {
    name: "Forklifts",
    slug: "forklifts",
    description: "3T to 7T forklifts and telehandlers for material handling at warehouses and construction sites.",
    count: 15,
    specs: ["3 - 7 Tons", "Diesel & Electric"],
    popular: true,
  },
];

const allCategories = [
  {
    name: "Generators",
    slug: "generators",
    description: "Silent & standard diesel generators from 10 KVA to 1000 KVA.",
    count: 60,
    specs: ["10 - 1000 KVA", "Silent & Standard"],
    popular: true,
  },
  {
    name: "Compactors & Rollers",
    slug: "compactors",
    description: "Plate compactors, vibratory rollers, and smooth drum rollers.",
    count: 14,
    specs: ["Plate & Roller", "Vibratory"],
    popular: true,
  },
  {
    name: "Air Compressors",
    slug: "air-compressors",
    description: "Industrial air compressors for sandblasting and pneumatic tools.",
    count: 12,
    specs: ["100 - 1600 CFM", "Diesel Powered"],
    popular: true,
  },
  {
    name: "Excavators",
    slug: "excavators",
    description: "Mini to heavy excavators for earthmoving and trenching.",
    count: 18,
    specs: ["1.5 - 35 Tons", "Tracked & Mini"],
    popular: true,
  },
  {
    name: "Aerial Lifts",
    slug: "aerial-lifts",
    description: "Boom lifts, scissor lifts, and telehandlers for elevated access.",
    count: 20,
    specs: ["Up to 40m", "Electric & Diesel"],
    popular: true,
  },
  {
    name: "Forklifts",
    slug: "forklifts",
    description: "3T to 7T forklifts for material handling and warehouse operations.",
    count: 15,
    specs: ["3 - 7 Tons", "Diesel & Electric"],
    popular: true,
  },
  {
    name: "Light Towers",
    slug: "light-towers",
    description: "Mobile LED light towers for construction, events, and outdoor venues.",
    count: 14,
    specs: ["LED & Metal Halide", "Diesel Powered"],
  },
  {
    name: "Water Pumps",
    slug: "water-pumps",
    description: "Dewatering and irrigation pumps for construction and farms.",
    count: 10,
    specs: ["Submersible & Centrifugal", "Electric & Diesel"],
  },
  {
    name: "Skid Steer Loaders",
    slug: "skid-steers",
    description: "Compact Bobcat-type loaders for tight spaces and site work.",
    count: 8,
    specs: ["Wheeled & Tracked", "Multi-Attachment"],
  },
  {
    name: "Concrete Equipment",
    slug: "concrete-equipment",
    description: "Mixers, pumps, vibrators, and finishing equipment for concrete work.",
    count: 10,
    specs: ["Mixers & Pumps", "Vibrators & Trowels"],
  },
  {
    name: "Welding Generators",
    slug: "welding-generators",
    description: "Diesel welding generators for pipeline, structural, and fabrication work.",
    count: 8,
    specs: ["200 - 500 Amp", "Diesel Powered"],
  },
  {
    name: "Dump Trucks",
    slug: "dump-trucks",
    description: "Site dumpers for hauling materials on construction projects.",
    count: 6,
    specs: ["3 - 15 Tons", "4WD Available"],
  },
];

export default function CategoriesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Construction Equipment Categories — Harma Machinery",
    description: "Browse all construction equipment categories available for rent across the UAE.",
    url: "https://husnainabdulrasheedmachineryrentals.ae/categories",
    numberOfItems: featuredCategories.length,
    itemListElement: featuredCategories.map((cat, i) => ({
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
            Equipment Categories
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Equipment for Construction & Events
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Browse Harma Machinery&apos;s complete fleet — generators, compactors,
            air compressors, excavators, light towers, and more. Available for
            construction sites, weddings, festivals, and desert events.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "Equipment Types", value: "12" },
              { label: "Machines Total", value: "500+" },
              { label: "24/7 Support", value: "Yes" },
              { label: "Safety Certified", value: "100%" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-amber-600">{stat.value}</p>
                <p className="mt-1 text-sm text-zinc-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Featured Categories
          </h2>
          <p className="mt-2 text-zinc-600">
            Our most requested equipment categories, trusted by leading
            construction companies.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/equipment/${cat.slug}`}
                className="group relative rounded-2xl border border-zinc-200 p-6 transition-all hover:border-amber-300 hover:shadow-md"
              >
                {cat.popular && (
                  <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                    Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-amber-600">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  {cat.count} machines
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {cat.description}
                </p>
                <div className="mt-4 flex gap-2">
                  {cat.specs.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm font-semibold text-amber-600 group-hover:text-amber-500">
                  Browse Equipment →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Categories */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            All Equipment Categories
          </h2>
          <p className="mt-2 text-zinc-600">
            Browse our full range of construction machinery and equipment
            available for rental.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/equipment/${cat.slug}`}
                className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-amber-300 hover:shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-zinc-900 group-hover:text-amber-600">
                      {cat.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-zinc-500">
                      {cat.count} machines
                      {cat.popular && (
                        <span className="ml-2 text-amber-600">· Popular</span>
                      )}
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
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {cat.description}
                </p>
                <div className="mt-3 flex gap-2">
                  {cat.specs.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Can't find */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Can&apos;t Find What You Need?
          </h2>
          <p className="mt-3 text-zinc-600">
            Our equipment specialists can help you find the perfect machinery
            for your specific project requirements.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
            >
              Contact Us
            </Link>
            <a
              href="tel:+971554555786"
              className="rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
            >
              055 455 5786
            </a>
          </div>
        </div>
      </section>

      {/* Harma Machinery Advantage */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            The Harma Machinery Advantage
          </h2>
          <p className="mt-2 text-zinc-600">
            When you rent from Harma Machinery, you get more than just equipment.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Quality Guaranteed", description: "All equipment undergoes rigorous maintenance and safety inspections before each rental." },
              { title: "24/7 Support", description: "Round-the-clock technical support and emergency assistance whenever you need it." },
              { title: "Fast Delivery", description: "Swift delivery and pickup services across all our service areas." },
              { title: "Competitive Rates", description: "Transparent pricing with flexible rental terms to fit your project budget." },
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
    </>
  );
}
