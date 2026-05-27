import styles from "./GallerySection.module.css";

import Gallery from "../../components/Gallery";

function GallerySection() {
	return (
		<section>
			<h2 className={styles.ourProjects}>our projects</h2>
			<Gallery mode="home" />
		</section>
	);
}

export default GallerySection;
