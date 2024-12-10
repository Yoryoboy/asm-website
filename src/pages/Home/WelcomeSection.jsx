import { Link } from "react-router-dom";
import img1 from "../../assets/images/1713671901756.png";
import img2 from "../../assets/images/Feature-7-Civil-Engineering-Advancements.jpg";
import img3 from "../../assets/images/welcome-image.webp";
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
        speed={1500}
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
