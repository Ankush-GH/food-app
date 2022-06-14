import React from "react";

import "../Cart.scss";

const CartItem = (props) => {
  return (
    <li className="cartitem" key={props.id}>
      <div className="header">
        <h3>{props.name}</h3>
      </div>
      <div className="price">
        <h6>$ {props.price}</h6>
      </div>
      <div className="btn2">
        <button onClick={props.onRemove}>-</button>
      </div>
      <div className="amount">
        <h6>{props.amount}</h6>
      </div>
      <div className="btn1">
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
