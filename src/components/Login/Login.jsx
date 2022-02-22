import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./Login.module.scss";

const LoginForm = (props) => {
    return (
        <div className={s.login}>
            <p>Авторизация</p>
            <form className={s.login__form} onSubmit={props.handleSubmit}>
                <Field placeholder={"Логин"} name={"login"} component={"input"} />
                <Field placeholder={"Пароль"} name={"password"} component={"input"}/>
                <div className={s.login__checkbox}>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> Запомнить
                </div>
                <button type={"submit"}>Войти</button>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;