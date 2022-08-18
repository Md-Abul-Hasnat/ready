import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./homeHero.css";

const HomeHero = () => {
  return (
    <section className="home" id="homeHero">
      <Navbar />
      <div className="home-hero">
        <h1>
          <span>Ready</span> The Best Corporate <br /> Business Template
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          quis explicabo autem ad maiores eveniet?
          <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptates quis explicabo autem?
        </p>
        <Link className="btn" to="/">
          Purchase
        </Link>
      </div>
    </section>
  );
};

export default HomeHero;
