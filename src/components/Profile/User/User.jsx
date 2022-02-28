import React from "react";
import s from "./User.module.scss";
import Preloader from "./../../common/Preloader/Preloader";
import userAva from "./../../../assets/images/ava.png";
/* import backgroundAva from "./../../../assets/images/background.jpg"; */
import UserStatus from "./UserStatus";

const User = ({ profile, status, updateStatus}) => {

  if (!profile) {
    return (<Preloader />)
  }

  return (
    <div className={s.user}>
      {/* <div className={s.user__image}>
        <img className={s.user__image} src={backgroundAva} />
      </div> */}
      <div className={s.user__description}>
        <div className={s.user__ava}>
          <img src={profile.photos.large != null ? profile.photos.large : userAva} />
        </div>
        <div className={s.user__info}>
          <div className={s.info__name}>{profile.fullName}</div>
          <div className={s.info__twitter}>{profile.contacts.twitter}</div>
          <div className={s.info__instagram}>{profile.contacts.instagram}</div>
          <div className={s.info__github}>{profile.contacts.github}</div>
        </div>
        <div className={s.user__about}>
          <UserStatus status={status} updateUserStatus={updateStatus} /> 
        </div>
      </div>
    </div>
  );
};

export default User;
