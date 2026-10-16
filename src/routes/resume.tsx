import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  ExternalLink,
  Mail,
  Github,
  Globe,
  MapPin,
  Briefcase,
  FolderGit2,
  Trophy,
  GraduationCap,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { PageHeading } from "@/components/portfolio/page-heading";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/resume")({
  head: () =>
    pageHead("Resume", "Rahul Kushwaha's official resume and CV."),
  component: ResumePage,
});

function ResumePage() {
  const pdfUrl = "/rahul-kushwaha-resume.pdf";

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Top Action Bar */}
      <div className="resume-toolbar mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-6">
        <PageHeading
          title="Resume"
          description="Interactive online CV & official document."
        />
        <div className="flex gap-2.5 w-full sm:w-auto">
          <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
            <a href={pdfUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" /> Open PDF
            </a>
          </Button>
          <Button size="sm" className="w-full sm:w-auto" asChild>
            <a href={pdfUrl} download="Rahul_Kushwaha_Resume.pdf">
              <Download className="w-4 h-4 mr-2" /> Download PDF
            </a>
          </Button>
        </div>
      </div>

      {/* Printable Resume Container */}
      <article className="p-6 md:p-10 border border-border/80 rounded-2xl bg-card text-card-foreground shadow-lg space-y-8 print:bg-white print:text-black print:border-none print:shadow-none print:p-0">

        {/* Header */}
        <header className="border-b pb-6 space-y-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Rahul Kushwaha</h1>
              <p className="text-base font-semibold text-primary mt-1">
                Full-Stack Software Developer & Final-Year IT Student
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground pt-1">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" /> India
            </span>
            <a
              href="mailto:rahulkcoding2023@gmail.com"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" /> rahulkcoding2023@gmail.com
            </a>
            <a
              href="https://github.com/SavantCode"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4 text-primary" /> github.com/SavantCode
            </a>
            <a
              href="https://portfolio.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Globe className="w-4 h-4 text-primary" /> portfolio.com
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="space-y-2.5">
          <h2 className="text-lg font-semibold flex items-center gap-2 border-b pb-1.5">
            <Code2 className="w-5 h-5 text-primary" /> Professional Summary
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Final-year Information Technology student with a strong foundation in Data Structures, Algorithms,
            Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks. Experienced in building
            scalable full-stack applications using Java, TypeScript, React.js, Next.js, Node.js, PostgreSQL, and REST APIs.
            Solved 650+ problems on LeetCode and demonstrated a strong track record of end-to-end software delivery,
            rapid technology adoption, and technical problem-solving in fast-paced engineering environments.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold flex items-center gap-2 border-b pb-1.5">
            <Code2 className="w-5 h-5 text-primary" /> Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 border rounded-lg bg-muted/30">
              <span className="font-semibold text-foreground">Languages:</span>{" "}
              <span className="text-muted-foreground">Java, JavaScript, TypeScript, SQL, Python</span>
            </div>
            <div className="p-3 border rounded-lg bg-muted/30">
              <span className="font-semibold text-foreground">Frontend:</span>{" "}
              <span className="text-muted-foreground">React.js, Next.js, HTML5, CSS3, Tailwind CSS</span>
            </div>
            <div className="p-3 border rounded-lg bg-muted/30">
              <span className="font-semibold text-foreground">Backend & DB:</span>{" "}
              <span className="text-muted-foreground">Node.js, Express.js, REST APIs, Socket.IO, MongoDB, PostgreSQL, SQL, Prisma ORM</span>
            </div>
            <div className="p-3 border rounded-lg bg-muted/30">
              <span className="font-semibold text-foreground">Tools & Concepts:</span>{" "}
              <span className="text-muted-foreground">Git, GitHub, VS Code, Data Structures & Algorithms, OOP, DBMS, OS, Computer Networks</span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2 border-b pb-1.5">
            <Briefcase className="w-5 h-5 text-primary" /> Experience
          </h2>

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center">
              <h3 className="font-semibold text-base">
                Freelance Full-Stack Developer <span className="text-xs text-muted-foreground font-normal">| Self-Employed (Remote)</span>
              </h3>
              <span className="text-xs font-medium text-muted-foreground">2024 – Present</span>
            </div>
            <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-1.5">
              <li>
                Engineered a full-stack Travel Itinerary Platform using the MERN Stack, implementing role-based access control for agents and administrators, dynamic trip builders, and automated client itinerary generation, reducing customized itinerary creation time by 30%.
              </li>
              <li>
                Developed responsive, conversion-focused landing pages for Android applications and local businesses using React.js, Next.js, and Tailwind CSS, with a focus on performance, responsiveness, and user experience.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-5">
          <h2 className="text-lg font-semibold flex items-center gap-2 border-b pb-1.5">
            <FolderGit2 className="w-5 h-5 text-primary" /> Projects
          </h2>

          {/* Project 1 */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center">
              <h3 className="font-semibold text-base">
                Socialy <span className="text-xs font-mono font-normal text-muted-foreground">/ Next.js, TypeScript, Prisma, PostgreSQL</span>
              </h3>
              <span className="text-xs font-medium text-muted-foreground">2026</span>
            </div>
            <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-1.5">
              <li>Built a full-stack social networking platform inspired by Twitter/X using Next.js, TypeScript, Prisma ORM, and PostgreSQL, supporting user profiles, posts, interactions, and personalized feeds.</li>
              <li>Implemented secure authentication, user profile management, posts, likes, comments, and dynamic feeds with optimized REST APIs for efficient data retrieval and user interactions.</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center">
              <h3 className="font-semibold text-base">
                Chatty <span className="text-xs font-mono font-normal text-muted-foreground">/ React.js, Node.js, Express.js, MongoDB, Socket.IO</span>
              </h3>
              <span className="text-xs font-medium text-muted-foreground">2026</span>
            </div>
            <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-1.5">
              <li>Developed a full-stack real-time messaging platform using the MERN Stack and Socket.IO, enabling secure login/logout, profile management, and direct communication between team members.</li>
              <li>Implemented real-time messaging, active/inactive user presence, three-dot typing indicators, image and media sharing, and message updates using event-driven communication.</li>
              <li>Added customizable chat themes and interactive messaging features while designing optimized REST APIs, JWT authentication, and MongoDB schemas for scalable backend performance.</li>
            </ul>
          </div>
        </section>

        {/* Achievements */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold flex items-center gap-2 border-b pb-1.5">
            <Trophy className="w-5 h-5 text-primary" /> Achievements
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Solved <strong>650+ LeetCode problems</strong>, demonstrating proficiency in Data Structures & Algorithms.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Secured <strong>Runner-Up at HackCrux 3.0</strong> by developing a scalable Contract Farming Platform.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Selected as a <strong>Finalist at HackJEC 2024</strong> for designing a Student Management System.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Ranked among the <strong>Top 20 teams</strong> in the Smart India Hackathon college round.</span>
            </li>
            <li className="flex items-start gap-2 md:col-span-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Competed in <strong>CodeRumble 3.0</strong>, an ICPC-style Competitive Programming Contest.</span>
            </li>
          </ul>
        </section>

        {/* Education */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold flex items-center gap-2 border-b pb-1.5">
            <GraduationCap className="w-5 h-5 text-primary" /> Education
          </h2>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center text-sm">
            <div>
              <h3 className="font-semibold text-foreground">Jabalpur Engineering College</h3>
              <p className="text-muted-foreground">Bachelor of Technology in Information Technology</p>
            </div>
            <div className="text-left sm:text-right mt-1 sm:mt-0">
              <span className="inline-block bg-primary/10 text-primary font-medium px-2.5 py-0.5 rounded-full text-xs">
                CGPA: 7.34 / 10
              </span>
            </div>
          </div>
        </section>

      </article>
    </div>
  );
}