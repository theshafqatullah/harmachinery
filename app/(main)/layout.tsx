import Link from "next/link";

const equipmentDropdown = [
  { label: "Excavators", href: "/equipment/excavators", desc: "Hydraulic excavators from 1.5 to 80 tons" },
  { label: "Wheel Loaders", href: "/equipment/wheel-loaders", desc: "Versatile loaders for material handling" },
  { label: "Cranes", href: "/equipment/cranes", desc: "Mobile & tower cranes up to 500 tons" },
  { label: "Bulldozers", href: "/equipment/bulldozers", desc: "Heavy-duty dozers for earthmoving" },
  { label: "Aerial Lifts", href: "/equipment/aerial-lifts", desc: "Boom lifts, scissor lifts & telehandlers" },
  { label: "Dump Trucks", href: "/equipment/dump-trucks", desc: "Articulated and rigid dump trucks" },
  { label: "Compactors", href: "/equipment/compactors", desc: "Soil and asphalt compaction equipment" },
  { label: "Generators", href: "/equipment/generators", desc: "Power generators for any project size" },
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

const locationsDropdown = [
  { label: "Dubai", href: "/locations", desc: "60+ locations across Dubai" },
  { label: "Sharjah", href: "/locations", desc: "Industrial & residential zones" },
  { label: "Abu Dhabi", href: "/locations", desc: "Al Ain & Abu Dhabi region" },
  { label: "Ajman", href: "/locations", desc: "Growing construction hub" },
  { label: "Ras Al Khaimah", href: "/locations", desc: "Industrial zones & tourism" },
  { label: "Fujairah", href: "/locations", desc: "East coast developments" },
  { label: "Umm Al Quwain", href: "/locations", desc: "Emerging development zones" },
];

const footerLinks = {
  equipment: [
    { label: "Excavators", href: "/equipment/excavators" },
    { label: "Wheel Loaders", href: "/equipment/wheel-loaders" },
    { label: "Cranes", href: "/equipment/cranes" },
    { label: "Bulldozers", href: "/equipment/bulldozers" },
    { label: "Aerial Lifts", href: "/equipment/aerial-lifts" },
    { label: "Dump Trucks", href: "/equipment/dump-trucks" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Locations", href: "/locations" },
    { label: "Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
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
              HarMachinery
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
                    <Link href="/equipment" className="text-sm font-semibold text-amber-600 hover:text-amber-500">
                      View All Equipment →
                    </Link>
                    <Link href="/request-quote" className="rounded-lg bg-amber-500 px-4 py-2 text-xs font-semibold text-zinc-900 hover:bg-amber-400">
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Machinery */}
            <Link href="/machinery" className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">
              Machinery
            </Link>

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
                      View All 90+ Locations →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

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
                  <Link href="/equipment" className="block rounded-lg px-4 py-2 text-xs font-semibold text-amber-600">
                    View All →
                  </Link>
                </div>
              </details>

              <Link href="/machinery" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100">
                Machinery
              </Link>

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
      <footer className="border-t border-zinc-200 bg-zinc-50 text-zinc-600">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
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
                  HarMachinery
                </span>
              </Link>
              <p className="mt-4 text-sm leading-6">
                Heavy equipment rentals you can rely on. Serving contractors
                and builders since 2010.
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <p>+1 (555) 123-4567</p>
                <p>info@harmachinery.com</p>
                <p>1234 Industrial Blvd, Suite 100</p>
                <p>Houston, TX 77001</p>
              </div>
            </div>

            {/* Equipment */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
                Equipment
              </h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.equipment.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-zinc-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-zinc-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-zinc-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
                  Business Hours
                </h3>
                <div className="mt-3 space-y-1 text-sm">
                  <p>Mon–Fri: 7am – 6pm</p>
                  <p>Saturday: 8am – 2pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-zinc-200 pt-8 text-center text-xs text-zinc-500">
            <p>
              &copy; {new Date().getFullYear()} HarMachinery. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
