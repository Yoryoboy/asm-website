import { notification } from "antd";
import { useState } from "react";

function useContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, data) => {
    api[type]({
      message: data.title,
      description: data.message,
    });
  };

  const sendForm = (form, formElement) => {
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
        openNotificationWithIcon("error", {
          ...error,
          title: "Error",
          message: "Something went wrong. Please try again later",
        });
        setIsLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formElement = event.currentTarget;
    const { elements } = formElement;

    const form = {
      name: elements.namedItem("name").value,
      email: elements.namedItem("email").value,
      phone: elements.namedItem("phone").value,
      message: elements.namedItem("message").value,
    };

    sendForm(form, formElement);
  };

  return { isLoading, contextHolder, handleSubmit };
}

export default useContactForm;
