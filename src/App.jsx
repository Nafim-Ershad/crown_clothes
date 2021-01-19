// React
import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Header from "./components/header/header.component";

// Firebase
import { auth } from "./firebase/firebase.utils";

// Pages
import HomePage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndUp from "./pages/sign_in_and_up/sign_in_and_up.component";

// Styles
import './App.scss';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      currUser: null
    }
  }

  onAuthUnsubcribe = null;

  componentDidMount(){
    this.onAuthUnsubcribe = auth.onAuthStateChanged(user => {
      this.setState({ currUser: user });
    })
  }

  componentWillUnmount(){
    this.onAuthUnsubcribe();
  }

  render(){
    return (
      <div>
        <Header currUser={ this.state.currUser }/>
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route exact path='/shop' component={ ShopPage }/>
          <Route exact path='/sign_in' component={ SignInAndUp }/>
        </Switch>
      </div>
    );
  }
}

export default App;
