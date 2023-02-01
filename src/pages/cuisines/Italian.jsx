import React from "react";

import "./Cuisines.css";
import TopSection from "../../newComponents/topsection/TopSection";
import Footer from "../../newComponents/footer/Footer";
import Card from "../../ui/card/Card";

// IMAGES
import ita1 from "../../newAssets/cuisines/ita1.webp";
import ita2 from "../../newAssets/cuisines/ita2.webp";
import ita3 from "../../newAssets/cuisines/ita3.jpg";
import ita4 from "../../newAssets/cuisines/ita4.jpg";
import ita5 from "../../newAssets/cuisines/ita5.jpg";
import ita6 from "../../newAssets/cuisines/ita6.jpg";

const italian = [
  {
    id: 1,
    name: "Lasagna",
    img: ita1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 2,
    name: "Stuffed Ravioli",
    img: ita2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 3,
    name: "Pistachio Panna Cotta",
    img: ita3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 4,
    name: "Mushroom Risotto",
    img: ita4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 5,
    name: "Margherita Pizza",
    img: ita5,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 6,
    name: "Bruschetta",
    img: ita6,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
];

const Italian = () => {
  return (
    <>
      <TopSection />
      <h1
        className="font_base flex__center"
        style={{ margin: "3rem 0 1rem 0 " }}
      >
        Italian
      </h1>
      <div className="cuisine-sections">
        {italian.map((ita) => (
          <Card Italian={ita} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Italian;
