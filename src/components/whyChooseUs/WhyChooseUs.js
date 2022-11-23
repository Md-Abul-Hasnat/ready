import React from "react";
import { Link } from "react-router-dom";
import "./whyChooseUs.css";
import video from "../../img/why-choose-us.mp4";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <motion.section
      initial={{ y: "15%" }}
      whileInView={{ y: "0%" }}
      transition={transition}
      className="why-choose-us"
    >
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
          <Link className="wcu-btn" to="/about">
            Learn more
          </Link>
        </div>
        <div className="why-choose-us-right">
          <video controls="controls" src={video} />
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
