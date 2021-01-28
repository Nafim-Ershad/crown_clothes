import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";

import store from "./redux/store";

import App from './App';

console.log("Store:", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

