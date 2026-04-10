import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const locations: Record<
  string,
  { name: string; region: string; description: string }
> = {
  "downtown-houston": { name: "Downtown Houston", region: "Metro Houston", description: "Professional equipment rental for Downtown Houston's high-rise and commercial construction projects." },
  "the-woodlands": { name: "The Woodlands", region: "Metro Houston", description: "Comprehensive equipment rental services for The Woodlands residential and commercial development." },
  "katy": { name: "Katy", region: "Metro Houston", description: "Reliable construction machinery rental for Katy area projects and developments." },
  "sugar-land": { name: "Sugar Land", region: "Metro Houston", description: "Premium equipment rental services for Sugar Land construction and infrastructure projects." },
  "pearland": { name: "Pearland", region: "Metro Houston", description: "Full-service construction equipment rental for Pearland area developments." },
  "pasadena": { name: "Pasadena", region: "Metro Houston", description: "Industrial and construction equipment rental for Pasadena area projects." },
  "league-city": { name: "League City", region: "Metro Houston", description: "Equipment rental services for League City construction and development needs." },
  "baytown": { name: "Baytown", region: "Metro Houston", description: "Comprehensive machinery rental for Baytown industrial and construction projects." },
  "missouri-city": { name: "Missouri City", region: "Metro Houston", description: "Trusted equipment rental for Missouri City development projects." },
  "conroe": { name: "Conroe", region: "Metro Houston", description: "Full-service equipment rental supporting Conroe area growth and construction." },
  "spring": { name: "Spring", region: "Metro Houston", description: "Reliable construction machinery rental for Spring area residential developments." },
  "cypress": { name: "Cypress", region: "Metro Houston", description: "Professional equipment rental for Cypress community construction projects." },
  "downtown-dallas": { name: "Downtown Dallas", region: "Dallas-Fort Worth", description: "High-capacity equipment rental for Downtown Dallas commercial construction." },
  "fort-worth": { name: "Fort Worth", region: "Dallas-Fort Worth", description: "Complete construction equipment solutions for Fort Worth area projects." },
  "arlington": { name: "Arlington", region: "Dallas-Fort Worth", description: "Equipment rental services for Arlington construction and infrastructure work." },
  "plano": { name: "Plano", region: "Dallas-Fort Worth", description: "Professional machinery rental for Plano commercial and residential construction." },
  "irving": { name: "Irving", region: "Dallas-Fort Worth", description: "Reliable equipment rental for Irving area development projects." },
  "frisco": { name: "Frisco", region: "Dallas-Fort Worth", description: "Full-service equipment rental supporting Frisco's rapid construction growth." },
  "mckinney": { name: "McKinney", region: "Dallas-Fort Worth", description: "Construction machinery rental for McKinney area residential developments." },
  "denton": { name: "Denton", region: "Dallas-Fort Worth", description: "Equipment rental services for Denton construction projects." },
  "downtown-austin": { name: "Downtown Austin", region: "Austin & San Antonio", description: "Heavy equipment rental for Austin's booming construction sector." },
  "round-rock": { name: "Round Rock", region: "Austin & San Antonio", description: "Equipment rental for Round Rock commercial and residential projects." },
  "georgetown": { name: "Georgetown", region: "Austin & San Antonio", description: "Construction machinery rental for Georgetown area developments." },
  "san-antonio": { name: "San Antonio", region: "Austin & San Antonio", description: "Comprehensive equipment rental solutions for San Antonio construction projects." },
  "new-braunfels": { name: "New Braunfels", region: "Austin & San Antonio", description: "Equipment rental for New Braunfels area construction and development." },
  "san-marcos": { name: "San Marcos", region: "Austin & San Antonio", description: "Reliable machinery rental for San Marcos construction projects." },
  "houston-ship-channel": { name: "Houston Ship Channel", region: "Industrial Zones", description: "Specialized industrial equipment for Houston Ship Channel operations and projects." },
  "texas-city-industrial": { name: "Texas City Industrial", region: "Industrial Zones", description: "Heavy equipment rental for Texas City industrial facility construction." },
  "port-of-houston": { name: "Port of Houston", region: "Industrial Zones", description: "Equipment rental for Port of Houston infrastructure and logistics projects." },
  "deer-park": { name: "Deer Park", region: "Industrial Zones", description: "Industrial and construction equipment rental for Deer Park facilities." },
  "la-porte": { name: "La Porte", region: "Industrial Zones", description: "Full-service equipment rental for La Porte industrial construction." },
  "galveston": { name: "Galveston", region: "Industrial Zones", description: "Equipment rental for Galveston coastal construction and development projects." },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations[slug];
  if (!location) return {};
  return {
    title: `${location.name} Equipment Rental - HarMachinery`,
    description: location.description,
  };
}

export function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({ slug }));
}

const equipmentTypes = [
  "Excavators",
  "Wheel Loaders",
  "Cranes",
  "Bulldozers",
  "Aerial Lifts",
  "Generators",
  "Compactors",
  "Dump Trucks",
];

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = locations[slug];
  if (!location) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Link
            href="/locations"
            className="inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-500"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            All Locations
          </Link>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Equipment Rental in {location.name}
          </h1>
          <p className="mt-4 text-sm font-medium text-amber-600">
            {location.region}
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
            {location.description} Same-day delivery available. 24/7 support.
            Competitive rates on all equipment.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request-quote"
              className="rounded-lg bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
            >
              Get a Quote
            </Link>
            <a
              href="tel:+15551234567"
              className="rounded-lg border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Available Equipment */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Equipment Available in {location.name}
          </h2>
          <p className="mt-2 text-zinc-600">
            Full range of construction machinery available for immediate rental
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {equipmentTypes.map((type) => (
              <Link
                key={type}
                href={`/equipment/${type.toLowerCase().replace(/ /g, "-")}`}
                className="rounded-xl border border-zinc-200 p-5 text-center transition-all hover:border-amber-300 hover:shadow-sm"
              >
                <h3 className="font-semibold text-zinc-900">{type}</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Available for rent
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Why Choose HarMachinery in {location.name}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Same-Day Delivery", description: "Get equipment on your site the same day you order — no delays." },
              { title: "24/7 Support", description: "Round-the-clock technical support and emergency assistance." },
              { title: "Competitive Rates", description: "Transparent pricing with flexible daily, weekly, and monthly terms." },
              { title: "Quality Equipment", description: "All machinery is regularly maintained and inspected before delivery." },
              { title: "Certified Operators", description: "Experienced operators available for any machine in our fleet." },
              { title: "Complete Documentation", description: "Full paperwork, insurance, and compliance documentation included." },
            ].map((item) => (
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

      {/* CTA */}
      <section className="bg-amber-500 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Ready to Rent Equipment in {location.name}?
          </h2>
          <p className="mt-3 text-zinc-800">
            Contact us today for competitive rates, same-day delivery, and 24/7
            support.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/request-quote"
              className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
            >
              Request a Quote
            </Link>
            <Link
              href="/equipment"
              className="rounded-lg border-2 border-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
            >
              Browse Equipment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
