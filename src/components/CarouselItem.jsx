/* eslint-disable react/prop-types */
import styles from "./CarouselItem.module.css";

function CarouselItem({ title, description, image }) {
  return (
    <article className={styles.offerCarouselItemContent}>
      <div className={styles.offerCarouselItemImageContainer}>
        <img
          className={styles.offerCarouselItemImage}
          src={image}
          alt="photo"
        />
      </div>
      <div className={styles.offerCarouselItemContentText}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default CarouselItem;
