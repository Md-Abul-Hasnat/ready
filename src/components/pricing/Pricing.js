import React from "react";
import PriceCard from "../Price-card/PriceCard";
import "./pricing.css";

const Pricing = () => {
  const pricing = [
    {
      price: 250,
      duration: "PER MONTH",
      cetagory: "Ultimate",
      project: "15 Projects",
      storage: "30GB Storage",
      dataTransfer: "Unlimited data transfer",
      bandwith: "50GB Bandwith",
      security: "Enhanced security",
    },
    {
      price: 500,
      duration: "PER MONTH",
      cetagory: "Standard",
      project: "15 Projects",
      storage: "30GB Storage",
      dataTransfer: "Unlimited data transfer",
      bandwith: "50GB Bandwith",
      security: "Enhanced security",
    },
    {
      price: 800,
      duration: "PER MONTH",
      cetagory: "Business",
      project: "15 Projects",
      storage: "30GB Storage",
      dataTransfer: "Unlimited data transfer",
      bandwith: "50GB Bandwith",
      security: "Enhanced security",
    },
    {
      price: 999,
      duration: "PER MONTH",
      cetagory: "Primium",
      project: "15 Projects",
      storage: "30GB Storage",
      dataTransfer: "Unlimited data transfer",
      bandwith: "50GB Bandwith",
      security: "Enhanced security",
    },
  ];

  return (
    <section className="price">
      <h1>OUR PRICING TABLES</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium et
        aspernatur sit distinctio numquam rem optio officia alias harum libero
        officia alias harum libero.
      </p>
      <div className="price-main">
        {pricing.map((price) => (
          <PriceCard data={price} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
