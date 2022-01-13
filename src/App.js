import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/Header/About/About";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper__content">
          <Routes>
            <Route path="/profile" element={ <Profile state={props.state.profilePage} /> } />
            <Route path="/dialogs*" element={ <Dialogs state={props.state.dialogsPage} /> } />
            <Route path="/about" element={ <About /> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
