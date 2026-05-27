import { SERVICES } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { scrollToTop } from "../../utils/helperFunctions";
import { BackButton } from "../../components/BackButton";

import styles from "./ServiceDetails.module.css";
import ServicesVerticalNavbar from "../../components/ServicesVerticalNavbar";

function ServiceDetails() {
	const { id } = useParams();

	const service = SERVICES.find((service) => service.id === id);

	scrollToTop();

	return (
		<main className={styles.serviceDetails}>
			<aside>
				<img
					src={service.image}
					alt={`${service.title} service illustration`}
					className={styles.serviceImg}
				/>
				<h2>{service.title}</h2>
				<p>{service.longText}</p>
				<BackButton />
			</aside>
			<ServicesVerticalNavbar services={SERVICES} />
		</main>
	);
}

export default ServiceDetails;
