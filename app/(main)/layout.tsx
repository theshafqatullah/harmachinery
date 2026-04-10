import Link from "next/link";

const navLinks = [
  { label: "Equipment", href: "/equipment" },
  { label: "Categories", href: "/categories" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
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

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/request-quote"
              className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
            >
              Get a Quote
            </Link>
          </div>

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
            <div className="absolute right-0 top-12 w-56 rounded-xl border border-zinc-200 bg-white p-2 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
                >
                  {link.label}
                </Link>
              ))}
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
