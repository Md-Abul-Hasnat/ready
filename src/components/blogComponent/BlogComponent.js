import React from "react";
import { Link } from "react-router-dom";
import "./blogComponent.css";

const BlogComponent = (props) => {
  function decreaseText(text, length) {
    return text.slice(0, length);
  }

  return (
    <section className="single-blog">
      <img src={props.data.img} alt="" />
      <div className="blog-details">
        <h2> {props.data.title} </h2>
        <p>Post by: {props.data.postBy} </p>
        <p> {decreaseText(props.data.text, 100)}</p>
        <a href={`/blog/${props.data.id}`}>
          Read More <i class="fa-solid fa-arrow-right"></i>
        </a>
        <br />
        <h6>Published : {props.data.published} </h6>
      </div>
    </section>
  );
};

export default BlogComponent;
