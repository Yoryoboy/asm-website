import PageHeader from "../../components/PageHeader";
import ContactForm from "./ContactForm";
import img from "../../assets/images/contact-header.webp";
import SideContactDetails from "./SideContactDetails";

import styles from "./ContactUs.module.css";

function ContactUs() {
  return (
    <main>
      <PageHeader title="contact us" img={img} />
      <section className={styles.contactUs}>
        <ContactForm />
        <SideContactDetails />
      </section>
    </main>
  );
}

export default ContactUs;
