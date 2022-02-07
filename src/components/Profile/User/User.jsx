import React from "react";
import s from "./User.module.scss";
import Preloader from "./../../common/Preloader/Preloader";

const User = (props) => {

  if (!props.profile) {
    return (<Preloader />)
  }

  return (
    <div className={s.user}>
      <div className={s.user__image}>
        <img className={s.user__image} src="background.jpg" />
      </div>
      <div className={s.user__description}>
        <div className={s.user__ava}>
          <img src={props.profile.photos.large} />
        </div>
        <div className={s.user__info}>
          <div className={s.info__name}>{props.profile.fullName}</div>
          <div className={s.info__twitter}>{props.profile.contacts.twitter}</div>
          <div className={s.info__instagram}>{props.profile.contacts.instagram}</div>
          <div className={s.info__github}>{props.profile.contacts.github}</div>
        </div>
        <div className={s.user__about}>
          <i>{props.profile.aboutMe}</i>
        </div>
      </div>
    </div>
  );
};

export default User;
