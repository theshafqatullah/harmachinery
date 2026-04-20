import Image from "next/image";
import Link from "next/link";

type ShowcaseBlock = {
  anchor: string;
  title: string;
  subtitle: string;
  body: string;
  brands: string[];
  images: string[];
  href: string;
  capacityLine: string;
};

const blocks: ShowcaseBlock[] = [
  {
    anchor: "generators",
    title: "Silent Diesel Generator Rental Dubai",
    subtitle: "Power anywhere, from 10 KVA to 1000 KVA",
    body:
      "Looking for the best diesel generator rental in Dubai? Husnain Abdul Rasheed Machinery Rentals is one of the most trusted names in the UAE for silent and open-type diesel generators. We cover construction sites, events, film shoots and emergency backup — with capacities ranging from 10 KVA up to 1000 KVA. Every unit leaves our yard serviced, fuelled and ready to run.",
    brands: ["Perkins", "Cummins", "Caterpillar", "FG Wilson", "Denyo"],
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop",
    ],
    href: "/machinery?category=Generators",
    capacityLine:
      "Capacity: 10 KVA · 25 KVA · 100 KVA · 250 KVA · 500 KVA · 1000 KVA",
  },
  {
    anchor: "air-compressor",
    title: "Air Compressor Rental Dubai",
    subtitle: "Diesel portable compressors for site works",
    body:
      "Besides generators, we offer the best service in air compressor rental across the UAE. Our diesel portable compressors run jack hammers, pneumatic breakers, sand-blasting and paint rigs reliably — with capacities from 185 CFM up to 1070 CFM. Delivered to your site same day, with hoses and accessories included.",
    brands: ["Atlas Copco", "Ingersoll Rand", "Doosan", "Kaeser"],
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    ],
    href: "/machinery?category=Air+Compressors",
    capacityLine: "Capacity: 185 CFM · 390 CFM · 750 CFM · 1070 CFM",
  },
  {
    anchor: "light-tower",
    title: "Light Tower Rental UAE",
    subtitle: "LED & metal-halide tower lights for night works",
    body:
      "Keep your site lit through the night with our mobile LED light towers. Ideal for road projects, night-shift construction, concert grounds and outdoor events — tall masts, wide coverage, low fuel burn. Rent by the day, week or month.",
    brands: ["Atlas Copco QLT", "Generac", "Wacker Neuson"],
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
    ],
    href: "/machinery?category=Lighting",
    capacityLine:
      "Coverage: Up to 5,000 m² per tower · 4× 1000W metal-halide or LED",
  },
  {
    anchor: "compactors",
    title: "Roller & Plate Compactor Rental",
    subtitle: "Soil, asphalt and paving compaction",
    body:
      "From small plate compactors for tile and paver work, through to vibratory rollers for asphalt and road base — our compactor fleet handles every level of ground preparation. Operators available if you need them.",
    brands: ["Bomag", "Hamm", "Wacker Neuson", "Dynapac"],
    images: [
      "https://images.unsplash.com/photo-1586191582066-8e00e5886a04?q=80&w=800&auto=format&fit=crop",
    ],
    href: "/machinery?category=Compactors",
    capacityLine: "Range: 60 kg plate compactors to 12-ton tandem rollers",
  },
  {
    anchor: "concrete",
    title: "Concrete Mixer & Vibrator Rental",
    subtitle: "On-site concrete production & placement",
    body:
      "Pouring foundations, slabs or small structures? Our concrete mixers, vibrators, trowels and power floats are ready to dispatch. Reliable machines, competitive daily rates, and we can bundle with a generator and water pump for a complete site package.",
    brands: ["Honda", "Belle", "Wacker Neuson", "Altrad"],
    images: [
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop",
    ],
    href: "/machinery?category=Concrete+Equipment",
    capacityLine: "Mixer drums: 140 L · 250 L · 350 L · 500 L",
  },
  {
    anchor: "cutting",
    title: "Asphalt & Concrete Cutting Machine Rental",
    subtitle: "Walk-behind cutters, core drills & wall saws",
    body:
      "Road repairs, utility trenches, expansion joints — our diesel and petrol cutting machines handle asphalt, concrete and masonry with clean, accurate cuts. Diamond blades available in multiple diameters.",
    brands: ["Husqvarna", "Makita", "Stihl"],
    images: [
      "https://images.unsplash.com/photo-1603814929877-d5d927322656?q=80&w=800&auto=format&fit=crop",
    ],
    href: "/machinery?category=Cutting+Machines",
    capacityLine: "Blade diameters: 300 mm · 400 mm · 450 mm · 500 mm",
  },
];

export default function EquipmentShowcase() {
  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Our Rental Fleet
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Most reliable, top-quality branded equipment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            Industry-specific machinery from trusted manufacturers — inspected,
            serviced and ready to go.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {blocks.map((block, idx) => (
            <article
              key={block.anchor}
              id={block.anchor}
              className="grid scroll-mt-24 gap-10 lg:grid-cols-5 lg:items-center"
            >
              <div
                className={`lg:col-span-3 ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
                  {block.subtitle}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-zinc-900 sm:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-zinc-600">
                  {block.body}
                </p>
                <p className="mt-4 text-sm text-zinc-500">
                  {block.capacityLine}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Brands:
                  </span>
                  {block.brands.map((b, i) => (
                    <span
                      key={b}
                      className="text-sm font-semibold text-zinc-800"
                    >
                      {b}
                      {i < block.brands.length - 1 && (
                        <span className="ml-3 text-zinc-300">|</span>
                      )}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={block.href}
                    className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
                  >
                    View Available Units
                  </Link>
                  <Link
                    href="/request-quote"
                    className="rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-white"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>

              <div
                className={`grid gap-4 lg:col-span-2 ${
                  block.images.length > 1 ? "sm:grid-cols-2" : ""
                } ${idx % 2 === 1 ? "lg:order-1" : ""}`}
              >
                {block.images.map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-zinc-200"
                  >
                    <Image
                      src={src}
                      alt={`${block.title} — ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
