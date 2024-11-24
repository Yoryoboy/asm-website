/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./GalleryItem.module.css";

function getHoverDirection(event, element) {
  const { top, right, bottom, left } = element.getBoundingClientRect();
  const x = event.clientX;
  const y = event.clientY;

  const fromTop = Math.abs(y - top);
  const fromBottom = Math.abs(bottom - y);
  const fromLeft = Math.abs(x - left);
  const fromRight = Math.abs(right - x);

  const min = Math.min(fromTop, fromBottom, fromLeft, fromRight);

  if (min === fromTop) return "top";
  if (min === fromBottom) return "bottom";
  if (min === fromLeft) return "left";
  return "right";
}

function GalleryItem({ image, title }) {
  const [hoverDirection, setHoverDirection] = useState(null);

  const handleMouseEnter = (event) => {
    setHoverDirection(getHoverDirection(event, event.target));
  };

  const handleMouseLeave = (e) => {
    setHoverDirection(getHoverDirection(e, e.currentTarget));
  };

  return (
    <div
      className={`${styles.galleryItem} ${styles[hoverDirection]}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt="TITLE" className={styles.galleryImage} />
      <div className={`${styles.overlay} ${styles[hoverDirection]}`}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default GalleryItem;
