import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rent Construction Equipment & Generators in Dubai | 60+ Machines",
  description:
    "Browse 60+ machines for rent — generators 3–500 KVA, compactors, jack hammers, concrete mixers, cutting machines, power tools and more. Daily, weekly or monthly rates.",
  keywords: [
    "generator rental Dubai", "Perkins generator hire", "Cummins generator rental",
    "compactor rental Dubai", "plate compactor hire UAE", "jack hammer rental Dubai",
    "concrete mixer rental Dubai", "tower light rental Dubai", "scaffolding rental Dubai",
  ],
  alternates: { canonical: "/machinery" },
  openGraph: {
    title: "Rent Construction Equipment & Generators in Dubai | 60+ Machines",
    description:
      "Browse 60+ machines for rent — generators, compactors, jack hammers, concrete mixers, cutting machines, power tools and more.",
    url: "/machinery",
  },
  twitter: {
    title: "Rent Construction Equipment & Generators in Dubai | 60+ Machines",
    description:
      "Browse our full catalog of generators, compactors, jack hammers, scaffolding & construction machinery for rent in Dubai and across the UAE.",
  },
};

export default function MachineryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
