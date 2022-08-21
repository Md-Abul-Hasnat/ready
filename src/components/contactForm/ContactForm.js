import React from "react";
import "./contactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="contact-form-main">
        <div className="contact-form-left">
          <h1>CONTACT FORM</h1>
          <form action="https://formspree.io/f/xwkzpekz" method="POST">
            <div className="form-top">
              <input type="text" name="name" placeholder="Your name" required />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="form-top">
              <input type="number" name="phone" placeholder=" phone" />
              <input type="text" name="subject" placeholder=" subject" />
            </div>
            <textarea name="message" placeholder="message" required></textarea>
            <br />
            <input type="submit" value="SUBMIT NOW" />
          </form>
        </div>
        <div className="contact-form-right">
          <h1>GET TOUCH WITH US</h1>
          <p>
            There are many variations off passages available, but the majority
            have suffered alterattions in some forms by injected humour look
            events slightly believable ut seds do eiusmod tempor incididunt
            labore.
          </p>
          <div className="contact-right-info">
            <div className="contact-right-info-main">
              <i class="fa-solid fa-location-dot"></i>
              <h2>Address</h2>
            </div>
            <p>
              21/17, Level 4 Steel Rock St, Melbourne Victoria 3000, Australia.
            </p>
          </div>
          <div className="contact-right-info">
            <div className="contact-right-info-main">
              <i class="fa-solid fa-envelope"></i>
              <h2>Ask Anything Here</h2>
            </div>
            <p>Support@youremail.com</p>
          </div>
          <div className="contact-right-info">
            <div className="contact-right-info-main">
              <i class="fa-solid fa-phone"></i>
              <h2>Call Us Now</h2>
            </div>
            <p>+1 (44) 123-45-67, +1(44) 456-78-90</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
