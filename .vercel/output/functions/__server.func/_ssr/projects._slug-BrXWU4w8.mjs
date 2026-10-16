import { a as projects } from "./portfolio-CxdzWnDu.mjs";
import { _ as lazyRouteComponent, q as notFound, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as pageHead } from "./seo-Cv69kshG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-BrXWU4w8.js
var $$splitComponentImporter = () => import("./projects._slug-CzPA6yeR.mjs");
var Route = createFileRoute("/projects/$slug")({
	validateSearch: (search) => ({ preview: search["preview"] === true || search["preview"] === "true" }),
	loader: ({ params }) => {
		const project = projects.find((p) => p.slug === params.slug);
		if (!project) throw notFound();
		return project;
	},
	head: ({ loaderData }) => pageHead(loaderData?.name ?? "Project unavailable", loaderData?.description ?? "Project case study."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
