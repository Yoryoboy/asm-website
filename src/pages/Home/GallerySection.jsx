import styles from "./GallerySection.module.css";

import Gallery from "../../components/Gallery";

function GallerySection() {
  return (
    <section>
      <h1 className={styles.ourProjects}>our projects</h1>
      <Gallery />
    </section>
  );
}

export default GallerySection;
