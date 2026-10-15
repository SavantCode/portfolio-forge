import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Search } from "lucide-react";
import { useState } from "react";
import { articles } from "@/data/portfolio";
import { PageHeading } from "@/components/portfolio/page-heading";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead("Blog", "Notes on web development, design engineering, and building better products."),
  component: Blog,
});

function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = articles.filter(
    (a) =>
      (category === "All" || a.category === category) &&
      (a.title + a.excerpt).toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <PageHeading
        title="Blog"
        description="Notes on building for the web, and things learned along the way."
      />
      <div className="blog-tools">
        <div className="flex gap-2 flex-wrap">
          {["All", "Development", "Design Engineering", "Software Engineering"].map((c) => (
            <Button
              key={c}
              variant={category === c ? "default" : "secondary"}
              className="rounded-full"
              onClick={() => setCategory(c)}
            >
              {c}
            </Button>
          ))}
        </div>
        <label className="blog-search">
          <Search size={17} />
          <input
            aria-label="Search articles"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
          />
        </label>
      </div>
      {filtered.map((a) => (
        <Link key={a.slug} to="/blog/$slug" params={{ slug: a.slug }} className="article-row group">
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span>{a.date}</span>
            <span>·</span>
            <span>{a.readTime}</span>
          </div>
          <div className="flex justify-between gap-4 mt-4">
            <h2 className="text-2xl font-semibold group-hover:text-muted-foreground transition-colors">
              {a.title}
            </h2>
            <ArrowUpRight size={22} />
          </div>
          <p className="text-muted-foreground leading-7 mt-3">{a.excerpt}</p>
          <span className="eyebrow-tag mt-5">{a.category}</span>
        </Link>
      ))}
      {!filtered.length && (
        <p className="py-16 text-muted-foreground text-center">No articles found.</p>
      )}
    </>
  );
}