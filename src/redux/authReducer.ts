import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "social_network/auth/SET_AUTH_USER_DATA";

export type InitialStateType = {
  userId: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean,
};

let initialState: InitialStateType = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
          ...state,
          ...action.data,
      };
    default:
      return state;
  }
};

type SetAuthUserDataActionPayDataType = {
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
}

type SetAuthUserDataActionType = {
  type: typeof SET_AUTH_USER_DATA,
  data: SetAuthUserDataActionPayDataType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
  type: SET_AUTH_USER_DATA,
  data: { userId, email, login, isAuth }
})

export const getAuthUserData = () => async (dispatch: any) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Поле email или пароль заполнены не верно";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
