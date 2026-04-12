import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://husnainabdulrasheedmachineryrentals.ae"),
  applicationName: "Harma Machinery",
  title: "Generator Rental Dubai | Construction Equipment Hire UAE | Harma Machinery",
  description:
    "Rent generators 10–1000 KVA, compactors, jack hammers, concrete mixers & 60+ types of construction equipment. Same-day delivery across Dubai and all 7 UAE Emirates from Al Lisaili. Call 055 455 5786.",
  keywords: [
    "generator rental Dubai",
    "construction equipment rental Dubai",
    "heavy equipment rental UAE",
    "generator hire Dubai",
    "compactor rental Dubai",
    "jack hammer rental Dubai",
    "silent generator rental Dubai",
    "power tools rental Dubai",
    "equipment rental companies in UAE",
    "same day equipment delivery Dubai",
  ],
  authors: [{ name: "Harma Machinery", url: "https://husnainabdulrasheedmachineryrentals.ae" }],
  creator: "Harma Machinery",
  publisher: "Harma Machinery",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    siteName: "Harma Machinery",
    type: "website",
    locale: "en_AE",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Generator & Construction Equipment Rental Dubai — Harma Machinery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Al Lisaili, Dubai, UAE",
    "geo.position": "24.846;55.562",
    ICBM: "24.846, 55.562",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${lato.variable} h-full antialiased`}
    >
      <body className={`${lato.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
