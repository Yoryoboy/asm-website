import AboutCompany from "./AboutCompany";
import WelcomeSection from "./WelcomeSection";
import WhatWeOffer from "./WhatWeOffer";
import GallerySection from "./GallerySection";
import Seo from "../../seo/Seo";
import {
	createOrganizationSchema,
	createWebPageSchema,
	createWebsiteSchema,
} from "../../seo/siteMetadata";

function Home() {
	return (
		<>
			<Seo
				title="Structural & Civil Engineering in Miami"
				description="ASM Consulting Engineers provides structural engineering, civil engineering, BIM-based design, threshold inspections, and milestone recertification services in Miami, Florida."
				path="/"
				structuredData={[
					createOrganizationSchema(),
					createWebsiteSchema(),
					createWebPageSchema({
						title: "Structural & Civil Engineering in Miami",
						description:
							"ASM Consulting Engineers provides structural engineering, civil engineering, BIM-based design, threshold inspections, and milestone recertification services in Miami, Florida.",
						path: "/",
					}),
				]}
			/>
			<main>
				<WelcomeSection />
				<AboutCompany />
				<WhatWeOffer />
				<GallerySection />
			</main>
		</>
	);
}

export default Home;
