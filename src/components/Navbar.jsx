import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
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
