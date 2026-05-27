import fs from "node:fs";
import path from "node:path";

const SITE_NAME = "ASM Consulting Engineers";
const SITE_URL = "https://asmeng1.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.webp`;
const DIST_DIR = path.resolve("dist");
const TEMPLATE_PATH = path.join(DIST_DIR, "index.html");
const PROJECTS_PATH = path.resolve("src/data/projects.generated.json");
const CONSTANTS_PATH = path.resolve("src/utils/constants.jsx");

const template = fs.readFileSync(TEMPLATE_PATH, "utf8");
const rawProjects = JSON.parse(fs.readFileSync(PROJECTS_PATH, "utf8"));
const constantsSource = fs.readFileSync(CONSTANTS_PATH, "utf8");
const servicesBlock = constantsSource
	.split("export const SERVICES = [")[1]
	.split("];\n")[0];

const serviceEntries = [
	...servicesBlock.matchAll(
		/id:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)"/gs,
	),
].map(([, id, title, description]) => ({ id, title, description }));

const toAbsoluteUrl = (routePath) => new URL(routePath, SITE_URL).toString();

const createWebPageSchema = ({
	title,
	description,
	routePath,
	type = "WebPage",
}) => ({
	"@context": "https://schema.org",
	"@type": type,
	name: title,
	description,
	url: toAbsoluteUrl(routePath),
	isPartOf: {
		"@type": "WebSite",
		name: SITE_NAME,
		url: SITE_URL,
	},
});

const createBreadcrumbSchema = (items) => ({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: items.map((item, index) => ({
		"@type": "ListItem",
		position: index + 1,
		name: item.name,
		item: toAbsoluteUrl(item.path),
	})),
});

const createOrganizationSchema = () => ({
	"@context": "https://schema.org",
	"@type": "Organization",
	name: SITE_NAME,
	url: SITE_URL,
	logo: `${SITE_URL}/favicon.png`,
	email: "SINA@ASMENG1.COM",
	telephone: "+1-786-325-0938",
	address: {
		"@type": "PostalAddress",
		streetAddress: "4836 SW 74th Court",
		addressLocality: "Miami",
		addressRegion: "FL",
		postalCode: "33155",
		addressCountry: "US",
	},
	sameAs: ["https://www.linkedin.com/company/asm-consulting-engineers/"],
});

const escapeHtml = (value) =>
	String(value)
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#39;");

const injectStructuredData = (html, structuredData) => {
	const scripts = structuredData
		.map(
			(entry) =>
				`    <script type="application/ld+json">${JSON.stringify(entry).replaceAll("</script>", "<\\/script>")}</script>`,
		)
		.join("\n");

	return html.replace("</head>", `${scripts}\n  </head>`);
};

const applyMetadata = (html, metadata) => {
	const canonicalUrl = toAbsoluteUrl(metadata.path);
	const imageUrl = metadata.image || DEFAULT_IMAGE;

	let output = html
		.replace(
			/<title>.*?<\/title>/,
			`<title>${escapeHtml(metadata.title)}</title>`,
		)
		.replace(
			/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
			`<meta name="description" content="${escapeHtml(metadata.description)}" />`,
		)
		.replace(
			/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
			`<meta property="og:title" content="${escapeHtml(metadata.title)}" />`,
		)
		.replace(
			/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
			`<meta property="og:description" content="${escapeHtml(metadata.description)}" />`,
		)
		.replace(
			/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
			`<meta property="og:image" content="${escapeHtml(imageUrl)}" />`,
		)
		.replace(
			/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
			`<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
		)
		.replace(
			/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
			`<meta name="twitter:title" content="${escapeHtml(metadata.title)}" />`,
		)
		.replace(
			/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
			`<meta name="twitter:description" content="${escapeHtml(metadata.description)}" />`,
		)
		.replace(
			/<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/,
			`<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`,
		)
		.replace(
			/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
			`<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
		);

	if (metadata.structuredData?.length) {
		output = injectStructuredData(output, metadata.structuredData);
	}

	return output;
};

