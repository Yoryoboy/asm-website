/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CarouselItem.module.css";

function CarouselItem({ title, description, image, id }) {
	return (
		<Link className={styles.offerCarouselItemContent} to={`/services/${id}`}>
			<div className={styles.offerCarouselItemImageContainer}>
				<img
					className={styles.offerCarouselItemImage}
					src={image}
					alt={`${title} service illustration`}
				/>
			</div>
			<div className={styles.offerCarouselItemContentText}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</Link>
	);
}

export default CarouselItem;
