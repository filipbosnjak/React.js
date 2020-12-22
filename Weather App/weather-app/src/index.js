import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import { weatherReducer } from "./reducers/weatherReducer";
import thunk from "redux-thunk";

const enhancers = [
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];

const store = createStore(weatherReducer, compose(...enhancers));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
