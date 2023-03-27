import React from "react";

import "./Cuisines.css";
import ind1 from "../../newAssets/cuisines/ind1.webp";
import ind3 from "../../newAssets/cuisines/ind3.jpg";
import ind4 from "../../newAssets/cuisines/ind4.jpg";
import ind5 from "../../newAssets/cuisines/ind5.jpg";
import ind6 from "../../newAssets/cuisines/ind6.jpg";
import ind7 from "../../newAssets/cuisines/ind7.jpg";
import ind8 from "../../newAssets/cuisines/ind8.jpg";
import ind9 from "../../newAssets/cuisines/ind9.jpg";
import ind10 from "../../newAssets/cuisines/ind10.webp";
import ind11 from "../../newAssets/cuisines/ind11.jpg";
import ind12 from "../../newAssets/cuisines/ind12.jpg";
import TopSection from "../../newComponents/topsection/TopSection";
import Footer from "../../newComponents/footer/Footer";
import Card from "../../ui/card/Card";
import chai from "../../newAssets/cuisines/chai.jpg";

const indian = [
  {
    id: 1,
    name: "Chole Bhature",
    img: ind1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 2,
    name: "Masala Chai",
    img: chai,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 3,
    name: "Samosa",
    img: ind3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 4,
    name: "PaniPuri",
    img: ind4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 5,
    name: "Jalebi",
    img: ind5,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 6,
    name: "Palak Paneer",
    img: ind6,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 7,
    name: "Chicken Tikka Masala",
    img: ind7,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 8,
    name: "Dal Makhani",
    img: ind8,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 9,
    name: "Biryani",
    img: ind9,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 10,
    name: "Pav Bhaji",
    img: ind10,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 11,
    name: "Korma",
    img: ind11,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 12,
    name: "Butter Chicken",
    img: ind12,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
];

const Indian = () => {
  return (
    <>
      <TopSection />
      <h1
        className="font_base flex__center"
        style={{ margin: "3rem 0 1rem 0 " }}
      >
        Indian
      </h1>
      <div className="cuisine-sections">
        {indian.map((ind) => (
          <Card Indian={ind} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Indian;
