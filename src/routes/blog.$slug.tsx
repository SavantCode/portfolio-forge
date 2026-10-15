import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { articles } from "@/data/portfolio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) =>
    pageHead(
      loaderData?.title ?? "Article unavailable",
      loaderData?.excerpt ?? "Notes by Rahul Kushwaha.",
    ),
  component: Article,
});

function Article() {
  const article = Route.useLoaderData();

  return (
    <>
      <Link to="/blog" className="subtle-link mb-10">
        <ArrowLeft size={16} /> All writing
      </Link>
      
      <span className="eyebrow-tag">{article.category}</span>
      <h1 className="case-title">{article.title}</h1>
      
      <p className="text-muted-foreground mt-4">
        {article.date} · {article.readTime}
      </p>
      
      <p className="case-description">{article.excerpt}</p>

      {/* Joins your paragraph array into a single markdown stream so headers & code blocks render properly */}
      <div className="prose-content border-t border-border pt-8 mt-8">
        <ReactMarkdown>{article.paragraphs.join("\n\n")}</ReactMarkdown>
      </div>
    </>
  );
}