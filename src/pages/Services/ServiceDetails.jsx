import { SERVICES } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/helperFunctions";

import styles from "./ServiceDetails.module.css";

function ServiceDetails() {
  const { id } = useParams();

  const service = SERVICES.find((service) => service.id === id);

  scrollToTop();

  return (
    <main className={styles.serviceDetails}>
      <img
        src={service.image}
        alt={service.title}
        className={styles.serviceImg}
      />
      <h1>{service.title}</h1>
      <p>{service.longText}</p>
      <Link to="/services">&larr; BACK TO SERVICES</Link>
    </main>
  );
}

export default ServiceDetails;
