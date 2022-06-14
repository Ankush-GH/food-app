import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // for updating the total amount rupees
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // Checking if the item already exists through matching INDEX
    // as findIndex( function return true or false)
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const cartItemExist = state.items[existingCartItemIndex];
    let updatedItems;

    if (cartItemExist) {
      const updatedItem = {
        ...cartItemExist,
        amount: cartItemExist.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    // IF THE ITEM IS ADDED FIRST TIME
    else {
      updatedItems = state.items.concat(action.item);
    }

    // returning the items in the cart and the total amount in rupees
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    
    // finding the cart item using index
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
      );
      const cartItemExist = state.items[existingCartItemIndex]
      // for updating the amount
      const updatedTotalAmount = state.totalAmount - cartItemExist.price;
      let updatedItems;
      
      // if the item removed is the last item in the array
      if (cartItemExist.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.id)
      }
      // if the item wanted to be removed is more than 1
      else{
        const updatedItem = {...cartItemExist, amount : cartItemExist.amount - 1}
         updatedItems = [...state.items];
         updatedItems[existingCartItemIndex] = updatedItem;
      }

      return{
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
