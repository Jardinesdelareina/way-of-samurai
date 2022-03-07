import React, { Suspense } from "react"
import { connect, Provider } from "react-redux"
import { compose } from "redux"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import "./style/App.scss"
import store, { AppStateType } from "./redux/reduxStore"
import { initApp } from "./redux/appReducer"
import Nav from "./components/Nav/Nav"
import ProfileContainer from "./components/Profile/ProfileContainer"
import UsersContainer from "./components/Users/UsersContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login"
import Preloader from "./components/common/Preloader/Preloader"

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {
  componentDidMount() {
    this.props.initApp()
    }
  render() {
    if(!this.props.init) {
      return <Preloader />
    }
    return (
      <div className="wrapper">
        <Nav />
        <main className="wrapper__content">
          <HeaderContainer />
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/profile/*" element={<ProfileContainer />} />
              <Route path="/users" element={<UsersContainer pageTitle={"Пользователи"} />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  init: state.app.init
})

let AppContainer = compose<React.ComponentType>(connect(mapStateToProps, { initApp }))(App)

const SocialNetworkApp: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SocialNetworkApp