import React from "react";
import "./googlemap.css";

const GoogleMap = () => {
  return (
    <section className="g-map">
      <div className="g-map-main">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1809.6682065531058!2d91.88568111736608!3d24.886504055811862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751ab343202a0ed%3A0xeedb1a195daa9f06!2sBangladesh%20Bank%20Colony%20Gate!5e0!3m2!1sen!2sbd!4v1661041242621!5m2!1sen!2sbd"></iframe>
      </div>
    </section>
  );
};

export default GoogleMap;
