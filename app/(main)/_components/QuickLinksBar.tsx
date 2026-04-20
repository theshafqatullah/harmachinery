import Link from "next/link";

const quickLinks = [
  { label: "Generator Rental", href: "/machinery?category=Generators" },
  { label: "Silent Diesel Generator", href: "/machinery?category=Silent+Generators" },
  { label: "Air Compressor Rental", href: "/machinery?category=Air+Compressors" },
  { label: "Light Tower Rental", href: "/machinery?category=Lighting" },
  { label: "Heavy Equipment Rental", href: "/machinery" },
  { label: "Welding Machine Rental", href: "/machinery?category=Welding+Generators" },
  { label: "Roller Compactor Rental", href: "/machinery?category=Compactors" },
  { label: "Plate Compactor Rental", href: "/machinery?category=Compactors" },
  { label: "Concrete Mixer Rental", href: "/machinery?category=Concrete+Equipment" },
  { label: "Cutting Machine Rental", href: "/machinery?category=Cutting+Machines" },
  { label: "Power Tools Rental", href: "/machinery?category=Power+Tools" },
  { label: "Pump Rental", href: "/machinery?category=Pumps" },
];

export default function QuickLinksBar() {
  return (
    <section className="border-y border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-1">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Quick Links:
          </span>
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="shrink-0 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700"
            >
              #{link.label.toLowerCase().replace(/\s+/g, "-")}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
