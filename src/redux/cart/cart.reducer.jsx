import { cartActionTypes } from "./cart.types";

import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INIT_STATE = {
    hidden: true,
    cartItems: []
}

export const cartReducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state, 
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default: 
            return state; // Always return the default state, dont use {...state}
            // Bad for redux-persist
    }
}