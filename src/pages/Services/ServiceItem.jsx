/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import styles from "./ServiceItem.module.css";

function ServiceItem({ title, description, img, id }) {
	return (
		<article className={styles.serviceItem}>
			<div className={styles.serviceItemImgContainer}>
				<img src={img} alt={title} className={styles.serviceItemImg} />
			</div>
			<h2>{title}</h2>
			<p>{description}</p>
			<Link to={`/services/${id}`}>READ MORE &rarr;</Link>
		</article>
	);
}

export default ServiceItem;
