import ServiceItem from "./ServiceItem";
import { ABOUT_COMPANY } from "../../utils/constants";

import styles from "./ServicesGrid.module.css";

function ServicesGrid() {
  return (
    <section className={styles.servicesGrid}>
      {ABOUT_COMPANY.map((service) => (
        <ServiceItem
          key={service.id}
          title={service.title}
          subtitle={service.subtitle}
          icon={service.icon}
        />
      ))}
    </section>
  );
}

export default ServicesGrid;
