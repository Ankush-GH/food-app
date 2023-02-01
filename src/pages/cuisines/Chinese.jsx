import React from "react";

import "./Cuisines.css";
import TopSection from "../../newComponents/topsection/TopSection";
import Footer from "../../newComponents/footer/Footer";
import Card from "../../ui/card/Card";

// IMAGES
import chin1 from "../../newAssets/cuisines/chin1.jpg";
import chin2 from "../../newAssets/cuisines/chin2.jpg";
import chin3 from "../../newAssets/cuisines/chin3.jpg";
import chin4 from "../../newAssets/cuisines/chin4.webp";
import chin5 from "../../newAssets/cuisines/chin5.webp";
import chin6 from "../../newAssets/cuisines/chin6.jpg";
import chin7 from "../../newAssets/cuisines/chin7.jpg";

const chinese = [
  {
    id: 1,
    name: "Dumplings",
    img: chin1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 2,
    name: "Dim Sums",
    img: chin2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 3,
    name: "Hot and Sour Soup",
    img: chin3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 4,
    name: "Quick Noodles",
    img: chin4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 5,
    name: "Schezwan Chilli Chicken",
    img: chin5,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 6,
    name: "Spring Rolls",
    img: chin6,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 7,
    name: "Tofu with Rice",
    img: chin7,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
];

const Chinese = () => {
  return (
    <>
      <TopSection />
      <h1
        className="font_base flex__center"
        style={{ margin: "3rem 0 1rem 0 " }}
      >
        Chinese
      </h1>
      <div className="cuisine-sections">
        {chinese.map((chin) => (
          <Card Chinese={chin} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Chinese;
