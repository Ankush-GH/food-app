import React from "react";

import Footer from "../../newComponents/footer/Footer";
import TopSection from "../../newComponents/topsection/TopSection";
import Form from "../../ui/form/Form";
import "./Complaints.css";

const Complaints = () => {
  return (
    <>
      <TopSection />
      <div
        className="app__complaints"
        style={{ margin: "2rem 1rem 60px 1rem " }}
      >
        <h1 className="orange">Please Send Us Your Complaints or Contact Us</h1>
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default Complaints;
