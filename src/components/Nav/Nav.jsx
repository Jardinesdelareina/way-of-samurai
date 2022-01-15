import React from "react";
import s from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <NavLink className={s.nav__item} to="/profile">Профиль</NavLink>
      <NavLink className={s.nav__item} to="/dialogs">Сообщения</NavLink>
      <NavLink className={s.nav__item} to="#">Музыка</NavLink>
      <NavLink className={s.nav__item} to="#">Новости</NavLink>
      <br/>
      <NavLink className={s.nav__item} to="#">Настройки</NavLink>
    </nav>
  );
};

export default Nav;
