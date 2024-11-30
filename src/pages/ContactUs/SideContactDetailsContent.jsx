/* eslint-disable react/prop-types */
import styles from "./SideContactDetailsContent.module.css";

function SideContactDetailsContent({ title, subtitle, icon }) {
  return (
    <div className={styles.sideContactDetailsContent}>
      <h2>{title}</h2>
      <div>
        {icon}
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default SideContactDetailsContent;
