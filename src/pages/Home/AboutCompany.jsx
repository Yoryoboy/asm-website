import FeatureCard from "../../components/FeatureCard";
import styles from "./AboutCompany.module.css";
import { ABOUT_COMPANY } from "../../utils/constants";

function AboutCompany() {
  return (
    <section className={styles.aboutCompany}>
      <div className={styles.container}>
        {ABOUT_COMPANY.map((feature) => {
          return (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              subtitle={feature.subtitle}
            />
          );
        })}
      </div>
    </section>
  );
}

export default AboutCompany;
