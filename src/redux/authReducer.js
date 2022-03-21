import { stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from './../api/api'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL'

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { id, login, email, isAuth } })
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} })

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.me()
  if (response.data.resultCode === 0) {
    const { id, login, email } = response.data.data
    dispatch(setAuthUserData(id, login, email, true))
  }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha)
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    const message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Поле email или пароль заполнены не верно"
    dispatch(stopSubmit("login", { _error: message }))
  }
}

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer
