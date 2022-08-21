import React from "react";
import BlogContent from "../../components/blogContent/BlogContent";
import BlogHero from "../../components/blogHero/BlogHero";
import Footer from "../../components/footer/Footer";

const Blog = () => {
  return (
    <section className="blog-page">
      <BlogHero />
      <BlogContent />
      <Footer />
    </section>
  );
};

export default Blog;
