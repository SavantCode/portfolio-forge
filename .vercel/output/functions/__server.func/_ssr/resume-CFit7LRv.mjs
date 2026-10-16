import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { b as Download, y as ExternalLink } from "../_libs/lucide-react.mjs";
import { t as PageHeading } from "./page-heading-lcMjHdmu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resume-CFit7LRv.js
var import_jsx_runtime = require_jsx_runtime();
function Resume() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
			title: "Resume",
			description: "View or download my official resume PDF."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "resume-toolbar mb-6 flex justify-between items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-muted-foreground",
				children: "Official Document"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/rahul-kushwaha-resume.pdf",
						target: "_blank",
						rel: "noreferrer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {}), " Open in New Tab"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/rahul-kushwaha-resume.pdf",
						download: "Rahul_Kushwaha_Resume.pdf",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), " Download PDF"]
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full h-[850px] border rounded-xl overflow-hidden shadow-sm bg-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				src: "/rahul-kushwaha-resume.pdf",
				title: "Rahul Kushwaha Resume",
				className: "w-full h-full"
			})
		})
	] });
}
//#endregion
export { Resume as component };
