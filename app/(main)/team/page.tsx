import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team | The People Behind Harma Machinery Dubai",
  description:
    "Meet the crew that keeps your project running — from our founder to our diesel mechanics. 50+ people, 15+ years average experience, one goal: get the right machine to your site, on time.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Our Team | The People Behind Harma Machinery Dubai",
    description:
      "Meet the crew that keeps your project running — from our founder to our diesel mechanics.",
    url: "/team",
  },
  twitter: {
    title: "Our Team | The People Behind Harma Machinery Dubai",
    description:
      "Meet the crew that keeps your project running — from our founder to our diesel mechanics.",
  },
};

const executives = [
  {
    name: "Harjot Singh",
    role: "Founder & Chairman",
    bio: "Started the business from a small yard in Al Lisaili over 15 years ago. Still the first person at the yard most mornings.",
  },
  {
    name: "Ravi Kumar",
    role: "Chief Executive Officer",
    bio: "Runs the day-to-day. If a machine made it to your site on time, Ravi's the reason. Knows the fleet like the back of his hand.",
  },
  {
    name: "Omar Al-Hashimi",
    role: "Chief Operations Officer",
    bio: "Manages every delivery, every pickup, every service call. Keeps the dispatch board running without a hitch.",
  },
  {
    name: "Sara Al-Mansoori",
    role: "Head of Client Relations",
    bio: "Your first point of contact. Handles quotes, follow-ups, and fire-drills — in Arabic or English, whatever you prefer.",
  },
];

const culture = [
  {
    title: "We Work Together",
    description:
      "No departmental walls. The mechanic talks to the driver who talks to the salesperson. That's how things actually get done.",
  },
  {
    title: "Always Learning",
    description:
      "New equipment, new techniques, new challenges. We invest in training because yesterday's knowledge isn't enough.",
  },
  {
    title: "Safety, Period",
    description:
      "If a machine isn't safe, it doesn't leave the yard. Every person here is responsible for that standard.",
  },
  {
    title: "Your Job First",
    description:
      "We measure ourselves by whether your project stayed on schedule. That's the only metric that matters.",
  },
];

const benefits = [
  { title: "Competitive Salary", description: "Market-leading compensation packages" },
  { title: "Health Insurance", description: "Comprehensive medical coverage for you and family" },
  { title: "Training & Development", description: "Continuous learning and certification programs" },
  { title: "Housing Allowance", description: "Support for accommodation expenses" },
  { title: "Annual Leave", description: "Generous paid time off and travel allowance" },
  { title: "Performance Bonus", description: "Rewarding exceptional contributions" },
  { title: "Transportation", description: "Company transport or vehicle allowance" },
  { title: "Career Growth", description: "Clear paths for advancement and promotion" },
];

const openPositions = [
  { title: "Generator Operator", location: "Al Lisaili, Dubai", type: "Full-time", department: "Operations" },
  { title: "Diesel Mechanic", location: "Al Lisaili, Dubai", type: "Full-time", department: "Technical" },
  { title: "Sales Executive", location: "Dubai, UAE", type: "Full-time", department: "Sales" },
  { title: "Fleet Coordinator", location: "Al Lisaili, Dubai", type: "Full-time", department: "Operations" },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Our People
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            The People Behind the Machines
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            We're 50+ people strong — mechanics, drivers, operators, coordinators, and a leadership team that's been in this industry for over 15 years. Here's who you're working with.
            of our company.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "Leadership Team", value: "4" },
              { label: "Team Members", value: "50+" },
              { label: "Avg. Years Experience", value: "15+" },
              { label: "Employee Retention", value: "98%" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-amber-600">{stat.value}</p>
                <p className="mt-1 text-sm text-zinc-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">Executive Team</h2>
          <p className="mt-2 text-zinc-600">
            Experienced leaders guiding our vision and driving excellence
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {executives.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-zinc-200 p-6 text-center"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-2xl font-bold text-amber-700">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  {person.name}
                </h3>
                <p className="text-sm font-medium text-amber-600">{person.role}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            What Makes Us Different
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-600">
            At Harma Machinery, we believe that our people are our greatest asset.
            We foster an environment where every team member can thrive, grow,
            and contribute to our shared success.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {culture.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-zinc-200 bg-white p-6"
              >
                <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">Why Work With Us</h2>
          <p className="mt-2 text-zinc-600">
            We invest in our people with competitive benefits and growth
            opportunities
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-xl border border-zinc-200 p-5">
                <h3 className="font-semibold text-zinc-900">{benefit.title}</h3>
                <p className="mt-1 text-sm text-zinc-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">Join Our Team</h2>
          <p className="mt-2 text-zinc-600">
            We&apos;re always looking for talented individuals to join our
            growing team
          </p>
          <div className="mt-10 space-y-4">
            {openPositions.map((job) => (
              <div
                key={job.title}
                className="flex flex-col justify-between gap-4 rounded-xl border border-zinc-200 bg-white p-6 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="font-semibold text-zinc-900">{job.title}</h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    {job.location} · {job.type} · {job.department}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-zinc-500">
            Don&apos;t see a position that fits? Send us your resume anyway!
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-block text-sm font-semibold text-amber-600 hover:text-amber-500"
          >
            Submit Your Resume →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Ready to Build Your Career?
          </h2>
          <p className="mt-3 text-zinc-800">
            Join a company that values your growth and provides opportunities to
            work on exciting projects.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="rounded-lg border-2 border-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
