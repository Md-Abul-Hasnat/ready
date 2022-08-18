import React from "react";
import { Link } from "react-router-dom";
import "./fixedImg.css";

const FixedImg = () => {
  return (
    <section className="fixed-img">
      <div className="fixed-img-main">
        <h1>
          <span>READY</span> IS READY FOR BUSINESS, AGENCY OR CREATIVE
          PORTFOOLIOS
        </h1>
        <div className="fixed-links">
          <Link className="btn-orange fixed-img-btn" to="/">
            Check out features
          </Link>
          <Link className="btn-white fixed-img-btn" to="/">
            Check out features
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FixedImg;
