import React, { lazy, Suspense } from 'react'
import { compose } from 'redux'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import store from './redux/reduxStore'
import { initApp } from './redux/appReducer'
import './style/App.scss'
import Preloader from './components/common/Preloader/Preloader'
import NavigationContainer from './components/Navigation/NavigationContainer'
import LoginContainer from './components/Login/LoginContainer'

const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const MessagesContainer = lazy(() => import('./components/Messages/MessagesContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))
const NotebookContainer = lazy(() => import('./components/Notebook/NotebookContainer'))
const CalculatorContainer = lazy(() => import('./components/Calculator/CalculatorContainer'))

class App extends React.Component {

  componentDidMount() {
    this.props.initApp()
  }
  
  render() {

    if(!this.props.init) {
      return <Preloader />
    }

    return (
      <div className="wrapper">
        <NavigationContainer />
        <div className="wrapper__content">
          <main>
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/" element={<Navigate to="/profile" />} />
                <Route path="/profile" element={<ProfileContainer />} />
                <Route path="/profile/:userId" element={<ProfileContainer />} />
                <Route path="/messages" element={<MessagesContainer />} />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/notebook" element={<NotebookContainer />} />
                <Route path="/calculator" element={<CalculatorContainer />} />
                <Route path="/login" element={<LoginContainer />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  init: state.app.init
})

let AppContainer = compose(connect(mapStateToProps, { initApp }))(App)

const SocialNetworkApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SocialNetworkApp