import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from '../../hoc/withRouter'
import { withAuthRedirect } from './../../hoc/withAuthRedirect'
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from './../../redux/profileReducer'
import Profile from './Profile'
import { getProfile, getUserStatus } from './../../utils/selectors/profileSelectors'
import { getIsAuth, getAuthUserId } from './../../utils/selectors/authSelectors'

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.params.userId || this.props.authUserId  // Показать либо пользователя с выбранным id, либо авторизованного
    this.props.getUserProfile(userId)  // Запрос профайла по id
    this.props.getStatus(userId)  // Запрос статуса профайла по id
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.params.userId !== prevProps.params.userId ) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.params.userId}  // Если нет userId, значит пользователь авторизованый
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: getProfile(state),
  status: getUserStatus(state),
  authUserId: getAuthUserId(state),
  auth: getIsAuth(state),
})

export default compose(withRouter, withAuthRedirect, connect(mapStateToProps, {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile
}))(ProfileContainer)