import LinkedIn from "../assets/icons/LinkedIn";
import { HiPhone } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";
import { COMPANY_INFO } from "../utils/constants";
import { scrollToTop } from "../utils/helperFunctions";

import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
    scrollToTop();
  };

  const quickLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Contact Us",
      link: "/contactus",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.quickLinks}>
          <h1>Quick Links</h1>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.title} onClick={() => handleClick(link.link)}>
                {link.title}
              </li>
            ))}
          </ul>
          <div className={styles.socialLink} aria-label="Social media links">
            <span
              className={styles.pendingSocialLink}
              aria-label="LinkedIn link pending"
              title="LinkedIn link pending"
            >
              <LinkedIn />
            </span>
          </div>
        </div>
        <div className={styles.getInTouch}>
          <h1>Get in Touch</h1>
          <ul>
            <li>
              <aside className={styles.getInTouchIcon}>
                <div>
                  <HiPhone />
                </div>
              </aside>
              <h3>{COMPANY_INFO.phone}</h3>
            </li>
            <li>
              <aside className={styles.getInTouchIcon}>
                <div>
                  <HiMail />
                </div>
              </aside>
              <h3>{COMPANY_INFO.email}</h3>
            </li>
            <li>
              <Link to="/contactus" onClick={() => scrollToTop()}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
