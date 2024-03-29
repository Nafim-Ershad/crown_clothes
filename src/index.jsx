import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";

import {store, persistor} from "./redux/store";

// Redux-Persist
import {PersistGate} from "redux-persist/integration/react";

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor = {persistor}> {/*The state persist*/}
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

