import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { a as projects, i as profile, t as articles } from "./portfolio-CxdzWnDu.mjs";
import { b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowUpRight, a as Sun, c as Moon, d as Mail, g as FlaskConical, h as Github, i as Volume2, n as Wrench, p as Heart, r as VolumeX, s as Search, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-BZOjkikL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var navigation = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Work",
		to: "/work"
	},
	{
		label: "Blog",
		to: "/blog"
	},
	{
		label: "Projects",
		to: "/projects"
	},
	{
		label: "Resume",
		to: "/resume"
	}
];
function SocialLinks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "social-links",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://github.com/SavantCode",
				target: "_blank",
				rel: "noreferrer",
				title: "GitHub",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://leetcode.com/u/rahulkushwaha2506/",
				target: "_blank",
				rel: "noreferrer",
				title: "LeetCode",
				className: "inline-flex items-center justify-center hover:text-primary transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					role: "img",
					viewBox: "0 0 24 24",
					fill: "currentColor",
					className: "w-5 h-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863 0-.713.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.606-2.636a4.994 4.994 0 0 0-3.853-1.462c-1.442 0-2.812.583-3.839 1.61L3.52 10.98c-1.028 1.028-1.593 2.398-1.593 3.84 0 1.442.565 2.812 1.593 3.839l4.333 4.363c1.027 1.028 2.397 1.593 3.839 1.593 1.442 0 2.812-.565 3.839-1.593l2.606-2.636c.514-.514.496-1.365-.039-1.901-.535-.535-1.386-.553-1.9-.038zM20.811 13.01H10.666c-.702 0-1.27.568-1.27 1.27 0 .702.568 1.27 1.27 1.27h10.145c.702 0 1.27-.568 1.27-1.27 0-.702-.568-1.27-1.27-1.27z" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${profile.email}`,
				title: "Email",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {})
			})
		]
	});
}
function SiteShell({ children }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [light, setLight] = (0, import_react.useState)(false);
	const [muted, setMuted] = (0, import_react.useState)(true);
	const [lens, setLens] = (0, import_react.useState)("eng");
	const [search, setSearch] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setLight(localStorage.getItem("portfolio-theme") === "light");
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("light", light);
	}, [light]);
	(0, import_react.useEffect)(() => {
		const handler = (event) => {
			if ((event.ctrlKey || event.metaKey) && event.key === "k") {
				event.preventDefault();
				setSearch((s) => !s);
			}
			if (event.key === "Escape") setSearch(false);
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, []);
	(0, import_react.useEffect)(() => {
		setSearch(false);
		setQuery("");
	}, [pathname]);
	const results = [
		...navigation.map((n) => ({
			title: n.label,
			to: n.to,
			kind: "Page"
		})),
		...projects.map((p) => ({
			title: p.name,
			to: "/projects",
			kind: "Project"
		})),
		...articles.map((a) => ({
			title: a.title,
			to: "/blog",
			kind: "Article"
		}))
	].filter((r) => r.title.toLowerCase().includes(query.toLowerCase()));
	const sound = (e) => {
		if (muted) return;
		try {
			const AudioCtx = window.AudioContext || window.webkitAudioContext;
			if (!AudioCtx) return;
			const ctx = new AudioCtx();
			if (ctx.state === "suspended") ctx.resume();
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			osc.type = "sine";
			osc.frequency.setValueAtTime(520, ctx.currentTime);
			gain.gain.setValueAtTime(.05, ctx.currentTime);
			gain.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + .1);
			osc.connect(gain);
			gain.connect(ctx.destination);
			osc.start();
			osc.stop(ctx.currentTime + .1);
			osc.onended = () => {
				ctx.close();
			};
		} catch (err) {
			console.warn("Audio playback prevented:", err);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "site-header",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "nav-inner",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Main navigation",
					children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: sound,
						className: pathname === item.to || item.to !== "/" && pathname.startsWith(item.to) ? "nav-link active" : "nav-link",
						children: item.label
					}, item.label))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "header-tools",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lens-switch",
							"aria-label": "Viewing lens",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								title: "Engineering lens",
								"aria-pressed": lens === "eng",
								onClick: () => setLens("eng"),
								className: lens === "eng" ? "selected" : "",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, {}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Eng" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								title: "Research lens",
								"aria-pressed": lens === "res",
								onClick: () => setLens("res"),
								className: lens === "res" ? "selected" : "",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Res" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: () => setSearch(true),
							className: "search-trigger rounded-full",
							"aria-label": "Search portfolio",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "shortcut",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "Ctrl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "K" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "round-tool sound-tool",
							title: muted ? "Enable interaction sounds" : "Mute interaction sounds",
							"aria-label": muted ? "Enable interaction sounds" : "Mute interaction sounds",
							onClick: () => setMuted((m) => !m),
							children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "round-tool",
							title: "Toggle theme",
							"aria-label": "Toggle theme",
							onClick: () => {
								setLight((l) => !l);
								localStorage.setItem("portfolio-theme", light ? "dark" : "light");
							},
							children: light ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "main-content page-enter",
			"data-lens": lens,
			children
		}, pathname),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "site-footer",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "quote-mark",
					children: "“"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "“The world isn't perfect. But that's the way it is.”" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cite", { children: "~ Edward Elric, Fullmetal Alchemist" })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-bottom",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-center gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								children: "About"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								children: "Privacy"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 flex justify-center items-center gap-1.5",
						children: [
							"Made with ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								size: 15,
								className: "heart-icon"
							}),
							" by ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: profile.name })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: "© 2026. All rights reserved."
					})
				]
			})]
		}),
		search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "dialog-overlay",
			onClick: () => setSearch(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "search-dialog",
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": "search-title",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3 items-center border-b border-border p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "text-muted-foreground",
							size: 20
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							id: "search-title",
							className: "sr-only",
							htmlFor: "portfolio-search",
							children: "Search portfolio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "portfolio-search",
							autoFocus: true,
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Search pages, projects, writing…",
							className: "flex-1 min-w-0 bg-transparent outline-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "Close search",
							onClick: () => setSearch(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-2 max-h-96 overflow-auto",
					children: results.length ? results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: r.to,
						onClick: () => setSearch(false),
						className: "search-result",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [r.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: r.kind })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
					}, r.title)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "p-8 text-center text-muted-foreground",
						children: "No results found."
					})
				})]
			})
		})
	] });
}
//#endregion
export { SocialLinks as n, SiteShell as t };
