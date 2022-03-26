import React from 'react'
import { connect } from 'react-redux'
import { getIsAuth, getLogin } from '../../utils/selectors/authSelectors'
import { getAuthUserData, logout } from './../../redux/authReducer'
import Navigation from './Navigation'

class NavigationContainer extends React.Component {

  componentDidMount() {
    this.props.getAuthUserData()
  }
  
  render() {
    return (
      <Navigation {...this.props} />
    )
  } 
}

const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
  login: getLogin(state),
})

export default connect(mapStateToProps, { getAuthUserData, logout })(NavigationContainer)