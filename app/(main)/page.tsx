import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "HarMachinery - Heavy Equipment & Machinery Rentals in UAE",
  description:
    "Rent top-quality construction and industrial machinery across UAE. Excavators, cranes, loaders, generators and more — delivered to your job site.",
};

const featuredEquipment = [
  {
    name: "Excavators",
    description: "Hydraulic excavators from 1.5 to 80 tons for any project scale.",
    slug: "excavators",
    image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Wheel Loaders",
    description: "Versatile loaders for material handling, loading, and site work.",
    slug: "wheel-loaders",
    image: "https://images.unsplash.com/photo-1603814744450-36f978490b11?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Cranes",
    description: "Mobile and tower cranes with lifting capacities up to 500 tons.",
    slug: "cranes",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Bulldozers",
    description: "Heavy-duty dozers for grading, clearing, and earthmoving.",
    slug: "bulldozers",
    image: "https://images.unsplash.com/photo-1670014773310-387f8a70a4af?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Aerial Lifts",
    description: "Boom lifts, scissor lifts, and telehandlers for elevated access.",
    slug: "aerial-lifts",
    image: "https://images.unsplash.com/photo-1566624490237-b0314cb4a73f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Compactors",
    description: "Soil and asphalt compactors for road and foundation work.",
    slug: "compactors",
    image: "https://images.unsplash.com/photo-1603814744247-ca3e77714471?q=80&w=1200&auto=format&fit=crop",
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
    description: "Daily, weekly, and monthly rentals on 500+ machines. No long-term commitments required.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Operator Hire",
    description: "Certified, experienced operators available for any machine in our fleet.",
    image: "https://images.unsplash.com/photo-1603814929877-d5d927322656?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "On-Site Delivery & Pickup",
    description: "We handle transport logistics — flatbed, lowboy, and float trailers across the region.",
    image: "https://images.unsplash.com/photo-1586191582066-8e00e5886a04?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Maintenance & Breakdown Support",
    description: "24/7 breakdown hotline with rapid technician dispatch or replacement units.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Project Consultation",
    description: "Not sure what you need? Our team helps you select the right equipment for your scope.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Long-Term Lease Programs",
    description: "Extended lease options with reduced rates for projects lasting 3 months or more.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
];

const industries = [
  {
    name: "Commercial Construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Road & Bridge Work",
    image: "https://images.unsplash.com/photo-1566624490237-b0314cb4a73f?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Residential Development",
    image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Mining & Quarrying",
    image: "https://images.unsplash.com/photo-1603814744450-36f978490b11?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Utilities & Infrastructure",
    image: "https://images.unsplash.com/photo-1603814929877-d5d927322656?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Demolition",
    image: "https://images.unsplash.com/photo-1670014773310-387f8a70a4af?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Landscaping & Grading",
    image: "https://images.unsplash.com/photo-1603814744247-ca3e77714471?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Industrial & Warehouse",
    image: "https://images.unsplash.com/photo-1495036019936-220b29b930ea?q=80&w=600&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    quote:
      "HarMachinery delivered two excavators and a crane to our site within 24 hours of our call. The machines were in perfect condition, and their operator knew exactly what he was doing. We've been renting from them exclusively for 3 years now.",
    name: "Ahmed Al-Rashid",
    role: "Project Manager, Al-Rashid Construction LLC",
  },
  {
    quote:
      "What sets them apart is the reliability. In 18 months, we've never had a machine break down on site, and the one time we needed a swap, they had a replacement there by the next morning. That kind of service is rare in this industry.",
    name: "Mohammed Al-Farsi",
    role: "Site Superintendent, Gulf Civil Works",
  },
  {
    quote:
      "We compared pricing from five rental companies before choosing HarMachinery. Their rates were competitive, but more importantly, there were no hidden fees. The quote we got was the price we paid. Honest and straightforward.",
    name: "Khalid Al-Mansoori",
    role: "Owner, Mansoori Earthworks LLC",
  },
];

const projectGallery = [
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    title: "Dubai Marina Tower",
    category: "Commercial Construction",
  },
  {
    image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=800&auto=format&fit=crop",
    title: "Al Ain Highway Extension",
    category: "Road & Infrastructure",
  },
  {
    image: "https://images.unsplash.com/photo-1670014773310-387f8a70a4af?q=80&w=800&auto=format&fit=crop",
    title: "Sharjah Industrial Zone",
    category: "Industrial Development",
  },
  {
    image: "https://images.unsplash.com/photo-1603814744450-36f978490b11?q=80&w=800&auto=format&fit=crop",
    title: "Abu Dhabi Waterfront",
    category: "Mixed-Use Development",
  },
  {
    image: "https://images.unsplash.com/photo-1495036019936-220b29b930ea?q=80&w=800&auto=format&fit=crop",
    title: "RAK Free Zone Expansion",
    category: "Commercial Construction",
  },
  {
    image: "https://images.unsplash.com/photo-1603814929877-d5d927322656?q=80&w=800&auto=format&fit=crop",
    title: "Fujairah Port Development",
    category: "Infrastructure",
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
      "Yes. We deliver and pick up equipment anywhere across the UAE. Delivery fees depend on distance and equipment size.",
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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1495036019936-220b29b930ea?q=80&w=2000&auto=format&fit=crop"
            alt="Heavy construction equipment on site"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-44 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              Trusted by 800+ contractors across the UAE
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Heavy Equipment Rentals You Can Rely On
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              From excavators to cranes, get the right machinery for your
              project. Flexible rental terms, expert support, and delivery
              straight to your job site across all Emirates.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <Link
                href="/equipment"
                className="rounded-lg bg-amber-500 px-6 py-3.5 text-sm font-semibold text-zinc-900 hover:bg-amber-400 transition-colors"
              >
                Browse Equipment
              </Link>
              <Link
                href="/request-quote"
                className="rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-amber-500">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="bg-white py-20">
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
                className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition-shadow hover:shadow-lg"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-amber-600">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/equipment"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-500"
            >
              View all equipment
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About / Why Us - Image + Text */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-2xl lg:h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1603814929877-d5d927322656?q=80&w=1200&auto=format&fit=crop"
                alt="Heavy equipment at construction site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
                About HarMachinery
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Your Trusted Partner for Construction Equipment in the UAE
              </h2>
              <p className="mt-6 text-base leading-7 text-zinc-600">
                With over 15 years of experience serving contractors across all seven Emirates, HarMachinery has established itself as a reliable source for premium construction equipment. Our fleet of 500+ well-maintained machines is ready to support projects of any scale.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Fleet of 500+ machines across 23 categories",
                  "Coverage across all 7 UAE Emirates",
                  "24/7 breakdown support and technician dispatch",
                  "Flexible daily, weekly, and monthly rental terms",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="text-sm text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-amber-400 transition-colors"
                >
                  Learn More About Us
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative bg-zinc-900 py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=2000&auto=format&fit=crop"
            alt="Construction site background"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Renting equipment with us is straightforward
            </p>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500">
                  <span className="text-xl font-bold text-zinc-900">{item.step}</span>
                </div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-20">
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
                className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition-shadow hover:shadow-lg"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-base font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-6 text-zinc-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-500"
            >
              Learn more about our services
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
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
                className="group relative h-40 overflow-hidden rounded-xl sm:h-48"
              >
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/40" />
                <div className="absolute inset-0 flex items-end p-4">
                  <p className="text-sm font-semibold text-white">
                    {industry.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - with side image */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Why Choose HarMachinery
              </h2>
              <p className="mt-4 text-base text-zinc-600">
                We go beyond simple equipment rental — we&apos;re your project partner.
              </p>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {[
                  {
                    title: "Well-Maintained Fleet",
                    description: "Every machine undergoes rigorous inspection and maintenance before each rental.",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Flexible Rental Terms",
                    description: "Daily, weekly, or monthly rentals — we adapt to your project timeline.",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                      </svg>
                    ),
                  },
                  {
                    title: "On-Site Delivery",
                    description: "We deliver and pick up equipment directly at your job site across all Emirates.",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                      </svg>
                    ),
                  },
                  {
                    title: "24/7 Expert Support",
                    description: "Our certified technicians provide round-the-clock support for any issues.",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    ),
                  },
                ].map((feature) => (
                  <div key={feature.title}>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                      {feature.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-2xl lg:h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1603814744247-ca3e77714471?q=80&w=1200&auto=format&fit=crop"
                alt="Construction equipment in action"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Projects We&apos;ve Supported
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Powering construction across the UAE with our equipment fleet
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectGallery.map((project) => (
              <div
                key={project.title}
                className="group relative h-64 overflow-hidden rounded-xl"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-amber-400">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
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
                  <p className="text-xs text-zinc-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section className="bg-white py-16">
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
              { label: "UAE Accredited", detail: "A+ rated for business practices" },
            ].map((badge) => (
              <div key={badge.label} className="text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-400 text-amber-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-zinc-900">{badge.label}</p>
                <p className="mt-1 text-xs text-zinc-500">{badge.detail}</p>
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
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1670014773310-387f8a70a4af?q=80&w=2000&auto=format&fit=crop"
            alt="Construction equipment at sunset"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-amber-500/85" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 text-center">
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
