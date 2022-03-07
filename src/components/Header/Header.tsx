import React from "react"
import s from "./Header.module.scss"
import { NavLink } from "react-router-dom"

import Login from "./../../assets/icons/Login.png"
import { DispatchPropsType, MapPropsType } from "./HeaderContainer"

const Header: React.FC<MapPropsType & DispatchPropsType> = ({isAuth, logout, login}) => {
  return (
    <div className={s.header}>
      <div className={s.header__menu}>
        {isAuth
          ? (<div className={s.header__login}><button onClick={logout}>Выйти</button>{login}</div>)
          : (<NavLink to={"/login"}><img src={Login} alt="" /></NavLink>)
        }
      </div>
    </div>
  )
}

export default Header
