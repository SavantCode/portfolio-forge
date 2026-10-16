import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { P as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as Route } from "./blog._slug-CzWHNG8P.mjs";
import { t as Markdown } from "../_libs/react-markdown+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-DGyIE17q.js
var import_jsx_runtime = require_jsx_runtime();
function Article() {
	const article = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/blog",
			className: "subtle-link mb-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), " All writing"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow-tag",
			children: article.category
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "case-title",
			children: article.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-muted-foreground mt-4",
			children: [
				article.date,
				" · ",
				article.readTime
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "case-description",
			children: article.excerpt
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "prose-content border-t border-border pt-8 mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { children: article.paragraphs.join("\n\n") })
		})
	] });
}
//#endregion
export { Article as component };
