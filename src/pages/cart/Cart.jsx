import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const meals = useSelector((state) => state.cartMeals.meals);
  const { id, MealName } = meals[0];
  console.log(meals);

  return (
    <>
      <div>{id}</div>
      <div>{MealName}</div>
    </>
  );
};

export default Cart;
