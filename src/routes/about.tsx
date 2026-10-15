import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/portfolio/page-heading";
import { SocialLinks } from "@/components/portfolio/site-shell";
import { pageHead } from "@/lib/seo";
import portrait from "@/assets/profile.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead("About", "Meet Rahul Kushwaha, software developer focused on system design, backend craftsmanship, and full-stack engineering."),
  component: About,
});

function About() {
  return (
    <>
      <PageHeading
        title="About"
        description="A software developer focused on backend systems, full-stack craft, and problem-solving."
      />
      
      <div className="about-content">
        <img 
          src={portrait} 
          width={160} 
          height={160} 
          alt="Rahul Kushwaha" 
          className="rounded-full object-cover border border-border shadow-sm" 
        />
        
        <div className="prose-content">
          <h2>Hey, I'm Rahul.</h2>
          
          <p>
            I'm a full-stack software developer who loves building performant web applications and exploring distributed system architectures. I bridge the gap between intuitive user experiences on the frontend and scalable, robust systems on the backend.
          </p>

          <h3>What I'm Currently Focused On</h3>
          <p>
            Right now, I spend a significant amount of my time sharpening my core engineering fundamentals:
          </p>
          <ul>
            <li>
              <strong>Data Structures & Algorithms:</strong> Consistently solving algorithmic challenges using <strong>Java</strong> and exploring idiomatic patterns in <strong>Go</strong>.
            </li>
            <li>
              <strong>Backend with Go:</strong> Deepening my knowledge of Go concurrency models, goroutines, channels, and building low-latency HTTP services.
            </li>
            <li>
              <strong>System Design:</strong> Studying high-scale architecture—exploring caching strategies, message queues, rate limiting, and database sharding patterns.
            </li>
          </ul>

          <h3>Core Expertise & Technical Toolkit</h3>
          <p>
            Over my projects and engineering journey, I've developed expertise across a variety of technologies and paradigms:
          </p>
          <ul>
            <li>
              <strong>Languages:</strong> Java, TypeScript, JavaScript, Go (Golang), SQL, Python.
            </li>
            <li>
              <strong>Frontend Development:</strong> React, Next.js, TanStack Router, Tailwind CSS, State Management.
            </li>
            <li>
              <strong>Backend & Infrastructure:</strong> Node.js, Express, REST APIs, WebSockets, MongoDB, PostgreSQL, Redis, Docker, Git/GitHub.
            </li>
            <li>
              <strong>Engineering Principles:</strong> Object-Oriented Design (SOLID), Clean Architecture, Microservices, and Automated Processing Pipelines.
            </li>
          </ul>

          <p>
            Outside of programming, you can usually find me practicing German, reading engineering blogs, going for long walks, or brainstorming fresh project ideas.
          </p>

          <div className="pt-4 border-t border-border mt-8">
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
}