import { useState } from "react";
import { Spin } from "antd";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  function sendForm(form, formElement) {
    fetch("https://formsubmit.co/ajax/93jads@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        formElement.reset();
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const formElement = event.currentTarget;
    const { elements } = formElement;

    const nameInput = elements.namedItem("name");
    const emailInput = elements.namedItem("email");
    const phoneInput = elements.namedItem("phone");
    const messageInput = elements.namedItem("message");

    const form = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      message: messageInput.value,
    };
    sendForm(form, formElement);
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <h1>Get in Touch</h1>
      <input type="text" placeholder="Name*" name="name" required />
      <input type="email" placeholder="Email*" name="email" required />
      <input type="tel" placeholder="Phone" name="phone" />
      <textarea placeholder="Message" name="message" required></textarea>
      <button>{isLoading ? <Spin /> : "SEND MESSAGE"}</button>
    </form>
  );
}

export default ContactForm;
