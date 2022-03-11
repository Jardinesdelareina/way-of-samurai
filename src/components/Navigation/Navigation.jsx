import s from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'
import Profile from './../../assets/icons/Profile.png'
import List from './../../assets/icons/List.png'
import Users from './../../assets/icons/Users.png'
import Login from './../../assets/icons/Login.png'

const Navigation = (props) => {
  return (
    <nav className={s.navigation}>
      {props.isAuth
          ? (<div className={s.navigation__login}>{props.login}<button onClick={props.logout}>Выйти</button></div>)
          : (<NavLink to={"/login"}><img src={Login} alt="" /></NavLink>)
        } 
      <NavLink to="/profile"><img src={Profile} alt=""/></NavLink>
      <NavLink to="/dialogs"><img src={List} alt=""/></NavLink>
      <NavLink to="/users"><img src={Users} alt=""/></NavLink>
    </nav>
  )
}

export default Navigation
