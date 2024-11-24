/* eslint-disable react/prop-types */

import styles from "./ServiceItem.module.css";

function ServiceItem({ title, description, img }) {
  return (
    <article className={styles.serviceItem}>
      <div className={styles.serviceItemImgContainer}>
        <img src={img} alt={title} className={styles.serviceItemImg} />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      <a href="#">READ MORE &rarr;</a>
    </article>
  );
}

export default ServiceItem;
