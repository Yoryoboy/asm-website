import { projects } from "../../utils/projectsConstants";
import { useParams } from "react-router-dom";
import { scrollToTop } from "../../utils/helperFunctions";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { BackButton } from "../../components/BackButton";

import styles from "./ProjectDetails.module.css";

function ProjectDetails() {
  const { id } = useParams();
  const { img, name, location, servicePerformed, architect } = projects.find(
    (project) => project.id === id
  );

  scrollToTop();

  return (
    <div className={styles.projectDetails}>
      <aside className={styles.projectDetailsSidebar}>
        <h1>{name}</h1>
        <p>{servicePerformed}</p>
        <BackButton />
      </aside>
      <section className={styles.projectDetailsContent}>
        <img src={img} alt={name} className={styles.projectImg} />
        <ul className={styles.projectDetailsInfo}>
          <li>
            <FaMapMarkerAlt />
            <h3>Location: {location}</h3>
          </li>
          <li>
            <GrUserWorker /> <h3>Architect: {architect}</h3>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ProjectDetails;
