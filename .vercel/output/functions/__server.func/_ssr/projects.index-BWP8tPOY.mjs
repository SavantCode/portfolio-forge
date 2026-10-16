import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { a as projects, n as categories } from "./portfolio-CxdzWnDu.mjs";
import { t as PageHeading } from "./page-heading-lcMjHdmu.mjs";
import { t as ProjectRow } from "./project-row-CYdDO2zD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects.index-BWP8tPOY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Projects() {
	const [category, setCategory] = (0, import_react.useState)("All Projects");
	const filtered = projects.filter((p) => category === "All Projects" || p.categories.includes(category));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
			title: "Projects",
			description: "Web experiences, open-source tools, and ideas brought to life."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "filter-bar",
			children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: category === c ? "default" : "secondary",
				onClick: () => setCategory(c),
				"aria-pressed": category === c,
				className: "filter-button",
				children: [c, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c === "All Projects" ? projects.length : projects.filter((p) => p.categories.includes(c)).length })]
			}, c))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between items-center mt-7 mb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-semibold",
				children: "Selected Projects"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-sm text-muted-foreground",
				children: [
					"Showing ",
					filtered.length,
					" projects"
				]
			})]
		}),
		filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectRow, { project: p }, p.slug))
	] });
}
//#endregion
export { Projects as component };
