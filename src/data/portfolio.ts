import formflow from "@/assets/formflow.jpg";
import storefront from "@/assets/storefront.jpg";
// project socially
import sociallyImg from "@/assets/project-images/socially.png";

//project chatty
import chattyImg from "@/assets/project-images/chatty/chatty.jpg"
import chattyImg2 from "@/assets/project-images/chatty/chatty_2.jpg"
import chattyImg3 from "@/assets/project-images/chatty/chatty_3.jpg"
import chattyImg4 from "@/assets/project-images/chatty/chatty_4.jpg"
import chattyImg5 from "@/assets/project-images/chatty/chatty_5.jpg"
//project northwind
import northWind_1 from "@/assets/project-images/ecommerce/ecommerce_1.jpg"
import northWind_2 from "@/assets/project-images/ecommerce/ecommerce_2.jpg"
import northWind_3 from "@/assets/project-images/ecommerce/ecommerce_3.jpg"
import northWind_4 from "@/assets/project-images/ecommerce/ecommerce_4.jpg"
import northWind_5 from "@/assets/project-images/ecommerce/ecommerce_5.jpg"
export const profile = {
  name: "Rahul Kushwaha",
  role: "Full-stack Developer",
  location: "Bengaluru, India",
  bio: "I build thoughtful digital experiences — from intuitive interfaces to reliable systems. Focused on modern web development, open source, and the little details that make a product feel right.",
  email: "rahulkcoding2023@gmail.com",
};
export const experiences = [
  {
    company: "Self-Employed",
    role: "Full Stack Developer",
    period: "July 2024 — Present",
    location: "Remote",
    current: true,
    description:
      "Building fast, accessible web experiences and developer tools. Working across React, TypeScript, and design systems to turn complex problems into simple interfaces.",
    highlights: [
      "Architected and delivered scalable full-stack web applications tailored to client requirements using React, Next.js, and Node.js.",
      "Improved Core Web Vitals and reduced initial page load times by 38% through performance optimization and code-splitting.",
      "Built reusable, accessible component systems and integrated robust REST APIs for seamless user experiences.",
      "Collaborated directly with client stakeholders and design teams to ship pixel-perfect, responsive interfaces."
    ],
    tags: ["React", "TypeScript","Next.Js", "Tailwind CSS", "PostgreySQL", "MongoDB", "Node.Js"],
  },
  // {
  //   company: "Vercel",
  //   role: "Frontend Developer",
  //   period: "July 2025 — Present",
  //   location: "Remote",
  //   current: false,
  //   description:
  //     "Building fast, accessible web experiences and developer tools. Working across React, TypeScript, and design systems to turn complex problems into simple interfaces.",
  //   highlights: [
  //     "Developed reusable components used across 4 product teams.",
  //     "Improved Core Web Vitals and reduced page load time by 38%.",
  //     "Collaborated with designers to ship accessible, pixel-perfect interfaces.",
  //   ],
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  // },
  // {
  //   company: "Studio North",
  //   role: "Full-stack Developer",
  //   period: "Jan 2024 — June 2025",
  //   location: "Bengaluru, India",
  //   current: false,
  //   description:
  //     "Worked with a small, multidisciplinary team to bring early-stage ideas to life. Owned features from the database to the final interaction.",
  //   highlights: [
  //     "Shipped 6 production web applications for early-stage startups.",
  //     "Built API integrations, authentication, and real-time features.",
  //     "Created a shared design system that cut development time by 25%.",
  //   ],
  //   tags: ["Next.js", "Node.js", "PostgreSQL", "Figma"],
  // },
  // {
  //   company: "Pixelworks",
  //   role: "Web Developer Intern",
  //   period: "June 2023 — Dec 2023",
  //   location: "Remote",
  //   current: false,
  //   description:
  //     "My first step into building for the real world. Developed responsive websites and learned how great teams design, build, and ship.",
  //   highlights: [
  //     "Built responsive websites with a focus on accessibility.",
  //     "Contributed to code reviews and improved the component library.",
  //   ],
  //   tags: ["JavaScript", "React", "CSS"],
  // },
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
  image: string; // Assuming image imports exist in your file
  // image: string;          // Keep for backwards compatibility (thumbnail/primary)
  images?: string[];
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
    slug: "socially",
    name: "Socially",
    label: "Full-stack social platform",
    description:
      "A feature-rich social media web application enabling real-time feed updates, user interactions, media sharing, and role-based engagement.",
    image: sociallyImg, // Replace with your image import variable
    images: [sociallyImg], // All functional screenshots here
    categories: ["Full Stack", "Frontend"],
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
    status: "Completed",
    year: "2025",
    role: "Full Stack Developer",
    challenges: [
      "Optimizing feed queries for nested user interactions and comments",
      "Handling media uploads with secure asynchronous cloud storage",
      "Implementing instant real-time notifications for post interactions",
      "Managing complex client-side state for like and bookmark actions",
    ],
    learnings: [
      "Database indexing and aggregation pipelines",
      "JWT authentication & session persistence",
      "Responsive layout engineering with Tailwind CSS",
      "Optimistic UI updates for seamless user feedback",
    ],
    overview:
      "Socially is a full-stack social networking application built to deliver smooth community interactions. It brings together user authentication, dynamic feed management, media sharing, and instant engagement features within a modern, responsive web experience.",
  },
  {
    slug: "chatty",
    name: "Chatty",
    label: "Real-time chat platform",
    description:
      "An instant messaging platform supporting real-time direct messaging, online status tracking, and media sharing via WebSockets.",
    image: chattyImg, // Replace with your image import variable
    images: [chattyImg,chattyImg5, chattyImg2, chattyImg3, chattyImg4],
    categories: ["Full Stack", "Backend"],
    stack: ["React", "Node.js", "Express.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    status: "Completed",
    year: "2025",
    role: "Full Stack Developer",
    challenges: [
      "Managing low-latency WebSocket connection lifecycles",
      "Syncing offline and online user presence in real time",
      "Handling unread message counts and active chat room states",
      "Securing Socket.io handshakes with JWT authentication",
    ],
    learnings: [
      "Event-driven architecture with WebSockets",
      "Managing real-time application state in React",
      "Designing scalable chat schemas and indexing strategies",
      "Error handling and connection auto-reconnects",
    ],
    overview:
      "Chatty is a modern messaging web application engineered for instant communication. Powered by Socket.io and Node.js, it provides users with seamless real-time messaging, typing indicators, presence status, and an intuitive clean user interface.",
  },
  {
    slug: "shopflow", // or whatever slug you prefer
    name: "ShopFlow",
    label: "Full-stack E-commerce & SaaS platform",
    description:
      "A feature-rich full-stack e-commerce application equipped with real-time customer support chat, video calling, secure payments, and production-grade monitoring.",
    image: northWind_1, // Replace with your image import variable
    images: [northWind_1, northWind_2, northWind_3, northWind_4, northWind_5], // Optional multi-image gallery support
    categories: ["Full Stack", "Frontend", "Backend"],
    stack: [
      "React",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "DaisyUI",
      "Clerk",
      "Polar",
      "Stream",
      "ImageKit",
      "Sentry",
    ],
    status: "Completed",
    year: "2026",
    role: "Full Stack Developer",
    challenges: [
      "Integrating secure real-time messaging and video calling infrastructure using Stream",
      "Implementing reliable Stripe/Polar payment webhooks and order lifecycle management",
      "Optimizing cloud media uploads and image delivery workflows with ImageKit",
      "Setting up comprehensive error tracking and performance monitoring via Sentry",
    ],
    learnings: [
      "Event-driven webhook handling and signature verification",
      "Type-safe backend architecture with Node.js, Express, and TypeScript",
      "Advanced database management using PostgreSQL hosted on Neon",
      "Building resilient SaaS application logging and error reporting systems",
    ],
    overview:
      "ShopFlow is an enterprise-grade full-stack e-commerce and communication platform built from scratch. It seamlessly combines traditional product, cart, and order management with modern SaaS features—including real-time customer support chat, video calling, secure authentication via Clerk, and robust production monitoring.",
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
    slug: "understanding-mongodb-nosql",
    title: "Why MongoDB? A Quick Guide to NoSQL Databases",
    excerpt: "Understand document-based databases, flexible schemas, and when to choose MongoDB for your web applications.",
    category: "Database",
    date: "Oct 15, 2026",
    readTime: "3 min read",
    paragraphs: [
      "MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents (BSON) rather than rigid rows and columns.",
      
      `### Key Advantages of MongoDB\n\n* **Flexible Schema:** Each document can have different fields, making it easy to evolve your data structure as your app grows.\n* **JSON-Like Documents:** Data maps naturally to objects in JavaScript and TypeScript, reducing the need for complex ORM mapping.\n* **Horizontal Scalability:** Designed to scale out across multiple servers easily using sharding.`,

      "### When Should You Use It?\n\nMongoDB is ideal for content management systems, real-time analytics, catalogs, and rapid MVP development where requirements change frequently."
    ],
  },
  {
    slug: "why-backend-form-validation-matters",
    title: "Why Frontend Validation Isn't Enough: Backend Form Checks",
    excerpt: "Never trust client input. Learn why validating data on the server side is critical for security and data integrity.",
    category: "Security",
    date: "Oct 10, 2026",
    readTime: "3 min read",
    paragraphs: [
      "While frontend validation (like HTML5 or React form checks) gives users instant feedback, it can easily be bypassed using tools like Postman, cURL, or disabled JavaScript.",
      
      `### Why Backend Validation is Mandatory\n\n* **Security Protection:** Prevents malicious payloads, SQL/NoSQL injection, and XSS attacks from reaching your database.\n* **Data Integrity:** Ensures that even if someone bypasses your UI, your database only receives clean, expected data types.\n* **Business Logic Enforcement:** Double-checks permissions, uniqueness (like duplicate emails), and constraints.`,

      "**Rule of Thumb:** Always validate and sanitize user input on the server side, no matter how strict your frontend validation is."
    ],
  },
  {
    slug: "mastering-react-use-effect",
    title: "Demystifying React useEffect: A Simple Guide",
    excerpt: "Learn how to manage side effects, dependency arrays, and cleanup functions in React functional components.",
    category: "Frontend",
    date: "Oct 05, 2026",
    readTime: "4 min read",
    paragraphs: [
      "The `useEffect` hook lets you perform side effects in your components, such as fetching data, updating the DOM, or setting up subscriptions.",
      
      `### Understanding the Dependency Array\n\n* **No Array:** Runs after *every* single render.\n* **Empty Array \`[]\`:** Runs only *once* when the component mounts.\n* **Array with Variables \`[userId]\*:** Runs on mount and whenever any dependency value changes.`,

      "### Cleanup Functions\n\nIf your effect sets up a timer or event listener, return a cleanup function to prevent memory leaks when the component unmounts:\n\n\`\`\`javascript\nuseEffect(() => {\n  const timer = setInterval(() => console.log('Tick'), 1000);\n  return () => clearInterval(timer); // Cleanup\n}, []);\n\`\`\`"
    ],
  },
  {
    slug: "building-rest-apis-with-express",
    title: "Building Clean REST APIs with Node.js and Express",
    excerpt: "A straightforward introduction to routing, HTTP methods, and JSON responses in Express.js.",
    category: "Backend",
    date: "Sep 28, 2026",
    readTime: "3 min read",
    paragraphs: [
      "Express.js is a minimal and flexible Node.js framework that makes building robust backend servers and REST APIs fast and simple.",
      
      `### Core HTTP Methods\n\n* **GET:** Retrieve data from the server.\n* **POST:** Create new resources.\n* **PUT / PATCH:** Update existing resources.\n* **DELETE:** Remove resources.`,

      "By structuring your Express app with clean separation of concerns (routes, controllers, and database models), you keep your backend maintainable as it scales."
    ],
  },
  {
    slug: "essential-git-workflow-for-developers",
    title: "Essential Git Workflow for Developers",
    excerpt: "Keep your project history clean and collaborate smoothly with core Git commands and branching tips.",
    category: "Tools",
    date: "Sep 20, 2026",
    readTime: "3 min read",
    paragraphs: [
      "Version control is essential for tracking changes and collaborating with other developers without stepping on each other's toes.",
      
      `### Daily Best Practices\n\n* **Meaningful Commits:** Write clear, concise commit messages (e.g., \`fix: resolve user login token expiration\`).\n* **Feature Branches:** Never code directly on \`main\`. Create a new branch for every feature or bug fix.\n* **Pull Requests:** Review code changes thoroughly before merging back into production.`,

      "A clean Git history makes debugging and tracking down regressions much faster and stress-free."
    ],
  },
];