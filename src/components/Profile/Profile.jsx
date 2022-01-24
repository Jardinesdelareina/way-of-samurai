import React from "react";
import s from "./Profile.module.scss";
import User from "./User/User";
import PostContainer from "./Post/PostContainer";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <User />
      <PostContainer store={props.store}/>
    </div>
  );
};

export default Profile;
