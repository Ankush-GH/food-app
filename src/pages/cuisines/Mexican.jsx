import React from "react";

import "./Cuisines.css";
import TopSection from "../../newComponents/topsection/TopSection";
import Footer from "../../newComponents/footer/Footer";
import Card from "../../ui/card/Card";

// IMAGES
import mex1 from "../../newAssets/cuisines/mex1.jpg";
import mex2 from "../../newAssets/cuisines/mex2.webp";
import mex3 from "../../newAssets/cuisines/mex3.webp";
import mex4 from "../../newAssets/cuisines/mex4.jpg";
import mex5 from "../../newAssets/cuisines/mex5.jpg";
import mex6 from "../../newAssets/cuisines/mex6.jpg";
import mex7 from "../../newAssets/cuisines/mex7.jpg";

const mexican = [
  {
    id: 1,
    name: "Tacos",
    img: mex1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 2,
    name: "Burritos",
    img: mex2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 3,
    name: "Menudo",
    img: mex3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 4,
    name: "Esqiotes",
    img: mex4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 5,
    name: "Mole",
    img: mex5,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 6,
    name: "Ceviche",
    img: mex6,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 7,
    name: "Caldo Azteca",
    img: mex7,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
];

const Mexican = () => {
  return (
    <>
      <TopSection />
      <h1
        className="font_base flex__center"
        style={{ margin: "3rem 0 1rem 0 " }}
      >
        Mexican
      </h1>
      <div className="cuisine-sections">
        {mexican.map((mex) => (
          <Card Mexican={mex} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Mexican;
