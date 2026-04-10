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
  excavators: {
    name: "Excavators",
    description:
      "Hydraulic excavators from 1.5 to 80 tons for any project scale.",
    longDescription:
      "Our excavator fleet includes mini excavators for tight spaces, mid-size machines for general construction, and large hydraulic excavators for heavy earthmoving. All units come with standard buckets, and we offer a range of attachments including breakers, augers, and thumbs.",
    specs: [
      { label: "Weight Range", value: "1.5 – 80 tons" },
      { label: "Dig Depth", value: "Up to 8.5m" },
      { label: "Engine Power", value: "15 – 530 HP" },
      { label: "Bucket Capacity", value: "0.04 – 4.6 m³" },
    ],
    features: [
      "GPS-equipped for precision grading",
      "Climate-controlled cabs",
      "Multiple attachment options",
      "Low-hour, well-maintained units",
      "Tier 4 Final compliant engines",
      "360-degree swing capability",
    ],
    pricing: [
      { period: "Daily", price: "$350 – $1,200" },
      { period: "Weekly", price: "$1,400 – $5,500" },
      { period: "Monthly", price: "$4,200 – $16,000" },
    ],
  },
  "wheel-loaders": {
    name: "Wheel Loaders",
    description:
      "Versatile loaders for material handling, loading, and site work.",
    longDescription:
      "Our wheel loaders range from compact units ideal for landscaping to large production loaders for quarry and mining operations. Each machine is maintained to manufacturer specifications and equipped with the latest safety features.",
    specs: [
      { label: "Operating Weight", value: "5 – 35 tons" },
      { label: "Bucket Capacity", value: "1.0 – 6.5 m³" },
      { label: "Engine Power", value: "80 – 400 HP" },
      { label: "Breakout Force", value: "Up to 220 kN" },
    ],
    features: [
      "Quick-coupler for fast attachment changes",
      "Ride control for operator comfort",
      "Rearview camera systems",
      "Load-sensing hydraulics",
      "Automatic traction control",
      "Centralized ground-level service points",
    ],
    pricing: [
      { period: "Daily", price: "$300 – $1,000" },
      { period: "Weekly", price: "$1,200 – $4,500" },
      { period: "Monthly", price: "$3,600 – $13,000" },
    ],
  },
  cranes: {
    name: "Cranes",
    description:
      "Mobile and tower cranes with lifting capacities up to 500 tons.",
    longDescription:
      "From truck-mounted cranes for quick lifts to large crawler cranes for major construction projects, our crane fleet covers every lifting requirement. All cranes come with current certifications and can be paired with certified operators.",
    specs: [
      { label: "Lifting Capacity", value: "10 – 500 tons" },
      { label: "Max Boom Length", value: "Up to 100m" },
      { label: "Max Tip Height", value: "Up to 120m" },
      { label: "Types Available", value: "Mobile, Crawler, Tower" },
    ],
    features: [
      "Load moment indicators (LMI)",
      "Anti-two-block systems",
      "Wind speed monitoring",
      "Certified lift planning available",
      "Outrigger monitoring systems",
      "Fall protection equipment included",
    ],
    pricing: [
      { period: "Daily", price: "$800 – $5,000" },
      { period: "Weekly", price: "$3,500 – $22,000" },
      { period: "Monthly", price: "$10,000 – $60,000" },
    ],
  },
  bulldozers: {
    name: "Bulldozers",
    description: "Heavy-duty dozers for grading, clearing, and earthmoving.",
    longDescription:
      "Our bulldozer fleet includes small utility dozers, mid-range grading machines, and large production dozers. All units feature the latest blade control technology for precision work and maximum productivity.",
    specs: [
      { label: "Operating Weight", value: "8 – 70 tons" },
      { label: "Engine Power", value: "80 – 850 HP" },
      { label: "Blade Width", value: "2.5 – 5.4m" },
      { label: "Blade Capacity", value: "2.0 – 28 m³" },
    ],
    features: [
      "GPS grade control ready",
      "VPAT (Variable Power Angle Tilt) blades",
      "Enclosed ROPS/FOPS cab",
      "Automatic transmission",
      "Ripper attachments available",
      "Low ground pressure options",
    ],
    pricing: [
      { period: "Daily", price: "$400 – $2,000" },
      { period: "Weekly", price: "$1,600 – $9,000" },
      { period: "Monthly", price: "$4,800 – $25,000" },
    ],
  },
  "aerial-lifts": {
    name: "Aerial Lifts",
    description:
      "Boom lifts, scissor lifts, and telehandlers for elevated access.",
    longDescription:
      "Our aerial lift fleet includes electric and diesel scissor lifts, articulating and telescopic boom lifts, and telehandlers. Perfect for construction, maintenance, and installation work at height.",
    specs: [
      { label: "Working Height", value: "Up to 56m" },
      { label: "Platform Capacity", value: "Up to 450 kg" },
      { label: "Horizontal Reach", value: "Up to 24m" },
      { label: "Types", value: "Scissor, Boom, Telehandler" },
    ],
    features: [
      "Non-marking tires available",
      "4WD for rough terrain",
      "Tilt alarm and leveling systems",
      "Annual inspection certificates",
      "Electric options for indoor use",
      "Rotating platforms available",
    ],
    pricing: [
      { period: "Daily", price: "$200 – $800" },
      { period: "Weekly", price: "$800 – $3,500" },
      { period: "Monthly", price: "$2,400 – $10,000" },
    ],
  },
  "dump-trucks": {
    name: "Dump Trucks",
    description: "Articulated and rigid dump trucks for hauling and transport.",
    longDescription:
      "From 15-ton site dumpers to 40-ton articulated haulers, our dump truck fleet keeps your material moving efficiently. All units are well-maintained and suited for construction, mining, and quarry operations.",
    specs: [
      { label: "Payload Capacity", value: "15 – 40 tons" },
      { label: "Body Volume", value: "9 – 24 m³" },
      { label: "Engine Power", value: "250 – 450 HP" },
      { label: "Types", value: "Articulated, Rigid" },
    ],
    features: [
      "All-wheel drive",
      "Heated body options",
      "Tailgate configurations",
      "Exhaust body heating for sticky materials",
      "On-board weighing systems",
      "Retarder braking for hill work",
    ],
    pricing: [
      { period: "Daily", price: "$450 – $1,500" },
      { period: "Weekly", price: "$1,800 – $7,000" },
      { period: "Monthly", price: "$5,400 – $20,000" },
    ],
  },
};

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = equipmentData[slug];
  if (!data)
    return { title: "Equipment Not Found - HarMachinery" };
  return {
    title: `${data.name} Rental - HarMachinery`,
    description: data.description,
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

  return (
    <>
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
