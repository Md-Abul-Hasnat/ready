import React from "react";
import Navbar from "../navbar/Navbar";
import "./blogHero.css";

const BlogHero = () => {
  return (
    <section className="blog-hero" id="hero">
      <Navbar />

      <div className="title">
        <h1>BLOGS</h1>
      </div>
    </section>
  );
};

export default BlogHero;
