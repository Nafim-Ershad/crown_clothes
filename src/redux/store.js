import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import combineReducers from "./root-reducer";

const middleWares = [];

if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
}

export const store = createStore(combineReducers, applyMiddleware(...middleWares));
export const persistor = persistStore(store);