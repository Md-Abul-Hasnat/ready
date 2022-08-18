import React from "react";
import Client from "../../components/client/Client";
import FixedImg from "../../components/fixedImg/FixedImg";
import FixedImgFounder from "../../components/fixedImgFounder/FixedImgFounder";
import Footer from "../../components/footer/Footer";
import HomeHero from "../../components/homeHero/HomeHero";
import LatestWork from "../../components/latestWork/LatestWork";
import Pricing from "../../components/pricing/Pricing";
import Services from "../../components/services/Services";
import Stats from "../../components/stats/Stats";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import "./home.css";

const Home = () => {
  return (
    <section className="home-page">
      <HomeHero />
      <Services />
      <FixedImg />
      <LatestWork />
      <FixedImgFounder />
      <WhyChooseUs />
      <Stats />
      <Pricing />
      <Client />
      <Footer />
    </section>
  );
};

export default Home;
