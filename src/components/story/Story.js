import React from "react";
import "./story.css";
import bus from "../../img/bus.jpg";
import { motion } from "framer-motion";

const Story = () => {
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <motion.section
      initial={{ y: "15%" }}
      whileInView={{ y: "0%" }}
      transition={transition}
      className="story"
    >
      <h1>OUR STORY</h1>
      <p>
        Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy
        nibh ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy
        nibh euismod tincidunt ut laoree Dolore magna aliquam erat volutpat.
      </p>
      <div className="story-main">
        <div className="story-left">
          <img src={bus} alt="story" />
        </div>
        <div className="story-right">
          <small>may 19, 2022</small>
          <h3>Opening branches</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            debitis a in, facilis est officia sequi tempore. A eos deserunt hic
            libero dolor earum. Aperiam? <br /> <br /> Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Nam impedit repellat aspernatur
            itaque dolores omnis porro. Quos expedita eaque cumque ipsam.
            Cupiditate corrupti adipisci earum! <br /> <br /> Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Fugit vitae dolorem,
            molestias consequuntur facilis, recusandae omnis accusantium eius
            ipsum ratione assumenda, non consectetur voluptas repellat.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Story;
