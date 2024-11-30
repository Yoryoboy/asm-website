import PageHeader from "../../components/PageHeader";
import ContactForm from "./ContactForm";
import img from "../../assets/images/contact-header.webp";

import styles from "./ContactUs.module.css";

function ContactUs() {
  return (
    <main className={styles.contactUs}>
      <PageHeader title="contact us" img={img} />
      <ContactForm />
    </main>
  );
}

export default ContactUs;
