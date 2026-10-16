import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { a as projects, i as profile, t as articles } from "./portfolio-CxdzWnDu.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowUpRight, O as ArrowRight, _ as FileText, o as Send, u as MapPin } from "../_libs/lucide-react.mjs";
import { n as SocialLinks } from "./site-shell-BZOjkikL.mjs";
import { t as profile_default } from "./profile-B6OJ_f9L.mjs";
import { t as ProjectRow } from "./project-row-CYdDO2zD.mjs";
import { t as ExperienceList } from "./experience-list-DHT3Wfs_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DbIWEMAD.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "profile-hero",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-dots" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "profile-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "profile-photo",
						src: profile_default,
						width: 128,
						height: 128,
						alt: "Rahul Kushwaha"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "availability",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " Available for interesting projects"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [profile.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "name-period",
							children: "."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "profile-role",
							children: profile.role
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "profile-bio",
					children: profile.bio
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/resume",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {}), " Resume / CV"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projects",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {}), " Explore Projects"]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "hero-location",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 13 }),
						" ",
						profile.location
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "home-section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Selected" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Experience" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work",
					children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceList, { compact: true })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "home-section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Things I've built" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Featured Projects" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projects",
					children: ["All projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
				})]
			}), projects.slice(0, 2).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectRow, { project: p }, p.slug))]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "home-section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Thoughts & explorations" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Latest Writing" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog",
					children: ["All writing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
				})]
			}), articles.slice(0, 2).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				className: "home-article",
				to: "/blog/$slug",
				params: { slug: a.slug },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					a.date,
					" · ",
					a.readTime
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: a.title })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 20 })]
			}, a.slug))]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "get-in-touch",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted-foreground",
					children: "Have something in mind?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Let's build something good." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `mailto:${profile.email}`,
					className: "subtle-link",
					children: ["Say hello ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 })]
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
