import React from "react";

import TopSection from "../newComponents/topsection/TopSection";
import ChangingText from "../newComponents/texttransition/ChangingText";
import ImageSlider1 from "../newComponents/imageslidersection1/ImageSlider1";
import Collections from "../newComponents/collections/Collections";
import Cuisines from "../newComponents/cuisines/Cuisines";
import GymMenu from "../newComponents/gymmenu/GymMenu";
import FooderApp from "../newComponents/app/FooderApp";
import ImageSection from "../newComponents/imagesection/ImageSection";
import Reviews from "../newComponents/reviews/Reviews";
import Footer from "../newComponents/footer/Footer";

const Main = () => {
  return (
    <>
      <TopSection />
      <ChangingText />
      <ImageSlider1 />
      <Collections />
      <Cuisines />
      <GymMenu />
      <FooderApp />
      <ImageSection />
      <Reviews />
      <Footer />
    </>
  );
};

export default Main;
