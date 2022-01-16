import React from "react";
import s from "./User.module.scss";


const User = (props) => {
  return (
    <div className={s.user}>
      <div className={s.user__image}>
        <img className={s.user__image} src="background.jpg" />
      </div>
      <div className={s.user__description}>
        <div className={s.user__ava}></div>
        <div className={s.user__info}>
          <div className={s.info__name}>Андрей Костюк</div>
          <div className={s.info__birthday}>05.08.1992</div>
          <div className={s.info__city}>Архангельск</div>
          <div className={s.info__language}>JavaScript</div>
        </div>
        <div className={s.user__about}>
          <i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quaerat repellat, recusandae mollitia eius optio fuga enim quasi, maiores ullam velit nemo debitis vero odio eveniet error aliquam reiciendis similique?</i>
        </div>
      </div>
    </div>
  );
};

export default User;
