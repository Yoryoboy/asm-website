import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { scrollToTop } from "../../utils/helperFunctions";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { BackButton } from "../../components/BackButton";
import { getProjectById } from "../../utils/projectsCatalog";

import styles from "./ProjectDetails.module.css";

function ProjectDetails() {
  const { id } = useParams();
  const project = getProjectById(id);
  const [selectedImage, setSelectedImage] = useState(project?.coverImage ?? null);

  useEffect(() => {
    scrollToTop();
  }, [id]);

  useEffect(() => {
    setSelectedImage(project?.coverImage ?? null);
  }, [project]);

  if (!project) {
    return (
      <section className={styles.projectDetails}>
        <aside className={styles.projectDetailsSidebar}>
          <p className={styles.projectEyebrow}>Project not found</p>
          <h1>This project is not available in the current catalog.</h1>
          <BackButton />
        </aside>
      </section>
    );
  }

  return (
    <section className={styles.projectDetails}>
      <aside className={styles.projectDetailsSidebar}>
        <p className={styles.projectEyebrow}>{project.category.label}</p>
        <h1>{project.name}</h1>
        <p>{project.servicePerformed || "Project description coming soon."}</p>
        <BackButton />
      </aside>
      <section className={styles.projectDetailsContent}>
        {selectedImage ? (
          <div className={styles.projectImageFrame}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className={styles.projectImg}
            />
          </div>
        ) : (
          <div className={styles.projectPlaceholder}>
            <span>Project gallery coming soon</span>
          </div>
        )}
        {project.images.length > 1 ? (
          <div className={styles.projectThumbs}>
            {project.images.map((image) => (
              <button
                key={image.id}
                type="button"
                aria-pressed={selectedImage?.id === image.id}
                className={`${styles.projectThumb} ${
                  selectedImage?.id === image.id ? styles.activeThumb : ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.alt} />
              </button>
            ))}
          </div>
        ) : null}
        <ul className={styles.projectDetailsInfo}>
          <li>
            <FaMapMarkerAlt />
            <h3>Location: {project.location || "Pending"}</h3>
          </li>
          <li>
            <GrUserWorker /> <h3>Architect: {project.architect || "Pending"}</h3>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default ProjectDetails;
