import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import appReducer from './appReducer'

// Объединение редьюсеров с помощью combineReducers
let rootReducer = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer // Создает стейт для обслуживания форм
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  // Связь c браузерным расширением

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))  // Создание стора всего приложения с помощью createStore

// @ts-ignore
window.__store__ = store  // Дает возможность обращаться к стору в консоли браузера

export default store