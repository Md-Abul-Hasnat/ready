import React from "react";
import { Link } from "react-scroll";
import "./footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <section className="footer">
      <motion.div
        initial={{ y: "10%" }}
        whileInView={{ y: "0%" }}
        transition={transition}
        className="footer-main"
      >
        <div className="footer-left">
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam
            nonummy nibh euismod,Lorem ipsum dolor sit amet consectetuer
            adipiscing elit sed diam nonummy nibh euismod
          </p>
          <div className="envelop footer-info">
            <i class="fa-solid fa-envelope"></i>
            <p>info@yourcompany. com</p>
          </div>
          <div className="phone footer-info">
            <i class="fa-solid fa-phone"></i>
            <p>+0123456789</p>
          </div>
          <div className="location footer-info">
            <i class="fa-solid fa-location-dot"></i>
            <p>C-Block,Uposhohar, Sylhet</p>
          </div>
        </div>
        <div className="footer-right">
          <h4>Get In Touch</h4>
          <p>
            Enter your email address for our mailing list to keep yourself
            updated.
          </p>
          <form>
            <input type="email" placeholder=" email address" />
            <input type="submit" value="Subscribe" />
          </form>

          <h4>Follow Us</h4>
          <div className="footer-icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
      </motion.div>
      <div className="copyright">
        <small>© Copyright 2022 Ready All rights reserved.</small>
        <Link spy={true} to="hero" smooth={true}>
          <i class="fa-solid fa-arrow-up"></i>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
