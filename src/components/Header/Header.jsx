import React from "react";
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={s.header}>
      <NavLink to={"/"} className={s.header__logo}></NavLink>
      <div className={s.header__menu}>
          <NavLink to={"/about"} className={s.header__link}>
            О сайте
          </NavLink>
      </div>
    </div>
  );
};

export default Header;
