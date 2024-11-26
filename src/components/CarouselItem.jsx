/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./CarouselItem.module.css";

function CarouselItem({ title, description, image, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services/${id}`);
  };

  return (
    <article className={styles.offerCarouselItemContent} onClick={handleClick}>
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
