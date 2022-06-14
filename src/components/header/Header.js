import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import CartContext from "../../store/cart-context";
import "./Header.scss";

const Header = () => {
  const [cartShaking, setCartShaking] = useState(false);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const { items } = cartCtx;

  const btnClasses = `${"cartlogo"} ${cartShaking ? "shake" : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setCartShaking(true);

    const timer = setTimeout(() => {
      setCartShaking(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <div className="header">
      <div className="logo">
        <Link className="link" to="/">
          Fooder
        </Link>
      </div>
      <h3 className="cartspan">Cart</h3>
      <Link to="/cartItems" className={btnClasses}>
        <button type="button" className="icon-button">
          <span className="material-icons">shopping_cart</span>
          <span className="icon-button__badge">{numberOfCartItems}</span>
        </button>
      </Link>
    </div>
  );
};

export default Header;
