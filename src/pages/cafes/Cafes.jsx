import React from "react";

import "./Cafes.css";
import TopSection from "../../newComponents/topsection/TopSection";
import Footer from "../../newComponents/footer/Footer";
import Card from "../../ui/card/Card";

// IMAGES
import caf1 from "../../newAssets/cafes/caf1.jpg";
import caf2 from "../../newAssets/cafes/caf2.jpg";
import caf3 from "../../newAssets/cafes/caf3.jpg";
import caf4 from "../../newAssets/cafes/caf4.jpg";
import caf5 from "../../newAssets/cafes/caf5.jpg";
import caf6 from "../../newAssets/cafes/caf6.jpg";
import caf7 from "../../newAssets/cafes/caf7.jpg";
// import caf8 from "../../newAssets/cafes/caf8.jpg";
// import caf9 from "../../newAssets/cafes/caf9.jpg";

const cafes = [
  {
    id: 1,
    name: "The Beanery",
    img: caf1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 2,
    name: "City Stacks Coffee",
    img: caf2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 3,
    name: "Caffeine Machine",
    img: caf3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 4,
    name: "Cafe Connections",
    img: caf4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 5,
    name: "Espresso Love",
    img: caf5,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 6,
    name: "Jumpin' Beans Cafe",
    img: caf6,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 7,
    name: "The Friendly Bean",
    img: caf7,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
];

const Cafes = () => {
  return (
    <>
      <TopSection />
      <h1
        className="font_base flex__center"
        style={{ margin: "3rem 0 1rem 0 " }}
      >
        Cafes
      </h1>
      <div className="app__cafes">
        {cafes.map((cafe) => (
          <Card Cafe={cafe} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Cafes;