const staticPages = [
	{
		path: "/",
		title: "Structural & Civil Engineering in Miami | ASM Consulting Engineers",
		description:
			"ASM Consulting Engineers provides structural engineering, civil engineering, BIM-based design, threshold inspections, and milestone recertification services in Miami, Florida.",
		structuredData: [
			createOrganizationSchema(),
			createWebPageSchema({
				title: "Structural & Civil Engineering in Miami",
				description:
					"ASM Consulting Engineers provides structural engineering, civil engineering, BIM-based design, threshold inspections, and milestone recertification services in Miami, Florida.",
				routePath: "/",
			}),
		],
	},
	{
		path: "/about",
		title: "About ASM Consulting Engineers | ASM Consulting Engineers",
		description:
			"Learn about ASM Consulting Engineers, a Miami-based structural and civil engineering firm with expertise in BIM, inspections, design management, and technical consulting.",
		structuredData: [
			createWebPageSchema({
				title: "About ASM Consulting Engineers",
				description:
					"Learn about ASM Consulting Engineers, a Miami-based structural and civil engineering firm with expertise in BIM, inspections, design management, and technical consulting.",
				routePath: "/about",
			}),
			createBreadcrumbSchema([
				{ name: "Home", path: "/" },
				{ name: "About", path: "/about" },
			]),
		],
	},
	{
		path: "/services",
		title: "Engineering Services | ASM Consulting Engineers",
		description:
			"Explore ASM Consulting Engineers services including structural design, civil engineering design, construction administration, inspections, investigations, and feasibility studies.",
		structuredData: [
			createWebPageSchema({
				title: "Engineering Services",
				description:
					"Explore ASM Consulting Engineers services including structural design, civil engineering design, construction administration, inspections, investigations, and feasibility studies.",
				routePath: "/services",
			}),
			createBreadcrumbSchema([
				{ name: "Home", path: "/" },
				{ name: "Services", path: "/services" },
			]),
		],
	},
	{
		path: "/projects",
		title: "Engineering Projects Portfolio | ASM Consulting Engineers",
		description:
			"Browse ASM Consulting Engineers projects across residential, commercial, educational, and specialty engineering sectors.",
		structuredData: [
			createWebPageSchema({
				title: "Engineering Projects Portfolio",
				description:
					"Browse ASM Consulting Engineers projects across residential, commercial, educational, and specialty engineering sectors.",
				routePath: "/projects",
			}),
			createBreadcrumbSchema([
				{ name: "Home", path: "/" },
				{ name: "Projects", path: "/projects" },
			]),
		],
	},
	{
		path: "/contactus",
		title: "Contact ASM Consulting Engineers | ASM Consulting Engineers",
		description:
			"Contact ASM Consulting Engineers in Miami, Florida for structural engineering, civil engineering, threshold inspections, and project support.",
		structuredData: [
			createWebPageSchema({
				title: "Contact ASM Consulting Engineers",
				description:
					"Contact ASM Consulting Engineers in Miami, Florida for structural engineering, civil engineering, threshold inspections, and project support.",
				routePath: "/contactus",
				type: "ContactPage",
			}),
			createBreadcrumbSchema([
				{ name: "Home", path: "/" },
				{ name: "Contact Us", path: "/contactus" },
			]),
		],
	},
	{
		path: "/structural-engineering",
		title: "Structural Engineering Services | ASM Consulting Engineers",
		description:
			"ASM Consulting Engineers provides structural engineering design, inspections, assessments, and construction-phase support for residential, commercial, and industrial projects.",
		structuredData: [
			createWebPageSchema({
				title: "Structural Engineering Services",
				description:
					"ASM Consulting Engineers provides structural engineering design, inspections, assessments, and construction-phase support for residential, commercial, and industrial projects.",
				routePath: "/structural-engineering",
			}),
			createBreadcrumbSchema([
				{ name: "Home", path: "/" },
				{ name: "Structural Engineering", path: "/structural-engineering" },
			]),
		],
	},
	{
		path: "/civil-engineering",
		title: "Civil Engineering Services | ASM Consulting Engineers",
		description:
			"ASM Consulting Engineers delivers civil engineering design for site development, grading, drainage, utilities, stormwater systems, and permitting support.",
		structuredData: [
			createWebPageSchema({
				title: "Civil Engineering Services",
				description:
					"ASM Consulting Engineers delivers civil engineering design for site development, grading, drainage, utilities, stormwater systems, and permitting support.",
				routePath: "/civil-engineering",
			}),
			createBreadcrumbSchema([
				{ name: "Home", path: "/" },
				{ name: "Civil Engineering", path: "/civil-engineering" },
			]),
		],
	},
	{
		path: "/special-inspections",
		title: "Threshold & Special Inspection Services | ASM Consulting Engineers",
		description:
			"ASM Consulting Engineers performs threshold inspections, milestone recertification reviews, and structural reserve study evaluations for buildings in Florida.",
		structuredData: [
			createWebPageSchema({
				title: "Threshold & Special Inspection Services",
				description:
					"ASM Consulting Engineers performs threshold inspections, milestone recertification reviews, and structural reserve study evaluations for buildings in Florida.",
				routePath: "/special-inspections",
			}),
			createBreadcrumbSchema([
				{ name: "Home", path: "/" },
				{
					name: "Threshold & Special Inspections",
					path: "/special-inspections",
				},
			]),
		],
	},
];

