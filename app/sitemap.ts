import type { MetadataRoute } from "next";
import { paths, type PathKey } from "@/lib/dict";

const SITE = "https://culinair-annonu.com";

const config: { key: PathKey; priority: number; changeFreq: "daily" | "weekly" | "monthly" | "yearly" }[] = [
  { key: "home", priority: 1.0, changeFreq: "weekly" },
  { key: "brandEvents", priority: 0.95, changeFreq: "monthly" },
  { key: "cases", priority: 0.9, changeFreq: "monthly" },
  { key: "services", priority: 0.85, changeFreq: "monthly" },
  { key: "about", priority: 0.7, changeFreq: "yearly" },
  { key: "contact", priority: 0.8, changeFreq: "yearly" },
  { key: "privacy", priority: 0.2, changeFreq: "yearly" },
  { key: "terms", priority: 0.2, changeFreq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  for (const c of config) {
    const nlPath = paths[c.key].nl;
    const enPath = paths[c.key].en;
    entries.push({
      url: `${SITE}${nlPath === "/" ? "" : nlPath}`,
      lastModified: now,
      changeFrequency: c.changeFreq,
      priority: c.priority,
      alternates: {
        languages: {
          "nl-NL": `${SITE}${nlPath === "/" ? "" : nlPath}`,
          "en-GB": `${SITE}${enPath}`,
          "x-default": `${SITE}${nlPath === "/" ? "" : nlPath}`,
        },
      },
    });
    entries.push({
      url: `${SITE}${enPath}`,
      lastModified: now,
      changeFrequency: c.changeFreq,
      priority: c.priority * 0.95,
      alternates: {
        languages: {
          "nl-NL": `${SITE}${nlPath === "/" ? "" : nlPath}`,
          "en-GB": `${SITE}${enPath}`,
          "x-default": `${SITE}${nlPath === "/" ? "" : nlPath}`,
        },
      },
    });
  }
  return entries;
}
