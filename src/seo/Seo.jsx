/* eslint-disable react/prop-types */
import { useEffect } from "react";
import {
	DEFAULT_DESCRIPTION,
	DEFAULT_OG_IMAGE,
	DEFAULT_TITLE,
	SITE_NAME,
	createAbsoluteUrl,
} from "./siteMetadata";

const EMPTY_STRUCTURED_DATA = [];

const normalizeImageUrl = (image) => {
	if (!image) {
		return DEFAULT_OG_IMAGE;
	}

	if (image.startsWith("http://") || image.startsWith("https://")) {
		return image;
	}

	return createAbsoluteUrl(image);
};

const upsertMeta = (selector, attributes) => {
	let element = document.head.querySelector(selector);

	if (!element) {
		element = document.createElement("meta");
		document.head.appendChild(element);
	}

	Object.entries(attributes).forEach(([key, value]) => {
		element.setAttribute(key, value);
	});
};

const upsertLink = (selector, attributes) => {
	let element = document.head.querySelector(selector);

	if (!element) {
		element = document.createElement("link");
		document.head.appendChild(element);
	}

	Object.entries(attributes).forEach(([key, value]) => {
		element.setAttribute(key, value);
	});
};

function Seo({
	title = DEFAULT_TITLE,
	description = DEFAULT_DESCRIPTION,
	path = "/",
	image = DEFAULT_OG_IMAGE,
	robots = "index, follow",
	structuredData = EMPTY_STRUCTURED_DATA,
}) {
	useEffect(() => {
		const canonicalUrl = createAbsoluteUrl(path);
		const pageTitle = title.includes(SITE_NAME)
			? title
			: `${title} | ${SITE_NAME}`;
		const imageUrl = normalizeImageUrl(image);

		document.title = pageTitle;

		upsertMeta('meta[name="description"]', {
			name: "description",
			content: description,
		});
		upsertMeta('meta[name="robots"]', {
			name: "robots",
			content: robots,
		});
		upsertMeta('meta[property="og:type"]', {
			property: "og:type",
			content: "website",
		});
		upsertMeta('meta[property="og:title"]', {
			property: "og:title",
			content: pageTitle,
		});
		upsertMeta('meta[property="og:description"]', {
			property: "og:description",
			content: description,
		});
		upsertMeta('meta[property="og:url"]', {
			property: "og:url",
			content: canonicalUrl,
		});
		upsertMeta('meta[property="og:image"]', {
			property: "og:image",
			content: imageUrl,
		});
		upsertMeta('meta[name="twitter:card"]', {
			name: "twitter:card",
			content: "summary_large_image",
		});
		upsertMeta('meta[name="twitter:title"]', {
			name: "twitter:title",
			content: pageTitle,
		});
		upsertMeta('meta[name="twitter:description"]', {
			name: "twitter:description",
			content: description,
		});
		upsertMeta('meta[name="twitter:image"]', {
			name: "twitter:image",
			content: imageUrl,
		});
		upsertLink('link[rel="canonical"]', {
			rel: "canonical",
			href: canonicalUrl,
		});

		const scriptNodes = structuredData.map((entry, index) => {
			const script = document.createElement("script");
			script.type = "application/ld+json";
			script.dataset.piSeo = `${path}-${index}`;
			script.textContent = JSON.stringify(entry);
			document.head.appendChild(script);
			return script;
		});

		return () => {
			scriptNodes.forEach((node) => node.remove());
		};
	}, [description, image, path, robots, structuredData, title]);

	return null;
}

export default Seo;
