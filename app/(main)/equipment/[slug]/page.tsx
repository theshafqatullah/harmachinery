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
      "Silent & standard diesel generators from 3 KVA to 500 KVA for construction, events, and industrial use.",
    longDescription:
      "Our generator fleet is the largest in Southern Dubai, ranging from compact 3 KVA portable units for small stalls and handheld tools, to heavy-duty 500 KVA generators for mega projects and large-scale festivals. We stock trusted brands including Perkins, Cummins, Honda, Caterpillar, Denyo, Kohler, Yamaha, John Deere, Kubota, Miller and Lincoln Electric. Silent and super-silent models are available for weddings, film shoots, beach events, and noise-sensitive venues.",
    specs: [
      { label: "Power Range", value: "3 – 500 KVA" },
      { label: "Fuel Type", value: "Diesel & Petrol" },
      { label: "Brands", value: "Perkins, Cummins, Honda, Caterpillar, Denyo, Kohler, Yamaha" },
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
      "Plate compactors and roller compactors for road base and foundation work.",
    longDescription:
      "Our compaction fleet covers every level of ground prep — from Honda and JCB plate compactors (30 – 180 KG) for trenches, kerbs and tile bedding, to 5-ton and 10-ton CAT and JCB roller compactors for road base, sub-base and asphalt finishing. Used across The Valley, DAMAC Hills 2, Villanova, and Dubai South road construction projects.",
    specs: [
      { label: "Types Available", value: "Plate & Roller Compactor" },
      { label: "Brands", value: "Caterpillar, JCB, Honda" },
      { label: "Operating Weight", value: "30 KG – 10 tons" },
      { label: "Applications", value: "Soil, sub-base & asphalt" },
    ],
    features: [
      "Honda 30 KG plate compactor for trench and kerb work",
      "JCB 180 KG plate compactor for paver and road base",
      "JCB 5-ton roller compactor for mid-size sub-base",
      "CAT 10-ton roller compactor for road and asphalt",
      "Walk-behind and ride-on options",
      "Low-emission engines",
    ],
    pricing: [
      { period: "Daily", price: "AED 250 – 1,200" },
      { period: "Weekly", price: "AED 1,200 – 5,000" },
      { period: "Monthly", price: "AED 3,500 – 12,000" },
    ],
  },
  "air-compressors": {
    name: "Jack Hammers & Breakers",
    description:
      "Electric and pneumatic jack hammers for demolition, trenching and surface preparation.",
    longDescription:
      "Our jack hammer and breaker fleet is the go-to kit for demolition crews across the UAE. From the 7 KG Makita HM0870C for chipping and tile removal, to the 13 KG Bosch GSH 11 VC for heavy chiselling, and the 20 KG Hilti TE 3000 for breaking through concrete slabs and asphalt — we match the tool to the job. Delivered same day with the right chisel bits, spare carbon brushes and safety accessories.",
    specs: [
      { label: "Weight Range", value: "7 – 20 KG" },
      { label: "Power Source", value: "Electric & Pneumatic" },
      { label: "Brands", value: "Hilti, Bosch, Makita" },
      { label: "Applications", value: "Demolition, chipping, trenching" },
    ],
    features: [
      "Hilti TE 3000 (20 KG) for heavy breaking",
      "Bosch GSH 11 VC (13 KG) for mid-duty chiselling",
      "Makita HM0870C (7 KG) for tile and light chipping",
      "Chisel bits and spare parts included",
      "Vibration-damped handles on newer models",
      "Same-day delivery with hoses & accessories",
    ],
    pricing: [
      { period: "Daily", price: "AED 150 – 500" },
      { period: "Weekly", price: "AED 700 – 2,500" },
      { period: "Monthly", price: "AED 2,000 – 7,000" },
    ],
  },
  "cutting-machines": {
    name: "Cutting Machines",
    description:
      "Core cutters, steel benders, tile cutters, wood cutters and interlock cutters for site works.",
    longDescription:
      "Whether you're drilling core holes for MEP, bending rebar for structural work, cutting tiles for fit-out, or slicing interlock pavers — we have the right cutting machine. Brands we stock include Hilti DD 150 core drills, Makita steel benders, Bosch GWS 22 steel cutters, DeWalt DWE7492 wood cutters, Rubi TZ-1300 tile cutters and Altrad interlock cutters.",
    specs: [
      { label: "Types", value: "Core, Steel, Tile, Wood, Interlock" },
      { label: "Brands", value: "Hilti, Makita, Bosch, DeWalt, Rubi, Altrad" },
      { label: "Power", value: "Corded Electric & Petrol" },
      { label: "Blade Options", value: "Diamond core, abrasive, wood, tile" },
    ],
    features: [
      "Hilti DD 150 core cutting machine for precise MEP holes",
      "Makita steel bending machine for rebar work",
      "Bosch GWS 22 steel cutter for structural cuts",
      "Rubi TZ-1300 professional tile cutter",
      "DeWalt DWE7492 table saw for wood cutting",
      "Altrad interlock cutter for paving crews",
    ],
    pricing: [
      { period: "Daily", price: "AED 180 – 600" },
      { period: "Weekly", price: "AED 900 – 2,800" },
      { period: "Monthly", price: "AED 2,500 – 7,500" },
    ],
  },
  "concrete-equipment": {
    name: "Concrete Equipment",
    description:
      "Concrete mixers, vibrators and power trowels for on-site concrete work.",
    longDescription:
      "On-site concrete production and finishing equipment for foundations, slabs and small structures. Our 500 L diesel concrete mixers, Honda petrol concrete vibrators, and Wacker Neuson power trowels (helicopters) are ready to dispatch across Dubai and the UAE. Pair with a generator and water pump for a complete pour package.",
    specs: [
      { label: "Mixer Capacity", value: "Up to 500 L drum" },
      { label: "Brands", value: "Altrad, Honda, Wacker Neuson" },
      { label: "Power", value: "Diesel, Petrol & Electric" },
      { label: "Applications", value: "Mixing, vibration, finishing" },
    ],
    features: [
      "500 L diesel concrete mixer for on-site batching",
      "Honda petrol concrete vibrator for deep compaction",
      "Wacker Neuson power trowel (helicopter) for slab finishing",
      "Low-emission engines",
      "Pair with generator + water pump for full pour package",
      "Operator available on request",
    ],
    pricing: [
      { period: "Daily", price: "AED 220 – 700" },
      { period: "Weekly", price: "AED 1,100 – 3,200" },
      { period: "Monthly", price: "AED 3,000 – 8,500" },
    ],
  },
  "power-tools": {
    name: "Power Tools",
    description:
      "Grinders, welders, impact wrenches, blowers, sanders and jigsaws for trades crews.",
    longDescription:
      "A complete kit of professional power tools from Makita, Bosch, Milwaukee, Miller and DeWalt. Whether you need a Miller Bobcat 250 welding machine, a Makita GA9020 big grinder, a Milwaukee M18 FUEL impact wrench or a Bosch GST 150 jigsaw — we stock it and deliver same day across the UAE.",
    specs: [
      { label: "Types", value: "Welders, Grinders, Wrenches, Blowers, Sanders, Jigsaws" },
      { label: "Brands", value: "Miller, Makita, Bosch, Milwaukee, DeWalt" },
      { label: "Power", value: "Corded, Cordless & Diesel (welder)" },
      { label: "Duty Rating", value: "Professional / Heavy-Duty" },
    ],
    features: [
      "Miller Bobcat 250 welding machine",
      "Makita GA9020 9-inch big grinder",
      "Milwaukee M18 FUEL impact wrench",
      "Bosch GST 150 jigsaw machine",
      "Makita UB1103 air blower & BO5041 sander",
      "Tested and serviced before every dispatch",
    ],
    pricing: [
      { period: "Daily", price: "AED 80 – 400" },
      { period: "Weekly", price: "AED 400 – 2,000" },
      { period: "Monthly", price: "AED 1,200 – 5,500" },
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
      "Petrol water pumps and pressure-testing pumps for construction and MEP crews.",
    longDescription:
      "Our pump fleet covers general site water transfer and MEP pressure testing — the Honda WB30XH petrol water pump for moving water on construction sites and event camps in Al Lisaili and Al Awir, and the Ridgid 1450 pressure testing pump for hydrostatic testing of plumbing systems on fit-out and MEP jobs.",
    specs: [
      { label: "Types", value: "Petrol Centrifugal, Pressure Testing" },
      { label: "Brands", value: "Honda, Ridgid" },
      { label: "Power", value: "Petrol & Manual" },
      { label: "Applications", value: "Site water transfer, hydrostatic testing" },
    ],
    features: [
      "Honda WB30XH 3-inch petrol water pump",
      "Ridgid 1450 hydrostatic pressure testing pump",
      "Reliable starting, even in hot conditions",
      "Ideal for construction, camps and MEP crews",
      "Hoses and fittings included",
      "Delivered same day across the UAE",
    ],
    pricing: [
      { period: "Daily", price: "AED 120 – 400" },
      { period: "Weekly", price: "AED 600 – 2,000" },
      { period: "Monthly", price: "AED 1,800 – 5,000" },
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
