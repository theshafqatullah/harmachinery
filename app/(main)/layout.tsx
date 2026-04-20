import Link from "next/link";
import { dubaiLocations } from "@/data/locations";

const equipmentDropdown = [
  { label: "Generators", href: "/machinery?category=Generators", desc: "Silent & diesel generators 10–500 KVA" },
  { label: "Compactors", href: "/machinery?category=Compactors", desc: "Plate compactors & roller compactors" },
  { label: "Air Compressors", href: "/machinery?category=Air+Compressors", desc: "Jack hammers & pneumatic tools" },
  { label: "Power Tools", href: "/machinery?category=Power+Tools", desc: "Drills, grinders, breakers & more" },
  { label: "Concrete Equipment", href: "/machinery?category=Concrete+Equipment", desc: "Mixers, vibrators & cutters" },
  { label: "Cutting Machines", href: "/machinery?category=Cutting+Machines", desc: "Tile, concrete & asphalt cutters" },
  { label: "Lighting", href: "/machinery?category=Lighting", desc: "LED tower lights for sites & events" },
  { label: "Pumps", href: "/machinery?category=Pumps", desc: "Dewatering & submersible pumps" },
];

const servicesDropdown = [
  { label: "Equipment Rental", href: "/services/equipment-rental", desc: "Flexible daily, weekly & monthly rentals" },
  { label: "Certified Operators", href: "/services/operator-services", desc: "Skilled operators for your equipment" },
  { label: "Maintenance & Repair", href: "/services/maintenance-repair", desc: "Keep machinery in peak condition" },
  { label: "Transportation", href: "/services/transportation", desc: "Safe delivery across all emirates" },
  { label: "Project Consulting", href: "/services/consulting", desc: "Expert advice for your projects" },
  { label: "Operator Training", href: "/services/training", desc: "Comprehensive training programs" },
  { label: "Fleet Management", href: "/services/fleet-management", desc: "Complete fleet tracking & management" },
  { label: "Spare Parts", href: "/services/spare-parts", desc: "Genuine parts for all major brands" },
];

const locationsDropdown = dubaiLocations
  .filter((loc) => loc.emirate === "Dubai" && loc.tier <= 2)
  .slice(0, 12)
  .map((loc) => ({
    label: loc.name,
    href: `/locations/${loc.slug}`,
    desc: loc.distance + " from base",
  }));

