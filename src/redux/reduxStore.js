import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import appReducer from './appReducer'

// Объединение редьюсеров с помощью combineReducers
let reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer // Создает стейт для обслуживания форм
})

// Связь c браузерным расширением
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Создание стора всего приложения с помощью createStore
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

// Дает возможность обращаться к стору в консоли браузера
window.__store__ = store

export default store