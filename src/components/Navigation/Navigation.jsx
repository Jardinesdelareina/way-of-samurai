import { NavLink } from 'react-router-dom'
import s from './Navigation.module.scss'
import Profile from './../../assets/icons/Profile.png'
import List from './../../assets/icons/List.png'
import Users from './../../assets/icons/Users.png'
import Login from './../../assets/icons/Login.png'
import Dialogs from './../../assets/icons/Dialogs.png'
import Calc from './../../assets/icons/Calc.png'

const Navigation = (props) => {
  return (
    <nav className={s.navigation}>
      {props.isAuth
        ? (<div className={s.navigation__login}>
          {props.login}
          <button onClick={props.logout}>Выйти</button></div>)
        : (<NavLink to={"/login"}><img src={Login} alt="" /></NavLink>)
      }
      <NavLink to="/profile"><img src={Profile} alt="" /></NavLink>
      <NavLink to="/messages"><img src={Dialogs} alt="" /></NavLink>
      <NavLink to="/users"><img src={Users} alt="" /></NavLink>
      <NavLink to="/notebook"><img src={List} alt="" /></NavLink>
      <NavLink to="/calculator"><img src={Calc} alt="" /></NavLink>
    </nav>
  )
}

export default Navigation
