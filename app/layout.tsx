import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harmachinery.com"),
  applicationName: "Harma Machinery",
  title: "Harma Machinery - Generator & Equipment Rental in Dubai, UAE",
  description:
    "Rent generators, compactors, air compressors & construction equipment across UAE. Based in Al Lisaili, Dubai — same-day delivery to 90+ locations.",
  keywords: [
    "generator rental Dubai",
    "equipment rental UAE",
    "construction equipment hire Dubai",
    "generator hire UAE",
    "compactor rental Dubai",
    "air compressor rental Dubai",
    "scaffolding rental UAE",
    "crane rental Dubai",
    "excavator rental UAE",
    "same day equipment delivery Dubai",
  ],
  authors: [{ name: "Harma Machinery", url: "https://harmachinery.com" }],
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
        alt: "Harma Machinery — Generator & Equipment Rental Dubai UAE",
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
