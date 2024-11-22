import FeatureCard from "../../components/FeatureCard";
import styles from "./AboutCompany.module.css";
import { ABOUT_COMPANY } from "../../utils/constants";

function AboutCompany() {
  return (
    <section className={styles.aboutCompany}>
      {ABOUT_COMPANY.map((feature, index) => {
        return (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            subtitle={feature.subtitle}
          />
        );
      })}
    </section>
  );
}

export default AboutCompany;
