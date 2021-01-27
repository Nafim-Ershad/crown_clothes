// React
import React from "react";
import { Switch, Route } from "react-router-dom";
import {connect} from "react-redux";

// Components
import Header from "./components/header/header.component";

// Firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// Pages
import HomePage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndUp from "./pages/sign_in_and_up/sign_in_and_up.component";

// Redux Actions
import { setCurrentUser } from "./redux/user/user.action";

// Styles
import './App.scss';


class App extends React.Component {
  
  unsubcribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubcribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        // Everytime the page loads, sends a snapshot of the database (information regarding the collection or documents)
        userRef.onSnapshot( snapShot => {
            setCurrentUser({
              id : snapShot.id,
              ...snapShot.data()
            })
        });
      }

      else{
        setCurrentUser( userAuth )
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
        <Header/>
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route exact path='/shop' component={ ShopPage }/>
          <Route exact path='/sign_in' component={ SignInAndUp }/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
  // dispatch() is the identifier for redux to identify an action, that will alter the data oin store through
  // root reducer
})

export default connect(null, mapDispatchToProps)(App);
// Connect returns another higher order function,
// that uses the Header() and gives it extra properties

// 'null' is passed as the first parameter bcz App component don't need the use of currentUser state as props,
// bcz it's use was only for the Header component