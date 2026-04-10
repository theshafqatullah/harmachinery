import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ - HarMachinery",
  description:
    "Frequently asked questions about heavy equipment rentals, pricing, delivery, and support at HarMachinery.",
};

const faqCategories = [
  {
    category: "Rental Basics",
    questions: [
      {
        question: "What is the minimum rental period?",
        answer:
          "We offer daily, weekly, and monthly rentals. The minimum rental is one day for most equipment. Some specialty items may require a minimum of one week.",
      },
      {
        question: "Do I need to sign a contract?",
        answer:
          "Yes. We use straightforward rental agreements that clearly outline the rental period, pricing, liability, and return conditions. No hidden fees or complex terms.",
      },
      {
        question: "Can I extend my rental?",
        answer:
          "Yes. Simply call us before your rental period ends and we'll extend it. If the machine is needed by another customer, we'll arrange an equivalent replacement.",
      },
      {
        question: "What forms of payment do you accept?",
        answer:
          "We accept credit cards, company checks, ACH transfers, and purchase orders from established accounts. Credit terms are available for qualified businesses.",
      },
    ],
  },
  {
    category: "Equipment & Delivery",
    questions: [
      {
        question: "Do you deliver equipment to job sites?",
        answer:
          "Yes. We deliver and pick up equipment anywhere in the region. Delivery fees depend on distance and equipment size. We handle all transport logistics.",
      },
      {
        question: "Are operators included with the rental?",
        answer:
          "Operators are available as an add-on. All our operators are certified and experienced with our fleet. Operator rates are quoted separately.",
      },
      {
        question: "What condition is the equipment in?",
        answer:
          "Every machine undergoes thorough inspection and maintenance before each rental. We maintain detailed service records and guarantee equipment arrives job-ready.",
      },
      {
        question: "Can I inspect the equipment before renting?",
        answer:
          "Absolutely. You're welcome to visit our yard to inspect any machine. We can also provide photos, service history, and hour-meter readings on request.",
      },
    ],
  },
  {
    category: "Support & Insurance",
    questions: [
      {
        question: "What happens if a machine breaks down?",
        answer:
          "Call our 24/7 hotline. We'll dispatch a technician or deliver a replacement unit — typically within hours. You won't be charged for downtime caused by mechanical failure.",
      },
      {
        question: "Do I need insurance?",
        answer:
          "Renters are required to have equipment coverage. You can use your own commercial policy or purchase our Rental Protection Plan (RPP), which covers damage and theft.",
      },
      {
        question: "Who is responsible for fuel?",
        answer:
          "The renter is responsible for fuel and daily fluid checks. Equipment is delivered with a full tank and should be returned the same way, or a refueling fee applies.",
      },
      {
        question: "Do you provide training?",
        answer:
          "We offer basic equipment orientation at delivery. For full operator training or certification programs, we can connect you with our training partners.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            FAQ
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Find answers to common questions about our rental process,
            equipment, delivery, and support.
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
    </>
  );
}
