/* eslint-disable react/prop-types */
import styles from "./PageHeader.module.css";

function PageHeader({ title, img }) {
  const pageHeaderStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <header style={pageHeaderStyle} className={styles.pageHeader}>
      <h1>{title}</h1>
    </header>
  );
}

export default PageHeader;
