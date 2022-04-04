import { Action, applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import appReducer from './appReducer'

// Объединение редьюсеров с помощью combineReducers
// rootReducer принимает стейт целиком, дробит его на отдельные редьюсеры, которые возвращают ему обновленный стейт
let rootReducer = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer // Создает стейт для обслуживания форм
})

// typeof создает тип на основе rootReducer, сам анализирует функцию и определяет ее тип - неявная типизация
type RootReducerType = typeof rootReducer 

// Определяет то, что возвращается из RootReducerType и фиксирует в AppStateType 
export type AppStateType = ReturnType<RootReducerType>

// Передается тип объекта, который возвращает action creator (принимает набор аргументов и возвращает any)
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  // Связь c браузерным расширением

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))  // Создание стора всего приложения с помощью createStore

// @ts-ignore
window.__store__ = store  // Дает возможность обращаться к стору в консоли браузера

export default store