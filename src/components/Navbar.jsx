import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar} ref={menuRef}>
      <Logo />
      <button
        type="button"
        className={styles.burgerMenu}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className={styles.burgerLine} />
        <div className={styles.burgerLine} />
        <div className={styles.burgerLine} />
      </button>

      <ul
        className={`${styles.navbarNav} ${
          isMenuOpen ? styles.navbarNavOpen : ""
        }`}
      >
        <li className={styles.navbarNavItem}>
          <NavLink to="/" className={styles.navLink} onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li className={styles.navbarNavItem}>
          <NavLink to="/about" className={styles.navLink} onClick={toggleMenu}>
            About Us
          </NavLink>
        </li>
        <li className={styles.navbarNavItem}>
          <NavLink
            to="/services"
            className={styles.navLink}
            onClick={toggleMenu}
          >
            Services
          </NavLink>
        </li>

        <li className={styles.navbarNavItem}>
          <NavLink
            to="/projects"
            className={styles.navLink}
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
        </li>
        <li className={styles.navbarNavItem}>
          <NavLink
            to="/contactus"
            className={styles.navLink}
            onClick={toggleMenu}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
