import React from "react";
import "./latestwork.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import project1 from "../../img/project1.webp";
import project2 from "../../img/project2.jpg";
import project3 from "../../img/project3.png";
import project4 from "../../img/project4.jpg";
import project5 from "../../img/project5.jpg";
import { motion } from "framer-motion";

const LatestWork = () => {
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <motion.section
      initial={{ y: "15%" }}
      whileInView={{ y: "0%" }}
      transition={transition}
      className="latest-work"
    >
      <h1>OUR LATEST WORK</h1>
      <p>
        Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy
        nibh euismod <br /> tincidunt ut laoree Dolore magna aliquam erat
        volutpat.
      </p>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          651: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        modules={[Pagination, Autoplay]}
        className="Swiper"
      >
        <SwiperSlide className="slide">
          <img src={project1} alt="project1" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={project2} alt="project2" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={project3} alt="project3" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={project4} alt="project4" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={project5} alt="project5" />
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
};
export default LatestWork;
