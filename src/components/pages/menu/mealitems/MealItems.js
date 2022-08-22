import React, { useContext } from "react";
import CartContext from "../../../../store/cart-context";
import MealItemForm from "../mealitemform/MealItemForm";

import "../Menu.scss";

const MealItems = (props) => {
  const cartCtx = useContext(CartContext);

  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
      <li key={props.id} id={props.id} className="meal shadow card">
      <h2>{props.name}</h2>
      <img src={props.image} alt="food" />
      <h3>$ {props.price}</h3>
      <div>
        <MealItemForm onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItems;
