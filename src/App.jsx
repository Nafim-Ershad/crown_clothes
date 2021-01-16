// React
import React from "react";
import { Switch, Route, Link } from "react-router-dom";

// Pages
import HomePage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shop.component";

// Styles
import './App.css';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route exact path='/shop' component={ ShopPage }/>
      </Switch>
    </div>
  );
}

export default App;
