/* eslint-disable react/prop-types */
import styles from "./ServicesVerticalNavbar.module.css";
import { NavLink } from "react-router-dom";

function ServicesVerticalNavbar({ services }) {
	return (
		<section className={styles.servicesVerticalNavbar}>
			<h2>All Services</h2>
			{services.map((service) => (
				<ul key={service.id} className={styles.servicesVerticalNavbarList}>
					<li>
						<NavLink to={`/services/${service.id}`}>{service.title}</NavLink>
					</li>
				</ul>
			))}
		</section>
	);
}

export default ServicesVerticalNavbar;
