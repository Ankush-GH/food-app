import React from "react";
import { Link } from "react-router-dom";

import "./TopSection.css";

const TopSection = () => {
  return (
    <div className="topsection">
      <Link to="/" className="mainHeader p__nobills">
        Fooder
      </Link>
      <div className="left">
        <Link to="/about" className="navbtn margin pointer p__acme">
          About Us
        </Link>
      </div>
      <div className="right">
        <Link to="/complaints" className="navbtn margin pointer p__acme">
          Complaints
        </Link>
      </div>
    </div>
  );
};

export default TopSection;
