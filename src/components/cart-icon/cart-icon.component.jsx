import React from 'react';

import { connect } from "react-redux"; 
import { toggleCartHidden } from "../../redux/cart/cart.action";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { selectCartQuantity } from "../../redux/cart/cart.selector";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleHidden, itemCount }) => (
    <div className="cart-icon">
        <ShoppingIcon className='shopping-icon' onClick={toggleHidden}/>
        <span className="item-count"> { itemCount } </span>
    </div>
)

const mapStateToProps = (state) => ({
    itemCount: selectCartQuantity(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggleHidden : () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);