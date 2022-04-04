import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { Navigate } from 'react-router-dom'
import s from './Login.module.scss'
import { maxLengthCreator, minLengthCreator, required } from './../../utils/validators/validators'
import { createField, GetStringKeys, Input } from './../common/FormsControls/FormsControls'
import { login } from './../../redux/authReducer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getCaptchaUrl, getIsAuth } from './../../utils/selectors/authSelectors'
import { AppStateType } from './../../redux/reduxStore'

type LoginFormOwnProps = {
  captchaUrl: string | null
}

export type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

const maxLength = maxLengthCreator(40)
const minLength = minLengthCreator(5)

// InjectedFormProps - типизация из библиотеки redux-form***
// handleSubmit приходит из контейнерной компоненты redux-form, ее задача - сабмитить всю форму
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
  = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <div className={s.login}>
      <form className={s.login__form} onSubmit={handleSubmit}>
        <div className={s.login__input}>
          {createField<LoginFormValuesTypeKeys>("Электронная почта", "email", [required, maxLength, minLength], Input)}
          {createField<LoginFormValuesTypeKeys>("Пароль", "password", [required, minLength], Input, { type: "password" })}
        </div>
        <div className={s.login__checkbox}>
          {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, { type: "checkbox" })} Запомнить
        </div>
        {captchaUrl && <img src={captchaUrl} alt="" />}
        {captchaUrl && createField<LoginFormValuesTypeKeys>("Символы с изображения", "captcha", [required], Input, {})}
        {error && <div className={s.login__error}>{error}</div>}
        <button>Войти</button>
      </form>
    </div>
  )
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  // Собирает данные, которые придут в контейнерную компоненту во время сабмита
  const onSubmit = (formData: LoginFormValuesType) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  // Если авторизован, то редирект на адрес to={"/..."}
  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }

  return (
    // "Контейнерная компонента" от Redux, которая оборачивает компоненту с формами
    <div>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}

// form: "..." - уникальное имя для каждой формы
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: "login"})(LoginForm)

type MapStatePropsType = {
  captchaUrl: string | null
  isAuth: boolean
}
type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: getIsAuth(state),
  captchaUrl: getCaptchaUrl(state),
})

export default compose(connect(mapStateToProps, { login }))(Login)

/* 
export interface InjectedFormProps<FormData = {}, P = {}, ErrorType = string> {
  anyTouched: boolean
  array: InjectedArrayProps
  asyncValidate(): void
  asyncValidating: string | boolean
  autofill(field: string, value: any): void
  blur(field: string, value: any): void
  change(field: string, value: any): void
  clearAsyncError(field: string): void
  destroy(): void
  dirty: boolean
  error: ErrorType
  form: string
  handleSubmit: SubmitHandler<FormData, P, ErrorType>
  initialize(data: Partial<FormData>): void
  initialized: boolean
  initialValues: Partial<FormData>
  invalid: boolean
  pristine: boolean
  reset(): void
  submitFailed: boolean
  submitSucceeded: boolean
  submitting: boolean
  touch(...field: string[]): void
  untouch(...field: string[]): void
  valid: boolean
  warning: any
  registeredFields: { [name: string]: RegisteredField }
} */