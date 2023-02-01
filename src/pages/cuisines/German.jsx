import React from "react";

import "./Cuisines.css";
import TopSection from "../../newComponents/topsection/TopSection";
import Footer from "../../newComponents/footer/Footer";
import Card from "../../ui/card/Card";

// IMAGES
import ger1 from "../../newAssets/cuisines/ger1.webp";
import ger2 from "../../newAssets/cuisines/ger2.jpg";
import ger3 from "../../newAssets/cuisines/ger3.jpg";
import ger4 from "../../newAssets/cuisines/ger4.jpg";
import ger5 from "../../newAssets/cuisines/ger5.jpg";

const german = [
  {
    id: 1,
    name: "Wurst",
    img: ger1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 2,
    name: "Rouladen",
    img: ger2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 3,
    name: "Sauerbraten",
    img: ger3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 4,
    name: "Brezel",
    img: ger4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 5,
    name: "Scgnitzel",
    img: ger5,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
];

const German = () => {
  return (
    <>
      <TopSection />
      <h1
        className="font_base flex__center"
        style={{ margin: "3rem 0 1rem 0 " }}
      >
        German
      </h1>
      <div className="cuisine-sections">
        {german.map((ger) => (
          <Card German={ger} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default German;
