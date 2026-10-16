import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { t as articles } from "./portfolio-CxdzWnDu.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowUpRight, s as Search } from "../_libs/lucide-react.mjs";
import { t as PageHeading } from "./page-heading-lcMjHdmu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-BV8Msm1V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Blog() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("All");
	const filtered = articles.filter((a) => (category === "All" || a.category === category) && (a.title + a.excerpt).toLowerCase().includes(query.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
			title: "Blog",
			description: "Notes on building for the web, and things learned along the way."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "blog-tools",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 flex-wrap",
				children: [
					"All",
					"Development",
					"Design Engineering",
					"Software Engineering"
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: category === c ? "default" : "secondary",
					className: "rounded-full",
					onClick: () => setCategory(c),
					children: c
				}, c))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "blog-search",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 17 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					"aria-label": "Search articles",
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Search articles…"
				})]
			})]
		}),
		filtered.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/blog/$slug",
			params: { slug: a.slug },
			className: "article-row group",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a.date }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a.readTime })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between gap-4 mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold group-hover:text-muted-foreground transition-colors",
						children: a.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 22 })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground leading-7 mt-3",
					children: a.excerpt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow-tag mt-5",
					children: a.category
				})
			]
		}, a.slug)),
		!filtered.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "py-16 text-muted-foreground text-center",
			children: "No articles found."
		})
	] });
}
//#endregion
export { Blog as component };
