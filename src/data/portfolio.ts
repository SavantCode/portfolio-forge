import formflow from "@/assets/formflow.jpg";
import storefront from "@/assets/storefront.jpg";

export const profile = {
  name: "Alex Morgan",
  role: "Full-stack Developer",
  location: "Bengaluru, India",
  bio: "I build thoughtful digital experiences — from intuitive interfaces to reliable systems. Focused on modern web development, open source, and the little details that make a product feel right.",
  email: "hello@example.com",
};
export const experiences = [
  {
    company: "Vercel",
    role: "Frontend Developer",
    period: "July 2025 — Present",
    location: "Remote",
    current: true,
    description:
      "Building fast, accessible web experiences and developer tools. Working across React, TypeScript, and design systems to turn complex problems into simple interfaces.",
    highlights: [
      "Developed reusable components used across 4 product teams.",
      "Improved Core Web Vitals and reduced page load time by 38%.",
      "Collaborated with designers to ship accessible, pixel-perfect interfaces.",
    ],
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    company: "Studio North",
    role: "Full-stack Developer",
    period: "Jan 2024 — June 2025",
    location: "Bengaluru, India",
    current: false,
    description:
      "Worked with a small, multidisciplinary team to bring early-stage ideas to life. Owned features from the database to the final interaction.",
    highlights: [
      "Shipped 6 production web applications for early-stage startups.",
      "Built API integrations, authentication, and real-time features.",
      "Created a shared design system that cut development time by 25%.",
    ],
    tags: ["Next.js", "Node.js", "PostgreSQL", "Figma"],
  },
  {
    company: "Pixelworks",
    role: "Web Developer Intern",
    period: "June 2023 — Dec 2023",
    location: "Remote",
    current: false,
    description:
      "My first step into building for the real world. Developed responsive websites and learned how great teams design, build, and ship.",
    highlights: [
      "Built responsive websites with a focus on accessibility.",
      "Contributed to code reviews and improved the component library.",
    ],
    tags: ["JavaScript", "React", "CSS"],
  },
];
export const categories = [
  "All Projects",
  "Full Stack",
  "Frontend",
  "Backend",
  "Open Source",
] as const;
export type Category = (typeof categories)[number];
export interface Project {
  slug: string;
  name: string;
  label: string;
  description: string;
  image: string;
  categories: Category[];
  stack: string[];
  status: string;
  year: string;
  role: string;
  challenges: string[];
  learnings: string[];
  overview: string;
}
export const projects: Project[] = [
  {
    slug: "formflow",
    name: "FormFlow",
    label: "Open-source form builder",
    description:
      "An intuitive, drag-and-drop form builder with real-time previews, conditional logic, and a developer-friendly API.",
    image: formflow,
    categories: ["Full Stack", "Open Source"],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    status: "In progress",
    year: "2026",
    role: "Creator / Maintainer",
    challenges: [
      "Drag-and-drop interactions",
      "Schema-driven rendering",
      "Real-time collaboration",
      "Accessible form controls",
    ],
    learnings: [
      "Component architecture",
      "State management",
      "API design",
      "Performance optimization",
    ],
    overview:
      "FormFlow is an open-source form-building platform that makes collecting information feel effortless. It combines a visual editor, type-safe form schemas, and a flexible API in one thoughtfully designed workspace.",
  },
  {
    slug: "storefront",
    name: "Storefront",
    label: "Full-stack commerce",
    description:
      "A modern commerce experience with a headless storefront, seamless checkout, and a thoughtful product discovery flow.",
    image: storefront,
    categories: ["Full Stack", "Frontend"],
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    status: "Completed",
    year: "2025",
    role: "Designer / Developer",
    challenges: [
      "Product search and filtering",
      "Checkout state",
      "Image optimization",
      "Order management",
    ],
    learnings: ["Headless commerce", "Server rendering", "Payment integrations", "Design systems"],
    overview:
      "Storefront is a full-stack commerce application built around a simple idea: shopping should be clear, fast, and enjoyable. Every interaction is designed to get out of the way and let the products speak.",
  },
  {
    slug: "devlog",
    name: "DevLog",
    label: "Publishing platform",
    description:
      "A minimal publishing space for developers. Write in Markdown, share what you learn, and build your own corner of the internet.",
    image: formflow,
    categories: ["Full Stack", "Open Source"],
    stack: ["Next.js", "MDX", "Prisma"],
    status: "Completed",
    year: "2025",
    role: "Creator / Maintainer",
    challenges: ["MDX content pipeline", "Full-text search", "SEO and social previews"],
    learnings: ["Content architecture", "Static generation", "Developer experience"],
    overview:
      "DevLog is a lightweight publishing platform built for developers who want to focus on writing. It brings Markdown, code highlighting, and a clean reading experience together.",
  },
  {
    slug: "component-lab",
    name: "Component Lab",
    label: "Frontend toolkit",
    description:
      "An accessible collection of carefully crafted React components, with interactive documentation and theme support.",
    image: storefront,
    categories: ["Frontend", "Open Source"],
    stack: ["React", "TypeScript", "Radix UI"],
    status: "Completed",
    year: "2025",
    role: "Creator / Maintainer",
    challenges: ["Keyboard accessibility", "Composable APIs", "Theme consistency"],
    learnings: ["Accessible primitives", "Library distribution", "Documentation"],
    overview:
      "Component Lab explores how small, composable primitives can create a consistent product experience. Each component is accessible, documented, and built to be adapted.",
  },
  {
    slug: "relay",
    name: "Relay",
    label: "Backend infrastructure",
    description:
      "A type-safe API starter with authentication, background jobs, and observability. A reliable foundation for your next idea.",
    image: formflow,
    categories: ["Backend", "Open Source"],
    stack: ["Node.js", "TypeScript", "Redis", "Docker"],
    status: "In progress",
    year: "2026",
    role: "Backend Developer",
    challenges: ["Job retries", "Rate limiting", "Authentication boundaries"],
    learnings: ["Distributed systems", "API contracts", "Observability"],
    overview:
      "Relay is a backend starter that handles the unglamorous but essential parts of a production application: identity, background work, and knowing what is happening.",
  },
];
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  paragraphs: string[];
}
export const articles: Article[] = [
  {
    slug: "interfaces-that-feel-right",
    title: "Building interfaces that feel right",
    excerpt:
      "The small decisions behind a great user experience — spacing, feedback, and a little bit of restraint.",
    category: "Design Engineering",
    date: "Oct 8, 2026",
    readTime: "6 min read",
    paragraphs: [
      "The best interfaces rarely draw attention to themselves. They make the next step clear, acknowledge what just happened, and leave enough room for the content to breathe.",
      "When I start a new interface, I begin with the content. A strong hierarchy tells the reader what matters before color or motion enters the conversation.",
      "Feedback is the next layer. A button should respond immediately, an action should have a clear outcome, and a loading state should never leave someone guessing.",
      "Finally, I remove what does not need to be there. A good interface is not the one with the most details. It is the one where every detail earns its place.",
    ],
  },
  {
    slug: "scalable-react-architecture",
    title: "A practical approach to React architecture",
    excerpt:
      "A clean folder structure is only the beginning. Here’s how I think about boundaries, reuse, and growing a codebase.",
    category: "Development",
    date: "Sep 24, 2026",
    readTime: "8 min read",
    paragraphs: [
      "Architecture is about making change easier. You do not need a complicated folder structure to achieve that, but you do need clear boundaries.",
      "I separate content from presentation, keep domain logic close to the features that use it, and reach for shared abstractions only after a pattern repeats.",
      "Components should expose meaningful interfaces. Avoid passing a dozen flags when a small composition can express the same idea more clearly.",
      "The best structure is one the whole team can explain. Start simple, keep the boundaries visible, and let the codebase tell you when it needs to evolve.",
    ],
  },
  {
    slug: "web-performance",
    title: "Making the web a little faster",
    excerpt:
      "Lessons from improving Core Web Vitals on a real-world application. Less JavaScript, better images, happier users.",
    category: "Development",
    date: "Sep 10, 2026",
    readTime: "5 min read",
    paragraphs: [
      "Performance is part of the user experience, not a separate checklist. Every unnecessary request asks someone to wait.",
      "Measure before changing anything. Real-user metrics and a few carefully chosen traces will reveal far more than guesswork.",
      "Images, fonts, and JavaScript are often the largest opportunities. Give images stable dimensions, load only what is needed, and keep critical content close to the first response.",
      "Small improvements compound. A faster page gives every other design decision a better chance to work.",
    ],
  },
];
