import type { Metadata } from "next";
import Link from "next/link";
import type { BlogPost } from "@nammapros/types";
import { BlogGrid } from "@/components/blog-grid";
import { api } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Home care guides",
  description: "Practical tips for AC care, appliances, water tanks and keeping your home running smoothly.",
  alternates: { canonical: "/blog" },
};

export const dynamic = "force-dynamic";

export default async function BlogIndexPage() {
  const posts = await api.blogPosts().then((r) => r.results).catch(() => null as BlogPost[] | null);
  return (
    <main className="min-h-screen bg-[#FBFAFE] pb-16 text-[#211C24] sm:pb-24">
      <div className="container max-w-6xl">
        <header className="mx-auto max-w-2xl pb-8 pt-12 text-center sm:pb-10 sm:pt-16">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#800020]">The NammaPros journal</p>
          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl">
            All your home care <span className="block">insights in one place</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#69636B] sm:text-base">
            Practical ideas and expert advice to help you care for your home.
          </p>
        </header>

        {posts === null ? (
          <p role="status" className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center text-sm text-amber-900">
            Guides are unavailable right now. Please try again shortly.
          </p>
        ) : <BlogGrid posts={posts} />}

        <section className="relative mt-12 min-h-64 overflow-hidden rounded-2xl border border-[#6E54A4] bg-[#B99AF0] px-7 py-9 text-white sm:mt-14 sm:px-12 sm:py-10" aria-labelledby="blog-cta-heading">
          <div className="relative z-10 max-w-md">
            <p className="text-xs font-bold uppercase tracking-widest text-white/80">More from NammaPros</p>
            <h2 id="blog-cta-heading" className="mt-3 max-w-sm text-2xl font-bold leading-tight sm:text-3xl">
              Fresh ideas for a better home
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/90">
              Keep your home comfortable with helpful guides and trusted professionals.
            </p>
            <Link href="/services" className="mt-6 inline-flex items-center rounded-lg bg-[#211C24] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#3D3047]">
              Explore our services <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
          <svg aria-hidden="true" viewBox="0 0 600 300" fill="none" stroke="currentColor" strokeWidth="1.3" className="pointer-events-none absolute -bottom-5 right-0 hidden h-full w-[56%] text-white/55 sm:block">
            <path d="M25 299V121l104-78 104 78v178M76 299V159h106v140M55 135l74-55 74 55M90 111V65h29v25M267 299V85h128v214M284 86V48h94v38M295 119h27v34h-27zM340 119h27v34h-27zM295 178h27v34h-27zM340 178h27v34h-27zM307 299v-55h52v55M426 299V134l73-62 73 62v165M454 299V168h91v131M449 141l50-43 50 43M472 207h21v28h-21zM510 207h21v28h-21z" />
            <path d="M0 299h600M238 299V150l23-19M398 299V169l25-20M552 299v-73h48" />
          </svg>
        </section>
      </div>
    </main>
  );
}
