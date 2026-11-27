import type { MetadataRoute } from "next";
import { api, getCatalog } from "@/lib/catalog";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin =
    process.env.NEXT_PUBLIC_SITE_URL && !process.env.NEXT_PUBLIC_SITE_URL.includes("localhost")
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "https://nammapros.com";

  const [{ data }, landing, blog] = await Promise.all([
    getCatalog(),
    api.landingPages().catch(() => ({ slugs: [] as string[] })),
    api.blogPosts().catch(() => ({ results: [] })),
  ]);

  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // 1. Homepage
  entries.push({
    url: origin,
    lastModified: now,
    changeFrequency: "daily",
    priority: 1.0,
  });

  // 2. Category Pages
  for (const cat of data?.categories ?? []) {
    entries.push({
      url: `${origin}/services?category=${cat.slug}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    });
  }

  // 3. City Landing Pages (SEO landing pages)
  for (const slug of landing.slugs) {
    entries.push({
      url: `${origin}/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // 4. Blog Posts
  entries.push({
    url: `${origin}/blog`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.7,
  });
  for (const p of blog.results) {
    entries.push({
      url: `${origin}/blog/${p.slug}`,
      lastModified: p.published_at ? new Date(p.published_at) : now,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // 5. Informational Pages
  const infoPages = ["/about", "/faq", "/support", "/join-as-technician"];
  for (const path of infoPages) {
    entries.push({
      url: `${origin}${path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // 6. Legal Pages
  const legalPages = ["/terms", "/privacy-policy", "/cancellation-policy"];
  for (const path of legalPages) {
    entries.push({
      url: `${origin}${path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    });
  }

  return entries;
}
