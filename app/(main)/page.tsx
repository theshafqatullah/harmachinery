import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HarMachinery - Heavy Equipment & Machinery Rentals",
  description:
    "Rent top-quality construction and industrial machinery. Excavators, cranes, loaders, and more — delivered to your job site.",
};

const featuredEquipment = [
  {
    name: "Excavators",
    description:
      "Hydraulic excavators from 1.5 to 80 tons for any project scale.",
    slug: "excavators",
  },
  {
    name: "Wheel Loaders",
    description:
      "Versatile loaders for material handling, loading, and site work.",
    slug: "wheel-loaders",
  },
  {
    name: "Cranes",
    description:
      "Mobile and tower cranes with lifting capacities up to 500 tons.",
    slug: "cranes",
  },
  {
    name: "Bulldozers",
    description: "Heavy-duty dozers for grading, clearing, and earthmoving.",
    slug: "bulldozers",
  },
  {
    name: "Aerial Lifts",
    description:
      "Boom lifts, scissor lifts, and telehandlers for elevated access.",
    slug: "aerial-lifts",
  },
  {
    name: "Compactors",
    description: "Soil and asphalt compactors for road and foundation work.",
    slug: "compactors",
  },
];

const stats = [
  { label: "Machines Available", value: "500+" },
  { label: "Projects Completed", value: "2,000+" },
  { label: "Years in Business", value: "15+" },
  { label: "Satisfied Clients", value: "800+" },
];

const howItWorks = [
  {
    step: "01",
    title: "Tell Us What You Need",
    description:
      "Submit a quote request or call us with your project details — type of equipment, duration, and location.",
  },
  {
    step: "02",
    title: "Get a Custom Quote",
    description:
      "We'll match the right machines to your job and send you a transparent, no-obligation quote within hours.",
  },
  {
    step: "03",
    title: "We Deliver to Your Site",
    description:
      "Our logistics team transports the equipment directly to your job site, on time and ready to work.",
  },
  {
    step: "04",
    title: "Work With Full Support",
    description:
      "Use the equipment with confidence — our 24/7 technician hotline and on-site support have you covered.",
  },
];

const services = [
  {
    title: "Equipment Rental",
    description:
      "Daily, weekly, and monthly rentals on 500+ machines. No long-term commitments required.",
  },
  {
    title: "Operator Hire",
    description:
      "Certified, experienced operators available for any machine in our fleet.",
  },
  {
    title: "On-Site Delivery & Pickup",
    description:
      "We handle transport logistics — flatbed, lowboy, and float trailers across the region.",
  },
  {
    title: "Maintenance & Breakdown Support",
    description:
      "24/7 breakdown hotline with rapid technician dispatch or replacement units.",
  },
  {
    title: "Project Consultation",
    description:
      "Not sure what you need? Our team helps you select the right equipment for your scope.",
  },
  {
    title: "Long-Term Lease Programs",
    description:
      "Extended lease options with reduced rates for projects lasting 3 months or more.",
  },
];

const industries = [
  { name: "Commercial Construction", icon: "building" },
  { name: "Road & Bridge Work", icon: "road" },
  { name: "Residential Development", icon: "home" },
  { name: "Mining & Quarrying", icon: "mining" },
  { name: "Utilities & Infrastructure", icon: "utility" },
  { name: "Demolition", icon: "demolition" },
  { name: "Landscaping & Grading", icon: "landscape" },
  { name: "Industrial & Warehouse", icon: "industrial" },
];

const testimonials = [
  {
    quote:
      "HarMachinery delivered two excavators and a crane to our site within 24 hours of our call. The machines were in perfect condition, and their operator knew exactly what he was doing. We've been renting from them exclusively for 3 years now.",
    name: "Robert Turner",
    role: "Project Manager, Turner Construction Co.",
  },
  {
    quote:
      "What sets them apart is the reliability. In 18 months, we've never had a machine break down on site, and the one time we needed a swap, they had a replacement there by the next morning. That kind of service is rare in this industry.",
    name: "Linda Okafor",
    role: "Site Superintendent, Okafor Civil Works",
  },
  {
    quote:
      "We compared pricing from five rental companies before choosing HarMachinery. Their rates were competitive, but more importantly, there were no hidden fees. The quote we got was the price we paid. Honest and straightforward.",
    name: "Ahmed Al-Rashid",
    role: "Owner, Al-Rashid Earthworks LLC",
  },
];

