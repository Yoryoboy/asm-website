/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import GalleryItem from "./GalleryItem";
import RadioButtons from "./RadioButtons";
import {
  ALL_PROJECTS_CATEGORY,
  PROJECT_CATEGORIES,
  getCategorySlugFromParam,
  getProjectsForCategory,
  projectsCatalog,
} from "../utils/projectsCatalog";

import styles from "./Gallery.module.css";

function Gallery({ mode = "projects" }) {
  const [searchParams] = useSearchParams();
  const [homeCategory, setHomeCategory] = useState(ALL_PROJECTS_CATEGORY.slug);
  const activeCategory =
    mode === "projects"
      ? getCategorySlugFromParam(searchParams.get("category"))
      : homeCategory;
  const filteredProjects =
    mode === "projects"
      ? getProjectsForCategory(activeCategory)
      : activeCategory === ALL_PROJECTS_CATEGORY.slug
        ? projectsCatalog
        : projectsCatalog.filter((project) => project.category.slug === activeCategory);
  const homeFilterOptions = useMemo(
    () => [
      { label: "All", value: ALL_PROJECTS_CATEGORY.slug },
      ...PROJECT_CATEGORIES.map((category) => ({
        label: category.label,
        value: category.slug,
      })),
    ],
    []
  );

  return (
    <section className={styles.galleryContainer}>
      {mode === "home" ? (
        <div className={styles.homeFilter}>
          <RadioButtons
            options={homeFilterOptions}
            defaultValue={ALL_PROJECTS_CATEGORY.slug}
            value={homeCategory}
            onFilterChange={setHomeCategory}
          />
        </div>
      ) : null}
      <div className={styles.gallery}>
        {filteredProjects.map((project) => (
          <GalleryItem
            key={project.id}
            image={project.coverImageUrl}
            title={project.name}
            id={project.id}
            location={project.location}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
