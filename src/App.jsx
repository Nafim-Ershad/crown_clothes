// React
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {connect} from "react-redux";

// Components
import Header from "./components/header/header.component";

// Firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// Pages
import HomePage from "./pages/homepage/homePage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndUp from "./pages/sign_in_and_up/sign_in_and_up.component";
import CheckoutPage from "./pages/checkout/checkout.page";

// Redux Actions
import { setCurrentUser } from "./redux/user/user.action";

// Selectors
import { selectCurrentUser } from "./redux/user/user.selector"; // User Selector

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
        if(userRef){
          userRef.onSnapshot( snapShot => {
              setCurrentUser({
                id : snapShot.id,
                ...snapShot.data()
              })
          });
        }
      }

      else{
        setCurrentUser( userAuth ) // Empty 
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
          <Route path='/shop' component={ ShopPage }/> {/*No exact because, /shop will have other parameters, like /shop/hats */}
          <Route exact path='/sign_in' render={() => this.props.currentUser ? 
          (<Redirect to='/'/>) 
            : 
          (<SignInAndUp/>)
          }/>
          <Route exact path='/checkout' component={ CheckoutPage }/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
  // dispatch() is the identifier for redux to identify an action, that will alter the data oin store through
  // root reducer
  // dispatch(action[object])
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
// Connect returns another higher order function,
// that uses the Header() and gives it extra properties

// 'null' is passed as the first parameter bcz App component don't need the use of currentUser state as props,
// bcz it's use was only for the Header component