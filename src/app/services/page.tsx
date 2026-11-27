import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { ApiError } from "@nammapros/api-client";
import type { Service, ServiceCategory } from "@nammapros/types";
import { CategoryServiceLayout } from "@/components/category-service-layout";
import { api } from "@/lib/catalog";
import { categoryHref, serviceHref } from "@/lib/services";
import { getCategoryGeneralFaqs } from "@/lib/category-faqs";

/**
 * One services page, addressed like /services?city=chennai&category=ac&service=ac-chemical-wash
 * - category: which category to show (required; without it visitors go to the home page categories)
 * - service: opens that service's pop-up
 * - city: the customer's city (kept in the link so shared links show the same city)
 */
type Search = Promise<{ category?: string; service?: string; city?: string }>;

const WHATSAPP_HELP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919840000000";

async function loadCategory(slug: string): Promise<
  { kind: "category"; category: ServiceCategory; services: Service[] } | { kind: "service"; service: Service } | { kind: "missing" }
> {
  try {
    const { category, services } = await api.categoryDetail(slug);
    return { kind: "category", category, services };
  } catch (error) {
    if (!(error instanceof ApiError && error.status === 404)) throw error;
  }
  try {
    return { kind: "service", service: await api.service(slug) };
  } catch {
    return { kind: "missing" };
  }
}

export async function generateMetadata({ searchParams }: { searchParams: Search }): Promise<Metadata> {
  const { category } = await searchParams;
  if (!category) {
    return {
      title: "Services & Appliance Repair",
      description: "Browse verified home technician services across Chennai and Tamil Nadu with upfront pricing and 30-day warranty.",
    };
  }
  try {
    const detail = await api.categoryDetail(category);
    const catName = detail.category.name;
    const catDesc =
      detail.category.description ||
      `Book verified ${catName} services in Chennai & Tamil Nadu. Transparent upfront pricing, same-day slots, certified technicians, and a 30-day warranty.`;
    const canonicalUrl = categoryHref(detail.category.slug);
    const ogImg = detail.category.image_url || "/images/brand/hero-technicians-pair.webp";

    return {
      title: `${catName} Services & Repair in Chennai`,
      description: catDesc,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: `${catName} Services & Repair in Chennai | NammaPros`,
        description: catDesc,
        url: canonicalUrl,
        type: "website",
        images: [{ url: ogImg, width: 1200, height: 630, alt: `${catName} Services NammaPros` }],
      },
      twitter: {
        card: "summary_large_image",
        title: `${catName} Services & Repair in Chennai | NammaPros`,
        description: catDesc,
        images: [ogImg],
      },
    };
  } catch {
    return { title: "Services & Appliance Repair" };
  }
}

export default async function ServicesPage({ searchParams }: { searchParams: Search }) {
  const { category: slug, service, city } = await searchParams;
  if (!slug) redirect("/#categories");

  const result = await loadCategory(slug.trim().toLowerCase());
  if (result.kind === "missing") notFound();
  if (result.kind === "service") redirect(serviceHref(result.service, city));

  const { category, services } = result;
  const active = services.filter((s) => s.is_active !== false && (!s.category || s.category === category.slug));
  const generalFaqs = getCategoryGeneralFaqs(category.slug, category.name);
  const siteUrl = "https://nammapros.com";
  const catUrl = `${siteUrl}${categoryHref(category.slug)}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: category.name, item: catUrl },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${category.name} Services`,
    serviceType: category.name,
    description: category.description || `Professional ${category.name} services in Chennai and Tamil Nadu.`,
    provider: {
      "@type": "LocalBusiness",
      name: "NammaPros",
      url: siteUrl,
      telephone: "+919629025814",
    },
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${category.name} Packages`,
      itemListElement: active.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.summary || s.description || `${s.name} by NammaPros`,
        },
        price: s.starting_price_paise ? (s.starting_price_paise / 100).toFixed(2) : undefined,
        priceCurrency: "INR",
      })),
    },
  };

  const faqJsonLd = generalFaqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: generalFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      }
    : null;

  if (active.length > 0) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }}
        />
        {faqJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
          />
        )}
        <CategoryServiceLayout category={category} services={active} initialService={service} />
      </>
    );
  }

  const whatsappHref = `https://wa.me/${WHATSAPP_HELP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hi NammaPros, I need help booking ${category.name} service.`)}`;
  return (
    <main className="bg-[#FBF8F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />
      <section className="container py-12 text-center">
        <h1 className="font-serif text-2xl font-bold text-[#1C1917]">{category.name}</h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-[#57534E]">
          No {category.name} services are published yet. Message us and we&apos;ll arrange a verified professional.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#117A4B] px-5 text-xs font-bold text-white">
            <MessageCircle size={15} aria-hidden="true" /> Chat on WhatsApp
          </a>
          <Link href="/#categories" className="inline-flex min-h-[44px] items-center rounded-md border border-[#EAE3DC] bg-white px-5 text-xs font-bold text-[#1C1917]">
            Browse categories
          </Link>
        </div>
      </section>
    </main>
  );
}
