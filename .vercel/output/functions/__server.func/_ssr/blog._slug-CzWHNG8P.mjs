import { t as articles } from "./portfolio-CxdzWnDu.mjs";
import { _ as lazyRouteComponent, q as notFound, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as pageHead } from "./seo-Cv69kshG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-CzWHNG8P.js
var $$splitComponentImporter = () => import("./blog._slug-DGyIE17q.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const article = articles.find((a) => a.slug === params.slug);
		if (!article) throw notFound();
		return article;
	},
	head: ({ loaderData }) => pageHead(loaderData?.title ?? "Article unavailable", loaderData?.excerpt ?? "Notes by Rahul Kushwaha."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
