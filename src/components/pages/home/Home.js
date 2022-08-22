import React from "react";
import { Link } from "react-router-dom";
import BG from "../../../assets/bg.png";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <div className="heading">
          <span>Delicous Food waiting in the </span>
        </div>
        <div className="btn">
          <Link className="link" to="/menu">Menu</Link>
        </div>
      </div>
      <div className="right">
        <img src={BG} alt="pizza" />
      </div>
    </div>
  );
};

export default Home;
