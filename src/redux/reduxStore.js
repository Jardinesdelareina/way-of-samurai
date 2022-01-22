import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogReducer";
import profileReducer from "./profileReducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

let store = createStore(redusers);

export default store;