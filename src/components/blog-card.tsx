import Link from "next/link";
import type { BlogPost } from "@nammapros/types";
import { ServiceImage } from "./service-image";
import { formatPostDate } from "@/lib/site";

export function BlogCard({ post, headingLevel = 3 }: { post: BlogPost; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#ECE8F1] bg-white shadow-[0_3px_16px_rgba(38,27,53,0.035)] transition hover:-translate-y-1 hover:border-[#800020]/30 hover:shadow-[0_14px_32px_rgba(38,27,53,0.1)]">
      <div className="relative aspect-[1.52] w-full overflow-hidden bg-[#F4EFE9]">
        <ServiceImage src={post.cover_image_url || "/images/categories/home-appliances.jpeg"} alt="" fit="cover" zoomOnHover />
        <span className="absolute right-3 top-3 rounded-md bg-[#241E29]/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">Article</span>
      </div>
      <div className="flex flex-1 flex-col px-4 pb-5 pt-4 sm:px-5">
        <p className="text-[11px] font-medium text-[#77717B]">{[post.author_name || "NammaPros", formatPostDate(post.published_at)].filter(Boolean).join(" · ")}</p>
        <Heading className="mt-2 line-clamp-3 text-base font-bold leading-snug text-[#211C24] transition group-hover:text-[#800020]">{post.title}</Heading>
        {post.excerpt && <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#69636B]">{post.excerpt}</p>}
      </div>
    </Link>
  );
}
