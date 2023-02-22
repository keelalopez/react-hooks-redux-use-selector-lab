import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import usersReducer from "./features/users/usersSlice";

// STEP 1: IMPORT CREATESTORE METHOD AND SAVE IN A VARIABLE. 
import { createStore } from "redux";

// STEP 2: IMPORT PROVIDER
import { Provider } from "react-redux";

const store = createStore(
  usersReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// add imports and code

ReactDOM.render(
  // STEP 3: WRAP APP IN PROVIDER
  // STEP 4: PASS STORE 
  <Provider store={store}>
    <App />
  </Provider>,
  // add imports and code
  document.getElementById("root")
);
