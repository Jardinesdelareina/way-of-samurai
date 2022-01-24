import React from "react";
import "./style/App.scss";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import About from "./components/Header/About/About";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <main className="wrapper__content">
        <Routes>
          <Route
            path="/profile"
            element={<Profile
                store={props.store}
              />}
          />
          <Route
            path="/dialogs/*"
            element={<Dialogs
              store={props.store}
              />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