const servicePages = serviceEntries.map((service) => ({
	path: `/services/${service.id}`,
	title: `${service.title} Engineering Services | ASM Consulting Engineers`,
	description: service.description,
	structuredData: [
		createWebPageSchema({
			title: `${service.title} Engineering Services`,
			description: service.description,
			routePath: `/services/${service.id}`,
		}),
		createBreadcrumbSchema([
			{ name: "Home", path: "/" },
			{ name: "Services", path: "/services" },
			{ name: service.title, path: `/services/${service.id}` },
		]),
	],
}));

const projectPages = rawProjects
	.filter(
		(project) =>
			project.name &&
			project.coverImage &&
			(project.link ||
				project.architect ||
				project.servicePerformed ||
				project.location ||
				project.category),
	)
	.map((project) => {
		const description = `${project.servicePerformed || "Explore this ASM Consulting Engineers project."}${project.location ? ` Located in ${project.location}.` : ""}`;

		return {
			path: `/projects/${project.id}`,
			title: `${project.name} Project | ASM Consulting Engineers`,
			description,
			structuredData: [
				createWebPageSchema({
					title: `${project.name} Project`,
					description,
					routePath: `/projects/${project.id}`,
				}),
				createBreadcrumbSchema([
					{ name: "Home", path: "/" },
					{ name: "Projects", path: "/projects" },
					{ name: project.name, path: `/projects/${project.id}` },
				]),
			],
		};
	});

const allPages = [...staticPages, ...servicePages, ...projectPages];

const writeSitemap = () => {
	const lastmod = new Date().toISOString().slice(0, 10);
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allPages
		.map(
			(page) =>
				`  <url>\n    <loc>${toAbsoluteUrl(page.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
		)
		.join("\n")}\n</urlset>\n`;

	fs.writeFileSync(path.resolve("public/sitemap.xml"), xml);
	fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), xml);
};

for (const page of allPages) {
	const outputHtml = applyMetadata(template, page);
	const outputPath =
		page.path === "/"
			? path.join(DIST_DIR, "index.html")
			: path.join(DIST_DIR, page.path.replace(/^\//, ""), "index.html");

	fs.mkdirSync(path.dirname(outputPath), { recursive: true });
	fs.writeFileSync(outputPath, outputHtml);
}

writeSitemap();
