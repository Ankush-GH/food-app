import React from "react";

import TopSection from "../../newComponents/topsection/TopSection";
import "./Shakes.css";
import Footer from "../../newComponents/footer/Footer";
import Card from "../../ui/card/Card";

// IMAGES
import shake1 from "../../newAssets/shakes/shake1.jpg";
import shake2 from "../../newAssets/shakes/shake2.jpg";
import shake3 from "../../newAssets/shakes/shake3.jpg";
import shake4 from "../../newAssets/shakes/shake4.jpg";
import shake5 from "../../newAssets/shakes/shake5.jpg";
import shake6 from "../../newAssets/shakes/shake6.jpg";
import shake7 from "../../newAssets/shakes/shake7.jpg";
import shake8 from "../../newAssets/shakes/shake8.jpg";
import shake9 from "../../newAssets/shakes/shake9.jpg";
import shake10 from "../../newAssets/shakes/shake10.jpg";

const shakes = [
  {
    id: 1,
    name: "Dairy King",
    img: shake1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 2,
    name: "Frosted Memories",
    img: shake2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 3,
    name: "Milkshake Shack",
    img: shake3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 4,
    name: "Shakes R Us",
    img: shake4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 5,
    name: "Milkshake Cart",
    img: shake5,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 6,
    name: "Sweet Shakes",
    img: shake6,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 7,
    name: "Dreamy Delights",
    img: shake7,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 8,
    name: "Milkshake Factory",
    img: shake8,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 9,
    name: "The Shake Connection",
    img: shake9,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 10,
    name: "Milkshake Villa",
    img: shake10,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
];

const Shakes = () => {
  return (
    <>
      <TopSection />
      <h1
        className="font_base flex__center"
        style={{ margin: "3rem 0 1rem 0 " }}
      >
        Shakes
      </h1>
      <div className="app__shakes">
        {shakes.map((shake) => (
          <Card Shake={shake} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Shakes;
