import ServiceItem from "./ServiceItem";
import { SERVICES } from "../../utils/constants";

import styles from "./ServicesGrid.module.css";

function ServicesGrid() {
  return (
    <section className={styles.servicesGrid}>
      {SERVICES.map((service) => (
        <ServiceItem
          key={service.id}
          title={service.title}
          description={service.description}
          img={service.image}
        />
      ))}
    </section>
  );
}

export default ServicesGrid;
