import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "./../../redux/profileReducer";
import { Navigate, useMatch } from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 22343
    };
      this.props.getUserProfile(userId);
  }

  render() {

    if (!this.props.auth) return <Navigate to={"/login"} />

    return (<Profile {...this.props} profile={this.props.profile} />)
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});


const ProfileMatch = (props) => {
	let match = useMatch("/profile/:userId/");
	return (
		<ProfileContainer {...props} match={match} />
	)
}

export default connect(mapStateToProps, {getUserProfile})(ProfileMatch);
