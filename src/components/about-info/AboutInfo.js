import React from "react";
import "./aboutInfo.css";
import img1 from "../../img/about-info1.jpg";
import img2 from "../../img/about-info2.jpg";
import img3 from "../../img/about-info3.jpg";
import { Link } from "react-router-dom";
import AboutRight from "../aboutRight/AboutRight";
import { aboutInfoData } from "../data";
import { motion } from "framer-motion";

const AboutInfo = () => {
  const transition = {
    duration: 2,
    type: "spring",
  };
  return (
    <motion.section
      initial={{ y: "15%" }}
      whileInView={{ y: "0%" }}
      transition={transition}
      className="about-info"
    >
      <h1>INFORMATION ABOUT US</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
        tempore esse eveniet dolores amet consectetur adipisicing elit. Tenetur
        tempore esse eveniet dolores Tenetur tempore esse eveniet dolores ad
        fuga pariatur laborum nulla quo iusto!
      </p>
      <div className="about-info-main">
        <div className="about-info-main-left">
          <div className="about-info-left-top">
            <div className="about-info-main-left-img">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              voluptas reiciendis voluptatum consequuntur officia assumenda esse
              placeat earum commodi nostrum ratione magni dolorum ad voluptates
              magnam, excepturi odit iste iure quod! Esse possimus maiores totam
              provident quia, doloremque voluptatum voluptates repellat
              reprehenderit fuga ipsam aspernatur autem similique vitae.
            </p>
          </div>
          <div className="about-info-left-bottom">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
              fugit officiis aliquid illo a soluta!
            </h3>
          </div>
        </div>
        <div className="about-info-main-right">
          {aboutInfoData.map((data) => (
            <AboutRight data={data} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutInfo;
