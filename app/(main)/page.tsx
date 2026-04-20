import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedMachinery } from "@/data/machinery";
import { dubaiLocations } from "@/data/locations";
import QuickLinksBar from "./_components/QuickLinksBar";
import WelcomeValues from "./_components/WelcomeValues";
import EquipmentShowcase from "./_components/EquipmentShowcase";
import ContactSplit from "./_components/ContactSplit";

export const metadata: Metadata = {
  title: "Generator Rental Dubai | Construction Equipment Hire UAE",
  description:
    "Generators 10–1000 KVA, compactors, jack hammers & power tools on rent. Same-day delivery across Dubai and all 7 Emirates. Call 055 455 5786 for a free quote.",
  keywords: [
    "generator rental Dubai",
    "generator hire Dubai",
    "equipment rental Dubai",
    "construction equipment rental UAE",
    "generator 500 KVA Dubai",
    "generator 1000 KVA rental",
    "compactor rental Dubai",
    "air compressor hire UAE",
    "same day equipment delivery Dubai",
    "Al Lisaili equipment rental",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Generator Rental Dubai | Construction Equipment Hire UAE",
    description:
      "Generators 10–1000 KVA, compactors, jack hammers & power tools on rent. Same-day delivery across Dubai and all 7 Emirates. Call 055 455 5786 for a free quote.",
    url: "/",
    type: "website",
  },
  twitter: {
    title: "Generator Rental Dubai | Construction Equipment Hire UAE",
    description:
      "Generators 10–1000 KVA, compactors, jack hammers & power tools on rent. Same-day delivery across Dubai and all 7 Emirates. Call 055 455 5786 for a free quote.",
  },
};



const stats = [
  { label: "Delivery Locations", value: "90+" },
  { label: "Jobs Done", value: "10,000+" },
  { label: "Years on the Ground", value: "15+" },
  { label: "Happy Clients", value: "98%" },
];

const howItWorks = [
  {
    step: "01",
    title: "Give Us a Call",
    description:
      "Ring us on 055 455 5786 or send a WhatsApp. Tell us what you need, where you need it, and for how long. That's it.",
  },
  {
    step: "02",
    title: "We'll Price It Up",
    description:
      "We'll figure out the right machines for your job and send you a clear price — no hidden charges, no obligation.",
  },
  {
    step: "03",
    title: "We Drop It Off",
    description:
      "Our guys load it up and bring it to your site — flatbed, lowboy, whatever it takes. On time, ready to run.",
  },
  {
    step: "04",
    title: "We've Got Your Back",
    description:
      "Something breaks down at 2 AM? Call us. We'll send a technician or swap the unit out. 24/7, no excuses.",
  },
];

