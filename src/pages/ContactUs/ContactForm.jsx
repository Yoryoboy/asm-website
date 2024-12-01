import { useState } from "react";
import { Spin, notification } from "antd";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  function openNotificationWithIcon(type, data) {
    api[type]({
      message: data.title,
      description: data.message,
    });
  }

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
        openNotificationWithIcon("success", {
          ...data,
          title: "Message Sent!",
          message:
            "Thank you for reaching out. We’ve received your message and will get back to you shortly",
        });
        setIsLoading(false);
        formElement.reset();
      })
      .catch((error) => {
        openNotificationWithIcon("Error Sending Message", {
          ...error,
          title: "Error",
          message: "Something went wrong. Please try again later",
        });
        setIsLoading(false);
      });
  }

  function handleSubmit(event) {
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
