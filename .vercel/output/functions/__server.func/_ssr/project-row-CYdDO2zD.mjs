import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as CodeXml, E as Braces, O as ArrowRight, f as Layers, m as Globe, x as Database } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/project-row-CYdDO2zD.js
var import_jsx_runtime = require_jsx_runtime();
var icons = [
	CodeXml,
	Braces,
	Layers,
	Database
];
function ProjectRow({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "project-row group",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/projects/$slug",
			params: { slug: project.slug },
			className: "project-image",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: project.image,
				alt: `${project.name} product preview`,
				width: 1440,
				height: 912,
				loading: "lazy"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow-tag",
				children: project.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 text-2xl font-semibold",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/projects/$slug",
					params: { slug: project.slug },
					children: project.name
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground leading-relaxed line-clamp-2",
				children: project.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 mt-5",
				children: project.stack.slice(0, 3).map((tech, index) => {
					const Icon = icons[index] ?? CodeXml;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						title: tech,
						className: "tech-icon",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 22 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: tech
						})]
					}, tech);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-5 mt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "sm",
					className: "rounded-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects/$slug",
						params: { slug: project.slug },
						children: ["View project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projects/$slug",
					params: { slug: project.slug },
					search: { preview: true },
					className: "subtle-link",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { size: 15 }), " Preview"]
				})]
			})
		] })]
	});
}
//#endregion
export { ProjectRow as t };
