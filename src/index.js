import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
  reportWebVitals();
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
