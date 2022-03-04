import React from "react";
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";

import Login from "./../../assets/icons/Login.png";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.header__menu}>
      {props.isAuth ? (
          <div className={s.header__login}>
            <button onClick={props.logout}>
              Выйти
            </button>
            {props.login}
          </div>
        ) : (
          <NavLink to={"/login"}>
            <img src={Login} />
          </NavLink>
        )}
      </div>
      <NavLink to={"/about"} className={s.header__link}>
        Social Network
      </NavLink>
      <div className={s.header__logo}></div>
    </div>
  );
};

export default Header;
