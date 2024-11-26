import { SERVICES } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { scrollToTop } from "../../utils/helperFunctions";
import { BackButton } from "../../components/BackButton";

import styles from "./ServiceDetails.module.css";
import ServicesVerticalNavbar from "../../components/ServicesVerticalNavbar";

function ServiceDetails() {
  const { id } = useParams();

  const service = SERVICES.find((service) => service.id === id);

  scrollToTop();

  return (
    <main className={styles.serviceDetails}>
      <aside className={styles.serviceDetailsSidebar}>
        <img
          src={service.image}
          alt={service.title}
          className={styles.serviceImg}
        />
        <h1>{service.title}</h1>
        <p>{service.longText}</p>
        <BackButton />
      </aside>
      <ServicesVerticalNavbar services={SERVICES} />
    </main>
  );
}

export default ServiceDetails;
