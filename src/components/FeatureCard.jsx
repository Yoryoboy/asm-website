/* eslint-disable react/prop-types */
import styles from "./FeatureCard.module.css";

function FeatureCard({ icon, title, subtitle }) {
  return (
    <article className={styles.featureCard}>
      <aside className={styles.featureCardIcon}>
        <div>{icon}</div>
      </aside>
      <section className={styles.featureCardContent}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </section>
    </article>
  );
}

export default FeatureCard;
