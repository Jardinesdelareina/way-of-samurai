import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import messagesReducer from './messagesReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import appReducer from './appReducer'
import noteReducer from './noteReducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    notePage: noteReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
window.__store__ = store

export default store