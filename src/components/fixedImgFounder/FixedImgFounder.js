import React from "react";
import "./founder.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper";
import coFounder1 from "../../img/man1.jpg";
import coFounder2 from "../../img/man2.jpg";

const FixedImgFounder = () => {
  return (
    <section className="fixed-img-founder">
      <Swiper
        spaceBetween={100}
        pagination={true}
        autoplay={true}
        modules={[Pagination, Autoplay]}
        className="fixed-img-founder-main"
      >
        <SwiperSlide className="co-founder">
          <img src={coFounder1} alt="Co Founder" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            facilis corporis fugiat perferendis cumque inventore harum eius
            possimus magni provident! Labore sit impedit deleniti tempora
            nostrum voluptas corrupti accusantium soluta!
          </p>
          <h3>Abul Hasnat</h3>
          <h4>Founder</h4>
        </SwiperSlide>

        <SwiperSlide className="co-founder">
          <img src={coFounder2} alt="Co Founder" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            facilis corporis fugiat perferendis cumque inventore harum eius
            possimus magni provident! Labore sit impedit deleniti tempora
            nostrum voluptas corrupti accusantium soluta!
          </p>
          <h3>Abul Hasan</h3>
          <h4>Founder</h4>
        </SwiperSlide>

        <SwiperSlide className="co-founder">
          <img src={coFounder1} alt="Co Founder" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            facilis corporis fugiat perferendis cumque inventore harum eius
            possimus magni provident! Labore sit impedit deleniti tempora
            nostrum voluptas corrupti accusantium soluta!
          </p>
          <h3>Abul Bashar</h3>
          <h4>Founder</h4>
        </SwiperSlide>

        <SwiperSlide className="co-founder">
          <img src={coFounder2} alt="Co Founder" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            facilis corporis fugiat perferendis cumque inventore harum eius
            possimus magni provident! Labore sit impedit deleniti tempora
            nostrum voluptas corrupti accusantium soluta!
          </p>
          <h3>Siam</h3>
          <h4>Co Founder</h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default FixedImgFounder;
