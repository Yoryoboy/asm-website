import PageHeader from "../../components/PageHeader";
import pageHeaderImg from "../../assets/images/about-page-header.webp";

import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <main>
      <PageHeader title="about us" img={pageHeaderImg} />
      <section className={styles.aboutUs}>
        <div className={styles.aboutUsContainer}>
          <p>
            Established in 2009, ASM Consulting Engineers Inc. is a
            Florida-based consulting engineering firm founded by Sina Malek, a
            Professional Engineer (P.E.) with over 25 years of experience.
            Specializing in structural and civil engineering, ASM offers a
            comprehensive range of services to private clients and public
            agencies alike. From complex buildings to single-family residences,
            our designs are a testament to precision, innovation, and
            reliability.
          </p>
          <p>
            Our expertise includes structural design, feasibility studies,
            construction administration, value engineering, and threshold
            inspections. We ensure that every project meets the highest
            standards of quality, safety, and efficiency, whether it involves
            residential, commercial, institutional, or medical structures.
          </p>
          <p>
            Our diverse portfolio reflects our commitment to excellence. From
            designing high-rise buildings and sports centers to restoring
            historical structures, ASM has left its mark on the architectural
            landscape of Florida and beyond. Our specialties include engineering
            design management, forensic engineering, restoration, and
            preservation. We excel in leveraging modern tools and standards such
            as AISC, ACI, IBC, and more, ensuring that our projects adhere to
            the latest industry regulations and practices.
          </p>
          <p>
            Thank you for trusting ASM Consulting Engineers Inc. We are
            dedicated to turning your ideas into reality with precision and
            innovation.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
