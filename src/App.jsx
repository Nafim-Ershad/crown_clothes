// React
import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Header from "./components/header/header.component";

// Firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// Pages
import HomePage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndUp from "./pages/sign_in_and_up/sign_in_and_up.component";

// Styles
import './App.scss';


class App extends React.Component {
  
  unsubcribeFromAuth = null;

  constructor(){
    super();
    this.state={
      currUser: null
    }
  }

  

  componentDidMount(){
    this.unsubcribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        // Everytime the page loads, sends a snapshot of the database (information regarding the collection or documents)
        userRef.onSnapshot( snapShot => {
          this.setState({
            currUser: {
              id : snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      else{
        this.setState({ currUser: userAuth })
      }
      // console.log("user", user);
    })
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
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
