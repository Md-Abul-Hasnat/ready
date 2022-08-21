import React from "react";
import ServicesCard from "../sevice-card/ServicesCard";
import "./services.css";
import { motion } from "framer-motion";
import { serviceData } from "../data";

const Services = () => {
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <motion.div
      initial={{ y: "15%" }}
      whileInView={{ y: "0%" }}
      transition={transition}
      className="services"
    >
      <h1>OUR SERVICES</h1>
      <p>
        Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy
        nibh euismod <br /> tincidunt ut laoree Dolore magna aliquam erat
        volutpat.
      </p>
      <div className="services-main">
        {serviceData.map((service) => (
          <ServicesCard data={service} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
