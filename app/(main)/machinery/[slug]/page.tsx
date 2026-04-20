import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  allMachinery,
  getMachineryBySlug,
  getRelatedMachinery,
} from "@/data/machinery";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return allMachinery.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const machine = getMachineryBySlug(slug);
  if (!machine) return { title: "Product Not Found - Husnain Abdul Rasheed Machinery Rentals" };
  return {
    title: `${machine.name} for Rent | Husnain Abdul Rasheed Machinery Rentals`,
    description: machine.description,
    alternates: { canonical: `/machinery/${slug}` },
    openGraph: {
      title: `${machine.name} for Rent | Husnain Abdul Rasheed Machinery Rentals`,
      description: machine.description,
      url: `/machinery/${slug}`,
      images: machine.image ? [{ url: machine.image, alt: machine.name }] : [],
    },
    twitter: {
      title: `${machine.name} for Rent | Husnain Abdul Rasheed Machinery Rentals`,
      description: machine.description,
      images: machine.image ? [machine.image] : [],
    },
  };
}

export default async function MachineryDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const machine = getMachineryBySlug(slug);
  if (!machine) notFound();

  const related = getRelatedMachinery(machine.id, machine.category, 4);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://husnainabdulrasheedmachineryrentals.ae" },
      { "@type": "ListItem", position: 2, name: "Machinery", item: "https://husnainabdulrasheedmachineryrentals.ae/machinery" },
      { "@type": "ListItem", position: 3, name: machine.name, item: `https://husnainabdulrasheedmachineryrentals.ae/machinery/${machine.slug}` },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: machine.name,
    description: machine.description,
    image: machine.image,
    brand: { "@type": "Brand", name: machine.brand },
    offers: {
      "@type": "Offer",
      priceCurrency: "AED",
      price: machine.price,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: machine.price,
        priceCurrency: "AED",
        unitText: machine.priceUnit,
      },
      availability: machine.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: { "@type": "Organization", name: "Husnain Abdul Rasheed Machinery Rentals" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: machine.rating,
      reviewCount: machine.reviews,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* Breadcrumb */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-zinc-500">
            <Link href="/" className="hover:text-amber-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/machinery" className="hover:text-amber-600">
              Machinery
            </Link>
            <span>/</span>
            <span className="text-zinc-900">{machine.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Images */}
            <div>
              <div className="aspect-square overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="h-full w-full object-contain p-8"
                />
              </div>
              {machine.gallery.length > 0 && (
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {machine.gallery.slice(0, 4).map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50"
                    >
                      <img
                        src={img}
                        alt={`${machine.name} - view ${i + 2}`}
                        className="h-full w-full object-contain p-2"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product info */}
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                  {machine.brand}
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                  {machine.category}
                </span>
                {machine.available ? (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    In Stock
                  </span>
                ) : (
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                    Rented Out
                  </span>
                )}
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                {machine.name}
              </h1>

              {/* Rating */}
              <div className="mt-3 flex items-center gap-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`h-4 w-4 ${
                        star <= Math.round(machine.rating)
                          ? "text-amber-400"
                          : "text-zinc-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-zinc-500">
                  {machine.rating} ({machine.reviews} reviews)
                </span>
              </div>

              {/* Specs badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {machine.specs.map((spec) => (
                  <span
                    key={spec}
                    className="rounded-lg bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <p className="mt-6 leading-7 text-zinc-600">
                {machine.description}
              </p>

              {/* Pricing card */}
              <div className="mt-8 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Rental Pricing
                </h3>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                    <p className="text-xs text-zinc-500">Daily</p>
                    <p className="mt-1 text-xl font-bold text-amber-600">
                      AED {machine.price}
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                    <p className="text-xs text-zinc-500">Weekly</p>
                    <p className="mt-1 text-xl font-bold text-amber-600">
                      AED {machine.weeklyPrice}
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                    <p className="text-xs text-zinc-500">Monthly</p>
                    <p className="mt-1 text-xl font-bold text-amber-600">
                      AED {machine.monthlyPrice}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <Link
                    href="/request-quote"
                    className="flex-1 rounded-lg bg-amber-500 py-3 text-center text-sm font-semibold text-zinc-900 hover:bg-amber-400 transition-colors"
                  >
                    Request a Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 rounded-lg border border-zinc-300 py-3 text-center text-sm font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Quick info */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-zinc-600">
                  <svg
                    className="h-4 w-4 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z"
                    />
                  </svg>
                  Location: {machine.location}
                </div>
                <div className="flex items-center gap-2 text-zinc-600">
                  <svg
                    className="h-4 w-4 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  Year: {machine.year}
                </div>
                <div className="flex items-center gap-2 text-zinc-600">
                  <svg
                    className="h-4 w-4 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                  Capacity: {machine.capacity}
                </div>
                <div className="flex items-center gap-2 text-zinc-600">
                  <svg
                    className="h-4 w-4 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                  Same-Day Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Specifications */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">Features</h2>
              <div className="mt-6 space-y-3">
                {machine.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-sm text-zinc-700"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
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
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">
                Specifications
              </h2>
              <div className="mt-6 overflow-hidden rounded-lg border border-zinc-200">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(machine.specifications).map(
                      ([key, value], idx) => (
                        <tr
                          key={key}
                          className={idx % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                        >
                          <td className="px-4 py-3 font-medium text-zinc-900 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </td>
                          <td className="px-4 py-3 text-zinc-600">{value}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-zinc-900">
              Related {machine.category}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/machinery/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-amber-300"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-zinc-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-zinc-900 group-hover:text-amber-600 line-clamp-2">
                      {item.name}
                    </h3>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-lg font-bold text-amber-600">
                        AED {item.price}
                      </span>
                      <span className="text-xs text-zinc-500">
                        /{item.priceUnit}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to catalog */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <Link
            href="/machinery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-500"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Browse All Machinery
          </Link>
        </div>
      </section>
    </>
  );
}
