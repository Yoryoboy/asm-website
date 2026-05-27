// Component for the Structural Engineering page
import Seo from "../../seo/Seo";
import {
	createBreadcrumbSchema,
	createWebPageSchema,
} from "../../seo/siteMetadata";
import styles from "./StructuralEngineering.module.css";

function StructuralEngineering() {
	return (
		<>
			<Seo
				title="Structural Engineering Services"
				description="ASM Consulting Engineers provides structural engineering design, inspections, assessments, and construction-phase support for residential, commercial, and industrial projects."
				path="/structural-engineering"
				structuredData={[
					createWebPageSchema({
						title: "Structural Engineering Services",
						description:
							"ASM Consulting Engineers provides structural engineering design, inspections, assessments, and construction-phase support for residential, commercial, and industrial projects.",
						path: "/structural-engineering",
					}),
					createBreadcrumbSchema([
						{ name: "Home", path: "/" },
						{
							name: "Structural Engineering",
							path: "/structural-engineering",
						},
					]),
				]}
			/>
			<section className={styles.container}>
				<article className={styles.content}>
					<h1>Structural Engineering</h1>
					<h2>Reliable Solutions Backed by Experience and Integrity</h2>

					<div className={styles.mainContent}>
						<p>
							At ASM Consulting Engineers, we provide structural engineering
							services that align seamlessly with the architectural and
							functional goals of each project. Our team collaborates closely
							with architects, developers, and contractors throughout all
							project phases, from schematic design and construction documents
							to construction administration and inspections. We are licensed to
							perform Threshold and Special Inspections, 40/50-Year
							Recertifications, and structural assessments.
						</p>

						<p>
							Our engineers have decades of experience designing structural
							systems that are safe, efficient, and code-compliant. We work with
							a wide range of materials, including reinforced concrete, steel,
							masonry, and wood, and deliver designs that effectively handle
							gravity and lateral loads while maintaining construction
							feasibility and cost-efficiency.
						</p>

						<p>
							Whether it&apos;s a new construction, renovation, or forensic
							assessment, our structural team ensures that every solution is
							grounded in safety, performance, and long-term value.
						</p>
					</div>
				</article>
			</section>
		</>
	);
}

export default StructuralEngineering;
