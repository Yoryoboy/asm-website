/* eslint-disable react/prop-types */

import styles from "./ServiceItem.module.css";

function ServiceItem({ title, subtitle, icon }) {
  return (
    <article className={styles.serviceItem}>
      <div className={styles.serviceItemIcon}>{icon}</div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <a href="#">READ MORE &rarr;</a>
    </article>
  );
}

export default ServiceItem;
