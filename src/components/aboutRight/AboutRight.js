import React from "react";
import "./aboutRight.css";

const AboutRight = (props) => {
  return (
    <section className="about-info-right">
      <div className="about-info-right-top">
        <i class={props.data.icon}></i>
        <h2>{props.data.title} </h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quasi
        qui inventore
      </p>
    </section>
  );
};

export default AboutRight;
