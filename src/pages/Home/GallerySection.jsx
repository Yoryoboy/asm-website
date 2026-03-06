import styles from "./GallerySection.module.css";

import Gallery from "../../components/Gallery";

function GallerySection() {
  return (
    <section>
      <h1 className={styles.ourProjects}>our projects</h1>
      <Gallery mode="home" />
    </section>
  );
}

export default GallerySection;
