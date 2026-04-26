import type { MetadataRoute } from "next";

const SITE = "https://culinair-annonu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; changeFreq: "daily" | "weekly" | "monthly" | "yearly" }[] = [
    { path: "", priority: 1.0, changeFreq: "weekly" },
    { path: "/brand-events", priority: 0.95, changeFreq: "monthly" },
    { path: "/cases", priority: 0.9, changeFreq: "monthly" },
    { path: "/diensten", priority: 0.85, changeFreq: "monthly" },
    { path: "/over-ons", priority: 0.7, changeFreq: "yearly" },
    { path: "/contact", priority: 0.8, changeFreq: "yearly" },
    { path: "/privacy", priority: 0.2, changeFreq: "yearly" },
    { path: "/voorwaarden", priority: 0.2, changeFreq: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }));
}
