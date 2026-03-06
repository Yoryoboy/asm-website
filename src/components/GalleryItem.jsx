/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import styles from "./GalleryItem.module.css";

function GalleryItem({ image, title, id, location, category }) {
  return (
    <Link to={`/projects/${id}`} className={styles.galleryItem}>
      <div className={styles.galleryMedia}>
        <img src={image} alt={title} className={styles.galleryImage} />
        <div className={styles.galleryBadge}>{category}</div>
      </div>
      <div className={styles.galleryContent}>
        <h2>{title}</h2>
        <div className={styles.galleryMeta}>
          <span>{location || "Location pending"}</span>
          <span className={styles.galleryArrow}>↗</span>
        </div>
      </div>
    </Link>
  );
}

export default GalleryItem;
