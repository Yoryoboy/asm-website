import { useSearchParams } from "react-router-dom";
import headerImg from "../assets/images/projects-header.webp";
import {
  ALL_PROJECTS_CATEGORY,
  PROJECT_CATEGORIES,
  getCategorySlugFromParam,
  getProjectsForCategory,
  projectsCatalog,
} from "../utils/projectsCatalog";

import styles from "./ProjectsHero.module.css";

function ProjectsHero() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = getCategorySlugFromParam(searchParams.get("category"));
  const filters = [ALL_PROJECTS_CATEGORY, ...PROJECT_CATEGORIES].map((category) => ({
    ...category,
    count:
      category.slug === ALL_PROJECTS_CATEGORY.slug
        ? projectsCatalog.length
        : getProjectsForCategory(category.slug).length,
  }));

  const handleCategoryChange = (categorySlug) => {
    const nextParams = new URLSearchParams(searchParams);

    if (categorySlug === ALL_PROJECTS_CATEGORY.slug) {
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
        <div className={styles.titleBlock}>
          <p>ASM Consulting Engineers</p>
          <h1>Projects</h1>
        </div>
        <div className={styles.filterDock}>
          {filters.map((category) => (
            <button
              key={category.slug}
              type="button"
              className={`${styles.filterChip} ${
                activeCategory === category.slug ? styles.active : ""
              }`}
              onClick={() => handleCategoryChange(category.slug)}
            >
              <span className={styles.filterLabel}>{category.label}</span>
              <span className={styles.filterCount}>{category.count}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default ProjectsHero;
