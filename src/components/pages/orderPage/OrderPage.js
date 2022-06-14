import React from "react";

import "./OrderPage.scss";
import OrderPageForm from "./orderpageform/OrderPageForm";

const OrderPage = () => {
  return (
    <div className="orderPage">
      <div className="header">
        <span>Please Fill The Details Below</span>
      </div>
      <OrderPageForm />
    </div>
  );
};

export default OrderPage;
