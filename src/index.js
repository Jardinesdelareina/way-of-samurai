import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let myPost = [
    {
      id: "1",
      message: "Hi! How are you?",
    },
    {
      id: "2",
      message: "Todo esta bien!!!",
    },
    {
      id: "3",
      message:
        "Lorem, ipsum",
    },
];

let nameData = [
    { id: 1, name: "oleg" },
    { id: 2, name: "sereja" },
    { id: 3, name: "kolya" },
    { id: 4, name: "lesha" },
    { id: 5, name: "dima" },
];

let messageData = [
    { id: 1, message: "Hola" },
    { id: 2, message: "Que tal?" },
    { id: 3, message: "Que hora es?" },
    { id: 4, message: "Ahora es 4 de la tarde" },
    { id: 5, message: "Gracias!" },
];



  
ReactDOM.render(<App myPost={myPost} nameData={nameData} messageData={messageData} />, document.getElementById("root"));


reportWebVitals();
