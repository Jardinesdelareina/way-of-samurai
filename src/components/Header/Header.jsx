import React from "react";
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.header__logo}></div>
      <NavLink to={"/about"} className={s.header__link}>Social Network</NavLink>
      <div className={s.header__menu}>
        {props.isAuth
          ? <div className={s.header__login}>{props.login}<button className={s.header__button} onClick={props.logout}>Выйти</button></div>
          : <NavLink to={"/login"} className={s.header__button}>Вход</NavLink>
        } 
      </div>
    </div>
  );
};

export default Header;
