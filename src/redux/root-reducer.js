// Reducers are function that alters the previous data in the store

import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})