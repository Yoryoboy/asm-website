/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./CarouselItem.module.css";

function CarouselItem({ title, description, image, id }) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/services/${id}`);
	};

	return (
		<article className={styles.offerCarouselItemContent} onClick={handleClick}>
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
		</article>
	);
}

export default CarouselItem;
