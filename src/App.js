import React, { lazy, Suspense } from "react";
import "./style/App.scss";
import HeaderContainer from "./components/Header/HeaderContainer";
import About from "./components/Header/About/About";
import Nav from "./components/Nav/Nav";
import { Routes, Route, HashRouter } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { initApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import { compose } from "redux";
import store from "./redux/reduxStore";
/* import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer"; */

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initApp();
    }
  render() {
    if(!this.props.init) {
      return <Preloader />
    }
    return (
      <div className="wrapper">
        <HeaderContainer />
        <Nav />
        <main className="wrapper__content">
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/profile/*" element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  init: state.app.init,
});

let AppContainer = compose(connect(mapStateToProps, { initApp }))(App);

const SocialNetworkApp = (props) => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default SocialNetworkApp;