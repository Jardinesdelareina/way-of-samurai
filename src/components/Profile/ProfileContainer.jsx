import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { withAuthRedirect } from './../../hoc/withAuthRedirect'
import { getUserProfile, getStatus, updateStatus } from './../../redux/profileReducer'
import Profile from './Profile'

const withRouter = WrappedComponent => props => {
  const params = useParams()
  return (
      <WrappedComponent {...props} params={params} />
  )
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.params.userId
    if (!userId) {
      userId = this.props.authUserId
      this.props.getUserProfile(userId)
      this.props.getStatus(userId)
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.userId,
  auth: state.auth.isAuth,
})

export default compose(withRouter, connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}), withAuthRedirect)(ProfileContainer)
