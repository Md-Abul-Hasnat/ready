import React from "react";
import { Link } from "react-router-dom";
import "./serviceCard.css";

const ServicesCard = (props) => {
  const { icon, title, text } = props.data;
  return (
    <section className="services-card">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <br />
      <h2> {title} </h2>
      <p className="service-text">{text}</p>
      <br />
      <Link className=" service-btn" to="/">
        Learn More
      </Link>
    </section>
  );
};

export default ServicesCard;
