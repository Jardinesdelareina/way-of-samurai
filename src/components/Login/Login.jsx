import { reduxForm } from 'redux-form'
import { Navigate } from 'react-router-dom'
import s from './Login.module.scss'
import { maxLengthCreator, minLengthCreator, required } from './../../utils/validators/validators'
import { createField, Input } from './../common/FormsControls/FormsControls'

const maxLength = maxLengthCreator(40)
const minLength = minLengthCreator(5)

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <div className={s.login}>
      <form className={s.login__form} onSubmit={handleSubmit}>
        <div className={s.login__input}>
          {createField("Электронная почта", "email", [required, maxLength, minLength], Input)}
          {createField("Пароль", "password", [required, minLength], Input, { type: "password" })}
        </div>
        <div className={s.login__checkbox}>
          {createField(null, "rememberMe", [], Input, { type: "checkbox" })} Запомнить
        </div>
        {captchaUrl && <img src={captchaUrl} alt="" />}
        {captchaUrl && createField("Символы с изображения", "captcha", [required], Input, {})}
        {error && <div className={error.login__error}>{error}</div>}
        <button type={"submit"}>Войти</button>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }

  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}

export default Login