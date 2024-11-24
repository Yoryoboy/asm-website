import GalleryItem from "./GalleryItem";
import { projects } from "../utils/projectsConstants";

import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <section className={styles.gallery}>
      {projects.map((project) => (
        <GalleryItem
          key={project.id}
          image={project.img}
          title={project.name}
        />
      ))}
    </section>
  );
}

export default Gallery;
