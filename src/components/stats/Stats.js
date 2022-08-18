import React from "react";
import "./stats.css";

const Stats = () => {
  return (
    <section className="stats">
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
    </section>
  );
};

export default Stats;
