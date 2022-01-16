import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText } from "./redux/state";
import state from "./redux/state";
 
let rerenderEntireTree = (state) => { 
    ReactDOM.render(<App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
    />, document.getElementById("root"));
    reportWebVitals();
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);