import PageHeader from "../../components/PageHeader";
import ContactForm from "./ContactForm";
import img from "../../assets/images/contact-header.webp";
import SideContactDetails from "./SideContactDetails";
import Seo from "../../seo/Seo";
import {
	createBreadcrumbSchema,
	createWebPageSchema,
} from "../../seo/siteMetadata";

import styles from "./ContactUs.module.css";

function ContactUs() {
	return (
		<>
			<Seo
				title="Contact ASM Consulting Engineers"
				description="Contact ASM Consulting Engineers in Miami, Florida for structural engineering, civil engineering, threshold inspections, and project support."
				path="/contactus"
				structuredData={[
					createWebPageSchema({
						title: "Contact ASM Consulting Engineers",
						description:
							"Contact ASM Consulting Engineers in Miami, Florida for structural engineering, civil engineering, threshold inspections, and project support.",
						path: "/contactus",
						type: "ContactPage",
					}),
					createBreadcrumbSchema([
						{ name: "Home", path: "/" },
						{ name: "Contact Us", path: "/contactus" },
					]),
				]}
			/>
			<main>
				<PageHeader title="contact us" img={img} />
				<section className={styles.contactUs}>
					<ContactForm />
					<SideContactDetails />
				</section>
			</main>
		</>
	);
}

export default ContactUs;
