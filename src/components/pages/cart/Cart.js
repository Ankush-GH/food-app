import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import { Link } from "react-router-dom";
import "./Cart.scss";
import CartItem from "./cartItem/CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <div className="Cart">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
      <div className="totalAmount">
        <span>$ {cartCtx.totalAmount}</span>
      </div>
      <div className="orderBtn">
        <Link className="link" to="/orderPage">
          Order
        </Link>
      </div>
    </div>
  );
};

export default Cart;
