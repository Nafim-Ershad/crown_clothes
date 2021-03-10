// Reducers are function that alters the previous data in the store

import { combineReducers } from "redux";

//redux-persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Storage on window

// Reducers
import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: "root", // The point where we start to persist
    storage, // Storage options for persist
    whitelist: ["cart"] // The reducer that we want to persist
        // This is also the key for the reducer
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer);
// White Listed persist is pushed to rootReducer