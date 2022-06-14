import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../OrderPage.scss";

const OrderPageForm = () => {
  const initialValue = {
    fname: "",
    address: "",
  };

  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.fname) {
      errors.fname = "Name Is Required!";
    }
    if (!values.address) {
      errors.address = "Address Is Required!";
    }

    return errors;
  };

  const sumbitHandler = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  return (
    <>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <h1 className="TY">Thank You! Your Order Is On The Way :) Contact Number Of Our Delivery boy +1 345 6798 </h1>
      ) : (
        <form onSubmit={sumbitHandler}>
          <label className="namelabel" htmlFor="fname">
            Order For
          </label>
          <input
            onChange={handleChange}
            value={formValues.fname}
            className="nameinput"
            name="fname"
            type="text"
            placeholder="Enter Your Name"
          />
          <p style={{color: "white"}}>{formErrors.fname}</p>

          <label className="addresslabel" htmlFor="address">
            Address
          </label>
          <textarea
            onChange={handleChange}
            value={formValues.address}
            className="addressinput"
            name="address"
            cols="60"
            rows="5"
            placeholder="Enter Your Address"
            type="text"
          />
          <p style={{color: "white"}}>{formErrors.address}</p>

          <div className="btns">
            <div className="submitbtn">
              <button>Order</button>
            </div>
            <div className="link">
              <Link className="cancelbtn" to="/cartItems">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default OrderPageForm;
