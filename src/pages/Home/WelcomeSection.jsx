import { Link } from "react-router-dom";
import img1 from "../../assets/images/Delmar-3.webp";
import img2 from "../../assets/images/DJI_0316.webp";
import img3 from "../../assets/images/Final - Rear.webp";
import img4 from "../../assets/images/FRONT-02-3D.webp";
import img5 from "../../assets/images/ginardstudio_smart_brickell_1.webp";
import styles from "./WelcomeSection.module.css";
import { Carousel } from "antd";

function WelcomeSection() {
  return (
    <section className={styles.welcomeSection}>
      <Carousel
        autoplay
        dots={false}
        fade={true}
        autoplaySpeed={4000}
        speed={3000}
      >
        <div className={styles.imageWrapper}>
          <img
            className={styles.welcomeSectionImage}
            src={img1}
            alt="welcome-image"
          />
        </div>
        <div className={styles.imageWrapper}>
          <img
            className={styles.welcomeSectionImage}
            src={img2}
            alt="welcome-image"
          />
        </div>
        <div className={styles.imageWrapper}>
          <img
            className={styles.welcomeSectionImage}
            src={img3}
            alt="welcome-image"
          />
        </div>
        <div className={styles.imageWrapper}>
          <img
            className={styles.welcomeSectionImage}
            src={img4}
            alt="welcome-image"
          />
        </div>
        <div className={styles.imageWrapper}>
          <img
            className={styles.welcomeSectionImage}
            src={img5}
            alt="welcome-image"
          />
        </div>
      </Carousel>
      <div className={styles.welcomeSectionContent}>
        <h1>
          Welcome to <br /> ASM Consulting Engineers
        </h1>
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
