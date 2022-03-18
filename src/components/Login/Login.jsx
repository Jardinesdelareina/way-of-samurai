import { Field, reduxForm } from 'redux-form'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import s from './Login.module.scss'
import { maxLengthCreator, minLengthCreator, required } from './../../utils/validators/validators'
import { Input } from './../common/FormsControls/FormsControls'
import { login } from './../../redux/authReducer'

const maxLength = maxLengthCreator(40)
const minLength = minLengthCreator(5)

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <div className={s.login}>
      <p>Авторизация</p>
      <form className={s.login__form} onSubmit={handleSubmit}>
        <Field
          placeholder={"email"}
          name={"email"}
          component={Input}
          validate={[required, maxLength, minLength]}
        />
        <Field
          placeholder={"Пароль"}
          name={"password"}
          type={"password"}
          component={Input}
          validate={[required, maxLength, minLength]}
        />
        <div className={s.login__checkbox}>
          <Field type={"checkbox"} name={"rememberMe"} component={Input} />{" "}
          Запомнить
        </div>
        {error && <div className={error.login__error}>{error}</div>}
        <button type={"submit"}>Войти</button>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }

  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login)