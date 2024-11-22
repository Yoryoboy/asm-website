import { Link } from "react-router-dom";
import styles from "./WelcomeSection.module.css";

function WelcomeSection() {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.welcomeSectionContent}>
        <h1>Welcome to ASM Consulting Engineers</h1>
        <h2>
          Over 25 years of expertise in delivering reliable structural solutions
          with innovative civil engineering.
        </h2>

        <Link to="/services">VIEW MORE</Link>
      </div>
    </section>
  );
}

export default WelcomeSection;
