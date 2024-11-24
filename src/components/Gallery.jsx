import GalleryItem from "./GalleryItem";

import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <section className={styles.gallery}>
      <GalleryItem />
    </section>
  );
}

export default Gallery;
