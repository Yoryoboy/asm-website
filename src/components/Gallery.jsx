import GalleryItem from "./GalleryItem";
import { projects } from "../utils/projectsConstants";
import RadioButtons from "./RadioButtons";

import styles from "./Gallery.module.css";
import { useState } from "react";

function Gallery() {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterChange = (value) => {
    if (value === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.type === value));
    }
  };

  return (
    <section className={styles.galleryContainer}>
      <div className={styles.galleryFilter}>
        <RadioButtons onFilterChange={handleFilterChange} />
      </div>
      <div className={styles.gallery}>
        {filteredProjects.map((project) => (
          <GalleryItem
            key={project.id}
            image={project.img}
            title={project.name}
            id={project.id}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
