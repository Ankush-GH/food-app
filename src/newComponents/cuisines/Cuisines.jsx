import React from "react";
import { Link } from "react-router-dom";

import Indian from "../../newAssets/indian.jpg";
import Chinese from "../../newAssets/chinese.webp";
import Italian from "../../newAssets/italian.jpg";
import Korean from "../../newAssets/korean.webp";
import Mexican from "../../newAssets/mexican.jpg";
import German from "../../newAssets/german.jpg";
import "./Cuisines.css";

const Cuisines = () => {
  return (
    <div className="app__cuisines section_margin-top">
      <h2 className="cuisines-mainheader flex__center p__nobills">Cuisines</h2>
      <div className="wrapper margin p__acme">
        <Link to="/indian" className="cuisines-container">
          <img className="cuisines-img" src={Indian} alt="Indian" />
          <h4 className="cuisines-head">Indian</h4>
          <p className="cuisines-p">Best Of Indian Cuisine</p>
        </Link>
        <Link to="/chinese" className="cuisines-container">
          <img className="cuisines-img" src={Chinese} alt="Chinese" />
          <h4 className="cuisines-head">Chinese</h4>
          <p className="cuisines-p">Best Of Chinese Cuisine</p>
        </Link>
        <Link to="/italian" className="cuisines-container">
          <img className="cuisines-img" src={Italian} alt="Italian" />
          <h4 className="cuisines-head">Italian</h4>
          <p className="cuisines-p">Best Of Italian Cuisine</p>
        </Link>
        <Link to="/korean" className="cuisines-container">
          <img className="cuisines-img" src={Korean} alt="Korean" />
          <h4 className="cuisines-head">Korean</h4>
          <p className="cuisines-p">Best Of Korean Cuisine</p>
        </Link>
        <Link to="/mexican" className="cuisines-container">
          <img className="cuisines-img" src={Mexican} alt="Mexican" />
          <h4 className="cuisines-head">Mexican</h4>
          <p className="cuisines-p">Best Of Mexican Cuisine</p>
        </Link>
        <Link to="/german" className="cuisines-container">
          <img className="cuisines-img" src={German} alt="German" />
          <h4 className="cuisines-head">German</h4>
          <p className="cuisines-p">Best Of German Cuisine</p>
        </Link>
      </div>
    </div>
  );
};

export default Cuisines;
