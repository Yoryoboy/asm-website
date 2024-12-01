import { Spin } from "antd";
import styles from "./ContactForm.module.css";
import useContactForm from "../../hooks/useContactForm";

function ContactForm() {
  const { isLoading, contextHolder, handleSubmit } = useContactForm();

  return (
    <>
      {contextHolder}
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h1>Get in Touch</h1>
        <input type="text" placeholder="Name*" name="name" required />
        <input type="email" placeholder="Email*" name="email" required />
        <input type="tel" placeholder="Phone" name="phone" />
        <textarea placeholder="Message" name="message" required></textarea>
        <button>{isLoading ? <Spin /> : "SEND MESSAGE"}</button>
      </form>
    </>
  );
}

export default ContactForm;
