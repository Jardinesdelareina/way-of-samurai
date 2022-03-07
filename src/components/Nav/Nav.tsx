import React from "react"
import { NavLink } from "react-router-dom"

import s from "./Nav.module.scss"
import Profile from "./../../assets/icons/Profile.png"
import Users from "./../../assets/icons/Users.png"

const Nav: React.FC = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/profile">
        <img src={Profile} alt="" />
      </NavLink>
      <NavLink to="/users">
        <img src={Users} alt="" />
      </NavLink>
    </nav>
  )
}

export default Nav
