"use client";

import { useState } from "react";
import type { BlogPost } from "@nammapros/types";
import { BlogCard } from "./blog-card";

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [filter, setFilter] = useState<"all" | "articles">("all");
  const tabClass = "rounded-lg border px-4 py-2 text-[11px] font-bold uppercase tracking-wide transition";

  return (
    <>
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2" aria-label="Browse insights">
        {(["all", "articles"] as const).map((tab) => (
          <button key={tab} type="button" aria-pressed={filter === tab}
            onClick={() => setFilter(tab)}
            className={`${tabClass} ${filter === tab ? "border-[#A988E8] bg-[#B994F5] text-white shadow-sm" : "border-[#EAE6F0] bg-white text-[#27222D] hover:border-[#B994F5]"}`}>
            {tab === "all" ? "All" : "Articles"}
          </button>
        ))}
        {(["News", "Podcast"] as const).map((tab) => (
          <button key={tab} type="button" disabled title={`${tab} coming soon`}
            className={`${tabClass} cursor-not-allowed border-[#EAE6F0] bg-white text-[#A9A3AF]`}>
            {tab}
          </button>
        ))}
      </div>
      {posts.length === 0 ? (
        <p className="rounded-2xl border border-[#ECE8F1] bg-white p-8 text-center text-sm text-[#69636B]">
          New insights are coming soon.
        </p>
      ) : (
        <ul className={posts.length === 1 ? "mx-auto grid max-w-sm gap-5" : posts.length === 2 ? "mx-auto grid max-w-3xl gap-5 sm:grid-cols-2" : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"}>
          {posts.map((post) => <li key={post.id}><BlogCard post={post} headingLevel={2} /></li>)}
        </ul>
      )}
    </>
  );
}
