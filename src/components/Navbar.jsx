import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <img
          src={logo}
          alt="ASM Consulting Engineers logo"
          className={styles.navbarLogo}
        />
        <div>
          <span className={styles.navbarTitle}>ASM Consulting</span>
          <span className={styles.navbarSubtitle}> Engineers</span>
        </div>
      </div>
      <ul className={styles.navbarNav}>
        <li className={styles.navbarNavItem}>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
        </li>
        <li className={styles.navbarNavItem}>
          <NavLink to="/services" className={styles.navLink}>
            Services
          </NavLink>
        </li>
        <li className={styles.navbarNavItem}>
          <NavLink to="/about" className={styles.navLink}>
            About Us
          </NavLink>
        </li>
        <li className={styles.navbarNavItem}>
          <NavLink to="/projects" className={styles.navLink}>
            Projects
          </NavLink>
        </li>
        <li className={styles.navbarNavItem}>
          <NavLink to="/contactus" className={styles.navLink}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
