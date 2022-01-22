import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/reduxStore";
import { BrowserRouter } from 'react-router-dom'

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
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