const faqs = [
  {
    question: "What is the minimum rental period?",
    answer:
      "We offer daily, weekly, and monthly rentals. The minimum rental is one day for most equipment.",
  },
  {
    question: "Do you deliver equipment to job sites?",
    answer:
      "Yes. We deliver and pick up equipment anywhere in the region. Delivery fees depend on distance and equipment size.",
  },
  {
    question: "Are operators included with the rental?",
    answer:
      "Operators are available as an add-on. All our operators are certified and experienced with our fleet.",
  },
  {
    question: "What happens if a machine breaks down?",
    answer:
      "Call our 24/7 hotline. We'll dispatch a technician or deliver a replacement unit — typically within hours.",
  },
];

const industryIcons: Record<string, React.ReactNode> = {
  building: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M3.75 21V3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75V21m3-18h4.5a.75.75 0 0 1 .75.75v17.25m-9.75 0h9.75" />
    </svg>
  ),
  road: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
    </svg>
  ),
  home: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  mining: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
    </svg>
  ),
  utility: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  demolition: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
    </svg>
  ),
  landscape: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  ),
  industrial: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
    </svg>
  ),
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
              Trusted by 800+ contractors across the region
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
              Heavy Equipment Rentals You Can Rely On
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              From excavators to cranes, get the right machinery for your
              project. Flexible rental terms, expert support, and delivery
              straight to your job site.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <Link
                href="/equipment"
                className="rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-amber-400 transition-colors"
              >
                Browse Equipment
              </Link>
              <Link
                href="/request-quote"
                className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-amber-500">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Our Equipment Fleet
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Well-maintained machines ready for your next project
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredEquipment.map((item) => (
              <Link
                key={item.slug}
                href={`/equipment/${item.slug}`}
                className="group rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-amber-400"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-amber-600">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/equipment"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-500"
            >
              View all equipment
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Renting equipment with us is straightforward
            </p>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <div key={item.step}>
                <p className="text-4xl font-bold text-amber-400">{item.step}</p>
                <h3 className="mt-4 text-base font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              What We Offer
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              End-to-end equipment solutions for your project
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-zinc-200 bg-white p-6"
              >
                <h3 className="text-base font-semibold text-zinc-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-500"
            >
              Learn more about our services
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Industries We Serve
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Our equipment supports projects across a wide range of sectors
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex flex-col items-center rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-6 text-center"
              >
                <div className="flex h-10 w-10 items-center justify-center text-amber-600">
                  {industryIcons[industry.icon]}
                </div>
                <p className="mt-3 text-sm font-medium text-zinc-900">
                  {industry.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Why Choose HarMachinery
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Well-Maintained Fleet",
                description:
                  "Every machine undergoes rigorous inspection and maintenance before each rental.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                ),
              },
              {
                title: "Flexible Rental Terms",
                description:
                  "Daily, weekly, or monthly rentals — we adapt to your project timeline.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                ),
              },
              {
                title: "On-Site Delivery",
                description:
                  "We deliver and pick up equipment directly at your job site, anywhere in the region.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
              },
              {
                title: "24/7 Expert Support",
                description:
                  "Our team of certified technicians provides round-the-clock support for any issues.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-zinc-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Don&apos;t take our word for it — hear from contractors who rely on us
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-xl border border-zinc-200 bg-zinc-50 p-6"
              >
                <svg
                  className="mb-4 h-8 w-8 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <p className="text-sm leading-6 text-zinc-700">
                  {testimonial.quote}
                </p>
                <div className="mt-4 border-t border-zinc-200 pt-4">
                  <p className="text-sm font-semibold text-zinc-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
              Trusted & Certified
            </h2>
            <p className="mt-3 text-sm text-zinc-600">
              We maintain the highest industry standards for safety and reliability
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "Licensed & Insured", detail: "Full commercial liability coverage" },
              { label: "OSHA Compliant", detail: "All equipment meets safety standards" },
              { label: "ISO 9001 Certified", detail: "Quality management processes" },
              { label: "BBB Accredited", detail: "A+ rated for business practices" },
            ].map((badge) => (
              <div key={badge.label} className="text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-400 text-amber-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-zinc-900">
                  {badge.label}
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  {badge.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Quick answers to common questions
            </p>
          </div>
          <div className="mt-12 divide-y divide-zinc-200 border-y border-zinc-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-zinc-900 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg
                    className="h-5 w-5 shrink-0 text-zinc-400 transition-transform group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-500"
            >
              View all FAQs
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-500">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-zinc-800">
            Tell us about your project and we&apos;ll recommend the right
            equipment.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/request-quote"
              className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-900/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
