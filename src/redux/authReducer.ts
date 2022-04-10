import { FormAction, stopSubmit } from 'redux-form'
import { ResultCodesEnum } from '../api/api'
import { authAPI } from '../api/apiAuth'
import { securityAPI } from './../api/apiSecurity'
import { BaseThunkType, InferActionsTypes } from './reduxStore'

let initialState = {
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SET_AUTH_USER_DATA':
    case 'GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export const actions = {
  setAuthUserData: (
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
  ) => ({ type: 'SET_AUTH_USER_DATA', payload: { userId, login, email, isAuth } } as const),
  getCaptchaUrlSuccess: (captchaUrl: string) => ({ type: 'GET_CAPTCHA_URL_SUCCESS', payload: { captchaUrl } } as const)
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  const response = await authAPI.me()
  if (response.resultCode === ResultCodesEnum.Success) {
    const { id, login, email } = response.data
    dispatch(actions.setAuthUserData(id, login, email, true))
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha)
  if (response.resultCode === ResultCodesEnum.Success) {
    dispatch(getAuthUserData())
  } else {
    if (response.resultCode === ResultCodesEnum.CaptchaIsRequired) {
      dispatch(getCaptchaUrl())
    }

    const message = response.messages[0]            // Если messages есть,
        ? "Поле email или пароль заполнены не верно"     // вывести это сообщение
        : "Ошибка"                                       // иначе вывести это сообщение
    dispatch(stopSubmit("login", { _error: message }))   // Прекратить сабмит формы, с name'ом "login"
  }
}

export const logout = (): ThunkType => async (dispatch) => {
  const response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false))  // Обнуляет значение всех данных из стейта: userId, login, email, isAuth
  }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.url
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer