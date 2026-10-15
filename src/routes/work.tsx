import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/portfolio/page-heading";
import { ExperienceList } from "@/components/portfolio/experience-list";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/work")({
  head: () =>
    pageHead(
      "Work",
      "Experience building thoughtful web products, accessible interfaces, and reliable systems.",
    ),
  component: Work,
});
function Work() {
  return (
    <>
      <PageHeading title="Work" description="A few good teams. A lot of meaningful work." />
      <ExperienceList />
    </>
  );
}
