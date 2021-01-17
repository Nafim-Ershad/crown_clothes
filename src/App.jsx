// React
import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Header from "./components/header/header.component";

// Pages
import HomePage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shop.component";

// Styles
import './App.scss';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route exact path='/shop' component={ ShopPage }/>
      </Switch>
    </div>
  );
}

export default App;
