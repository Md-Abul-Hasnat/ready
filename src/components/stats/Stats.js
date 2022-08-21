import React from "react";
import "./stats.css";
import { motion } from "framer-motion";

const Stats = () => {
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <motion.section
      initial={{ y: "15%" }}
      whileInView={{ y: "0%" }}
      transition={transition}
      className="stats"
    >
      <div className="stats-main">
        <article>
          <i class="fa-solid fa-trophy"></i>
          <h2>5000+</h2>
          <p>Project Finished</p>
        </article>

        <article>
          <i class="fa-solid fa-heart"></i>
          <h2>100+</h2>
          <p>Happy Clients</p>
        </article>

        <article>
          <i class="fa-solid fa-hourglass-half"></i>
          <h2>2000+</h2>
          <p>Hours of Work</p>
        </article>

        <article>
          <i class="fa-solid fa-mug-saucer"></i>
          <h2>200+</h2>
          <p>Cup of Coffee</p>
        </article>
      </div>
    </motion.section>
  );
};

export default Stats;
