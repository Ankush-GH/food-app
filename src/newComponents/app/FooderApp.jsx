import React from "react";

import Download from "../../newAssets/download.png";
import "./FooderApp.css";

const FooderApp = () => {
  return (
    <div className="app__fooderapp">
      <div className="fooderapp-mainheader">
        Discover our New &nbsp;
        <span className="F">Fooder</span>
        &nbsp; App
      </div>
      <div className="fooderapp-p">Order Your Meals in Few Taps!</div>
      <img className="fooderapp-img" src={Download} alt="download" />
    </div>
  );
};

export default FooderApp;
