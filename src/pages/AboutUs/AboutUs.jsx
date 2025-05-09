import PageHeader from "../../components/PageHeader";
import pageHeaderImg from "../../assets/images/about-page-header.webp";

import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <main>
      <PageHeader title="about us" img={pageHeaderImg} />
      <section className={styles.aboutUs}>
        <div className={styles.aboutUsContainer}>
          <h2>ASM Consulting Engineers</h2>
          <p>
            Incorporated (ASM) is a Florida-based consulting engineering firm,
            founded in 2009 by Sina Malek, a licensed Professional Engineer and
            Special Inspector (P.E., S.I). We specialize in providing
            comprehensive Structural and Civil Engineering services to
            private clients and public agencies.
          </p>
          <p>
            At ASM, we bring the same level of dedication and precision to every
            project, whether designing complex commercial structures or
            single-family residences. Our expertise extends beyond design; we
            are equally skilled in conducting job-site inspections, performing
            detailed stress calculations, and ensuring that every aspect of our
            work meets the highest industry standards.
          </p>
          <p>
            With over 25 years of experience, we take pride in our attention to
            detail, technical excellence, and commitment to delivering reliable
            engineering solutions. Our areas of expertise include:
          </p>
          <ul>
            <li>Structural and Civil Engineering Design</li>
            <li>Feasibility Studies</li>
            <li>Value Engineering</li>
            <li>Threshold Inspections</li>
            <li>Forensic Engineering</li>
            <li>Restoration/Preservation</li>
            <li>Construction Documents</li>
            <li>Building Investigations and Assessment</li>
            <li>30/40/50-Year Recertification</li>
            <li>Structural Integrity Reserve Studies (SIRS)</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
