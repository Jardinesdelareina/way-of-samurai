import React from "react";
import s from "./Content.module.css";

const Content = () => {
  return (
    <main className={s.content}>
      <div className={s.content__image}>
        <img className={s.background} src="background.jpg" />
      </div>
      <div className={s.content__head}>
        <div className={s.content__ava}>
          <img className={s.ava} src="ava.png" />
        </div>
        <div className={s.description}>
          <div class={s.description__name}>Андрей Костюк</div>
          <div class={s.description__birthday}>05.08.1992</div>
          <div class={s.description__city}>Архангельск</div>
          <div class={s.description__language}>JavaScript</div>
        </div>
        <div className={s.post__form}>
          <textarea className={s.form__form} placeholder="Напишите" />
          <button className={s.form__button}>Отправить</button>
        </div>
      </div>
      <div className={s.content__message}></div>
    </main>
  );
};

export default Content;