import type { Metadata } from "next";
import type { BlogPost } from "@nammapros/types";
import { BlogCard } from "@/components/blog-card";
import { ContentPage } from "@/components/content-page";
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
    <ContentPage eyebrow="Guides" title="Home care guides" intro="Simple, practical advice from our professionals.">
      {posts === null ? (
        <p role="status" className="rounded-md bg-amber-50 p-3 text-sm text-amber-900">Guides are unavailable right now. Please try again shortly.</p>
      ) : posts.length === 0 ? (
        <p className="text-[#57534E]">New guides are coming soon.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <li key={post.id}><BlogCard post={post} headingLevel={2} /></li>
          ))}
        </ul>
      )}
    </ContentPage>
  );
}
