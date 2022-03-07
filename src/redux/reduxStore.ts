import { Action, applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware, { ThunkAction } from "redux-thunk";

import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import appReducer from "./appReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
// @ts-ignore
window.__store__ = store;

export default store;