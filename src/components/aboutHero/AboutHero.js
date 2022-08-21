import React from "react";
import Navbar from "../navbar/Navbar";
import "./aboutHero.css";

const AboutHero = () => {
  return (
    <section id="hero" className="about-hero">
      <Navbar />

      <div className="title">
        <h1>ABOUT US</h1>
      </div>
    </section>
  );
};

export default AboutHero;
