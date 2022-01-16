import React from "react";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import About from "./components/Header/About/About";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import "./style/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <main className="wrapper__content">
          <Routes>
            <Route path="/profile" element={<Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />} />
            <Route path="/dialogs*" element={<Dialogs
              dialogsPage={props.state.dialogsPage}
              addMessage={props.addMessage}
              updateNewMessageText={props.updateNewMessageText}
            />} />
            <Route path="/about" element={ <About /> } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
