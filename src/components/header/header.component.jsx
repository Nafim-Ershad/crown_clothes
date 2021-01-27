import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Firebase
import { auth } from "../../firebase/firebase.utils";

// Assets
import { ReactComponent as Logo } from "../../assets/crwn.svg"

// Styles
import "./header.styles.scss";

const Header = ({ currUser }) =>(
    <div className="header">
        <Link className="logo_container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currUser ?
                <div className="option" onClick={ () => auth.signOut() }>SIGN OUT</div>
                :
                <Link className="option" to="/sign_in">SIGN IN</Link>
            }
        </div>
    </div>
)

const mapStateToProps = (state) =>({
    // Name can be anything but mapStateToProps is convention
    // This function returns the state from store as props for the returned higher order function
    currentUser: state.user.currentUser
    // state is passed from the store which gets objects from rootReducer, where we access the user key,
    // then access the currentuser key from the user object
    // rootReducer{
        //user:{
        //     {currentuser}
        // }
    //} 
})

export default connect(mapStateToProps)(Header);   
// Connect returns another higher order function,
// that uses the Header() and gives it extra properties