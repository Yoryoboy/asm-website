// Component for the Civil Engineering page
import Seo from "../../seo/Seo";
import {
	createBreadcrumbSchema,
	createWebPageSchema,
} from "../../seo/siteMetadata";
import styles from "./CivilEngineering.module.css";

function CivilEngineering() {
	return (
		<>
			<Seo
				title="Civil Engineering Services"
				description="ASM Consulting Engineers delivers civil engineering design for site development, grading, drainage, utilities, stormwater systems, and permitting support."
				path="/civil-engineering"
				structuredData={[
					createWebPageSchema({
						title: "Civil Engineering Services",
						description:
							"ASM Consulting Engineers delivers civil engineering design for site development, grading, drainage, utilities, stormwater systems, and permitting support.",
						path: "/civil-engineering",
					}),
					createBreadcrumbSchema([
						{ name: "Home", path: "/" },
						{ name: "Civil Engineering", path: "/civil-engineering" },
					]),
				]}
			/>
			<section className={styles.container}>
				<article className={styles.content}>
					<h1>Civil Engineering</h1>
					<h2>
						Smart, Practical Designs for Site Development and Infrastructure
					</h2>

					<div className={styles.mainContent}>
						<p>
							ASM Consulting Engineers also offers comprehensive civil
							engineering services tailored to meet the needs of residential,
							commercial, and mixed-use developments. We specialize in site
							planning, grading, and drainage design, stormwater management,
							water and sewer systems, and pavement design.
						</p>

						<p>
							Our civil team brings a practical approach to complex regulatory
							environments, helping clients navigate permitting processes and
							agency coordination. From concept to construction, we deliver
							cost-effective civil design solutions that ensure environmental
							compliance, constructability, and long-term site sustainability.
						</p>

						<p>
							With an in-depth understanding of local codes and development
							procedures, we support smooth project delivery and lasting
							performance.
						</p>
					</div>
				</article>
			</section>
		</>
	);
}

export default CivilEngineering;
