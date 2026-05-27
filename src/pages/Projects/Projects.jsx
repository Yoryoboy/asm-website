import { Outlet, useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ProjectsHero from "../../components/ProjectsHero";
import headerImg from "../../assets/images/projects-header.webp";
import Seo from "../../seo/Seo";
import {
	createBreadcrumbSchema,
	createWebPageSchema,
} from "../../seo/siteMetadata";
import { getProjectById } from "../../utils/projectsCatalog";

function Projects() {
	const { id } = useParams();
	const project = id ? getProjectById(id) : null;
	const pageTitle = project ? project.name : "Projects";
	const seoTitle = project
		? `${project.name} Project`
		: "Engineering Projects Portfolio";
	const seoDescription = project
		? `${project.servicePerformed || "Explore this ASM Consulting Engineers project."} ${project.location ? `Located in ${project.location}.` : ""}`.trim()
		: "Browse ASM Consulting Engineers projects across residential, commercial, educational, and specialty engineering sectors.";
	const seoPath = project ? `/projects/${project.id}` : "/projects";
	const breadcrumbs = project
		? [
				{ name: "Home", path: "/" },
				{ name: "Projects", path: "/projects" },
				{ name: project.name, path: seoPath },
			]
		: [
				{ name: "Home", path: "/" },
				{ name: "Projects", path: "/projects" },
			];

	return (
		<>
			<Seo
				title={seoTitle}
				description={seoDescription}
				path={seoPath}
				image={project?.coverImageUrl || undefined}
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
				{project ? (
					<PageHeader title={pageTitle} img={headerImg} />
				) : (
					<ProjectsHero />
				)}
				<Outlet />
			</main>
		</>
	);
}

export default Projects;
