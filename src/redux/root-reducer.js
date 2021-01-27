// Reducers are function that alters the previous data in the store

import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";

export default combineReducers({
    user: userReducer
})