import React, { useRef } from "react";

import "../Menu.scss";

const MealItemForm = (props) => {
  const amountRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountRef.current.value;
    // as the value is a string
    const enteredAmountNum = +enteredAmount;
    // console.log(enteredAmount, enteredAmountNum);
    props.onAddToCart(enteredAmountNum);
    console.log(enteredAmount, enteredAmountNum);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="input">
        <input
          ref={amountRef}
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <div className="cartbtn">
        <button>Add To Cart</button>
      </div>
    </form>
  );
};

export default MealItemForm;