const services = [
  {
    title: "Equipment on Rent",
    description: "Generators, compactors, jack hammers, power tools — rent by the day, week, or month. No lock-in contracts.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Operators Available",
    description: "Need someone to run the machine? Our operators know this equipment inside out. All certified, all experienced.",
    image: "https://images.unsplash.com/photo-1603814929877-d5d927322656?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Delivery & Pickup",
    description: "We bring it to you and pick it up when you're done. Flatbeds and lowboys — anywhere in the UAE.",
    image: "https://images.unsplash.com/photo-1586191582066-8e00e5886a04?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Breakdown? We're On It",
    description: "Call our 24/7 hotline and we'll have a technician at your site fast — or we'll swap the unit entirely.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Not Sure What You Need?",
    description: "Tell us about the job and we'll tell you what machines will actually work. No upselling, just honest advice.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Long-Term Rates",
    description: "Got a project running 3 months or more? Talk to us — we'll work out a better rate that makes sense for both sides.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
];

const industries = [
  {
    name: "Construction & Infrastructure",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Weddings & Private Events",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Desert Camps & Safari",
    image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Concerts & Festivals",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Film & Media Production",
    image: "https://images.unsplash.com/photo-1670014773310-387f8a70a4af?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Corporate Events",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Government Projects",
    image: "https://images.unsplash.com/photo-1603814929877-d5d927322656?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Agriculture & Farms",
    image: "https://images.unsplash.com/photo-1603814744450-36f978490b11?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sports & Racing Events",
    image: "https://images.unsplash.com/photo-1461896836934-bd45ba9e0a0f?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Hotels & Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Industrial & Warehousing",
    image: "https://images.unsplash.com/photo-1495036019936-220b29b930ea?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Exhibitions & Trade Shows",
    image: "https://images.unsplash.com/photo-1603814744247-ca3e77714471?q=80&w=600&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    quote:
      "We were pouring foundations in Dubai South and our main genset died on us mid-pour. Called Husnain Abdul Rasheed Machinery at 6 AM — they had a 250 KVA at our gate by 8. No paperwork drama, just showed up and sorted it. We don't bother calling anyone else now.",
    name: "Ahmed Al-Rashid",
    role: "Project Manager, Al-Rashid Construction LLC",
  },
  {
    quote:
      "Every season we do three or four big setups at Global Village. Husnain Abdul Rasheed Machinery's the only rental company that hasn't let us down yet — they deliver on the dot, the generators run quiet, and if we need more power mid-event they sort it same day. Simple as that.",
    name: "Fatima Al-Zaabi",
    role: "Operations Manager, Desert Events Group",
  },
  {
    quote:
      "I do earthworks around DAMAC Hills 2 and The Valley — compactors, jack hammers, the usual. Husnain Abdul Rasheed Machinery's yard is right there in Lisaili so I can grab what I need and be back on site in 20 minutes. Rates are fair too, not like some of these guys charging you double.",
    name: "Khalid Al-Mansoori",
    role: "Owner, Mansoori Earthworks LLC",
  },
];

const projectGallery = [
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    title: "Dubai South Mega Project",
    category: "Construction",
  },
  {
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
    title: "Premium Farmhouse Wedding",
    category: "Wedding & Events",
  },
  {
    image: "https://images.unsplash.com/photo-1670014773310-387f8a70a4af?q=80&w=800&auto=format&fit=crop",
    title: "Global Village Season Setup",
    category: "Festivals & Events",
  },
  {
    image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=800&auto=format&fit=crop",
    title: "Margham Desert Camp",
    category: "Desert Events",
  },
  {
    image: "https://images.unsplash.com/photo-1603814744450-36f978490b11?q=80&w=800&auto=format&fit=crop",
    title: "DAMAC Hills 2 Development",
    category: "Residential Development",
  },
  {
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop",
    title: "Outdoor Concert Power",
    category: "Entertainment",
  },
];

