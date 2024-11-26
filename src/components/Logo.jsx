import logo from "../assets/images/logo.png";

import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.navbarBrand}>
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
    </div>
  );
}

export default Logo;
