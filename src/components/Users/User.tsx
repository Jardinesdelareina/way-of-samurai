import React from "react"
import { NavLink } from "react-router-dom"

import s from "./User.module.scss"
import userAva from "./../../../src/assets/images/ava.png"
import { UserType } from "../../types/types"

type PropsType = {
  user: UserType
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, follow, unfollow }) => {
  return (
    <div className={s.user}>
      <NavLink to={"/profile/" + user.id}>
        <div className={s.user__ava}>
          <img src={user.photos.large || userAva} alt="" />
        </div>
      </NavLink>
      <NavLink to={"/profile/" + user.id}>
        <div className={s.user__name}>{user.name}</div>
      </NavLink>
      <div>
        {user.followed
          ? (<button className={s.user__unfollow} onClick={() => { unfollow(user.id) }}>Отписаться</button>)
          : (<button className={s.user__follow} onClick={() => { follow(user.id) }}>Подписаться</button>)
        }
      </div>
    </div>
  )
}

export default User