const faqs = [
  {
    question: "What's the shortest I can rent for?",
    answer:
      "One day. Most of our equipment is available for daily rental. Need it for a week or a month? We've got better rates for longer periods.",
  },
  {
    question: "Do you deliver? How much does it cost?",
    answer:
      "Yes, we deliver everywhere. Free within 15 km of our Al Lisaili yard. AED 150–300 for 15–30 km out, AED 300–500 for 30–50 km. Going to another emirate? AED 500–1200 depending on distance.",
  },
  {
    question: "Can I get an operator with the machine?",
    answer:
      "Absolutely. Operators are available as an add-on. Every one of them is certified and knows our equipment well — they won't need hand-holding.",
  },
  {
    question: "What if something breaks down on site?",
    answer:
      "Call us — 24/7 hotline, someone always picks up. We'll either send a technician or bring you a replacement unit. Usually sorted within a few hours.",
  },
];

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://husnainabdulrasheedmachineryrentals.ae/#business",
        name: "Husnain Abdul Rasheed Machinery Rentals",
        description:
          "Generator and construction equipment rental in Dubai, UAE. Serving all 7 emirates from Al Lisaili with same-day delivery.",
        url: "https://husnainabdulrasheedmachineryrentals.ae",
        telephone: "+971554555786",
        email: "info@husnainabdulrasheedmachineryrentals.ae",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Al Lisaili",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 24.846,
          longitude: 55.562,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "07:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Friday"],
            opens: "08:00",
            closes: "12:00",
          },
        ],
        areaServed: { "@type": "Country", name: "UAE" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Equipment Rental",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Generator Rental" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Compactor Rental" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Compressor Rental" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construction Equipment Rental" } },
          ],
        },
      },
      {
        "@type": "Organization",
        "@id": "https://husnainabdulrasheedmachineryrentals.ae/#organization",
        name: "Husnain Abdul Rasheed Machinery Rentals",
        url: "https://husnainabdulrasheedmachineryrentals.ae",
        logo: "https://husnainabdulrasheedmachineryrentals.ae/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+971554555786",
          contactType: "customer service",
          availableLanguage: ["English", "Arabic"],
          areaServed: "AE",
        },
        sameAs: [
          "https://www.instagram.com/husnainabdulrasheedconstrucion?igsh=MTM3aTRpb2t3Z3AzNA==",
          "https://www.facebook.com/profile.php?id=61578507911629",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://husnainabdulrasheedmachineryrentals.ae/#website",
        url: "https://husnainabdulrasheedmachineryrentals.ae",
        name: "Husnain Abdul Rasheed Machinery Rentals",
        description: "Generator and construction equipment rental across all 7 UAE Emirates.",
        publisher: { "@id": "https://husnainabdulrasheedmachineryrentals.ae/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://husnainabdulrasheedmachineryrentals.ae/machinery?search={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1495036019936-220b29b930ea?q=80&w=2000&auto=format&fit=crop"
            alt="Generator and construction equipment on site"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-44 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              Al Lisaili, Dubai — Delivering Across All 7 Emirates
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Rent Generators & Heavy Equipment. Get It Today.
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              We rent out generators from 10 to 1000 KVA, compactors, jack hammers, concrete mixers, power tools, tower lights, and more. Construction site in JVC? Wedding in Al Awir? Desert camp in Margham? We'll have the equipment at your gate same day.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <Link
                href="/machinery"
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

      {/* Quick links chip row */}
      <QuickLinksBar />

      {/* Welcome to Husnain Abdul Rasheed Machinery + values + certifications */}
      <WelcomeValues />

      {/* Featured Equipment */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Equipment Ready to Go
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Every machine gets checked and serviced before it leaves our yard
            </p>
          </div>          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {getFeaturedMachinery(8).map((machine) => (
              <Link
                key={machine.slug}
                href={`/machinery/${machine.slug}`}
                className="group rounded-lg border border-zinc-200 bg-white transition-colors hover:border-amber-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg bg-zinc-50">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="h-full w-full object-contain p-4"
                  />
                  {machine.available ? (
                    <span className="absolute left-2 top-2 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                      Available
                    </span>
                  ) : (
                    <span className="absolute left-2 top-2 rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-semibold text-red-700">
                      Rented Out
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-zinc-400">{machine.brand}</p>
                  <h3 className="mt-0.5 line-clamp-2 text-sm font-semibold text-zinc-900 group-hover:text-amber-600">
                    {machine.name}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500">
                    {machine.category}
                  </p>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-base font-bold text-amber-600">
                      AED {machine.price}
                    </span>
                    <span className="text-xs text-zinc-400">
                      /{machine.priceUnit}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/machinery"
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

      {/* Per-category equipment showcase (SEO content blocks) */}
      <EquipmentShowcase />

      {/* About / Why Us - Image + Text */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-2xl lg:h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1603814929877-d5d927322656?q=80&w=1200&auto=format&fit=crop"
                alt="Equipment rental yard at construction site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
                Who We Are
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Right Off the E66 in Al Lisaili — That&apos;s Home Base
              </h2>
              <p className="mt-6 text-base leading-7 text-zinc-600">
                We&apos;re parked right on the Dubai–Al Ain Road. Most of the big developments — Dubai South, Expo City, DAMAC Hills, The Valley — are all within a 20-minute drive from our yard. Same goes for the event farms in Al Awir and the desert camps out by Margham. That&apos;s not marketing talk, it&apos;s just geography. It means your equipment gets there faster and the delivery costs less.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Generators from 10 KVA all the way up to 1000 KVA",
                  "We deliver to 90+ locations across all 7 Emirates",
                  "Machine broke down? Call us anytime — 24/7 support",
                  "Free drop-off if you're within 15 km of Al Lisaili",
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
              No complicated process — just call, confirm, and we deliver
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
              What We Do
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Rental, delivery, operators, maintenance — the full package
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

      {/* Event Power Solutions */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
              Generator Rental for Events
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Your Event Needs Power. We Bring It.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600">
              Farmhouse party? Desert wedding? Music festival? We've done them all. Silent generators that won't ruin the vibe, delivered and set up before your guests arrive.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Weddings & Private Parties",
                desc: "25–250 KVA silent generators for farmhouse weddings, birthdays, and family dos. We cover Al Lisaili, Al Awir, Al Khawaneej — all the popular spots.",
                icon: "🎊",
              },
              {
                title: "Desert Camps & Safari",
                desc: "20–100 KVA units for overnight desert camps, safari dinners, and hunting trips out in Margham, Lahbab, and Al Faqaa.",
                icon: "🏕️",
              },
              {
                title: "Concerts & Festivals",
                desc: "100–500 KVA for outdoor concerts, Global Village vendor setups, food festivals, and seasonal markets around Dubai.",
                icon: "🎵",
              },
              {
                title: "Corporate & Brand Events",
                desc: "50–500 KVA for product launches, team outings, exhibitions at DWTC, Expo City setups, and those beach brand activations.",
                icon: "🏢",
              },
              {
                title: "Sports & Racing Events",
                desc: "50–500 KVA for Dubai World Cup marquees, cricket tournaments, polo grounds, motor shows, and marathon checkpoints.",
                icon: "🏆",
              },
              {
                title: "Film & Media Production",
                desc: "Super-silent 20–80 KVA generators — the kind you need on set where any noise kills the take. Outdoor shoots, ad films, the lot.",
                icon: "🎬",
              },
              {
                title: "Ramadan & Eid Gatherings",
                desc: "15–60 KVA for Ramadan tents, Eid nights, outdoor iftars, and community events. We handle the power so you can focus on your guests.",
                icon: "🌙",
              },
              {
                title: "Beach & Waterfront Events",
                desc: "15–60 KVA super-silent units for Kite Beach pop-ups, La Mer dining events, fitness meets, and waterfront parties.",
                icon: "🏖️",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-3 text-base font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-amber-400 transition-colors"
            >
              Get an Event Power Quote
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
              Industries We Work With
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Construction, events, film, agriculture — if it needs power or machinery, we've probably done it
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group relative h-36 overflow-hidden rounded-xl sm:h-44"
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
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Why People Keep Coming Back
              </h2>
              <p className="mt-4 text-base text-zinc-600">
                It&apos;s not just about renting machines. It&apos;s about picking up the phone at midnight and knowing someone will answer.
              </p>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {[
                  {
                    title: "Machines That Actually Work",
                    description: "Every unit gets inspected and serviced before it leaves our yard. No surprises on site.",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Rent Your Way",
                    description: "One day, one week, six months — we'll work around your project, not the other way around.",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                      </svg>
                    ),
                  },
                  {
                    title: "We Come to You",
                    description: "Dubai, Abu Dhabi, Sharjah, Al Ain — wherever the job is, we'll get the equipment there.",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                      </svg>
                    ),
                  },
                  {
                    title: "24/7 — We Mean It",
                    description: "Friday night, public holiday, 3 AM — doesn't matter. Our technicians pick up and they show up.",
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

      {/* Locations We Serve */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Locations We Serve
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Equipment delivery to {dubaiLocations.length}+ areas across all 7 UAE Emirates
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {dubaiLocations.slice(0, 12).map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group rounded-xl border border-zinc-200 p-5 transition-all hover:border-amber-300 hover:shadow-sm"
              >
                <h3 className="font-semibold text-zinc-900 group-hover:text-amber-600">
                  {loc.name}
                </h3>
                <p className="mt-1 text-xs text-zinc-400">
                  {loc.emirate} · {loc.distance}
                </p>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-500">
                  {loc.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-500"
            >
              View all {dubaiLocations.length}+ locations
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
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
              { label: "UAE Certified", detail: "All equipment meets safety standards" },
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

      {/* Send-us-a-message + contact info split */}
      <ContactSplit />

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
            Need Equipment? Let&apos;s Talk.
          </h2>
          <p className="mt-4 text-lg text-zinc-800">
            Call 055 455 5786 or drop us a message. We&apos;ll get back to you
            within the hour.
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
