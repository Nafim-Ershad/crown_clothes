import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom_button/custom_button.component";

import { selectCartItems } from "../../redux/cart/cart.selector";

import { toggleCartHidden } from "../../redux/cart/cart.action";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, toggleHidden }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
            cartItems.length ?
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
                )
            )
            : 
            <span className="empty-message">Cart is empty</span>
        }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            toggleHidden();
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

// connect() sends "dispatch" function to mapStateToProps if mapDispatchToProps is not stated in the function
// then we would not need to write this function and use dispatch diraectly in jsx 
const mapDispatchToProps = dispatch => ({
    toggleHidden : () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));