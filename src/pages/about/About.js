import React from "react";
import AboutInfo from "../../components/about-info/AboutInfo";
import AboutHero from "../../components/aboutHero/AboutHero";
import Footer from "../../components/footer/Footer";
import Services from "../../components/services/Services";
import Stats from "../../components/stats/Stats";
import Story from "../../components/story/Story";

const About = () => {
  return (
    <section className="about-page">
      <AboutHero />
      <AboutInfo />
      <Services />
      <Stats />
      <Story />
      <Footer />
    </section>
  );
};

export default About;
