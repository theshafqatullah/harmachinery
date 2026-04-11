import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - Harma Machinery",
  description: "Read Harma Machinery's terms and conditions governing equipment rental agreements, liability, and use of our services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms & Conditions - Harma Machinery",
    description: "Read Harma Machinery's terms and conditions governing equipment rental agreements, liability, and use of our services.",
    url: "/terms",
  },
  twitter: {
    title: "Terms & Conditions - Harma Machinery",
    description: "Read Harma Machinery's terms and conditions governing equipment rental agreements, liability, and use of our services.",
  },
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose prose-zinc max-w-none text-sm leading-7">
            <h2 className="text-xl font-bold text-zinc-900 mt-0">Acceptance of Terms</h2>
            <p className="text-zinc-600">
              By accessing or using Harma Machinery&apos;s website and services, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use our services.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Rental Agreements</h2>
            <p className="text-zinc-600">
              All equipment rentals are subject to a separate rental agreement that specifies the equipment, rental period, pricing, delivery terms, and return conditions. These Terms &amp; Conditions supplement but do not replace individual rental agreements.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Equipment Use</h2>
            <p className="text-zinc-600">
              Rented equipment must be used only for its intended purpose and operated by qualified personnel. The renter is responsible for ensuring operators are properly trained and certified as required by law.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Payment Terms</h2>
            <p className="text-zinc-600">
              Rental fees are due as specified in the rental agreement. Late payments may incur additional charges. We reserve the right to retrieve equipment for non-payment.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Liability &amp; Insurance</h2>
            <p className="text-zinc-600">
              The renter is liable for any damage to, loss of, or theft of rented equipment during the rental period. Renters must maintain adequate insurance coverage or purchase our Rental Protection Plan.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Indemnification</h2>
            <p className="text-zinc-600">
              The renter agrees to indemnify and hold Harma Machinery harmless from any claims, damages, or liabilities arising from the use of rented equipment, except where caused by our negligence.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Cancellation &amp; Returns</h2>
            <p className="text-zinc-600">
              Cancellations made more than 24 hours before the scheduled delivery are free of charge. Late cancellations or early returns may be subject to fees as outlined in the rental agreement.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Limitation of Liability</h2>
            <p className="text-zinc-600">
              Harma Machinery&apos;s total liability shall not exceed the rental fees paid for the specific equipment in question. We are not liable for indirect, consequential, or incidental damages.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Governing Law</h2>
            <p className="text-zinc-600">
              These terms are governed by the laws of the United Arab Emirates and the Emirate of Dubai. Any disputes shall be resolved in the courts of Dubai, UAE.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Modifications</h2>
            <p className="text-zinc-600">
              We reserve the right to modify these Terms &amp; Conditions at any time. Changes will be posted on this page with an updated revision date.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Contact</h2>
            <p className="text-zinc-600">
              For questions about these terms, contact us at legal@harmachinery.com or call 055 455 5786.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
