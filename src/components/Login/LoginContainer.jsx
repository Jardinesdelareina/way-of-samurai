import { connect } from 'react-redux'
import { compose } from 'redux'
import { login } from '../../redux/authReducer'
import Login from './Login'

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  })
  
export default compose(connect(mapStateToProps, {login}))(Login)