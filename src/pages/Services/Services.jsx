import { Outlet, useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import pageHeaderImg from "../../assets/images/services-page-header.webp";
import Seo from "../../seo/Seo";
import {
	createBreadcrumbSchema,
	createWebPageSchema,
} from "../../seo/siteMetadata";
import { SERVICES } from "../../utils/constants";

function Services() {
	const { id } = useParams();
	const service = SERVICES.find((item) => item.id === id);
	const pageTitle = service ? service.title : "Services";
	const seoTitle = service
		? `${service.title} Engineering Services`
		: "Engineering Services";
	const seoDescription = service
		? service.description
		: "Explore ASM Consulting Engineers services including structural design, civil engineering design, construction administration, inspections, investigations, and feasibility studies.";
	const seoPath = service ? `/services/${service.id}` : "/services";
	const breadcrumbs = service
		? [
				{ name: "Home", path: "/" },
				{ name: "Services", path: "/services" },
				{ name: service.title, path: seoPath },
			]
		: [
				{ name: "Home", path: "/" },
				{ name: "Services", path: "/services" },
			];

	return (
		<>
			<Seo
				title={seoTitle}
				description={seoDescription}
				path={seoPath}
				structuredData={[
					createWebPageSchema({
						title: seoTitle,
						description: seoDescription,
						path: seoPath,
					}),
					createBreadcrumbSchema(breadcrumbs),
				]}
			/>
			<main>
				<PageHeader title={pageTitle} img={pageHeaderImg} />
				<Outlet />
			</main>
		</>
	);
}

export default Services;
