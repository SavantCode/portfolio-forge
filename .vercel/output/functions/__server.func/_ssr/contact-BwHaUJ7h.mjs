import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { i as profile } from "./portfolio-CxdzWnDu.mjs";
import { D as ArrowUpRight, S as Copy, T as Check, d as Mail } from "../_libs/lucide-react.mjs";
import { n as SocialLinks } from "./site-shell-BZOjkikL.mjs";
import { t as PageHeading } from "./page-heading-lcMjHdmu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BwHaUJ7h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
			title: "Let's talk.",
			description: "An idea, a collaboration, or just a hello. My inbox is open."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "contact-email",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `mailto:${profile.email}`,
					children: profile.email
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					"aria-label": "Copy email address",
					onClick: async () => {
						await navigator.clipboard.writeText(profile.email);
						setCopied(true);
						setTimeout(() => setCopied(false), 2500);
					},
					children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `mailto:${profile.email}`,
				children: ["Send an email ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, {})
		})
	] });
}
//#endregion
export { Contact as component };
