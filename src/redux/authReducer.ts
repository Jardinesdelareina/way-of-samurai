import { FormAction, stopSubmit } from "redux-form"

import { ResultCodesEnum } from "../api/api"
import { authAPI } from './../api/authApi'
import { BaseThunkType, InferActionsTypes } from "./reduxStore"

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"

let initialState = {
  userId: null as (number | null),
  login: null as (string | null),
  email: null as (string | null),
  isAuth: false,
}

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
          ...state,
          ...action.data,
      }
    default:
      return state
  }
}

export const actions = {
  setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SET_AUTH_USER_DATA', data: { userId, email, login, isAuth }
  } as const)
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  let response = await authAPI.me()
  if (response.resultCode === ResultCodesEnum.Success) {
    let { id, login, email } = response.data
    dispatch(actions.setAuthUserData(id, login, email, true))
  }
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.resultCode === ResultCodesEnum.Success) {
    dispatch(getAuthUserData())
  } else {
    let message =
      response.messages.length > 0
        ? response.messages[0]
        : "Поле email или пароль заполнены не верно"
    dispatch(stopSubmit("login", { _error: message }))
  }
}

export const logout = (): ThunkType => async (dispatch) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false))
  }
}

export default authReducer
