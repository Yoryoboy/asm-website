import Instagram from "../assets/icons/instagram";
import Facebook from "../assets/icons/Facebook";
import LinkedIn from "../assets/icons/LinkedIn";
import { HiPhone } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";

import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.quickLinks}>
          <h1>Quick Links</h1>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Projects</li>
            <li>Contact Us</li>
          </ul>
          <div className={styles.socialLink}>
            <a>
              <Instagram />
            </a>
            <a>
              <Facebook />
            </a>
            <a>
              <LinkedIn />
            </a>
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
              <h3>+1 718-999-3939</h3>
            </li>
            <li>
              <aside className={styles.getInTouchIcon}>
                <div>
                  <HiMail />
                </div>
              </aside>
              <h3>sina@asmeng1.com</h3>
            </li>
            <li>
              <Link to="/contact">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
