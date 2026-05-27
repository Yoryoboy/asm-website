import LinkedIn from "../assets/icons/LinkedIn";
import { HiMail } from "react-icons/hi";
import { COMPANY_INFO } from "../utils/constants";
import { scrollToTop } from "../utils/helperFunctions";

import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
	const quickLinks = [
		{
			title: "Home",
			link: "/",
		},
		{
			title: "Services",
			link: "/services",
		},
		{
			title: "About Us",
			link: "/about",
		},
		{
			title: "Projects",
			link: "/projects",
		},
		{
			title: "Contact Us",
			link: "/contactus",
		},
	];

	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<div className={styles.quickLinks}>
					<h2>Quick Links</h2>
					<ul>
						{quickLinks.map((link) => (
							<li key={link.title}>
								<Link to={link.link} onClick={() => scrollToTop()}>
									{link.title}
								</Link>
							</li>
						))}
					</ul>
					<div className={styles.socialLink} aria-label="Social media links">
						<a
							href="https://www.linkedin.com/company/asm-consulting-engineers/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							title="LinkedIn"
						>
							<LinkedIn />
						</a>
					</div>
				</div>
				<div className={styles.getInTouch}>
					<h2>Get in Touch</h2>
					<ul>
						<li>
							<aside className={styles.getInTouchIcon}>
								<div>
									<HiMail />
								</div>
							</aside>
							<h3>{COMPANY_INFO.email}</h3>
						</li>
						<li>
							<Link to="/contactus" onClick={() => scrollToTop()}>
								CONTACT US
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
