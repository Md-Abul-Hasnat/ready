import React from "react";
import { Link } from "react-router-dom";
import "./priceCard.css";

const PriceCard = (props) => {
  const {
    price,
    duration,
    cetagory,
    project,
    storage,
    dataTransfer,
    bandwith,
    security,
  } = props.data;
  return (
    <section className="price-card">
      <h1>
        <span>$</span> {price}
      </h1>
      <h6> {duration} </h6>
      <p className="cetagory"> {cetagory} </p>
      <p> {project} </p>
      <p> {storage} </p>
      <p> {dataTransfer} </p>
      <p> {bandwith} </p>
      <p> {security} </p> <br />
      <Link className="price-btn" to="/">
        Get Started
      </Link>
    </section>
  );
};

export default PriceCard;
