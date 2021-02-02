import React from 'react';
import { connect } from "react-redux";
import { clearItem, addItem, removeItem } from "../../redux/cart/cart.action";

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem , clearCartItem, addItemToCart, removeItemFromCart }) =>{ 
    const { name, quantity, price, imageUrl } = cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img alt='item' src={ imageUrl } />
            </div>
            <span className="name">{ name }</span>
            <span className="quantity">
                <div className="arrow" onClick={ () => removeItemFromCart(cartItem) } >&#10094;</div>
                <span className="value">{ quantity }</span>
                <div className="arrow" onClick={ () => addItemToCart(cartItem) } >&#10095;</div>
            </span>
        <span className="price">{ price }</span>
            <div className="remove-button" onClick = {() => clearCartItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearCartItem : (item) => dispatch(clearItem(item)),
    addItemToCart: (item) => dispatch(addItem(item)),
    removeItemFromCart: (item) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);