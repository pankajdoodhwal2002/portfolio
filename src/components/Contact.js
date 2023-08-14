import React, { useRef } from "react";
import "../Css/Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ax958or",
        "template_ohxx2ei",
        form.current,
        "nsJ48ogQKAuBOpwcw"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactmefull" id="contact">
      <div className="contactcomponent">
        <div className="contactintro">
          <h1>Contact</h1>
          <div className="underline"></div>
          <p className="contactsummery">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="form">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              name="user_name"
              id="name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              placeholder="Enter your Email"
              name="user_email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              required
              placeholder="Enter your message"
              name="message"
              id="message"
              className="messagebox"
              rows="10"
            />
          </div>
          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
