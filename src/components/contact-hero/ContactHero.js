import React from "react";
import Navbar from "../navbar/Navbar";
import "./contactHero.css";

const ContactHero = () => {
  return (
    <section id="hero" className="contact-hero">
      <Navbar />

      <div className="title">
        <h1>CONTACT US</h1>
      </div>
    </section>
  );
};

export default ContactHero;
