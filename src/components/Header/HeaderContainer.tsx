import React from "react"
import { connect } from "react-redux"

import { logout } from "../../redux/authReducer"
import { AppStateType } from "../../redux/reduxStore"
import Header from "./Header"

export type MapPropsType = {
  isAuth: boolean
  login: string | null
}
export type DispatchPropsType = {
  logout: () => void
}

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {
    render() {
      return (
        <Header {...this.props} />
      )
    } 
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer)