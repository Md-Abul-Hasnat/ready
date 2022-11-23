import React from "react";
import PriceCard from "../Price-card/PriceCard";
import "./pricing.css";
import { motion } from "framer-motion";
import { pricing } from "../data";

const Pricing = () => {
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <motion.section
      initial={{ y: "15%" }}
      whileInView={{ y: "0%" }}
      transition={transition}
      className="price"
    >
      <h1>OUR PRICING TABLES</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium et
        aspernatur sit distinctio numquam rem optio officia alias harum libero
        officia alias harum libero.
      </p>
      <div className="price-main">
        {pricing.map((price, index) => (
          <PriceCard key={index} data={price} />
        ))}
      </div>
    </motion.section>
  );
};

export default Pricing;
