import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { createStore } from "redux";
import rootReducer from "./reducers";

import reportWebVitals from "./reportWebVitals";

const store = createStore(rootReducer);
// console.log('store', store);
// console.log('BEFORE STATE', store.getState());

// store.dispatch({ type: "ADD_MOVIES", movies: [{ name: 'Superman' }] }); 

// console.log('AFTER STATE', store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={ store }/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
