import type { MetadataRoute } from "next";
import { allMachinery } from "@/data/machinery";
import { allServices } from "@/data/services";
import { dubaiLocations } from "@/data/locations";

const BASE = "https://husnainabdulrasheedmachineryrentals.ae";
const now = new Date();

const equipmentSlugs = [
  "excavators",
  "wheel-loaders",
  "cranes",
  "bulldozers",
  "aerial-lifts",
  "dump-trucks",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/equipment`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/machinery`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/categories`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/request-quote`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const locationRoutes = dubaiLocations.map((loc) => ({
    url: `${BASE}/locations/${loc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const serviceRoutes = allServices.map((s) => ({
    url: `${BASE}/services/${s.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const equipmentRoutes = equipmentSlugs.map((slug) => ({
    url: `${BASE}/equipment/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const machineryRoutes = allMachinery.map((m) => ({
    url: `${BASE}/machinery/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...locationRoutes,
    ...serviceRoutes,
    ...equipmentRoutes,
    ...machineryRoutes,
  ];
}
