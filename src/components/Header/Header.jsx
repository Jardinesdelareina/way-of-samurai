import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <img className={s.logo} src="logo192.png" />
      </div>
      <div className={s.header__menu}>
        <a href="#" className={s.header__link}>
          О сайте
        </a>
        <a href="#" className={s.header__link}>
          Контакты
        </a>
      </div>
      <div className={s.header__button}>
        <a href="#" className={s.button__enter}>
          Вход
        </a>
        <a href="#" className={s.button__reg}>
          Регистрация
        </a>
      </div>
    </header>
  );
};

export default Header;
