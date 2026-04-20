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
  applicationName: "Husnain Abdul Rasheed Machinery Rentals",
  title: {
    default: "Generator Rental Dubai | Construction Equipment Hire UAE | Husnain Abdul Rasheed Machinery Rentals",
    template: "%s | Husnain Abdul Rasheed Machinery Rentals",
  },
  description:
    "Rent generators 3–500 KVA, compactors, jack hammers, concrete mixers & 60+ types of construction equipment. Same-day delivery across Dubai and all 7 UAE Emirates from Al Lisaili. Call 055 455 5786.",
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
  authors: [{ name: "Husnain Abdul Rasheed Machinery Rentals", url: "https://husnainabdulrasheedmachineryrentals.ae" }],
  creator: "Husnain Abdul Rasheed Machinery Rentals",
  publisher: "Husnain Abdul Rasheed Machinery Rentals",
  alternates: {
    canonical: "/",
    languages: { "en-AE": "/", "x-default": "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { email: true, telephone: true, address: true },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
      "facebook-domain-verification":
        process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION ?? "",
    },
  },
  openGraph: {
    siteName: "Husnain Abdul Rasheed Machinery Rentals",
    type: "website",
    locale: "en_AE",
    url: "https://husnainabdulrasheedmachineryrentals.ae",
    images: [
      {
        url: "https://static.wixstatic.com/media/37072f_875a033c0e6d4a14bd0c37103dbb3dff~mv2.jpg/v1/fill/w_480,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/37072f_875a033c0e6d4a14bd0c37103dbb3dff~mv2.jpg",
        width: 1200,
        height: 630,
        alt: "Generator & Construction Equipment Rental Dubai — Husnain Abdul Rasheed Machinery Rentals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://static.wixstatic.com/media/37072f_875a033c0e6d4a14bd0c37103dbb3dff~mv2.jpg/v1/fill/w_480,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/37072f_875a033c0e6d4a14bd0c37103dbb3dff~mv2.jpg",
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
