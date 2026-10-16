import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { a as projects } from "./portfolio-CxdzWnDu.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as CodeXml, O as ArrowRight, f as Layers, l as Maximize2, m as Globe, t as X, v as Eye, w as ChevronRight, x as Database } from "../_libs/lucide-react.mjs";
import { t as Route } from "./projects._slug-BrXWU4w8.mjs";
import { t as ProjectRow } from "./project-row-CYdDO2zD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-CzPA6yeR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetail() {
	const project = Route.useLoaderData();
	const { preview } = Route.useSearch();
	const [expanded, setExpanded] = (0, import_react.useState)(preview);
	const [architecture, setArchitecture] = (0, import_react.useState)(false);
	const next = projects[(projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length];
	const [activeImageIndex, setActiveImageIndex] = (0, import_react.useState)(0);
	const projectImages = project.images && project.images.length > 0 ? project.images : [project.image];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "breadcrumbs",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: "Home"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/projects",
					children: "Projects"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.name })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: projectImages[activeImageIndex],
				className: "case-cover rounded-xl transition-all duration-300",
				alt: `${project.name} application preview`,
				width: 1440,
				height: 912
			}), projectImages.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-3 overflow-x-auto pb-2",
				children: projectImages.map((img, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActiveImageIndex(index),
					className: `relative rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${activeImageIndex === index ? "border-primary scale-105 shadow-md" : "border-transparent opacity-70 hover:opacity-100"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img,
						alt: `Thumbnail ${index + 1}`,
						className: "w-24 h-16 object-cover"
					})
				}, index))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-2 mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow-tag bg-secondary",
				children: project.status
			}), project.stack.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow-tag",
				children: t
			}, t))]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "case-title",
			children: project.name
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "case-description",
			children: project.description
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "case-meta",
			children: [
				["Timeline", project.year],
				["Role", project.role],
				["Team", "Solo"],
				["Status", project.status]
			].map(([title, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: value })] }, title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "default",
			onClick: () => setExpanded(true),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {}), " View project preview"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "case-body",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Technology Stack" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: project.stack.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow-tag",
						children: t
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Key Challenges" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: project.challenges.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t }, t)) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Key Learnings" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: project.learnings.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t }, t)) })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "prose-content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						project.name,
						": ",
						project.label
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Overview" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.overview }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Why I Built This" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I wanted to move beyond tutorials and build something people could actually use. This project gave me a space to explore product thinking, make intentional engineering decisions, and take an idea all the way to a polished experience." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Key Features" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Thoughtfully designed, responsive user experience" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Type-safe interfaces and reusable components" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Accessible controls with keyboard navigation" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Modular architecture with clear boundaries" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Careful performance optimizations and error handling" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Technical Architecture" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The application is organized around independent layers. Presentation stays separate from business logic, and structured content makes the system easy to extend." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "architecture",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-center mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: "Application architecture"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": "Expand architecture",
								onClick: () => setArchitecture(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, {})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Architecture, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Engineering Decisions" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Component Boundaries" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Small, focused components make the interface easier to understand and change. Shared primitives handle consistency while feature components stay close to the problems they solve." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Type Safety" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Data contracts are explicit across the application. Validating at the boundaries keeps unexpected data from becoming unexpected user experiences." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "What I Learned" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Building the complete product reinforced the importance of a strong foundation: clear interfaces, intentional trade-offs, and feedback from real usage. The most valuable improvements often came from simplifying rather than adding." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Current Status" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.status === "Completed" ? "The core experience is complete. Future iterations will focus on deeper integrations and refinements informed by user feedback." : "The core experience is taking shape. Upcoming work includes richer integrations, automated testing, and more detailed documentation." })
				]
			})]
		}),
		next && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/projects/$slug",
			params: { slug: next.slug },
			className: "next-project",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Next Project" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: next.name })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl font-semibold mt-12",
			children: "Related Projects"
		}),
		projects.filter((p) => p.slug !== project.slug).slice(0, 2).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectRow, { project: p }, p.slug)),
		(expanded || architecture) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "dialog-overlay",
			onClick: () => {
				setExpanded(false);
				setArchitecture(false);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "preview-dialog",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": architecture ? "Application architecture" : "Project preview",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-center mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold",
						children: architecture ? "Application architecture" : `${project.name} preview`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "Close preview",
						onClick: () => {
							setExpanded(false);
							setArchitecture(false);
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
					})]
				}), architecture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Architecture, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image,
					alt: `${project.name} full preview`,
					width: 1440,
					height: 912
				})]
			})
		})
	] });
}
function Architecture() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "architecture-flow",
		children: [
			{
				icon: Globe,
				name: "User interface",
				sub: "React · Components"
			},
			{
				icon: Layers,
				name: "Application layer",
				sub: "State · Validation"
			},
			{
				icon: CodeXml,
				name: "API layer",
				sub: "Type-safe contracts"
			},
			{
				icon: Database,
				name: "Data layer",
				sub: "Storage · Persistence"
			}
		].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flow-step",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, { size: 20 }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: step.name }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: step.sub })
			] }), i < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
				className: "flow-arrow",
				size: 20
			})]
		}, step.name))
	});
}
//#endregion
export { ProjectDetail as component };
