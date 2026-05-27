export const SITE_NAME = "ASM Consulting Engineers";
export const SITE_URL = "https://asmeng1.com";
export const DEFAULT_TITLE =
	"Structural & Civil Engineering in Miami | ASM Consulting Engineers";
export const DEFAULT_DESCRIPTION =
	"ASM Consulting Engineers delivers structural engineering, civil engineering, threshold inspections, milestone recertification, BIM-based design, and construction support in Miami, Florida.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.webp`;

export const createAbsoluteUrl = (path = "/") => {
	const normalizedPath = path.startsWith("/") ? path : `/${path}`;
	return new URL(normalizedPath, SITE_URL).toString();
};

export const createOrganizationSchema = () => ({
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

export const createWebsiteSchema = () => ({
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: SITE_NAME,
	url: SITE_URL,
	inLanguage: "en-US",
});

export const createWebPageSchema = ({
	title,
	description,
	path,
	type = "WebPage",
}) => ({
	"@context": "https://schema.org",
	"@type": type,
	name: title,
	description,
	url: createAbsoluteUrl(path),
	isPartOf: {
		"@type": "WebSite",
		name: SITE_NAME,
		url: SITE_URL,
	},
});

export const createBreadcrumbSchema = (items) => ({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: items.map((item, index) => ({
		"@type": "ListItem",
		position: index + 1,
		name: item.name,
		item: createAbsoluteUrl(item.path),
	})),
});
