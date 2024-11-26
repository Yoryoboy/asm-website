import styles from "./ContactForm.module.css";

function ContactForm() {
  return (
    <form className={styles.contactForm}>
      <h1>Get in Touch</h1>
      <input type="text" placeholder="Name*" required />
      <input type="email" placeholder="Email*" required />
      <input type="tel" placeholder="Phone" />
      <textarea placeholder="Message"></textarea>
      <button>SEND MESSAGE</button>
    </form>
  );
}

export default ContactForm;
