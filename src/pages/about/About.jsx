import React from "react";

import Footer from "../../newComponents/footer/Footer";
import TopSection from "../../newComponents/topsection/TopSection";
import "./About.css";
import AboutMidSection from "./AboutMidSection";
import LowerAboutSection from "./LowerAboutSection";
import TypewriterText from "./TypewriterText";

const About = () => {
  return (
    <>
      <TopSection />
      <TypewriterText />
      <AboutMidSection />
      <LowerAboutSection />
      <Footer />
    </>
  );
};

export default About;
