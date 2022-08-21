import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./homeHero.css";
import { motion } from "framer-motion";

const HomeHero = () => {
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <section className="home" id="hero">
      <Navbar />
      <motion.div
        initial={{ y: "10%" }}
        whileInView={{ y: "0%" }}
        transition={transition}
        className="home-hero"
      >
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
      </motion.div>
    </section>
  );
};

export default HomeHero;
