import React from "react"
import { compose } from "redux"
import { useMatch } from "react-router-dom"
import { connect } from "react-redux"

import { getUserProfile, getStatus, updateStatus } from "../../redux/profileReducer"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import Profile from "./Profile"

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
  getUserProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
}

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match
      ? this.props.match.params.userId
      : 22343;
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (<Profile
      {...this.props}
      profile={this.props.profile}
      status={this.props.status}
      updateStatus={this.props.updateStatus}
    />)
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserId: state.auth.userId,
  auth: state.auth.isAuth,
});


const ProfileMatch = (props) => {
	let match = useMatch("/profile/:userId");
	return (
		<ProfileContainer {...props} match={match} />
	)
}

export default compose(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}), withAuthRedirect)(ProfileMatch);
