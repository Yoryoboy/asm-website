import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

import styles from "./Logo.module.css";

function Logo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.navbarBrand} onClick={handleClick}>
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
