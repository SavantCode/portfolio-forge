import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, Send, ArrowUpRight, MapPin } from "lucide-react";
import portrait from "@/assets/profile.jpg";
import { profile, projects, articles } from "@/data/portfolio";
import { ExperienceList } from "@/components/portfolio/experience-list";
import { ProjectRow } from "@/components/portfolio/project-row";
import { SocialLinks } from "@/components/portfolio/site-shell";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Full-stack Developer",
      "Rahul Kushwaha — building thoughtful digital experiences, modern web applications, and open-source tools.",
    ),
  component: Home,
});
function Home() {
  return (
    <>
      <section className="profile-hero">
        <div className="hero-dots" />
        <div className="profile-heading">
          <img
            className="profile-photo"
            src={portrait}
            width={128}
            height={128}
            alt="Rahul Kushwaha"
          />
          <div>
            <div className="availability">
              <span /> Available for interesting projects
            </div>
            <h1>
              {profile.name}
              <span className="name-period">.</span>
            </h1>
            <p className="profile-role">{profile.role}</p>
          </div>
        </div>
        <p className="profile-bio">{profile.bio}</p>
        <div className="hero-actions">
          <Button asChild variant="outline" size="lg">
            <Link to="/resume">
              <FileText /> Resume / CV
            </Link>
          </Button>
          <Button asChild size="lg">
            <Link to="/projects">
              <Send /> Explore Projects
            </Link>
          </Button>
        </div>
        <SocialLinks />
        <span className="hero-location">
          <MapPin size={13} /> {profile.location}
        </span>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span>Selected</span>
            <h2>Experience</h2>
          </div>
          <Link to="/work">
            View all <ArrowUpRight size={16} />
          </Link>
        </div>
        <ExperienceList compact />
      </section>
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span>Things I've built</span>
            <h2>Featured Projects</h2>
          </div>
          <Link to="/projects">
            All projects <ArrowUpRight size={16} />
          </Link>
        </div>
        {projects.slice(0, 2).map((p) => (
          <ProjectRow key={p.slug} project={p} />
        ))}
      </section>
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span>Thoughts & explorations</span>
            <h2>Latest Writing</h2>
          </div>
          <Link to="/blog">
            All writing <ArrowUpRight size={16} />
          </Link>
        </div>
        {articles.slice(0, 2).map((a) => (
          <Link className="home-article" key={a.slug} to="/blog/$slug" params={{ slug: a.slug }}>
            <div>
              <span>
                {a.date} · {a.readTime}
              </span>
              <h3>{a.title}</h3>
            </div>
            <ArrowRight size={20} />
          </Link>
        ))}
      </section>
      <section className="get-in-touch">
        <span className="text-sm text-muted-foreground">Have something in mind?</span>
        <h2>Let's build something good.</h2>
        <a href={`mailto:${profile.email}`} className="subtle-link">
          Say hello <ArrowUpRight size={18} />
        </a>
      </section>
    </>
  );
}
