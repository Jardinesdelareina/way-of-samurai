import React from "react";
import s from "./User.module.scss";
import Preloader from "./../../common/Preloader/Preloader";
import userAva from "./../../../assets/images/ava.png";
import backgroundAva from "./../../../assets/images/background.jpg";
import UserStatus from "./UserStatus";

const User = (props) => {

  if (!props.profile) {
    return (<Preloader />)
  }

  return (
    <div className={s.user}>
      {/* <div className={s.user__image}>
        <img className={s.user__image} src={backgroundAva} />
      </div> */}
      <div className={s.user__description}>
        <div className={s.user__ava}>
          <img src={props.profile.photos.large != null ? props.profile.photos.large : userAva} />
        </div>
        <div className={s.user__info}>
          <div className={s.info__name}>{props.profile.fullName}</div>
          <div className={s.info__twitter}>{props.profile.contacts.twitter}</div>
          <div className={s.info__instagram}>{props.profile.contacts.instagram}</div>
          <div className={s.info__github}>{props.profile.contacts.github}</div>
        </div>
        <div className={s.user__about}>
          <UserStatus status={props.status} updateUserStatus={props.updateUserStatus} /> 
        </div>
      </div>
    </div>
  );
};

export default User;
