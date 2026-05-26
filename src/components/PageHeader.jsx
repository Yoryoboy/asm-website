/* eslint-disable react/prop-types */
import styles from "./PageHeader.module.css";

function PageHeader({ title, img, overlay = 0.42 }) {
	const pageHeaderStyle = {
		backgroundImage: `linear-gradient(rgba(10, 18, 30, ${overlay}), rgba(10, 18, 30, ${overlay})), url(${img})`,
	};

	return (
		<header style={pageHeaderStyle} className={styles.pageHeader}>
			<h1>{title}</h1>
		</header>
	);
}

export default PageHeader;
