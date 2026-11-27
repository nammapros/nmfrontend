import type { Metadata } from "next";
import {
  CheckCircle2,
  Star,
} from "lucide-react";
import Image from "next/image";
import { HomeCategoryGrid } from "@/components/home-category-grid";
import { MostBookedServices } from "@/components/most-booked-services";
import { OfferSpotlight } from "@/components/offer-spotlight";
import { RecentReviewsCarousel } from "@/components/recent-reviews-carousel";
import { SpotlightBanners } from "@/components/spotlight-banners";
import { api, getCatalog } from "@/lib/catalog";
import { pickPopularServices } from "@/lib/services";
import { resolveUploadedMediaUrl } from "@/lib/service-images";

export const metadata: Metadata = {
  title: "NammaPros | India's Trusted Home Services & Appliance Repair",
  description:
    "Book verified home technicians in Chennai & Tamil Nadu. AC service & repair, washing machine repair, refrigerator, TV installation & water tank cleaning with upfront pricing and 30-day warranty.",
  alternates: { canonical: "/" },
};

export default async function Home() {
  const [{ data }, publicReviews] = await Promise.all([
    getCatalog(),
    api.publicReviews().catch(() => null),
  ]);
  const services = data?.services ?? [];
  const acServices = services
    .filter((s) => s.is_active !== false && (s.category === "ac" || s.category === "air-conditioning"))
    .sort((a, b) => Number(Boolean(b.is_popular)) - Number(Boolean(a.is_popular)) || (a.sort_order ?? 0) - (b.sort_order ?? 0))
    .slice(0, 5);
  const reviews = (publicReviews?.results ?? data?.reviews ?? []).slice(0, 15);
  const banners = data?.banners ?? [];
  const appBanner = data?.app_download_banner;
  const appBannerImage = resolveUploadedMediaUrl(appBanner?.desktop_image_url);
  const appBannerMobileImage = resolveUploadedMediaUrl(appBanner?.mobile_image_url);
  const appBannerArtwork = appBannerImage ? (
    <picture>
      {appBannerMobileImage && <source media="(max-width: 639px)" srcSet={appBannerMobileImage} />}
      <Image
        src={appBannerImage}
        alt={appBanner?.title || "Download the NammaPros app"}
        width={1600}
        height={534}
        unoptimized
        className="h-auto w-full rounded-2xl"
      />
    </picture>
  ) : null;
  const trust = data?.trust_stats;

  const siteUrl = "https://nammapros.com";
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "NammaPros",
    alternateName: "NammaPros Home Services",
    url: siteUrl,
    logo: `${siteUrl}/images/brand/logo.png`,
    image: `${siteUrl}/images/brand/hero-technicians-pair.webp`,
    description:
      "Verified home technicians across Chennai and Tamil Nadu for AC repair, washing machine service, refrigerator repair, TV wall mounting, water tank cleaning, and home appliances.",
    telephone: "+919629025814",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0827,
      longitude: 80.2707,
    },
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "City", name: "Coimbatore" },
      { "@type": "City", name: "Madurai" },
      { "@type": "City", name: "Trichy" },
      { "@type": "City", name: "Salem" },
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    aggregateRating:
      trust?.average_rating && trust.review_count > 0
        ? {
            "@type": "AggregateRating",
            ratingValue: trust.average_rating,
            reviewCount: trust.review_count,
            bestRating: "5",
            worstRating: "1",
          }
        : undefined,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NammaPros",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/services?category={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c") }}
      />
      {/* 1. Split Hero Banner (Blush Rose #FBECEF + Technician on Right) */}
      <section id="categories" className="relative scroll-mt-20 overflow-hidden border-b border-[#EAE3DC] bg-white pt-6 pb-8 text-[#1C1917] sm:pt-8 sm:pb-0">
        <div className="container grid items-end gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
          <div className="max-w-xl pb-6 lg:pb-10">
            <h1 className="mb-5 text-2xl font-bold tracking-tight text-[#1C1917] sm:mb-6 sm:text-4xl">
              India&apos;s trusted <span className="text-[#800020]">home service</span>
            </h1>
            <HomeCategoryGrid categories={data?.categories ?? []} services={services} />
          </div>

          <div className="relative hidden items-end justify-center sm:flex lg:justify-end">
            <Image
              src="/images/brand/hero-technicians-pair.webp"
              alt="Two verified NammaPros technicians in uniform with tool belts"
              width={838}
              height={909}
              priority
              unoptimized
              className="relative z-10 h-[380px] w-auto object-contain object-bottom md:h-[440px] lg:h-[500px] xl:h-[530px]"
            />

            {/* Compact corner floating pill leaves tool belt uncovered */}
            <div className="absolute bottom-5 left-2 z-20 max-w-[230px] rounded-lg border border-[#EAE3DC] bg-white/95 px-3 py-2 text-[#1C1917] shadow-md backdrop-blur-sm sm:left-4 lg:left-0">
              <div className="flex items-center gap-1.5 text-[11px] font-bold leading-tight text-[#1C1917]">
                <CheckCircle2 size={14} className="shrink-0 text-emerald-700" />
                <span>Verified pros</span>
              </div>
              <p className="mt-0.5 text-[10px] font-normal leading-snug text-[#57534E]">
                Direct slot booking · Upfront pricing
              </p>

              {trust?.average_rating && trust.review_count > 0 && (
                <div className="mt-1.5 inline-flex items-center gap-1 rounded-md bg-[#1C1917] px-2 py-0.5 text-white">
                  <span className="text-[11px] font-bold leading-none">{trust.average_rating}</span>
                  <Star size={11} className="fill-[#C8A35B] text-[#C8A35B]" />
                  <span className="text-[10px] font-normal text-[#D6CEC6]">{trust.review_count} reviews</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Spotlight banners (each opens its service) */}
      <SpotlightBanners categories={data?.categories ?? []} services={services} banners={data?.spotlight_banners ?? []} />

      {/* 4. Most booked services */}
      <MostBookedServices services={pickPopularServices(services, 5)} />

      {/* 5. Featured Dark Offer Card */}
      <OfferSpotlight banners={banners} />

      {/* 6. From homes near you */}
      <RecentReviewsCarousel reviews={reviews} />

      {/* 7. App download banner managed from the admin panel */}
      {appBannerImage && (
        <section className="container py-8 sm:py-12" aria-label="Get the NammaPros app">
          {appBanner?.target_url
            ? <a href={appBanner.target_url} aria-label={appBanner.title || "Open the NammaPros app link"}>{appBannerArtwork}</a>
            : appBannerArtwork}
        </section>
      )}

      {/* 8. Best AC service: five AC services, same card as "Most booked" */}
      <MostBookedServices id="best-ac" title="Best AC service" services={acServices} />
    </main>
  );
}
