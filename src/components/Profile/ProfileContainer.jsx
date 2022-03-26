import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { withAuthRedirect } from './../../hoc/withAuthRedirect'
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from './../../redux/profileReducer'
import Profile from './Profile'
import { getProfile, getUserStatus } from './../../utils/selectors/profileSelectors'
import { getIsAuth, getAuthUserId } from './../../utils/selectors/authSelectors'

// hook, который заменяет withRouter из старых версий react-router-dom
const withRouter = WrappedComponent => (props) => {
  const params = useParams()
  return (
      <WrappedComponent {...props} params={params} />
  )
}

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

/* compose — это функция, которая позволяет получить результат одной функци, 
а потом обработать его при помощи другой функции
connect - функция, которая вызывает HOC */
export default compose(withRouter, withAuthRedirect, connect(mapStateToProps, {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile
}))(ProfileContainer)