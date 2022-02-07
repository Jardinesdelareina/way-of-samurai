import React from "react";
import "./style/App.scss";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import About from "./components/Header/About/About";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <main className="wrapper__content">
        <Routes>
          <Route
            path="/profile"
            element={<ProfileContainer />}
          />
          <Route
            path="/dialogs/*"
            element={<Dialogs />}
          />
          <Route
            path="/users"
            element={<UsersContainer />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
