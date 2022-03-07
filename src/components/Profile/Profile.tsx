import React from "react";
import s from "./Profile.module.scss";
import User from "./User/User";
import PostContainer from "./Post/PostContainer";
import { ProfileType } from "../../types/types";

type PropsType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
}

const Profile: React.FC<PropsType> = ({profile, status, updateStatus}) => {
  return (
    <div className={s.profile}>
      <User
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />
      <PostContainer />
    </div>
  )
}

export default Profile
