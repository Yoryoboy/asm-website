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
    // TODO: Replace with actual Web3Forms Access Key
    const WEB3FORMS_ACCESS_KEY = "ca99d6ba-231d-47e1-8045-150da5bbac7d";

    const payload = {
      ...form,
      access_key: WEB3FORMS_ACCESS_KEY,
    };

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          openNotificationWithIcon("success", {
            title: "Message Sent!",
            message:
              "Thank you for reaching out. We’ve received your message and will get back to you shortly",
          });
          formElement.reset();
        } else {
          openNotificationWithIcon("error", {
            title: "Error",
            message:
              data.message || "Something went wrong. Please try again later",
          });
        }
        setIsLoading(false);
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
