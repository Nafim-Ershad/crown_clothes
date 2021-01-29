import {cartActionTypes} from "./cart.types";

const INIT_STATE = {
    hidden: true
}

export const cartReducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        default: 
            return state;
    }
}