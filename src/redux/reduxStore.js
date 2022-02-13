import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;