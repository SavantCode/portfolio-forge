import { createFileRoute } from "@tanstack/react-router";
import { Download, Printer, Mail, MapPin } from "lucide-react";
import { PageHeading } from "@/components/portfolio/page-heading";
import { Button } from "@/components/ui/button";
import { profile, experiences, projects } from "@/data/portfolio";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/resume")({
  head: () =>
    pageHead("Resume", "Alex Morgan’s experience, projects, education, and technical skills."),
  component: Resume,
});
function Resume() {
  return (
    <>
      <PageHeading
        title="Resume"
        description="A snapshot of my experience, skills, and things I've built."
      />
      <div className="resume-toolbar">
        <span className="text-sm text-muted-foreground">Last updated October 2026</span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => window.print()}>
            <Printer /> Print
          </Button>
          <Button asChild size="sm">
            <a href="/alex-morgan-resume.txt" download>
              <Download /> Download CV
            </a>
          </Button>
        </div>
      </div>
      <div className="resume-paper">
        <header>
          <h2>{profile.name}</h2>
          <p>Full-stack Developer</p>
          <div className="resume-contact">
            <span>
              <Mail size={12} /> {profile.email}
            </span>
            <span>
              <MapPin size={12} /> {profile.location}
            </span>
          </div>
        </header>
        <section>
          <h3>Profile</h3>
          <p>
            Full-stack developer with a passion for crafting accessible, performant web
            applications. Experienced in React, TypeScript, Node.js, and building products from
            concept to launch.
          </p>
        </section>
        <section>
          <h3>Experience</h3>
          {experiences.map((e) => (
            <article key={e.company}>
              <div className="flex justify-between gap-4">
                <strong>{e.company}</strong>
                <span>{e.period}</span>
              </div>
              <div className="flex justify-between gap-4 italic">
                <span>{e.role}</span>
                <span>{e.location}</span>
              </div>
              <ul>
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
        <section>
          <h3>Selected Projects</h3>
          {projects.slice(0, 3).map((p) => (
            <article key={p.slug}>
              <strong>{p.name}</strong>
              <span> | {p.stack.slice(0, 3).join(", ")}</span>
              <p>{p.description}</p>
            </article>
          ))}
        </section>
        <section>
          <h3>Technical Skills</h3>
          <p>
            <strong>Languages:</strong> TypeScript, JavaScript, HTML, CSS, SQL
          </p>
          <p>
            <strong>Frontend:</strong> React, Next.js, Tailwind CSS, Radix UI
          </p>
          <p>
            <strong>Backend & Tools:</strong> Node.js, PostgreSQL, Redis, Docker, Git, Figma
          </p>
        </section>
        <section>
          <h3>Education</h3>
          <div className="flex justify-between gap-4">
            <strong>B.Tech in Computer Science</strong>
            <span>2020 — 2024</span>
          </div>
          <p>National Institute of Technology · India</p>
        </section>
      </div>
    </>
  );
}
