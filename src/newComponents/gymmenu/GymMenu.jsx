import React from "react";

import "./GymMenu.css";
import Gym1 from "../../newAssets/gym1.jpg";
import Gym2 from "../../newAssets/gym2.jpg";
import Gym3 from "../../newAssets/gym3.jpg";
import Gym4 from "../../newAssets/gym4.jpg";
import { Link } from "react-router-dom";

const GymMenu = () => {
  return (
    <div className="app__gymmenu">
      <h2 className="gymmenu-mainheader flex__center p__nobills">
        Checkout our Special Menu for Gym Freaks
      </h2>
      <div className="gymmenu">
        <div className="menu-container">
          <img className="menu-img" src={Gym4} alt="" />
          <h4 className="menu-head p__acme">Chicken Rice</h4>
        </div>
        <div className="menu-container">
          <img className="menu-img" src={Gym3} alt="" />
          <h4 className="menu-head p__acme">Salmon and Sweet Potato</h4>
        </div>
        <div className="menu-container">
          <img className="menu-img" src={Gym2} alt="" />
          <h4 className="menu-head p__acme">
            Oatmeal with Banana and Blueberry
          </h4>
        </div>
        <div className="menu-container">
          <img className="menu-img" src={Gym1} alt="" />
          <h4 className="menu-head p__acme">Tuna Crackers</h4>
        </div>
        <Link to="/gym" className="menu-button">
          More
        </Link>
      </div>
    </div>
  );
};

export default GymMenu;
