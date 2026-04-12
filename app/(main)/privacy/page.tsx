import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Harma Machinery – Equipment Rental Dubai",
  description: "How Husnain Abdul Rasheed Construction Machinery Rental L.L.C collects, uses and protects your personal data when you use our website and rental services.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Harma Machinery – Equipment Rental Dubai",
    description: "How we collect, use and protect your personal data when you use our website and rental services.",
    url: "/privacy",
  },
  twitter: {
    title: "Privacy Policy | Harma Machinery – Equipment Rental Dubai",
    description: "How we collect, use and protect your personal data when you use our website and rental services.",
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Privacy Policy
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
            <h2 className="text-xl font-bold text-zinc-900 mt-0">Introduction</h2>
            <p className="text-zinc-600">
              Husnain Abdul Rasheed Construction Machinery Rental L.L.C, trading as Harma Machinery (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Information We Collect</h2>
            <p className="text-zinc-600">
              We may collect personal information that you voluntarily provide when you:
            </p>
            <ul className="text-zinc-600 list-disc pl-5 space-y-1">
              <li>Fill out a contact or quote request form</li>
              <li>Create an account or register for services</li>
              <li>Communicate with us via email, phone, or chat</li>
              <li>Subscribe to our newsletter</li>
              <li>Apply for credit or establish a rental account</li>
            </ul>
            <p className="text-zinc-600 mt-2">
              This information may include your name, email address, phone number, company name, job site address, and payment information.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">How We Use Your Information</h2>
            <p className="text-zinc-600">
              We use the information we collect to process rental requests, provide customer support, send quotes and invoices, improve our services, and communicate with you about your account or our offerings.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Information Sharing</h2>
            <p className="text-zinc-600">
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business, such as payment processors and delivery partners, subject to confidentiality agreements.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Data Security</h2>
            <p className="text-zinc-600">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Cookies</h2>
            <p className="text-zinc-600">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Your Rights</h2>
            <p className="text-zinc-600">
              Depending on your location, you may have rights regarding your personal data, including the right to access, correct, delete, or restrict processing of your information. Contact us to exercise these rights.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Third-Party Links</h2>
            <p className="text-zinc-600">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Children&apos;s Privacy</h2>
            <p className="text-zinc-600">
              Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Changes to This Policy</h2>
            <p className="text-zinc-600">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-xl font-bold text-zinc-900 mt-10">Contact Us</h2>
            <p className="text-zinc-600">
              If you have questions about this Privacy Policy, please contact us at privacy@husnainabdulrasheedmachineryrentals.ae or call 055 455 5786.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
