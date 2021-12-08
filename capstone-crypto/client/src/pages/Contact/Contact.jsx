import React from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";
import Header from "../../components/Header/Header";

function Contact() {
  function sendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_1z6ofss",
        "template_p4njl6f",
        event.target,
        "user_gBeHdBg2S3sK3boo05IVw"
      )
      .then((res) => {
        console.log(res);
        event.target.reset();
        alert("Email Sent");
      })
      .catch((err) => console.log(err));
    
  }
  return (
    <div>
      <Header />
      <div className="contact">
        <h1 className="contact__title">Contact Form</h1>
        <form className="contact__form" onSubmit={sendEmail}>
          <label className="contact__label">Name</label>
          <input
            className="contact__input"
            type="text"
            name="name"
            placeholder="John Doe"
            required
          />
          <label className="contact__label">Email</label>
          <input
            className="contact__input"
            type="email"
            name="email"
            required
            placeholder="johndoe@gmail.com"
          />
          <label className="contact__label">Message</label>
          <textarea
            className="contact__input"
            name="message"
            rows="4"
            required
            placeholder="Message"
          ></textarea>
          <input className="contact__btn" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
