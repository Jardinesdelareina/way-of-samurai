import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <NavLink to={"/"} className={s.header__logo}>
        <img className={s.logo} src="logo192.png" />
      </NavLink>
      <div className={s.header__menu}>
          <NavLink to={"/about"} className={s.header__link}>
            О сайте
          </NavLink>
          <NavLink to={"/contacts"} className={s.header__link}>
            Контакты
          </NavLink>
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
