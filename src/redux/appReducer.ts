import { getAuthUserData } from "./authReducer";

const SET_INIT = "SET_INIT";

export type InitialStateType = {
  init: boolean
};

let initialState: InitialStateType = {
  init: false
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitSuccessActionType = {
  type: typeof SET_INIT
}

export const setInit = (): InitSuccessActionType => ({ type: SET_INIT })

export const initApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => { dispatch(setInit()) });
}

export default appReducer;
