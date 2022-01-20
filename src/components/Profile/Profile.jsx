import React from "react";
import s from "./Profile.module.scss";
import User from "./User/User";
import Post from "./Post/Post";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <User />
      <Post
        myPost={props.profilePage.myPost}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
