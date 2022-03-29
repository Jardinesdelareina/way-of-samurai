import React, { lazy, Suspense } from 'react'
import { compose } from 'redux'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import store, { AppStateType } from './redux/reduxStore'
import { withRouter } from './hoc/withRouter'
import { initApp } from './redux/appReducer'
import './style/App.scss'
import Preloader from './components/common/Preloader/Preloader'
import PageNotFound from './components/common/PageNotFound/PageNotFound'
import NavigationContainer from './components/Navigation/NavigationContainer'
import Login from './components/Login/Login'

// Lazy рендерит компоненты динамически, по требованию
// Это облегчает загрузку страницы, но увеличивает время ожидания страницы
// Suspense показывает запасное содержание пока компонента не загрузилась, в данном случае это Preloader
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {

  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {  // Выводит alert при возникновении ошибки, просто информирует
    alert('Произошла какая-то ошибка, что-то пошло не так')
  }


  componentDidMount() {   // Метод жизненного цикла, срабатывает один раз когда компонента монтируется
    this.props.initApp()  // В данном случае при инициализации приложения
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors) // Асинхронная операция, ловит произошедшие ошибки
  }
  
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors) // Подчищает асинхронный мусор из компоненты
  }

  render() {
    // Если (пока) приложение не проинициализировано, показать Preloader
    if(!this.props.init) {
      return <Preloader />
    }

    return (
      <div className="wrapper">
        <NavigationContainer />
        <div className="wrapper__content">
          <header>Social Network</header>
          <main>
            <Suspense fallback={<Preloader />}>  
              <Routes>
                <Route path="/" element={<Navigate to="/profile" />} />
                <Route path="/profile" element={<ProfileContainer />} />
                <Route path="/profile/:userId" element={<ProfileContainer />} />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </main>
          <footer>Created by fueros</footer>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  init: state.app.init
})

/* compose — это функция, которая позволяет получить результат одной функци, 
а потом обработать его при помощи другой функции
connect - функция, которая вызывает HOC */
let AppContainer = compose(withRouter, connect(mapStateToProps, { initApp }))(App)

// Provider добавляет стор в контекст с помощью Context API
// Все, что обернуто Провайдером, имеет доступ к стору
// Это делается для того, чтобы не прокидывать стор через пропсы вниз по дереву
const SocialNetworkApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>   
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SocialNetworkApp