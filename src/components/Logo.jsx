import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link className={styles.navbarBrand} to="/" aria-label="Go to home page">
      <img
        src={logo}
        alt="ASM Consulting Engineers logo"
        className={styles.navbarLogo}
      />
      <div>
        <span className={styles.navbarTitle}>
          ASM <span>Consulting</span>
        </span>
        <span className={styles.navbarSubtitle}> Engineers</span>
      </div>
    </Link>
  );
}

export default Logo;
