import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink } from "lucide-react";
import { PageHeading } from "@/components/portfolio/page-heading";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/resume")({
  head: () =>
    pageHead("Resume", "Rahul Kushwaha’s official resume and CV."),
  component: Resume,
});

function Resume() {
  return (
    <>
      <PageHeading
        title="Resume"
        description="View or download my official resume PDF."
      />
      
      {/* Toolbar */}
      <div className="resume-toolbar mb-6 flex justify-between items-center">
        <span className="text-sm text-muted-foreground">Official Document</span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href="/rahul-kushwaha-resume.pdf" target="_blank" rel="noreferrer">
              <ExternalLink /> Open in New Tab
            </a>
          </Button>
          <Button asChild size="sm">
            <a href="/rahul-kushwaha-resume.pdf" download="Rahul_Kushwaha_Resume.pdf">
              <Download /> Download PDF
            </a>
          </Button>
        </div>
      </div>

      {/* Embedded PDF Viewer */}
      <div className="w-full h-[850px] border rounded-xl overflow-hidden shadow-sm bg-muted">
        <iframe
          src="/rahul-kushwaha-resume.pdf"
          title="Rahul Kushwaha Resume"
          className="w-full h-full"
        />
      </div>
    </>
  );
}