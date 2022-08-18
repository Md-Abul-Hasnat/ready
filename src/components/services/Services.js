import React from "react";
import ServicesCard from "../sevice-card/ServicesCard";
import "./services.css";

const Services = () => {
  const serviceData = [
    {
      icon: "fa-solid fa-desktop",
      title: "Web Design",
      text: "Analytics release series A financing launch party interaction design android angel investor.",
    },
    {
      icon: "fa-solid fa-map",
      title: "UX Design",
      text: "Analytics release series A financing launch party interaction design android angel investor.",
    },
    {
      icon: "fa-solid fa-image",
      title: "Photography",
      text: "Analytics release series A financing launch party interaction design android angel investor.",
    },
    {
      icon: "fa-solid fa-mobile-screen-button",
      title: "App Development",
      text: "Analytics release series A financing launch party interaction design android angel investor.",
    },
  ];

  return (
    <div className="services">
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
    </div>
  );
};

export default Services;
