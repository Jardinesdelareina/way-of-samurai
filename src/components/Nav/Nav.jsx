import React from "react";
import s from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

import Login from "./../../assets/icons/Login.png";
import Profile from "./../../assets/icons/Profile.png";
import Dialogs from "./../../assets/icons/Dialogs.png";
import Users from "./../../assets/icons/Users.png";

const Nav = (props) => {
  return (
    <nav className={s.nav}>
      <NavLink to="/profile">
        <img src={Profile} />
      </NavLink>
      <NavLink to="/dialogs">
        <img src={Dialogs} />
      </NavLink>
      <NavLink to="/users">
        <img src={Users} />
      </NavLink>
    </nav>
  );
};

export default Nav;
