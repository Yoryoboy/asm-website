import { NavLink } from "react-router-dom";
import LinkedIn from "../assets/icons/LinkedIn";
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
        <div className={styles.socialIcons} aria-label="Social media links">
          <span
            className={styles.pendingSocialLink}
            aria-label="LinkedIn link pending"
            title="LinkedIn link pending"
          >
            <LinkedIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SubNavbar;
