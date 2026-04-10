import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - HarMachinery",
  description:
    "Learn about HarMachinery — our mission, history, and the team behind the region's most trusted heavy equipment rental company.",
};

const team = [
  {
    name: "James Harper",
    role: "Founder & CEO",
    bio: "30+ years in construction and equipment management.",
  },
  {
    name: "Sarah Mitchell",
    role: "Operations Director",
    bio: "Oversees fleet logistics and site delivery coordination.",
  },
  {
    name: "Carlos Rivera",
    role: "Head of Maintenance",
    bio: "Certified mechanic ensuring every machine is job-ready.",
  },
  {
    name: "Priya Nair",
    role: "Customer Relations Manager",
    bio: "Dedicated to making every rental experience seamless.",
  },
];

const values = [
  {
    title: "Reliability",
    description:
      "We deliver well-maintained machines on time, every time — no excuses.",
  },
  {
    title: "Transparency",
    description:
      "Clear pricing, honest communication, and no hidden fees in any contract.",
  },
  {
    title: "Safety First",
    description:
      "Every piece of equipment meets or exceeds OSHA safety standards.",
  },
  {
    title: "Customer Focus",
    description:
      "Your project comes first. We tailor solutions to your specific needs.",
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
            Built on Trust, Powered by Machinery
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Since 2010, HarMachinery has been the go-to partner for contractors
            who need reliable heavy equipment — delivered on time, maintained to
            the highest standards, and backed by expert support.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">Our Story</h2>
              <div className="mt-4 space-y-4 text-zinc-600 leading-7">
                <p>
                  HarMachinery started with a single excavator and a commitment
                  to doing things right. Founder James Harper saw an opportunity
                  to bring reliable, well-maintained equipment to contractors who
                  were tired of dealing with breakdowns and hidden fees.
                </p>
                <p>
                  Today, we operate a fleet of over 500 machines serving more
                  than 800 clients across the region. Our growth has been driven
                  by one simple principle: if we take care of the equipment, and
                  take care of the customer, everything else follows.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">
                By the Numbers
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-6">
                {[
                  { value: "500+", label: "Machines in Fleet" },
                  { value: "2,000+", label: "Projects Completed" },
                  { value: "800+", label: "Satisfied Clients" },
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
      <section className="bg-white py-20">
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
    </>
  );
}
