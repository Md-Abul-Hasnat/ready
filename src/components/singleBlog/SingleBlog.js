import React from "react";
import Navbar from "../navbar/Navbar";
import "./singleBlog.css";
import { blogsData } from "../blogContent/BlogContent";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";

const SingleBlog = () => {
  const { id } = useParams();

  const blog = blogsData.find((blog) => Number(id) === blog.id);

  return (
    <section className="selected-blog">
      <div className="single-blog-hero">
        <Navbar />
        <div className="title">
          <h1>BLOG</h1>
        </div>
      </div>

      <div className="blog-data">
        <img src={blog.img} alt="" />
        <h1> {blog.title} </h1>
        <p> Publisher : {blog.postBy} </p>
        <p> {blog.text} </p>
        <h5>Published on : {blog.published} </h5>
      </div>
      <Footer />
    </section>
  );
};

export default SingleBlog;
