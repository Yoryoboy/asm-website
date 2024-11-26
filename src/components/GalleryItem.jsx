/* eslint-disable react/prop-types */
import { useState } from "react";
import { getHoverDirection } from "../utils/helperFunctions";
import { useNavigate } from "react-router-dom";

import styles from "./GalleryItem.module.css";

function GalleryItem({ image, title, id }) {
  const [hoverDirection, setHoverDirection] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (event) => {
    setHoverDirection(getHoverDirection(event, event.target));
  };

  const handleMouseLeave = (event) => {
    setHoverDirection(getHoverDirection(event, event.target));
  };

  const handleClick = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <div
      className={`${styles.galleryItem} ${styles[hoverDirection]}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleClick(id)}
    >
      <img src={image} alt={title} className={styles.galleryImage} />
      <div className={`${styles.overlay} ${styles[hoverDirection]}`}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default GalleryItem;
