// JUST CHECKING



import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Main from "./newComponents/Main";
import About from "./pages/about/About";
// import CartProvider from "./store/CartProvider";
import Complaints from "./pages/complaints/Complaints"
import Cafes from "./pages/cafes/Cafes"
import Restaurents from "./pages/restaurents/Restaurents"
import Shakes from "./pages/shakes/Shakes"
import Indian from "./pages/cuisines/Indian"
import Chinese from "./pages/cuisines/Chinese"
import Korean from "./pages/cuisines/Korean"
import Mexican from "./pages/cuisines/Mexican"
import Italian from "./pages/cuisines/Italian"
import German from "./pages/cuisines/German"
import Gym from "./pages/gym/Gym";

function App() {
  return (
    // <CartProvider>
    <Switch>
      <Route exact path="/">
        {<Main />}
      </Route>
      <Route exact path="/about">
        {<About />}
      </Route>
      <Route exact path="/complaints">
        {<Complaints />}
      </Route>

      {/* Cafes */}
      <Route exact path="/cafes">
        {<Cafes />}
      </Route>

      {/* Restaurents */}
      <Route exact path="/restaurents">
        {<Restaurents />}
      </Route>

      {/* Shakes */}
      <Route exact path="/shakes">
        {<Shakes />}
      </Route>

      {/* CUISINES */}
      <Route exact path="/indian">
        {<Indian />}
      </Route>
      <Route exact path="/chinese">
        {<Chinese />}
      </Route>
      <Route exact path="/korean">
        {<Korean />}
      </Route>
      <Route exact path="/italian">
        {<Italian />}
      </Route>
      <Route exact path="/german">
        {<German />}
      </Route>
      <Route exact path="/mexican">
        {<Mexican />}
      </Route>

      {/* GYM MENU */}
      <Route exact path="/gym">
        {<Gym />}
      </Route>

    </Switch>
    // </CartProvider>
  );
}

export default App;
