import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
 
export let rerenderEntireTree = (state) => { 
    ReactDOM.render(<App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
    />, document.getElementById("root"));
    reportWebVitals();
}

