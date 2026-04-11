import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machinery Rental Catalog - Harma Machinery | Dubai, UAE",
  description:
    "Browse our full catalog of generators, compactors, air compressors, scaffolding & construction machinery for rent in Dubai and across the UAE.",
  keywords: [
    "generator rental Dubai", "Perkins generator hire", "Cummins generator rental",
    "compactor rental Dubai", "plate compactor hire UAE", "air compressor rental",
    "scaffolding rental Dubai", "concrete mixer hire UAE", "tower light rental Dubai",
  ],
  alternates: { canonical: "/machinery" },
  openGraph: {
    title: "Machinery Rental Catalog - Harma Machinery | Dubai, UAE",
    description:
      "Browse our full catalog of generators, compactors, air compressors, scaffolding & construction machinery for rent in Dubai and across the UAE.",
    url: "/machinery",
  },
  twitter: {
    title: "Machinery Rental Catalog - Harma Machinery | Dubai, UAE",
    description:
      "Browse our full catalog of generators, compactors, air compressors, scaffolding & construction machinery for rent in Dubai and across the UAE.",
  },
};

export default function MachineryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
