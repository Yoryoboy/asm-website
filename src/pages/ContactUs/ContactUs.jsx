import PageHeader from "../../components/PageHeader";
import ContactForm from "./ContactForm";
import img from "../../assets/images/contact-header.webp";

function ContactUs() {
  return (
    <main>
      <PageHeader title="contact us" img={img} />
      <ContactForm />
    </main>
  );
}

export default ContactUs;
