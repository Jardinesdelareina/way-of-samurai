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

// resultCode === 0 - успех, resultCode === 1 - ошибка
export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.me()
  if (response.data.resultCode === 0) {                // Если resultCode === 0, 
    const { id, login, email } = response.data.data    // получить ответ от сервера по указанным параметрам
    dispatch(setAuthUserData(id, login, email, true))  // и засетать юзера по указанным id, login и email, а isAuth сделать true
  }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha) // Получить ответ от сервера по введенным данным в форму
  if (response.data.resultCode === 0) {      // и если resultCode === 0
    dispatch(getAuthUserData())              // задиспатчить setAuthUserData, которая обработает введенные в форму данные
  } else {                                   // иначе
    if (response.data.resultCode === 10) {   // resultCode === 10 - аномальное количество запросов на сервер
      dispatch(getCaptchaUrl())              // будет выведена капча
    }

    const message = response.data.messages               // Если messages есть,
        ? "Поле email или пароль заполнены не верно"     // вывести это сообщение
        : "Ошибка"                                       // иначе вывести это сообщение
    dispatch(stopSubmit("login", { _error: message }))  // Прекратить сабмит формы, с name'ом "login"
  }
}

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))  // Обнуляет значение всех данных из стейта: userId, login, email, isAuth
  }
}

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer
