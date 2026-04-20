import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const equipmentData: Record<
  string,
  {
    name: string;
    description: string;
    longDescription: string;
    specs: { label: string; value: string }[];
    features: string[];
    pricing: { period: string; price: string }[];
  }
> = {
  generators: {
    name: "Generators",
    description:
      "Silent & standard diesel generators from 10 KVA to 1000 KVA for construction, events, and industrial use.",
    longDescription:
      "Our generator fleet is the largest in Southern Dubai, ranging from compact 10 KVA units for farm events and small construction sites, to heavy-duty 1000 KVA generators for mega projects and large-scale festivals. We stock trusted brands including Perkins, Cummins, Honda, and CAT. Silent and super-silent models are available for weddings, film shoots, beach events, and noise-sensitive venues.",
    specs: [
      { label: "Power Range", value: "10 – 1000 KVA" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Brands", value: "Perkins, Cummins, Honda, CAT" },
      { label: "Noise Level", value: "Standard, Silent & Super-Silent" },
    ],
    features: [
      "Silent models for weddings, events & film shoots",
      "Automatic transfer switch (ATS) compatible",
      "Fuel-efficient diesel engines",
      "Complete power distribution boards included",
      "Fuel top-up service available during long events",
      "24/7 emergency replacement guarantee",
    ],
    pricing: [
      { period: "Daily", price: "AED 150 – 3,000+" },
      { period: "Weekly", price: "AED 800 – 15,000+" },
      { period: "Monthly", price: "AED 1,500 – 30,000+" },
    ],
  },
  compactors: {
    name: "Compactors & Rollers",
    description:
      "Plate compactors, vibratory rollers, and smooth drum rollers for road construction and foundation work.",
    longDescription:
      "Our compaction fleet covers every need from small residential trench compaction to large-scale road construction projects. Plate compactors for sidewalks and trenches, vibratory rollers for sub-base and asphalt work, and smooth drum rollers for finishing surfaces. Used across The Valley, DAMAC Hills 2, Villanova, and Dubai South road construction projects.",
    specs: [
      { label: "Types Available", value: "Plate, Vibratory Roller, Smooth Drum" },
      { label: "Compaction Force", value: "13 – 200 kN" },
      { label: "Working Width", value: "400mm – 2,130mm" },
      { label: "Operating Weight", value: "60 kg – 14 tons" },
    ],
    features: [
      "Vibratory and static rollers available",
      "Walk-behind and ride-on options",
      "Suitable for soil, gravel, and asphalt",
      "Low-emission engines",
      "Edge compaction capability",
      "Water sprinkler system for asphalt work",
    ],
    pricing: [
      { period: "Daily", price: "AED 250 – 1,200" },
      { period: "Weekly", price: "AED 1,200 – 5,000" },
      { period: "Monthly", price: "AED 3,500 – 12,000" },
    ],
  },
  "air-compressors": {
    name: "Air Compressors",
    description:
      "Industrial air compressors for construction, sandblasting, and pneumatic tools.",
    longDescription:
      "Our portable and towable air compressors are workhorses on construction sites across the UAE. Used for sandblasting, operating pneumatic tools, cleaning debris, and powering spray equipment. Available in a range of CFM ratings to match your project requirements — from small fit-out jobs in malls to large-scale industrial operations in DIP and JAFZA.",
    specs: [
      { label: "Air Flow", value: "100 – 1,600 CFM" },
      { label: "Pressure", value: "100 – 150 PSI" },
      { label: "Power Source", value: "Diesel" },
      { label: "Portability", value: "Towable on trailer" },
    ],
    features: [
      "Diesel-powered for remote sites",
      "After-cooler and moisture separator included",
      "Multiple outlet ports for team use",
      "Towable for easy site relocation",
      "Low fuel consumption",
      "Suitable for sandblasting and pneumatic tools",
    ],
    pricing: [
      { period: "Daily", price: "AED 200 – 800" },
      { period: "Weekly", price: "AED 1,000 – 4,000" },
      { period: "Monthly", price: "AED 3,000 – 10,000" },
    ],
  },
  excavators: {
    name: "Excavators",
    description:
      "Mini to heavy excavators for earthmoving, trenching, and site preparation.",
    longDescription:
      "From mini excavators for tight villa construction sites to heavy excavators for major earthmoving projects, our fleet handles it all. Commonly used on The Valley, Villanova, Arabian Ranches developments, utility trenching for DEWA and Etisalat, and demolition work in older Dubai neighborhoods. All units come with standard buckets, and we offer breaker and auger attachments.",
    specs: [
      { label: "Weight Range", value: "1.5 – 35 tons" },
      { label: "Dig Depth", value: "Up to 6.5m" },
      { label: "Engine Power", value: "15 – 270 HP" },
      { label: "Bucket Capacity", value: "0.04 – 1.5 m³" },
    ],
    features: [
      "Mini excavators for tight access",
      "Breaker and auger attachments available",
      "Climate-controlled cabs",
      "Low-hour, well-maintained units",
      "Rubber tracks to protect paved surfaces",
      "Certified operators available on request",
    ],
    pricing: [
      { period: "Daily", price: "AED 400 – 2,500" },
      { period: "Weekly", price: "AED 2,000 – 12,000" },
      { period: "Monthly", price: "AED 6,000 – 30,000" },
    ],
  },
  "aerial-lifts": {
    name: "Aerial Lifts",
    description:
      "Boom lifts, scissor lifts, and telehandlers for elevated access.",
    longDescription:
      "Our aerial lift fleet covers indoor and outdoor applications — electric scissor lifts for mall and tower fit-out work, diesel boom lifts for outdoor construction, and telehandlers for material handling at height. Widely used across Dubai Hills, Business Bay tower renovation, and hotel renovation projects throughout JBR and Palm Jumeirah.",
    specs: [
      { label: "Working Height", value: "Up to 40m" },
      { label: "Platform Capacity", value: "Up to 450 kg" },
      { label: "Horizontal Reach", value: "Up to 20m" },
      { label: "Types", value: "Scissor, Boom, Telehandler" },
    ],
    features: [
      "Electric models for indoor/silent operation",
      "4WD rough terrain for construction sites",
      "Non-marking tires available for finished floors",
      "Annual inspection and safety certificates",
      "Tilt alarm and leveling systems",
      "Rotating platforms on boom lifts",
    ],
    pricing: [
      { period: "Daily", price: "AED 300 – 1,500" },
      { period: "Weekly", price: "AED 1,500 – 7,000" },
      { period: "Monthly", price: "AED 4,000 – 18,000" },
    ],
  },
  forklifts: {
    name: "Forklifts",
    description:
      "3T to 7T forklifts and telehandlers for material handling at warehouses and sites.",
    longDescription:
      "Our forklift fleet serves construction sites, warehouses, logistics hubs, and event setups across the UAE. From 3-ton units for pallet handling in warehouse operations at Ras Al Khor and DIP, to 7-ton rough terrain forklifts for heavy material handling on construction sites. Also used for stage setup and exhibition booth assembly at DWTC and Expo City.",
    specs: [
      { label: "Lifting Capacity", value: "3 – 7 tons" },
      { label: "Lift Height", value: "Up to 6m" },
      { label: "Power Source", value: "Diesel & Electric" },
      { label: "Types", value: "Warehouse & Rough Terrain" },
    ],
    features: [
      "Side-shift for precise placement",
      "Rough terrain models for construction sites",
      "Electric models for indoor warehouses",
      "Fork extensions and rotators available",
      "Certified operators available",
      "Suitable for event and exhibition setup",
    ],
    pricing: [
      { period: "Daily", price: "AED 250 – 800" },
      { period: "Weekly", price: "AED 1,200 – 4,000" },
      { period: "Monthly", price: "AED 3,500 – 10,000" },
    ],
  },
  "light-towers": {
    name: "Light Towers",
    description:
      "Mobile LED light towers for construction sites, events, and outdoor venues.",
    longDescription:
      "Our mobile light towers are essential for night construction work, outdoor events, and security lighting. LED towers provide powerful, energy-efficient illumination for RTA road projects, E66 highway night works, outdoor concerts, sporting events, film shoots, and desert camp setups. Diesel-powered with auto-start for reliable operation.",
    specs: [
      { label: "Light Output", value: "4 × 320W LED" },
      { label: "Mast Height", value: "Up to 9m" },
      { label: "Coverage Area", value: "Up to 5,000 m²" },
      { label: "Runtime", value: "60+ hours per tank" },
    ],
    features: [
      "LED for energy-efficient, cool illumination",
      "Manual and hydraulic mast options",
      "Towable for easy repositioning",
      "Auto-start and auto-dim options",
      "Ideal for construction, events, and security",
      "Wind-rated masts for outdoor stability",
    ],
    pricing: [
      { period: "Daily", price: "AED 150 – 400" },
      { period: "Weekly", price: "AED 700 – 2,000" },
      { period: "Monthly", price: "AED 2,000 – 5,000" },
    ],
  },
  "water-pumps": {
    name: "Water Pumps",
    description:
      "Dewatering and irrigation pumps for construction, farms, and events.",
    longDescription:
      "Our pump fleet handles dewatering on construction sites, irrigation for agricultural operations in Al Lisaili and Al Awir, and water supply for events and temporary camps. From small submersible pumps for trench dewatering to high-capacity diesel pumps for major dewatering operations at sewage treatment plant expansions and tunnel construction.",
    specs: [
      { label: "Flow Rate", value: "Up to 2,500 L/min" },
      { label: "Head", value: "Up to 30m" },
      { label: "Types", value: "Submersible, Centrifugal, Diaphragm" },
      { label: "Power", value: "Electric & Diesel" },
    ],
    features: [
      "Submersible pumps for trench dewatering",
      "High-volume centrifugal for construction sites",
      "Diesel-powered for remote locations",
      "Trash pumps handle solids and debris",
      "Suitable for agricultural irrigation",
      "Hose and coupling kits included",
    ],
    pricing: [
      { period: "Daily", price: "AED 120 – 500" },
      { period: "Weekly", price: "AED 600 – 2,500" },
      { period: "Monthly", price: "AED 1,800 – 6,000" },
    ],
  },
};

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return Object.keys(equipmentData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = equipmentData[slug];
  if (!data)
    return { title: "Equipment Not Found - Husnain Abdul Rasheed Machinery Rentals" };
  return {
    title: `${data.name} Rental - Husnain Abdul Rasheed Machinery Rentals`,
    description: data.description,
    alternates: { canonical: `/equipment/${slug}` },
    openGraph: {
      title: `${data.name} Rental - Husnain Abdul Rasheed Machinery Rentals`,
      description: data.description,
      url: `/equipment/${slug}`,
    },
    twitter: {
      title: `${data.name} Rental - Husnain Abdul Rasheed Machinery Rentals`,
      description: data.description,
    },
  };
}

export default async function EquipmentDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const data = equipmentData[slug];
  if (!data) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://husnainabdulrasheedmachineryrentals.ae" },
      { "@type": "ListItem", position: 2, name: "Equipment", item: "https://husnainabdulrasheedmachineryrentals.ae/equipment" },
      { "@type": "ListItem", position: 3, name: data.name, item: `https://husnainabdulrasheedmachineryrentals.ae/equipment/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Link
            href="/equipment"
            className="inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-500"
          >
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Back to Equipment
          </Link>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            {data.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
            {data.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-zinc-900">Overview</h2>
              <p className="mt-4 leading-7 text-zinc-600">
                {data.longDescription}
              </p>

              {/* Specs Table */}
              <h3 className="mt-12 text-xl font-bold text-zinc-900">
                Specifications
              </h3>
              <div className="mt-4 overflow-hidden rounded-lg border border-zinc-200">
                <table className="w-full text-sm">
                  <tbody>
                    {data.specs.map((spec, idx) => (
                      <tr
                        key={spec.label}
                        className={
                          idx % 2 === 0 ? "bg-zinc-50" : "bg-white"
                        }
                      >
                        <td className="px-4 py-3 font-medium text-zinc-900">
                          {spec.label}
                        </td>
                        <td className="px-4 py-3 text-zinc-600">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Features */}
              <h3 className="mt-12 text-xl font-bold text-zinc-900">
                Key Features
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {data.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-sm text-zinc-700">
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
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar - Pricing */}
            <div>
              <div className="sticky top-24 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
                <h3 className="text-lg font-bold text-zinc-900">
                  Rental Pricing
                </h3>
                <p className="mt-1 text-xs text-zinc-500">
                  Prices vary by model and configuration
                </p>
                <div className="mt-6 space-y-3">
                  {data.pricing.map((price) => (
                    <div
                      key={price.period}
                      className="flex items-center justify-between rounded-lg bg-white p-3"
                    >
                      <span className="text-sm font-medium text-zinc-700">
                        {price.period}
                      </span>
                      <span className="text-sm font-bold text-amber-600">
                        {price.price}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/request-quote"
                  className="mt-6 block w-full rounded-lg bg-amber-500 py-3 text-center text-sm font-semibold text-zinc-900 hover:bg-amber-400 transition-colors"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact"
                  className="mt-3 block w-full rounded-lg border border-zinc-300 py-3 text-center text-sm font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to catalog */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <Link
            href="/equipment"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-500"
          >
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Back to Equipment Catalog
          </Link>
        </div>
      </section>
    </>
  );
}
