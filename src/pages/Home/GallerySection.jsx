import styles from "./GallerySection.module.css";

import Gallery from "../../components/Gallery";

function GallerySection() {
  return (
    <section className={styles.gallerySection}>
      <Gallery />
    </section>
  );
}

export default GallerySection;
