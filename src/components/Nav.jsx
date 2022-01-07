import React from "react";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <a className={s.nav__item} href="#">Профиль</a>
      <a className={s.nav__item} href="#">Сообщения</a>
      <a className={s.nav__item} href="#">Музыка</a>
      <a className={s.nav__item} href="#">Новости</a>
      <a className={s.nav__item} href="#">Настройки</a>
    </nav>
  );
};

export default Nav;
