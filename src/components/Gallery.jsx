import GalleryItem from "./GalleryItem";
import {
  getCategorySlugFromParam,
  getProjectsForCategory,
} from "../utils/projectsCatalog";
import { useSearchParams } from "react-router-dom";

import styles from "./Gallery.module.css";

function Gallery() {
  const [searchParams] = useSearchParams();
  const activeCategory = getCategorySlugFromParam(searchParams.get("category"));
  const filteredProjects = getProjectsForCategory(activeCategory);

  return (
    <section className={styles.galleryContainer}>
      <div className={styles.galleryIntro}>
        <p>Project Portfolio</p>
      </div>
      <div className={styles.gallery}>
        {filteredProjects.map((project) => (
          <GalleryItem
            key={project.id}
            image={project.coverImageUrl}
            title={project.name}
            id={project.id}
            location={project.location}
            category={project.category.label}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
