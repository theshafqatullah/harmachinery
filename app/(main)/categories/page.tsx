import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Equipment Categories - HarMachinery",
  description:
    "Browse HarMachinery's complete fleet of construction equipment organized by category. Excavators, cranes, loaders, bulldozers, aerial lifts & more.",
};

const featuredCategories = [
  {
    name: "Excavators",
    slug: "excavators",
    description: "Hydraulic excavators from 1.5 to 80 tons for any project scale. Mini, mid-size, and large excavators from top brands.",
    count: 24,
    specs: ["1.5 - 80 Tons", "Tracked & Wheeled"],
    popular: true,
  },
  {
    name: "Cranes",
    slug: "cranes",
    description: "Mobile and tower cranes with lifting capacities up to 500 tons for heavy lifting operations.",
    count: 12,
    specs: ["Up to 500 Tons", "Mobile & Tower"],
    popular: true,
  },
  {
    name: "Wheel Loaders",
    slug: "wheel-loaders",
    description: "Versatile loaders for material handling, loading, and site work across all project types.",
    count: 18,
    specs: ["1 - 10 Yard", "Articulated"],
    popular: true,
  },
  {
    name: "Aerial Lifts",
    slug: "aerial-lifts",
    description: "Boom lifts, scissor lifts, and telehandlers for safe elevated access on any job site.",
    count: 30,
    specs: ["20 - 185 ft", "Electric & Diesel"],
    popular: true,
  },
  {
    name: "Bulldozers",
    slug: "bulldozers",
    description: "Heavy-duty dozers for grading, clearing, and earthmoving operations.",
    count: 15,
    specs: ["D3 - D11 Class", "GPS Available"],
    popular: true,
  },
  {
    name: "Compactors",
    slug: "compactors",
    description: "Soil and asphalt compactors including vibratory rollers and plate compactors.",
    count: 14,
    specs: ["Plate & Roller", "Vibratory"],
    popular: true,
  },
];

const allCategories = [
  {
    name: "Excavators",
    slug: "excavators",
    description: "Hydraulic excavators from 1.5 to 80 tons for any project scale.",
    count: 24,
    specs: ["1.5 - 80 Tons", "Tracked & Wheeled"],
    popular: true,
  },
  {
    name: "Wheel Loaders",
    slug: "wheel-loaders",
    description: "Versatile loaders for material handling, loading, and site work.",
    count: 18,
    specs: ["1 - 10 Yard", "Articulated"],
    popular: true,
  },
  {
    name: "Cranes",
    slug: "cranes",
    description: "Mobile and tower cranes with lifting capacities up to 500 tons.",
    count: 12,
    specs: ["Up to 500 Tons", "Mobile & Tower"],
    popular: true,
  },
  {
    name: "Bulldozers",
    slug: "bulldozers",
    description: "Heavy-duty dozers for grading, clearing, and earthmoving.",
    count: 15,
    specs: ["D3 - D11 Class", "GPS Available"],
  },
  {
    name: "Aerial Lifts",
    slug: "aerial-lifts",
    description: "Boom lifts, scissor lifts, and telehandlers for elevated access.",
    count: 30,
    specs: ["20 - 185 ft", "Electric & Diesel"],
    popular: true,
  },
  {
    name: "Dump Trucks",
    slug: "dump-trucks",
    description: "Articulated and rigid dump trucks for hauling and transport.",
    count: 20,
    specs: ["25 - 100 Ton", "Articulated & Rigid"],
  },
  {
    name: "Compactors",
    slug: "compactors",
    description: "Soil and asphalt compactors for road and foundation work.",
    count: 14,
    specs: ["Plate & Roller", "Vibratory"],
  },
  {
    name: "Generators",
    slug: "generators",
    description: "Portable and towable generators from 20kW to 2000kW for site power.",
    count: 22,
    specs: ["20kW - 2000kW", "Diesel & Gas"],
  },
  {
    name: "Skid Steers",
    slug: "skid-steers",
    description: "Compact and maneuverable skid steers with various attachment options.",
    count: 16,
    specs: ["1,500 - 4,000 lbs", "Wheeled & Tracked"],
  },
  {
    name: "Backhoe Loaders",
    slug: "backhoe-loaders",
    description: "Versatile backhoe loaders for digging, loading, and utility work.",
    count: 10,
    specs: ["14 - 17 ft Depth", "4WD Available"],
  },
  {
    name: "Forklifts",
    slug: "forklifts",
    description: "Industrial forklifts for material handling and warehouse operations.",
    count: 18,
    specs: ["3,000 - 36,000 lbs", "Electric & Propane"],
  },
  {
    name: "Concrete Equipment",
    slug: "concrete-equipment",
    description: "Mixers, pumps, vibrators, and finishing equipment for concrete projects.",
    count: 12,
    specs: ["Mixers & Pumps", "Vibrators & Trowels"],
  },
  {
    name: "Trenchers",
    slug: "trenchers",
    description: "Walk-behind and ride-on trenchers for utility and drainage work.",
    count: 8,
    specs: ["12 - 48 inch", "Chain & Wheel"],
  },
  {
    name: "Light Towers",
    slug: "light-towers",
    description: "Mobile light towers for construction site and event illumination.",
    count: 14,
    specs: ["LED & Metal Halide", "Diesel Powered"],
  },
];

export default function CategoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Equipment Categories
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Rent Construction Equipment by Category
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Browse HarMachinery&apos;s complete fleet of construction equipment
            organized by category. Find the right machine for your project.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "Equipment Types", value: "14" },
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
      <section className="bg-zinc-50 py-20">
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
              href="tel:+15551234567"
              className="rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
            >
              +1 (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Al Kabir Advantage */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            The HarMachinery Advantage
          </h2>
          <p className="mt-2 text-zinc-600">
            When you rent from HarMachinery, you get more than just equipment.
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
