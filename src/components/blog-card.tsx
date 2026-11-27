import Link from "next/link";
import type { BlogPost } from "@nammapros/types";
import { ServiceImage } from "./service-image";
import { formatPostDate } from "@/lib/site";

export function BlogCard({ post, headingLevel = 3 }: { post: BlogPost; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full overflow-hidden rounded-lg border border-[#EAE3DC] bg-white transition hover:border-[#800020]/40 hover:shadow-sm">
      {post.cover_image_url && (
        <div className="relative aspect-[16/9] bg-[#F4EFE9]">
          <ServiceImage src={post.cover_image_url} alt="" fit="cover" />
        </div>
      )}
      <div className="p-4">
        <Heading className="text-base font-bold text-[#1C1917] group-hover:text-[#800020]">{post.title}</Heading>
        {post.excerpt && <p className="mt-1.5 line-clamp-3 text-sm text-[#57534E]">{post.excerpt}</p>}
        <p className="mt-3 text-xs text-[#78716C]">{[post.author_name, formatPostDate(post.published_at)].filter(Boolean).join(" · ")}</p>
      </div>
    </Link>
  );
}
