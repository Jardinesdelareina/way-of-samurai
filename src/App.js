import React, { lazy, Suspense } from 'react'
import { compose } from 'redux'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import store from './redux/reduxStore'
import { initApp } from './redux/appReducer'
import './style/App.scss'
import Login from './components/Login/Login'
import Preloader from './components/common/Preloader/Preloader'
import NavigationContainer from './components/Navigation/NavigationContainer'

const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const MessagesContainer = lazy(() => import('./components/Messages/MessagesContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))
const NotebookContainer = lazy(() => import('./components/Notebook/NotebookContainer'))

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
        <main className="wrapper__content">
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/profile/*" element={<ProfileContainer />} />
              <Route path="/messages" element={<MessagesContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/notebook" element={<NotebookContainer />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </main>
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