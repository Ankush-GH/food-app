import React from "react";

import "./Cuisines.css";
import TopSection from "../../newComponents/topsection/TopSection";
import Footer from "../../newComponents/footer/Footer";
import Card from "../../ui/card/Card";

// IMAGES
import kor1 from "../../newAssets/cuisines/kor1.webp";
import kor2 from "../../newAssets/cuisines/kor2.jpg";
import kor3 from "../../newAssets/cuisines/kor3.jpg";
import kor4 from "../../newAssets/cuisines/kor4.jpg";
import kor5 from "../../newAssets/cuisines/kor5.jpg";

const korean = [
  {
    id: 1,
    name: "Kimchi Stew",
    img: kor1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 2,
    name: "Chimaek",
    img: kor2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 3,
    name: "Soy sauce crab",
    img: kor3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 4,
    name: "Gopchang",
    img: kor4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 5,
    name: "Jjajangmyeon",
    img: kor5,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
];

const Korean = () => {
  return (
    <>
      <TopSection />
      <h1
        className="font_base flex__center"
        style={{ margin: "3rem 0 1rem 0 " }}
      >
        Korean
      </h1>
      <div className="cuisine-sections">
        {korean.map((kor) => (
          <Card Korean={kor} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Korean;
