import React from "react";
import { Link } from "react-router-dom";

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

export default Header;