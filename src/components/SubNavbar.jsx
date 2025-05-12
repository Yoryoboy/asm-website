import { NavLink } from "react-router-dom";
import styles from "./SubNavbar.module.css";

function SubNavbar() {
  return (
    <div className={styles.subNavbarContainer}>
      <div className={styles.subNavbar}>
        <div className={styles.navLinks}>
          <NavLink to="/structural-engineering" className={styles.subNavLink}>
            Structural Engineering
          </NavLink>
          <NavLink to="/civil-engineering" className={styles.subNavLink}>
            Civil Engineering
          </NavLink>
          <NavLink to="/special-inspections" className={styles.subNavLink}>
            Threshold/Special Inspections
          </NavLink>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SubNavbar;
