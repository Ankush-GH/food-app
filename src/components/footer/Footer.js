import React from "react";

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
      <div className="social">
        <div className="insta">
          <a
            href="https://instagram.com/"
            target="_instagram"
            aria-label="A great place to find out what friends are up to!"
          >
            <div className="bg">
              <div className="inner">
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
