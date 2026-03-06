import { useSearchParams } from "react-router-dom";
import headerImg from "../assets/images/projects-header.webp";
import {
  ALL_PROJECTS_CATEGORY,
  PROJECT_CATEGORIES,
  getCategorySlugFromParam,
} from "../utils/projectsCatalog";

import styles from "./ProjectsHero.module.css";

function ProjectsHero() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = getCategorySlugFromParam(searchParams.get("category"));

  const handleCategoryChange = (categorySlug) => {
    const nextParams = new URLSearchParams(searchParams);

    if (!categorySlug) {
      nextParams.delete("category");
    } else {
      nextParams.set("category", categorySlug);
    }

    setSearchParams(nextParams, { replace: true });
  };

  return (
    <header
      className={styles.projectsHero}
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className={styles.backdrop} />
      <div className={styles.heroInner}>
        <div className={styles.categoryGrid} aria-label="Project categories">
          <button
            type="button"
            className={`${styles.categoryPanel} ${styles.resetPanel} ${
              activeCategory === ALL_PROJECTS_CATEGORY.slug ? styles.active : ""
            }`}
            onClick={() => handleCategoryChange("")}
          >
            <span>{ALL_PROJECTS_CATEGORY.label}</span>
          </button>
          {PROJECT_CATEGORIES.map((category, index) => (
            <button
              key={category.slug}
              type="button"
              className={`${styles.categoryPanel} ${
                activeCategory === category.slug ? styles.active : ""
              } ${styles[`panel${index + 1}`]}`}
              onClick={() => handleCategoryChange(category.slug)}
            >
              <span>{category.heroLabel}</span>
            </button>
          ))}
        </div>
        <div className={styles.titleBlock}>
          <h1>Projects</h1>
        </div>
      </div>
    </header>
  );
}

export default ProjectsHero;
