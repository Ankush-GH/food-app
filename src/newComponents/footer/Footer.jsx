import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer">
      <h1 className="footer-mainheader transform180 p__nobills">Fooder</h1>
      <div className="support p__acme transform180">
        <h3 className="mobileheadersize">Support</h3>
        <Link to="/complaints" className="support-btns pointer">
          Contact Us
        </Link>
        <Link to="/complaints" className="support-btns pointer m-top0">
          Complaints
        </Link>
      </div>
      <div className="gettoknowus p__acme transform180">
        <h3 className="mobileheadersize">Get to know us</h3>
        <Link to="/about" className="support-btns pointer">
          About Us
        </Link>
      </div>
      <div className="socialmedia p__acme transform180">
        <h3 className="mobileheadersize">Social Media</h3>
        <SocialIcon
          className="social-icons"
          url="https://instagram.com/jaketrent"
        />
        <SocialIcon
          className="social-icons"
          url="https://linkedin.com/jaketrent"
        />
        <SocialIcon
          className="social-icons"
          url="https://facebook.com/jaketrent"
        />
      </div>
    </div>
  );
};

export default Footer;
