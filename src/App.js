import React from "react";
import "./style/App.scss";
import HeaderContainer from "./components/Header/HeaderContainer";
import About from "./components/Header/About/About";
import Nav from "./components/Nav/Nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { connect, Provider } from "react-redux";
import { getAuthUserData } from "./redux/authReducer";
import store from "./redux/reduxStore";

class App extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="wrapper">
            <HeaderContainer />
            <Nav />
            <main className="wrapper__content">
              <Routes>
                <Route path="/profile/*" element={<ProfileContainer />} />
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {getAuthUserData})(App);
