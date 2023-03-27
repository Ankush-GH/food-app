import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const meals = useSelector((state) => state.cartMeals.meals);
  //   const meals = useSelector((state) => state);
  //   const { id, MealName } = meals[0];
  console.log(meals);

  return (
    <div>
      {meals.map((mealItem) => (
        <div>
          {mealItem.id}
          {mealItem.name}
          {mealItem.desc}
        </div>
      ))}
    </div>
  );
};

export default Cart;
