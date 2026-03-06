import { useSearchParams } from "react-router-dom";
import {
  ALL_PROJECTS_CATEGORY,
  PROJECT_CATEGORIES,
  getCategorySlugFromParam,
} from "../utils/projectsCatalog";

import styles from "./ProjectCategoryTabs.module.css";

function ProjectCategoryTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = getCategorySlugFromParam(searchParams.get("category"));
  const tabs = [ALL_PROJECTS_CATEGORY, ...PROJECT_CATEGORIES];

  const handleTabClick = (categorySlug) => {
    const nextParams = new URLSearchParams(searchParams);

    if (categorySlug === ALL_PROJECTS_CATEGORY.slug) {
      nextParams.delete("category");
    } else {
      nextParams.set("category", categorySlug);
    }

    setSearchParams(nextParams, { replace: true });
  };

  return (
    <div className={styles.tabsWrap}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.slug}
            type="button"
            className={`${styles.tab} ${
              activeCategory === tab.slug ? styles.active : ""
            }`}
            onClick={() => handleTabClick(tab.slug)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProjectCategoryTabs;