const footerLinks = {
  equipment: [
    { label: "Generators", href: "/machinery?category=Generators" },
    { label: "Compactors", href: "/machinery?category=Compactors" },
    { label: "Power Tools", href: "/machinery?category=Power+Tools" },
    { label: "Concrete Equipment", href: "/machinery?category=Concrete+Equipment" },
    { label: "Cutting Machines", href: "/machinery?category=Cutting+Machines" },
    { label: "Lighting", href: "/machinery?category=Lighting" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Locations", href: "/locations" },
    { label: "Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Request a Quote", href: "/request-quote" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
              <svg
                className="h-5 w-5 text-zinc-900"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085"
                />
              </svg>
            </div>
            <span className="text-lg font-bold text-zinc-900">
              Husnain Abdul Rasheed Machinery Rentals
            </span>
          </Link>

          {/* Desktop nav — centered */}
          <div className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {/* Equipment dropdown */}
            <div className="group relative">
              <Link
                href="/equipment"
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              >
                Equipment
                <svg className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-screen max-w-3xl -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
                <div className="rounded-xl bg-white p-6 shadow-xl ring-1 ring-zinc-200">
                  <div className="grid grid-cols-2 gap-1">
                    {equipmentDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col rounded-lg px-4 py-3 transition-colors hover:bg-amber-50"
                      >
                        <span className="text-sm font-semibold text-zinc-900">{item.label}</span>
                        <span className="mt-0.5 text-xs text-zinc-500">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4">
                    <Link href="/machinery" className="text-sm font-semibold text-amber-600 hover:text-amber-500">
                      View All Equipment →
                    </Link>
                    <Link href="/request-quote" className="rounded-lg bg-amber-500 px-4 py-2 text-xs font-semibold text-zinc-900 hover:bg-amber-400">
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Services dropdown */}
            <div className="group relative">
              <Link
                href="/services"
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              >
                Services
                <svg className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-screen max-w-3xl -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
                <div className="rounded-xl bg-white p-6 shadow-xl ring-1 ring-zinc-200">
                  <div className="grid grid-cols-2 gap-1">
                    {servicesDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col rounded-lg px-4 py-3 transition-colors hover:bg-amber-50"
                      >
                        <span className="text-sm font-semibold text-zinc-900">{item.label}</span>
                        <span className="mt-0.5 text-xs text-zinc-500">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4">
                    <Link href="/services" className="text-sm font-semibold text-amber-600 hover:text-amber-500">
                      View All Services →
                    </Link>
                    <Link href="/contact" className="rounded-lg bg-amber-500 px-4 py-2 text-xs font-semibold text-zinc-900 hover:bg-amber-400">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations dropdown */}
            <div className="group relative">
              <Link
                href="/locations"
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              >
                Locations
                <svg className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-[540px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
                <div className="rounded-xl bg-white p-6 shadow-xl ring-1 ring-zinc-200">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">UAE Emirates</p>
                  <div className="grid grid-cols-2 gap-1">
                    {locationsDropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex flex-col rounded-lg px-4 py-3 transition-colors hover:bg-amber-50"
                      >
                        <span className="text-sm font-semibold text-zinc-900">{item.label}</span>
                        <span className="mt-0.5 text-xs text-zinc-500">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4">
                    <Link href="/locations" className="text-sm font-semibold text-amber-600 hover:text-amber-500">
                      View All Locations →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog */}
            <Link href="/blog" className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">
              Blog
            </Link>

            {/* About */}
            <Link href="/about" className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">
              About
            </Link>

            {/* Contact */}
            <Link href="/contact" className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">
              Contact
            </Link>
          </div>

          {/* CTA — right side */}
          <Link
            href="/request-quote"
            className="hidden rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-amber-400 md:inline-flex"
          >
            Get a Quote
          </Link>

          {/* Mobile menu button */}
          <details className="group relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-zinc-600 hover:bg-zinc-100 [&::-webkit-details-marker]:hidden">
              <svg
                className="h-6 w-6 group-open:hidden"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6 group-open:block"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </summary>
            <div className="absolute right-0 top-12 w-72 rounded-xl border border-zinc-200 bg-white p-2 shadow-lg">
              {/* Equipment accordion */}
              <details className="group/eq">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100 [&::-webkit-details-marker]:hidden">
                  Equipment
                  <svg className="h-4 w-4 text-zinc-400 transition-transform group-open/eq:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="pb-1 pl-4">
                  {equipmentDropdown.map((item) => (
                    <Link key={item.href} href={item.href} className="block rounded-lg px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900">
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/machinery" className="block rounded-lg px-4 py-2 text-xs font-semibold text-amber-600">
                    View All →
                  </Link>
                </div>
              </details>

              {/* Services accordion */}
              <details className="group/svc">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100 [&::-webkit-details-marker]:hidden">
                  Services
                  <svg className="h-4 w-4 text-zinc-400 transition-transform group-open/svc:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="pb-1 pl-4">
                  {servicesDropdown.map((item) => (
                    <Link key={item.href} href={item.href} className="block rounded-lg px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900">
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/services" className="block rounded-lg px-4 py-2 text-xs font-semibold text-amber-600">
                    View All →
                  </Link>
                </div>
              </details>

              {/* Locations accordion */}
              <details className="group/loc">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100 [&::-webkit-details-marker]:hidden">
                  Locations
                  <svg className="h-4 w-4 text-zinc-400 transition-transform group-open/loc:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="pb-1 pl-4">
                  {locationsDropdown.map((item) => (
                    <Link key={item.label} href={item.href} className="block rounded-lg px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900">
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/locations" className="block rounded-lg px-4 py-2 text-xs font-semibold text-amber-600">
                    View All →
                  </Link>
                </div>
              </details>

              <Link href="/blog" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100">
                Blog
              </Link>
              <Link href="/about" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100">
                About
              </Link>
              <Link href="/contact" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100">
                Contact
              </Link>

              <div className="my-1 border-t border-zinc-200" />
              <Link
                href="/request-quote"
                className="block rounded-lg bg-amber-500 px-4 py-2.5 text-center text-sm font-semibold text-zinc-900 hover:bg-amber-400"
              >
                Get a Quote
              </Link>
            </div>
          </details>
        </nav>
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400">
        {/* Top quick-links strip */}
        <div className="border-b border-white/5 bg-zinc-900">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-5 lg:px-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Popular rentals:
            </span>
            {footerLinks.equipment.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-zinc-300 transition-colors hover:text-amber-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand + contact block */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
                  <svg
                    className="h-5 w-5 text-zinc-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085"
                    />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white">
                  Husnain Abdul Rasheed Machinery Rentals
                </span>
              </Link>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Generator & construction equipment rental you can rely on.
                Based in Al Lisaili, Dubai — serving all 7 UAE Emirates with
                same-day delivery.
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span className="text-zinc-300">
                    Al Lisaili, Dubai–Al Ain Road (E66)<br />
                    Dubai, United Arab Emirates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <span className="text-zinc-300">
                    <a href="tel:+971554555786" className="hover:text-amber-400">+971 55 455 5786</a>
                    <span className="mx-1">/</span>
                    <a href="tel:+971504845636" className="hover:text-amber-400">+971 50 484 5636</a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <a
                    href="mailto:info@husnainabdulrasheedmachineryrentals.ae"
                    className="break-all text-zinc-300 hover:text-amber-400"
                  >
                    info@husnainabdulrasheedmachineryrentals.ae
                  </a>
                </li>
              </ul>
            </div>

            {/* Equipment */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Equipment
              </h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.equipment.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-amber-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-amber-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal + Hours */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-amber-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Business Hours
                </h3>
                <div className="mt-3 space-y-1 text-sm text-zinc-400">
                  <p>Sat–Thu: 7am – 8pm</p>
                  <p>Friday: 8am – 12pm</p>
                  <p className="text-amber-400">24/7 Emergency Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-8">
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/husnainabdulrasheedconstrucion?igsh=MTM3aTRpb2t3Z3AzNA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-colors hover:bg-amber-500 hover:text-zinc-900"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578507911629"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-colors hover:bg-amber-500 hover:text-zinc-900"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://wa.me/971554555786"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-colors hover:bg-amber-500 hover:text-zinc-900"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-zinc-500">
              &copy; {new Date().getFullYear()} Husnain Abdul Rasheed Machinery Rentals L.L.C (Husnain Abdul Rasheed Machinery Rentals). All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/971554555786"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      >
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
