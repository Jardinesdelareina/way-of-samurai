import React from "react"

import s from "./User.module.scss"
import { ProfileType } from "../../../types/types"
import Preloader from "../../common/Preloader/Preloader"
import userAva from "./../../../assets/images/ava.png"
import UserStatus from "./UserStatus"

type PropsType = {
  profile: ProfileType | null,
  status: string,
  updateStatus: (status: string) => void
}

const User: React.FC<PropsType> = ({ profile, status, updateStatus}) => {
  if (!profile) {
    return (<Preloader />)
  }
  return (
    <div className={s.user}>
      <div className={s.user__description}>
        <div className={s.user__ava}>
          <img src={profile.photos.large || userAva} alt="" />
        </div>
        <div className={s.user__info}>
          <div className={s.info__name}>{profile.fullName}</div>
          <div className={s.info__twitter}>{profile.contacts.twitter}</div>
          <div className={s.info__instagram}>{profile.contacts.instagram}</div>
          <div className={s.info__github}>{profile.contacts.github}</div>
        </div>
        <div className={s.user__about}>
          <UserStatus status={status} updateStatus={updateStatus} /> 
        </div>
      </div>
    </div>
  )
}

export default User
