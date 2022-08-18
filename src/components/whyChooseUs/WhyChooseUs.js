import React from "react";
import { Link } from "react-router-dom";
import "./whyChooseUs.css";
import video from "../../img/why-choose-us.mp4";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h1>WHY CHOOSE US </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut
        distinctio reiciendis magni nisi aliquam totam, nostrum molestias eum
        voluptate.
      </p>
      <div className="why-choose-us-main">
        <div className="why-choose-us-left">
          <h2>Here Is Some Reason</h2>
          <p>
            Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam
            nonummy nibh euismod tincidunt ut laoree Dolore magna aliquam erat
            volutpat.Lorem ipsum dolor sit amet consectetuer adipiscing elit sed
            diam nonummy nibh euismod tincidunt ut laoree Dolore magna aliquam
            erat volutpat.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam
            nonummy nibh euismod tincidunt ut laoree Dolore magna aliquam erat
            volutpat.
          </p>
          <Link className="wcu-btn" to="/">
            Learn more
          </Link>
        </div>
        <div className="why-choose-us-right">
          <video controls="controls" autoplay="true" src={video} />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;