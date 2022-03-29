import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './User.module.scss'
import Ava from './../../assets/images/Ava.png'
import { UserType } from '../../types/types'

type PropsType = {
  user: UserType
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, follow, unfollow }) => {
  return (
    <div className={s.user}>
      <NavLink to={"/profile/" + user.id}>
        <div className={s.user__ava}>
          <img src={user.photos.large || Ava} alt="" />
        </div>
      </NavLink>
      <div className={s.user__info}>
        <NavLink to={"/profile/" + user.id}>
          <div className={s.user__name}>{user.name}</div>
        </NavLink>
        <div>
          {user.followed  // Если юзер followed = true показывается кнопка, которая меняет true на false, и наоборот
            ? (<button className={s.user__unfollow} onClick={() => { unfollow(user.id) }}>Отписаться</button>)
            : (<button className={s.user__follow} onClick={() => { follow(user.id) }}>Подписаться</button>)
          }
        </div>
      </div>
    </div>
  )
}

export default User