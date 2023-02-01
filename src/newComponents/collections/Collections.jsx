import React from "react";

import "./Collections.css";
import Restaurent from "../../newAssets/restaurant.jpg";
import Cafe from "../../newAssets/cafes.jpg";
import Shake from "../../newAssets/shakes3.jpg";
import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <div className="app__collections" style={{ paddingTop: "25px" }}>
      <h2 className="collections-mainheader flex__center p__nobills">
        Collections
      </h2>
      <div className="collections">
        <Link
          to="/restaurents"
          className="collections-container pointer margin"
        >
          <img className="wid-h" src={Restaurent} alt="restaurents" />
          <h2 className="container-head p__acme">Restaurent's</h2>
          <p className="container-p p__acme">
            The Best Family Restaurents Near You
          </p>
        </Link>

        <Link to="/cafes" className="collections-container pointer">
          <img className="wid-h" src={Cafe} alt="cafes" />
          <h2 className="container-head p__acme">Cafe's</h2>
          <p className="container-p p__acme">The Best Cafe's Near You</p>
        </Link>

        <Link to="/shakes" className="collections-container pointer margin">
          <img className="wid-h" src={Shake} alt="shakes" />
          <h2 className="container-head p__acme">Shake's</h2>
          <p className="container-p p__acme">
            Mouth Watering Shake's For Your Cravings
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Collections;
