import { connect } from 'react-redux'
import { compose } from 'redux'
import { login } from '../../redux/authReducer'
import { getCaptchaUrl, getIsAuth } from '../../utils/selectors/authSelectors'
import Login from './Login'

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    captchaUrl: getCaptchaUrl(state),
})
  
export default compose(connect(mapStateToProps, {login}))(Login)