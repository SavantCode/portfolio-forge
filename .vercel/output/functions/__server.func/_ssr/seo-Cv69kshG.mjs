//#region node_modules/.nitro/vite/services/ssr/assets/seo-Cv69kshG.js
function pageHead(title, description) {
	const fullTitle = `${title} — Rahul Kushwaha`;
	return { meta: [
		{ title: fullTitle },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: fullTitle
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] };
}
//#endregion
export { pageHead as t };
