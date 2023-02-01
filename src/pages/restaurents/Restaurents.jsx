import React from "react";

import "./Restaurents.css";
import Footer from "../../newComponents/footer/Footer";
import TopSection from "../../newComponents/topsection/TopSection";
import Card from "../../ui/card/Card";

// IMAGES
import rest1 from "../../newAssets/restaurants/rest1.jpg";
import rest2 from "../../newAssets/restaurants/rest2.jpg";
import rest10 from "../../newAssets/restaurants/rest10.jpg";
import rest4 from "../../newAssets/restaurants/rest4.jpg";
import rest5 from "../../newAssets/restaurants/rest5.jpg";
import rest6 from "../../newAssets/restaurants/rest6.jpg";
import rest7 from "../../newAssets/restaurants/rest7.jpg";
import rest8 from "../../newAssets/restaurants/rest8.jpg";
import rest9 from "../../newAssets/restaurants/rest9.jpg";

const restaurants = [
  {
    id: 1,
    name: "Tikkaway",
    img: rest1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 2,
    name: "Curry Kingdom",
    img: rest2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 3,
    name: "The Spice Factory",
    img: rest10,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 4,
    name: "The Paneer Bar",
    img: rest4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 5,
    name: "Curry Leaves",
    img: rest5,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 6,
    name: "The Naan House",
    img: rest6,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 7,
    name: "Backyard Bowls",
    img: rest7,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 8,
    name: "Pie In the Sky",
    img: rest8,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 9,
    name: "Slice of Spice",
    img: rest9,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
];

const Restaurents = () => {
  return (
    <>
      <TopSection />
      <h1
        className="font_base flex__center"
        style={{ margin: "3rem 0 1rem 0 " }}
      >
        Restaurents
      </h1>
      <div className="app__restaurents">
        {restaurants.map((rest) => (
          <Card Restaurant={rest} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Restaurents;
