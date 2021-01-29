import React from 'react';

import { connect } from "react-redux"; 
import { toggleCartHidden } from "../../redux/cart/cart.action";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleHidden }) => (
    <div className="cart-icon">
        <ShoppingIcon className='shopping-icon' onClick={toggleHidden}/>
        <span className="item-count"> 0 </span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleHidden : () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);