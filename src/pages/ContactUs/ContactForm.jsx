import { Spin } from "antd";
import styles from "./ContactForm.module.css";
import useContactForm from "../../hooks/useContactForm";

function ContactForm() {
	const { isLoading, contextHolder, handleSubmit } = useContactForm();

	return (
		<>
			{contextHolder}
			<form className={styles.contactForm} onSubmit={handleSubmit}>
				<h2>Get in Touch</h2>
				<label className={styles.visuallyHidden} htmlFor="contact-name">
					Name
				</label>
				<input
					id="contact-name"
					type="text"
					placeholder="Name*"
					name="name"
					autoComplete="name"
					required
				/>
				<label className={styles.visuallyHidden} htmlFor="contact-email">
					Email
				</label>
				<input
					id="contact-email"
					type="email"
					placeholder="Email*"
					name="email"
					autoComplete="email"
					required
				/>
				<label className={styles.visuallyHidden} htmlFor="contact-phone">
					Phone
				</label>
				<input
					id="contact-phone"
					type="tel"
					placeholder="Phone"
					name="phone"
					autoComplete="tel"
				/>
				<label className={styles.visuallyHidden} htmlFor="contact-message">
					Message
				</label>
				<textarea
					id="contact-message"
					placeholder="Message"
					name="message"
					required
				></textarea>
				<button type="submit">{isLoading ? <Spin /> : "SEND MESSAGE"}</button>
			</form>
		</>
	);
}

export default ContactForm;
