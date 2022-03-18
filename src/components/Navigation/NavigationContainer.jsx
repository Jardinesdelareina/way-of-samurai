import React from 'react'
import { connect } from 'react-redux'
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
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, { getAuthUserData, logout })(NavigationContainer)