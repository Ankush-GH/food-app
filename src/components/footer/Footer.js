import React from "react";
import { SocialMediaIconsReact } from 'social-media-icons-react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <h1>Fooder</h1>
        <span>Coyright &#169; Fooder,Inc.</span>
      </div>
      <div className="email">
        <h4>For Complaints Regarding Delivery Or Food Contact Us :-</h4>
        <a href="mailto:">email123@gmail.com</a>
      </div>
    </div>
  );
};

export default Footer;
