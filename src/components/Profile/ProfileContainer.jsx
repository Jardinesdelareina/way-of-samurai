import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "./../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { useMatch } from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match
      ? this.props.match.params.userId
      : 22343;
    /* if (!userId) {  
      userId = this.props.authorizedUserId;
      if (!userId) {
          this.props.history.push("/login"); 
      }
    } */
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (<Profile
      {...this.props}
      profile={this.props.profile}
      status={this.props.status}
      updateUserStatus={this.props.updateUserStatus}
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
