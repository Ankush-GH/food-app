import React from "react";
import Footer from "../../newComponents/footer/Footer";
import TopSection from "../../newComponents/topsection/TopSection";
import Card from "../../ui/card/Card";

// IMAGES
import gym1 from "../../newAssets/gym/gym1.jpg";
import gym2 from "../../newAssets/gym/gym2.jpg";
import gym3 from "../../newAssets/gym/gym3.jpg";
import gym4 from "../../newAssets/gym/gym4.jpg";
import gym5 from "../../newAssets/gym/gym5.jpg";

import "./Gym.css";

const gym = [
  {
    id: 1,
    name: "Oatmeal",
    img: gym1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 2,
    name: "Chicken Rice",
    img: gym2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 3,
    name: "Shrimps",
    img: gym3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 4,
    name: "Salmon",
    img: gym4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
  {
    id: 5,
    name: "Kidney Beans",
    img: gym5,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos possimus quidem obcaecati voluptate tempora.",
  },
];

const Gym = () => {
  return (
    <>
      <TopSection />
      <h1
        className="font_base flex__center"
        style={{ margin: "3rem 0 1rem 0 " }}
      >
        Gym
      </h1>
      <div className="app__gym">
        {gym.map((menu) => (
          <Card Gym={menu} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Gym;
