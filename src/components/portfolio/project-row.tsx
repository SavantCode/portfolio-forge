import { Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Braces, Layers, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/portfolio";
const icons = [Code2, Braces, Layers, Database];
export function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="project-row group">
      <Link to="/projects/$slug" params={{ slug: project.slug }} className="project-image">
        <img
          src={project.image}
          alt={`${project.name} product preview`}
          width={1440}
          height={912}
          loading="lazy"
        />
      </Link>
      <div>
        <span className="eyebrow-tag">{project.label}</span>
        <h3 className="mt-3 text-2xl font-semibold">
          <Link to="/projects/$slug" params={{ slug: project.slug }}>
            {project.name}
          </Link>
        </h3>
        <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex gap-2 mt-5">
          {project.stack.slice(0, 3).map((tech, index) => {
            const Icon = icons[index] ?? Code2;
            return (
              <span key={tech} title={tech} className="tech-icon">
                <Icon size={22} />
                <span className="sr-only">{tech}</span>
              </span>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center gap-5 mt-5">
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <Link to="/projects/$slug" params={{ slug: project.slug }}>
              View project <ArrowRight />
            </Link>
          </Button>
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            search={{ preview: true }}
            className="subtle-link"
          >
            <Globe size={15} /> Preview
          </Link>
        </div>
      </div>
    </article>
  );
}
