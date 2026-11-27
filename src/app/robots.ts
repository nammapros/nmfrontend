import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const origin =
    process.env.NEXT_PUBLIC_SITE_URL && !process.env.NEXT_PUBLIC_SITE_URL.includes("localhost")
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "https://nammapros.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/book",
          "/account",
          "/bookings",
          "/bookings/*",
          "/checkout",
          "/payments",
          "/finance",
          "/search",
          "/api/*",
          "/_next/*",
        ],
      },
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
