import React from 'react'
import { connect } from 'react-redux'
import { getIsAuth, getLogin } from '../../utils/selectors/authSelectors'
import { getAuthUserData, logout } from '../../redux/authReducer'
import Navigation from './Navigation'
import { AppStateType } from '../../redux/reduxStore'

export type MapPropsType = {
  isAuth: boolean
  login: string | null
}

export type DispatchPropsType = {
  getAuthUserData: () => void
  logout: () => void
}

class NavigationContainer extends React.Component<MapPropsType & DispatchPropsType> {

  componentDidMount() {
    this.props.getAuthUserData()
  }
  
  render() {
    return (
      <Navigation {...this.props} />
    )
  } 
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: getIsAuth(state),
  login: getLogin(state),
})

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, { getAuthUserData, logout })(NavigationContainer)