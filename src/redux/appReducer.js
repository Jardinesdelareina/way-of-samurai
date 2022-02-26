import { getAuthUserData } from "./authReducer";

const SET_INIT = "SET_INIT";

let initialState = {
  init: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INIT:
      return {
          ...state,
          init: true
      };
    default:
      return state;
  }
};

export const setInit = () => ({ type: SET_INIT })

export const initApp = () => (dispatch) => {
    dispatch(getAuthUserData());
    dispatch(setInit());
}

export default appReducer;
