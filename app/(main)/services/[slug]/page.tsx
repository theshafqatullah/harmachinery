import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const services: Record<
  string,
  {
    title: string;
    headline: string;
    description: string;
    features: { title: string; description: string }[];
    benefits: string[];
  }
> = {
  "equipment-rental": {
    title: "Generator & Equipment Rental",
    headline: "Premium Generators & Construction Equipment for Rent",
    description:
      "Husnain Abdul Rasheed Machinery Rentals offers an extensive fleet of generators (3 KVA to 500 KVA), compactors, jack hammers, cutting machines and power tools for daily, weekly, and monthly rental. From powering farm events in Al Lisaili to supplying mega construction sites in Dubai South — we deliver the right equipment, on time.",
    features: [
      { title: "Full Generator Range", description: "From 3 KVA portables for handheld tools to 500 KVA Perkins and Caterpillar units for mega construction and industrial sites." },
      { title: "Silent Models Available", description: "Super-silent canopy generators for weddings, film shoots, and residential areas." },
      { title: "Event Power Packages", description: "Complete packages with generator, distribution board, cables, and on-site setup." },
      { title: "Same-Day Delivery", description: "Free delivery within 15 km from Al Lisaili. Same-day delivery across Dubai." },
    ],
    benefits: [
      "Generators from 3 KVA to 500 KVA",
      "Silent generators for events and film production",
      "Free delivery within Zone A (0–15 km)",
      "24/7 breakdown support and replacement guarantee",
      "Fuel top-up service for events",
      "Serving all 7 UAE Emirates",
    ],
  },
  "operator-services": {
    title: "Certified Operators",
    headline: "Skilled Operators for Your Equipment Needs",
    description:
      "Our certified and experienced operators handle your machinery with expertise. Available for construction sites, events, and industrial operations. All operators are multilingual (Arabic, English, Hindi, Urdu) and trained on UAE safety protocols.",
    features: [
      { title: "Certified & Licensed", description: "All operators hold valid UAE certifications and are fully insured." },
      { title: "Extensive Experience", description: "Our operators average 10+ years on construction sites and event setups across the UAE." },
      { title: "Safety Trained", description: "Comprehensive UAE safety protocol training for every job site." },
      { title: "Flexible Assignments", description: "Available for daily, weekly, or entire project duration from Al Lisaili base." },
    ],
    benefits: [
      "Background-verified and safety-certified",
      "Experience with all major equipment brands",
      "Daily or long-term assignment options",
      "Multilingual operators (Arabic, English, Hindi, Urdu)",
      "Backup operators available for continuity",
      "Emergency replacement guarantee",
    ],
  },
  "maintenance-repair": {
    title: "Maintenance & Repair",
    headline: "Keep Your Machinery in Peak Condition",
    description:
      "Our maintenance and repair services ensure your rented or owned equipment stays in top working condition. From preventive maintenance programs to emergency repairs, our certified technicians are ready to help.",
    features: [
      { title: "Preventive Maintenance", description: "Scheduled maintenance programs to prevent breakdowns and extend equipment life." },
      { title: "Emergency Repairs", description: "24/7 emergency repair services with rapid technician dispatch to your site." },
      { title: "Genuine Parts", description: "We use genuine OEM spare parts to ensure reliability and warranty compliance." },
      { title: "On-Site & Workshop", description: "Mobile repair units for on-site work, plus fully equipped workshop facilities." },
    ],
    benefits: [
      "Certified technicians for all major brands",
      "No charge for mechanical failures on rentals",
      "Same-day diagnostics available",
      "Full repair documentation provided",
      "Warranty on all repair work",
      "Free inspection on new rentals",
    ],
  },
  "transportation": {
    title: "Equipment Transportation",
    headline: "Safe Delivery Across All 7 Emirates",
    description:
      "From our Al Lisaili base on the Dubai–Al Ain Road (E66), our logistics team delivers equipment anywhere in the UAE. Free delivery within 15 km, with competitive rates across all delivery zones — including Sharjah, Al Ain, RAK, Fujairah, and UAQ.",
    features: [
      { title: "Free Zone A Delivery", description: "Free delivery within 15 km of Al Lisaili including The Valley, DAMAC Hills 2, Al Awir, and Lahbab." },
      { title: "All Emirates Coverage", description: "Delivery to all 7 UAE Emirates with low-bed trailers, flatbeds, and specialised transport." },
      { title: "GPS-Tracked Deliveries", description: "Real-time tracking on all transports so you know exactly when your equipment arrives." },
      { title: "Same-Day Available", description: "Same-day delivery across Dubai for orders before 2 PM. Desert and farm locations included." },
    ],
    benefits: [
      "Zone A (0–15 km): Free delivery",
      "Zone B (15–30 km): AED 150–300",
      "Zone C (30–50 km): AED 300–500",
      "Cross-Emirate: AED 500–1,200",
      "Secure loading and unloading",
      "Pickup service included with rentals",
    ],
  },
  "consulting": {
    title: "Project Consulting",
    headline: "Expert Advice for Your Construction Projects",
    description:
      "Not sure which equipment you need? Our project advisors help you select the right machines for your scope, terrain, and timeline. We provide cost optimization strategies and fleet planning to maximize your budget.",
    features: [
      { title: "Equipment Selection", description: "Expert guidance on choosing the right machines for your specific project requirements." },
      { title: "Cost Optimization", description: "Strategic planning to reduce equipment costs while maintaining productivity." },
      { title: "Fleet Planning", description: "Comprehensive fleet analysis and scheduling to eliminate idle time and maximize utilization." },
      { title: "Technical Review", description: "Specification review and site assessment to ensure equipment compatibility." },
    ],
    benefits: [
      "Free initial consultation",
      "Site visit and assessment included",
      "Detailed equipment recommendations",
      "Budget planning assistance",
      "Project timeline optimization",
      "Post-project review and feedback",
    ],
  },
  "training": {
    title: "Operator Training",
    headline: "Comprehensive Equipment Operation Training",
    description:
      "Our UAE-certified training programs equip your team with the skills to operate heavy equipment safely and efficiently. We offer both classroom instruction and hands-on practical sessions for all major equipment types.",
    features: [
      { title: "Certified Programs", description: "UAE-certified training programs with industry-recognized certification upon completion." },
      { title: "Hands-On Practice", description: "Extensive practical sessions on real equipment in controlled training environments." },
      { title: "Safety Certification", description: "Comprehensive safety training covering hazard awareness, emergency procedures, and PPE." },
      { title: "Flexible Scheduling", description: "Training sessions available on weekdays, weekends, and at your job site." },
    ],
    benefits: [
      "Certification cards issued upon completion",
      "On-site training available",
      "Group discounts for 5+ trainees",
      "Customized programs for specific equipment",
      "Annual recertification courses",
      "Online theory modules available",
    ],
  },
  "fleet-management": {
    title: "Fleet Management",
    headline: "Complete Fleet Management Solutions",
    description:
      "Our fleet management service provides real-time visibility into your equipment operations. Track utilization, schedule maintenance, and optimize costs with our integrated management platform.",
    features: [
      { title: "Real-Time GPS Tracking", description: "Live location tracking and geofencing for all equipment in your fleet." },
      { title: "Automated Maintenance Alerts", description: "Proactive maintenance scheduling based on usage data and manufacturer recommendations." },
      { title: "Utilization Analytics", description: "Detailed reports on equipment usage patterns to identify optimization opportunities." },
      { title: "Cost Tracking", description: "Comprehensive cost reporting including fuel, maintenance, and rental expense tracking." },
    ],
    benefits: [
      "Web and mobile dashboard access",
      "Custom report generation",
      "Integration with project management tools",
      "Equipment lifecycle analysis",
      "Fuel consumption monitoring",
      "Idle time reduction strategies",
    ],
  },
  "spare-parts": {
    title: "Spare Parts Supply",
    headline: "Genuine Parts for All Major Brands",
    description:
      "We stock and source genuine OEM spare parts for all major construction equipment brands. Fast delivery, competitive pricing, and expert advice to keep your machines running at peak performance.",
    features: [
      { title: "Genuine OEM Parts", description: "Only authentic manufacturer parts to ensure reliability and warranty compliance." },
      { title: "Fast Delivery", description: "In-stock parts shipped same-day. Special orders fulfilled within 48–72 hours." },
      { title: "Competitive Pricing", description: "Volume discounts and competitive pricing on all parts and components." },
      { title: "Wide Brand Coverage", description: "Parts for Caterpillar, Komatsu, Volvo, John Deere, Liebherr, and more." },
    ],
    benefits: [
      "Expert parts identification assistance",
      "Core exchange programs available",
      "Warranty on all genuine parts",
      "Emergency after-hours ordering",
      "Bulk ordering discounts",
      "Free parts consultation",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  return {
    title: `${service.title} - Husnain Abdul Rasheed Machinery Rentals Services`,
    description: service.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.title} - Husnain Abdul Rasheed Machinery Rentals Services`,
      description: service.description,
      url: `/services/${slug}`,
    },
    twitter: {
      title: `${service.title} - Husnain Abdul Rasheed Machinery Rentals Services`,
      description: service.description,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  const otherServices = Object.entries(services)
    .filter(([key]) => key !== slug)
    .slice(0, 3);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://husnainabdulrasheedmachineryrentals.ae" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://husnainabdulrasheedmachineryrentals.ae/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://husnainabdulrasheedmachineryrentals.ae/services/${slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Husnain Abdul Rasheed Machinery Rentals",
      url: "https://husnainabdulrasheedmachineryrentals.ae",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
    areaServed: { "@type": "Country", name: "UAE" },
    url: `https://husnainabdulrasheedmachineryrentals.ae/services/${slug}`,
    offers: service.features.map((f) => ({
      "@type": "Offer",
      description: f,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-500"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            All Services
          </Link>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            {service.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            {service.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request-quote"
              className="rounded-lg bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
            >
              Get a Quote
            </Link>
            <a
              href="tel:+971554555786"
              className="rounded-lg border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            What&apos;s Included
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {service.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-zinc-200 p-6"
              >
                <h3 className="text-lg font-semibold text-zinc-900">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-7 text-zinc-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">Key Benefits</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-lg border border-zinc-200 bg-white p-4"
              >
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-500"
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
                <span className="text-sm text-zinc-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Other Services You May Need
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {otherServices.map(([key, svc]) => (
              <Link
                key={key}
                href={`/services/${key}`}
                className="group rounded-xl border border-zinc-200 p-6 transition-all hover:border-amber-300 hover:shadow-sm"
              >
                <h3 className="font-semibold text-zinc-900 group-hover:text-amber-600">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 line-clamp-2">
                  {svc.description}
                </p>
                <p className="mt-3 text-sm font-semibold text-amber-600">
                  Learn More →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Ready to Get Started?
          </h2>
          <p className="mt-3 text-zinc-800">
            Contact us today for a free consultation and competitive quote on
            our {service.title.toLowerCase()} services.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/request-quote"
              className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
