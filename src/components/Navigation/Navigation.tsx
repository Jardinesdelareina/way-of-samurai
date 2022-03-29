import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.scss'
import Profile from './../../assets/icons/Profile.png'
import Users from './../../assets/icons/Users.png'
import Login from './../../assets/icons/Login.png'
import { DispatchPropsType, MapPropsType } from './NavigationContainer'

/* Если пользователь авторизован, показать его логин и кнопку "Выход", 
иначе - показать форму авторизации,
остальные линки показать вне зависимости от авторизованности */
const Navigation: React.FC<MapPropsType & DispatchPropsType> = ({isAuth, login, logout}) => {
  return (
    <nav className={s.navigation}>
      {isAuth
        ? (<div className={s.navigation__login}> 
          {login}
          <button onClick={logout}>Выйти</button></div>)
        : (<NavLink to={"/login"}><img src={Login} alt="" /></NavLink>)
      }
      <NavLink to="/profile"><img src={Profile} alt="" /></NavLink>
      <NavLink to="/users"><img src={Users} alt="" /></NavLink>
    </nav>
  )
}

export default Navigation