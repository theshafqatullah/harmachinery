import type { Metadata } from "next";
import Link from "next/link";
import ContactSplit from "../_components/ContactSplit";

export const metadata: Metadata = {
  title: "FAQ | Generator & Equipment Rental Questions | Husnain Abdul Rasheed Machinery Rentals Dubai",
  description:
    "Got questions about rental periods, generator sizes, delivery zones, pricing, or on-site support? We've answered the most common ones right here.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Generator & Equipment Rental Questions | Husnain Abdul Rasheed Machinery Rentals Dubai",
    description:
      "Got questions about rental periods, generator sizes, delivery zones, pricing, or on-site support? We've answered the most common ones right here.",
    url: "/faq",
  },
  twitter: {
    title: "FAQ | Generator & Equipment Rental Questions | Husnain Abdul Rasheed Machinery Rentals Dubai",
    description:
      "Got questions about rental periods, generator sizes, delivery zones, pricing, or on-site support? We've answered the most common ones right here.",
  },
};

const faqCategories = [
  {
    category: "Rental Basics",
    questions: [
      {
        question: "What is the minimum rental period?",
        answer:
          "We offer daily, weekly, and monthly rentals. The minimum rental is one day for most generators and equipment. For cross-emirate deliveries (Sharjah, Al Ain, RAK, Fujairah, UAQ), we require a minimum of 3 days to 1 week depending on distance.",
      },
      {
        question: "What generator sizes do you offer?",
        answer:
          "We stock generators ranging from 10 KVA (ideal for small farm parties and food stalls) up to 1000 KVA (for mega construction sites and industrial operations). Our most popular sizes are 20\u201330 KVA for events, 50\u2013100 KVA for weddings, and 500 KVA for construction sites.",
      },
      {
        question: "Do you offer silent generators for events?",
        answer:
          "Yes. We carry super-silent canopy generators that are essential for weddings, film shoots, corporate events, and residential areas. These are available from 20 KVA to 500 KVA.",
      },
      {
        question: "What forms of payment do you accept?",
        answer:
          "We accept cash, bank transfer, credit cards, and company cheques. For established business accounts, we offer credit terms. We also accept payment via WhatsApp Pay and online transfer.",
      },
    ],
  },
  {
    category: "Delivery & Locations",
    questions: [
      {
        question: "Where do you deliver?",
        answer:
          "We deliver across all 7 UAE Emirates \u2014 Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah, and Abu Dhabi (including Al Ain). Our base in Al Lisaili on the Dubai\u2013Al Ain Road (E66) gives us fast access to all areas.",
      },
      {
        question: "What are your delivery zones and fees?",
        answer:
          "Zone A (0\u201315 km from Al Lisaili): Free delivery. Zone B (15\u201330 km): AED 150\u2013300. Zone C (30\u201350 km): AED 300\u2013500. Cross-Emirate (50+ km): AED 500\u20131,200 depending on destination and equipment size.",
      },
      {
        question: "Do you deliver to desert and farm locations?",
        answer:
          "Absolutely. We specialise in desert camp, farm party, and safari event deliveries. We serve Al Lisaili farms, Margham, Lahbab, Al Faqaa, Al Khawaneej, and all farm/desert event locations across Dubai.",
      },
      {
        question: "Can you deliver same-day?",
        answer:
          "Yes. For Zone A locations (within 15 km), we often deliver within 2\u20134 hours. For other Dubai locations, same-day delivery is available for orders placed before 2 PM.",
      },
    ],
  },
  {
    category: "Support & Services",
    questions: [
      {
        question: "What happens if a generator breaks down?",
        answer:
          "Call our 24/7 emergency line. We\u2019ll dispatch a technician or deliver a replacement unit \u2014 typically within hours. You won\u2019t be charged for downtime caused by mechanical failure.",
      },
      {
        question: "Do you provide fuel top-up during events?",
        answer:
          "Yes. For events, we can include fuel delivery service to keep your generator running continuously. This is especially popular for weddings, Global Village vendors, and multi-day desert camps.",
      },
      {
        question: "Do you include setup and cables?",
        answer:
          "We offer complete \u2018Event Power Packages\u2019 that include the generator, distribution boards, cables, and setup. Our technician will connect everything and test before leaving your site.",
      },
      {
        question: "Can I get operators with the rental?",
        answer:
          "Yes. All our operators are certified, safety-trained, and available for daily, weekly, or project-duration assignments. Multilingual operators (Arabic, English, Hindi, Urdu) are available.",
      },
    ],
  },
  {
    category: "Event & Wedding Power",
    questions: [
      {
        question: "What size generator do I need for a wedding?",
        answer:
          "For weddings with 100\u2013300 guests (AC, lighting, sound, kitchen), a 50\u2013100 KVA silent generator is typically sufficient. For larger 500+ guest events with stage lighting and full catering, we recommend 150\u2013250 KVA. Our team can assess your exact needs during a free consultation.",
      },
      {
        question: "Do you supply power for farm house parties?",
        answer:
          "Yes \u2014 farm events are our core business. We serve hundreds of farm locations in Al Lisaili, Al Awir, Al Khawaneej, and surrounding areas. Most farm parties need 25\u2013100 KVA depending on AC tents, lighting, and kitchen equipment.",
      },
      {
        question: "Can you power desert camps and safari events?",
        answer:
          "Absolutely. We deliver to Margham, Lahbab, Al Faqaa, and all desert locations. For safari dinner operations we recommend 20\u201350 KVA per camp. For luxury overnight camps, 50\u2013100 KVA with lighting and AC. We include fuel top-up service for multi-day desert events.",
      },
      {
        question: "Do you serve Global Village vendors?",
        answer:
          "Yes. We supply dozens of generators simultaneously for Global Village vendors during the Nov\u2013Apr season. Most stalls need 10\u201350 KVA. We offer seasonal packages with competitive monthly rates and fuel top-up service.",
      },
      {
        question: "What about concerts, festivals, and outdoor events?",
        answer:
          "We supply 100\u2013500 KVA generators for outdoor concerts, sports events, brand activations, and festivals across Dubai. Silent models are available for noise-sensitive beach and residential events. We also provide light towers for outdoor venue lighting.",
      },
    ],
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((cat) =>
      cat.questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            FAQ
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Common Questions, Straight Answers
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Everything you need to know about renting generators and equipment from us — rental periods, delivery, pricing, breakdown support, and more.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {faqCategories.map((cat) => (
            <div key={cat.category} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-zinc-900">
                {cat.category}
              </h2>
              <div className="mt-6 divide-y divide-zinc-200">
                {cat.questions.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="flex cursor-pointer items-center justify-between text-left [&::-webkit-details-marker]:hidden">
                      <span className="text-sm font-semibold text-zinc-900 pr-4">
                        {faq.question}
                      </span>
                      <svg
                        className="h-5 w-5 shrink-0 text-zinc-400 transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </summary>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Still Have Questions?
          </h2>
          <p className="mt-3 text-zinc-600">
            Our team is happy to help. Reach out and we&apos;ll get back to you
            within 2 business hours.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-amber-400 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/request-quote"
              className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
      <ContactSplit />
    </>
  );
}
