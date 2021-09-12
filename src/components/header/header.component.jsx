import React from "react";
import { connect } from "react-redux";

// Firebase
import { auth } from "../../firebase/firebase.utils";

// Assets
import { ReactComponent as Logo } from "../../assets/crwn.svg"

// Selectors
import { selectCurrentUser } from "../../redux/user/user.selector"; // User Selector
import { selectCartHidden } from "../../redux/cart/cart.selector"; // Cart Selector 

// Cart
import CartDropdown from "../cart-dropdown/cart-dropdown.compoent";
import CartIcon from "../cart-icon/cart-icon.component";

// Styles
import { LogoContainer, OptionsContainer, HeaderContainer, OptionLink, OptionDiv } from "./header.styles";
import "./header.styles.scss";

const Header = (props) =>(
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo"/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/contact">CONTACT</OptionLink>
            {
                props.currentUser ?
                <OptionDiv onClick={ () => auth.signOut() }>SIGN OUT</OptionDiv>
                :
                <OptionLink to="/sign_in">SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer> 
        {
            props.toggleCart? null: <CartDropdown/>
        }
    </HeaderContainer>
)

const mapStateToProps = (state) =>({
    // Name can be anything but mapStateToProps is convention
    // This function returns the state from store as props for the returned higher order function
    currentUser: selectCurrentUser(state),
    // state is passed from the store which gets objects from rootReducer, where we access the user key,
    // then access the currentuser key from the user object
    // rootReducer{
        //user:{
        //     {currentuser}
        // }
    //} 
    toggleCart: selectCartHidden(state)
})

    // It can also be used instead of passing state as function, createStructuredSelector() from reselect 
    // gets the top level state from the mapStateToProps and passes to the object function 

// const mapStateToProps = createStructuredSelector({
//     currentUser: selectCurrentUser,
//     toggleCart: selectCartHidden
// })

export default connect(mapStateToProps)(Header);   
// Connect returns another higher order function,
// that uses the Header() and gives it extra properties