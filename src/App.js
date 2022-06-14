import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Cart from "./components/pages/cart/Cart";
import Home from "./components/pages/home/Home";
import Menu from "./components/pages/menu/Menu";
import OrderPage from "./components/pages/orderPage/OrderPage";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <Switch>
        <Route exact path="/">
          {<Home />}
        </Route>
        <Route exact path="/menu">
          {<Menu />}
        </Route>
        <Route exact path="/cartItems">
          {<Cart />}
        </Route>
        <Route exact path="/orderPage">
          {<OrderPage />}
        </Route>
      </Switch>
      {<Footer />}
    </CartProvider>
  );
}

export default App;
