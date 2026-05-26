import PageHeader from "../../components/PageHeader";
import pageHeaderImg from "../../assets/images/about-page-header.webp";

import styles from "./AboutUs.module.css";

const coreServices = [
	"Structural & Civil Engineering Design",
	"BIM & Revit-Based Structural Modeling",
	"Preparation of Construction Documents (CDs)",
	"Construction Observation & Administration",
	"Feasibility Studies & Technical Reports",
	"Planning & Cost Estimations",
	"Building Investigations & Forensic Engineering",
	"Threshold Inspections",
	"30 / 40 / 50-Year Building Re-Certifications",
	"Structural Integrity Reserve Study (SIRS)",
];

const bimServices = [
	"Revit-based structural modeling and detailing",
	"BIM coordination with architectural, MEP, and civil disciplines",
	"Clash detection support and constructability reviews",
	"Model-based quantity take-offs and documentation",
	"Revit-to-analysis workflow integration",
	"As-built and record models",
];

const projectExperience = [
	"Residential & Multi-Family Buildings",
	"Commercial & Mixed-Use Developments",
	"Industrial & Heavy Industrial Facilities",
	"Medical & Healthcare Buildings",
	"Educational & Institutional Facilities",
	"Airports & Transportation Facilities",
	"Parking Structures",
	"Shopping Centers, Malls & Theaters",
	"Sports Centers & Recreational Facilities",
	"Places of Worship",
];

const practiceAreas = [
	"Engineering Design Management",
	"Structural & Civil Engineering Design",
	"BIM Implementation & Coordination",
	"Feasibility & Due Diligence Studies",
	"Value Engineering",
	"Threshold Inspections",
	"Forensic Engineering & Structural Assessments",
	"Restoration & Preservation",
	"Revit-Based Construction Documents",
];

const skillHighlights = [
	"Over 25 years of experience in structural design, inspection, planning, scheduling, and estimating",
	"Extensive experience in Revit-based BIM workflows",
	"Advanced knowledge of reinforced concrete, steel, wood, and masonry design",
	"Significant experience in high-rise, mid-rise, and parking structures",
	"Expertise in heavy industrial facilities, including refineries and power plants",
	"Strong background in structural strengthening, repair, and rehabilitation",
	"Expertise in seismic and wind-resistant design",
	"Proficient in U.S. and Canadian codes and standards",
	"Advanced user of structural analysis software including ETABS, SAP2000, STAAD, SAFE, RAM, ADAPT, S-FRAME, and PCA",
	"Excellent proficiency in Autodesk Revit and AutoCAD",
];

const licenses = [
	"Registered Professional Engineer – State of Florida (Structural I)",
	"Registered Professional Engineer – Province of Ontario, Canada",
	"Registered Threshold Inspector – State of Florida",
	"LEED Accredited Professional (LEED AP BD+C) – USGBC",
];

function AboutUs() {
	return (
		<main>
			<PageHeader title="about us" img={pageHeaderImg} overlay={0.12} />
			<section className={styles.aboutUs}>
				<div className={styles.aboutUsContainer}>
					<div className={styles.introBlock}>
						<p className={styles.eyebrow}>Structural & Civil Engineers</p>
						<h2>ASM Consulting Engineers, Inc.</h2>
						<p className={styles.lead}>
							ASM is a Florida-based consulting engineering firm established in
							2009 by Sina Malek, P.E., a licensed Professional Engineer with
							over 25 years of experience in structural and civil engineering
							design, inspection, and construction support.
						</p>
						<p>
							We provide integrated Structural and Civil Engineering services
							with a strong focus on BIM and Revit-based workflows, delivering
							coordinated, accurate, and constructible designs for private
							clients and public agencies.
						</p>
					</div>

					<div className={styles.featureGrid}>
						<article className={styles.featureCard}>
							<h3>BIM-Driven Design</h3>
							<p>
								ASM combines engineering expertise with advanced BIM technology
								to improve interdisciplinary coordination, reduce construction
								conflicts, and support efficient project delivery from concept
								through construction.
							</p>
						</article>
						<article className={styles.featureCard}>
							<h3>Commitment to Value</h3>
							<p>
								Our team emphasizes value engineering, constructability, and
								BIM-enabled efficiency to help clients meet cost and performance
								objectives without compromising safety or quality.
							</p>
						</article>
					</div>

					<div className={styles.contentGrid}>
						<section className={styles.contentCard}>
							<h3>Core Services</h3>
							<ul>
								{coreServices.map((service) => (
									<li key={service}>{service}</li>
								))}
							</ul>
						</section>

						<section className={styles.contentCard}>
							<h3>BIM & Revit Expertise</h3>
							<p>
								Autodesk Revit is used as a primary design and documentation
								platform, integrated with structural analysis software to
								deliver accurate, coordinated, and data-rich models.
							</p>
							<ul>
								{bimServices.map((service) => (
									<li key={service}>{service}</li>
								))}
							</ul>
						</section>

						<section className={styles.contentCard}>
							<h3>Project Experience</h3>
							<p>
								ASM’s work is reflected throughout the local and regional
								landscape, including specialty mid-rise and high-rise structures
								for both private and public sectors.
							</p>
							<ul>
								{projectExperience.map((experience) => (
									<li key={experience}>{experience}</li>
								))}
							</ul>
						</section>

						<section className={styles.contentCard}>
							<h3>Specialized Practice Areas</h3>
							<ul>
								{practiceAreas.map((area) => (
									<li key={area}>{area}</li>
								))}
							</ul>
						</section>
					</div>

					<section className={styles.credentialsSection}>
						<div>
							<h3>Highlights of Skills</h3>
							<ul className={styles.twoColumnList}>
								{skillHighlights.map((skill) => (
									<li key={skill}>{skill}</li>
								))}
							</ul>
						</div>
						<div className={styles.principalCard}>
							<p className={styles.eyebrow}>Principal</p>
							<h3>Sina Malek, P.E., P.Eng., S.I., LEED AP</h3>
							<p>Principal & Founder, ASM Consulting Engineers, Inc.</p>
							<h4>Licenses & Certifications</h4>
							<ul>
								{licenses.map((license) => (
									<li key={license}>{license}</li>
								))}
							</ul>
						</div>
					</section>
				</div>
			</section>
		</main>
	);
}

export default AboutUs;
