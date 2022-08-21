import React from "react";
import ContactHero from "../../components/contact-hero/ContactHero";
import ContactForm from "../../components/contactForm/ContactForm";
import Footer from "../../components/footer/Footer";
import GoogleMap from "../../components/googleMap/GoogleMap";

const Contact = () => {
  return (
    <section className="contact-page">
      <ContactHero />
      <ContactForm />
      <GoogleMap />
      <Footer />
    </section>
  );
};

export default Contact;
