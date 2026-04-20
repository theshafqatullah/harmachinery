import type { Metadata } from "next";
import Link from "next/link";
import ContactSplit from "../_components/ContactSplit";

export const metadata: Metadata = {
  title: "About Husnain Abdul Rasheed Machinery Rentals | Equipment Rental Company in Dubai, UAE",
  description:
    "Husnain Abdul Rasheed Machinery Rentals L.L.C — 15+ years renting generators, compactors and construction equipment from Al Lisaili to 90+ locations across all 7 Emirates.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Husnain Abdul Rasheed Machinery Rentals | Equipment Rental Company in Dubai, UAE",
    description:
      "15+ years renting generators and construction equipment from our Al Lisaili yard. Same-day delivery to 90+ locations across all Emirates.",
    url: "/about",
  },
  twitter: {
    title: "About Husnain Abdul Rasheed Machinery Rentals | Equipment Rental Company in Dubai, UAE",
    description:
      "15+ years renting generators and construction equipment from our Al Lisaili yard. Same-day delivery to 90+ locations across all Emirates.",
  },
};

const team = [
  {
    name: "Harjot Singh",
    role: "Founder & CEO",
    bio: "Started the business from a small yard in Al Lisaili over 15 years ago. Still shows up at the yard every morning.",
  },
  {
    name: "Ravi Kumar",
    role: "Operations Director",
    bio: "Runs the fleet and delivery schedule. If your machine showed up on time, Ravi made it happen.",
  },
  {
    name: "Omar Al-Hashimi",
    role: "Head of Maintenance",
    bio: "Doesn't let a single machine leave the yard without checking it himself. Our clients trust his work.",
  },
  {
    name: "Sara Al-Mansoori",
    role: "Customer Relations Manager",
    bio: "Handles everything from first call to final invoice — in Arabic or English, whatever you prefer.",
  },
];

const values = [
  {
    title: "Reliability",
    description:
      "If we say the machine will be there at 7 AM, it'll be there at 7 AM. That's just how we operate.",
  },
  {
    title: "Transparency",
    description:
      "The price we quote is the price you pay. No fees buried in the small print.",
  },
  {
    title: "Safety First",
    description:
      "Every machine gets inspected before it leaves our yard. We don't cut corners on safety.",
  },
  {
    title: "Customer Focus",
    description:
      "Your job comes first. We'll work around your schedule, your budget, and your site conditions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            About Us
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            We Rent Equipment. We Keep Projects Moving.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Husnain Abdul Rasheed Machinery Rentals L.L.C — you probably know us as Husnain Abdul Rasheed Machinery Rentals. We've been renting generators, compactors, and construction equipment from our yard in Al Lisaili since day one. Right on the Dubai–Al Ain Road (E66), 20 minutes from most of Dubai&apos;s biggest job sites.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">How We Got Here</h2>
              <div className="mt-4 space-y-4 text-zinc-600 leading-7">
                <p>
                  When we started out, the plan was simple: stock good machines, maintain them properly, and deliver them fast. That hasn&apos;t changed. We built our yard right on the E66 because it puts us close to Dubai South, Expo City, the desert camps out in Margham and Lehbab, and all the villa projects popping up in DAMAC Hills, The Valley, and Arabian Ranches.
                </p>
                <p>
                  Over the years we&apos;ve gone from a handful of generators to a full fleet — 60+ machines covering everything from 3 KVA portables to 500 KVA Perkins and Cummins units. Compactors, jack hammers, concrete mixers, tower lights, welding generators, the lot. We rent to contractors, event companies, government projects, farms — basically anyone who needs reliable equipment without buying it.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">
                By the Numbers
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-6">
                {[
                  { value: "500+", label: "Machines Serviced" },
                  { value: "10,000+", label: "Projects Completed" },
                  { value: "90+", label: "Service Locations" },
                  { value: "15+", label: "Years in Business" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-amber-500">
                      {stat.value}
                    </p>
                    <p className="text-sm text-zinc-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-zinc-900">
            Our Values
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-zinc-200 bg-white p-6"
              >
                <h3 className="font-semibold text-zinc-900">{value.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-zinc-900">
            Our Leadership Team
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-zinc-200 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-zinc-900">{member.name}</h3>
                <p className="text-sm text-amber-600">{member.role}</p>
                <p className="mt-3 text-sm text-zinc-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            Ready to Work With Us?
          </h2>
          <p className="mt-4 text-lg text-zinc-800">
            Get in touch to discuss your project needs.
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
      <ContactSplit />
    </>
  );
}
