import React from "react";
import "./blogContent.css";
import blog1 from "../../img/blog1.jpg";
import blog2 from "../../img/blog2.jpg";
import blog3 from "../../img/blog3.jpg";
import blog4 from "../../img/blog4.jpg";
import { Link } from "react-router-dom";
import BlogComponent from "../blogComponent/BlogComponent";

export const blogsData = [
  {
    id: 1,
    img: blog1,
    title: "This is just a blog",
    postBy: "Abul Hasan",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero unde veniam aut error illo hic nam pariatur odit voluptate debitis adipisci ratione corrupti praesentium laboriosam minus, eaque repellendus inventore quae, ipsam tempore id. Et explicabo odio accusantium vero animi, eos recusandae dolorum! Ratione quis impedit debitis nostrum natus, amet enim!",
    published: "10 July 2022",
  },
  {
    id: 2,
    img: blog2,
    title: "This is just a blog",
    postBy: "Abul Bashar",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero unde veniam aut error illo hic nam pariatur odit voluptate debitis adipisci ratione corrupti praesentium laboriosam minus, eaque repellendus inventore quae, ipsam tempore id. Et explicabo odio accusantium vero animi, eos recusandae dolorum! Ratione quis impedit debitis nostrum natus, amet enim!",
    published: "30 May 2022",
  },
  {
    id: 3,
    img: blog3,
    title: "This is just a blog",
    postBy: "Foysal Ahmed",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero unde veniam aut error illo hic nam pariatur odit voluptate debitis adipisci ratione corrupti praesentium laboriosam minus, eaque repellendus inventore quae, ipsam tempore id. Et explicabo odio accusantium vero animi, eos recusandae dolorum! Ratione quis impedit debitis nostrum natus, amet enim!",
    published: "20 January 2022",
  },
  {
    id: 4,
    img: blog4,
    title: "This is just a blog",
    postBy: "Abul Hasnat",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero unde veniam aut error illo hic nam pariatur odit voluptate debitis adipisci ratione corrupti praesentium laboriosam minus, eaque repellendus inventore quae, ipsam tempore id. Et explicabo odio accusantium vero animi, eos recusandae dolorum! Ratione quis impedit debitis nostrum natus, amet enim!",
    published: "10 February 2022",
  },
];

const BlogContent = () => {
  return (
    <section className="blog-content">
      <div className="blog-content-main">
        <div className="blog-content-left">
          {blogsData.map((data) => (
            <BlogComponent data={data} />
          ))}
        </div>
        <div className="blog-content-right">
          <div className="blog-right-blog">
            <h1>From Our Blog</h1>
            <div className="blog-right-main">
              <div className="blog-text">
                <p>Printing and Typesetting</p>
                <small>Sep 05 2016</small>
              </div>
              <div className="blog-text">
                <p>Printing and Typesetting</p>
                <small>Sep 05 2016</small>
              </div>
              <div className="blog-text">
                <p>Printing and Typesetting</p>
                <small>Sep 05 2016</small>
              </div>
              <div className="blog-text">
                <p>Printing and Typesetting</p>
                <small>Sep 05 2016</small>
              </div>
            </div>
          </div>
          <div className="blog-right-service">
            <h1>Our Services</h1>
            <div className="blog-right-service-main">
              <div className="service-text">
                <i class="fa-solid fa-chevron-right"></i>
                <p>Development</p>
              </div>
              <div className="service-text">
                <i class="fa-solid fa-chevron-right"></i>
                <p>Branding</p>
              </div>
              <div className="service-text">
                <i class="fa-solid fa-chevron-right"></i>
                <p>Marketing</p>
              </div>
              <div className="service-text">
                <i class="fa-solid fa-chevron-right"></i>
                <p>Graphic Design</p>
              </div>
              <div className="service-text">
                <i class="fa-solid fa-chevron-right"></i>
                <p>Web Design</p>
              </div>
            </div>
          </div>
          <div className="blog-right-widget">
            <h1>Blockquote Widget</h1>
            <div className="blog-right-widget-main">
              <p>
                Art is the only serious thing in the world. And the artist is
                the only person who is never serious.
              </p>
              <br />
              <small>by : Abul Hasnat</small>
            </div>
          </div>
          <div className="blog-right-search">
            <h1>Search</h1>
            <form>
              <input type="text" placeholder="Search for placeholder" />
              <input type="submit" value="Search" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
