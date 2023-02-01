import React from "react";

import Noodles from "../../newAssets/noodles.png";
import Pasta from "../../newAssets/pasta.png";
import Vegetables from "../../newAssets/vegetables.png";
import DeliveryImg from "../../newAssets/deliveryImg.png";

const LowerAboutSection = () => {
  return (
    <>
      <div className="section">
        <div className="text">
          <h2>We like good food</h2>
          We have local teams dedicated to finding the best food in your city
          <br />
          —whether that's spaghetti carbonara or a really good burger—so you can
          get the coolest restaurants brought right to you.
        </div>
        <div>
          <img className="about-images" src={Noodles} alt="noodles" />
          <img className="about-images" src={Pasta} alt="pasta" />
        </div>
      </div>
      <div className="section">
        <img className="about-images" src={Vegetables} alt="vegetables" />
        <div className="text">
          <h2>We’re healthy, sometimes</h2>
          We have in house nutritionists behind collections like Healthy Enough,
          Vegan,
          <br />
          Vegetarian, and more. So when you want to find food that fits your
          diet, or to
          <br />
          eat a little healthier, we can help.
        </div>
      </div>
      <div className="section">
        <div className="text">
          <h2>We care about (your) time</h2>
          Some nights you just need to clean the living room or call your mom or
          don't
          <br />
          feel like going to the grocery store. We're here to help you with
          food-stuff,
          <br />
          so you can do other stuff.
        </div>
        <img className="about-images" src={DeliveryImg} alt="delivery image" />
      </div>
    </>
  );
};

export default LowerAboutSection;
