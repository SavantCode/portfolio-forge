import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as experiences } from "./portfolio-CxdzWnDu.mjs";
import { D as ArrowUpRight, m as Globe } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experience-list-DHT3Wfs_.js
var import_jsx_runtime = require_jsx_runtime();
function ExperienceList({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: experiences.slice(0, compact ? 2 : void 0).map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "experience-item",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-semibold",
							children: job.company
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
							className: "text-muted-foreground",
							size: 15
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "text-muted-foreground",
							size: 15
						}),
						job.current && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "status-tag",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " Working"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-2 text-lg",
					children: job.role
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-muted-foreground text-sm md:text-right leading-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: job.period }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: job.location })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-muted-foreground leading-7",
				children: job.description
			}),
			!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "list-disc pl-5 mt-4 space-y-2 text-muted-foreground",
				children: job.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2 mt-5",
				children: job.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow-tag",
					children: tag
				}, tag))
			})
		]
	}, job.company)) });
}
//#endregion
export { ExperienceList as t };
