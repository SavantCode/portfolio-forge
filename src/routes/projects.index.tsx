import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeading } from "@/components/portfolio/page-heading";
import { ProjectRow } from "@/components/portfolio/project-row";
import { Button } from "@/components/ui/button";
import { projects, categories, type Category } from "@/data/portfolio";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/projects/")({
  head: () =>
    pageHead(
      "Projects",
      "Selected web applications, open-source tools, and experiments by Rahul Kushwaha.",
    ),
  component: Projects,
});
function Projects() {
  const [category, setCategory] = useState<Category>("All Projects");
  const filtered = projects.filter(
    (p) => category === "All Projects" || p.categories.includes(category),
  );
  return (
    <>
      <PageHeading
        title="Projects"
        description="Web experiences, open-source tools, and ideas brought to life."
      />
      <div className="filter-bar">
        {categories.map((c) => (
          <Button
            key={c}
            variant={category === c ? "default" : "secondary"}
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className="filter-button"
          >
            {c}
            <span>
              {c === "All Projects"
                ? projects.length
                : projects.filter((p) => p.categories.includes(c)).length}
            </span>
          </Button>
        ))}
      </div>
      <div className="flex justify-between items-center mt-7 mb-3">
        <h2 className="text-xl font-semibold">Selected Projects</h2>
        <span className="text-sm text-muted-foreground">Showing {filtered.length} projects</span>
      </div>
      {filtered.map((p) => (
        <ProjectRow key={p.slug} project={p} />
      ))}
    </>
  );
}
