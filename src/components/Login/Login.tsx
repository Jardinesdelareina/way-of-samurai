import React from "react"
import { Navigate } from "react-router-dom"
import { connect } from "react-redux"
import { InjectedFormProps, reduxForm } from "redux-form"

import s from "./Login.module.scss"
import { maxLengthCreator, minLengthCreator, required } from "../../utils/validators/validators"
import { createField, GetStringKeys, Input } from "../common/FormsControls/FormsControls"
import { login } from "../../redux/authReducer"
import { AppStateType } from "../../redux/reduxStore"

const maxLength = maxLengthCreator(40)
const minLength = minLengthCreator(5)

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = ({handleSubmit, error}) => {
    return (
      <div className={s.login}>
        <p>Авторизация</p>
        <form className={s.login__form} onSubmit={handleSubmit}>
          {createField<LoginFormValuesTypeKeys>("Электронная почта", "email", [required, maxLength, minLength], Input)}
          {createField<LoginFormValuesTypeKeys>("Пароль", "password", [required, maxLength, minLength], Input, {type: "password"})}
          {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "Запомнить")}
          {error && <div className={s.login__error}>{error}</div>}
          <button type={"submit"}>Войти</button>
        </form>
      </div>
    );
}

const LoginReduxForm = reduxForm<LoginFormValuesType>({form: "login"})(LoginForm)

type MapStatePropsType = {
  isAuth: boolean
}
type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
}

export type LoginFormValuesType = {
  captcha: string
  rememberMe: boolean
  password: string
  email: string
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)