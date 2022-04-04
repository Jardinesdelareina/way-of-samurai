import React from 'react'
import s from './User.module.scss'
import Paginator from './../common/Paginator/Paginator'
import User from './User'
import { UserType } from './../../types/types'

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  users: Array<UserType>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

const Users: React.FC<PropsType> = (props) => {
  return (
    <div className={s.user__page}>
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
      <div className={s.users}>
        {props.users.map((u) => (
          <User
            user={u}
            key={u.id}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        ))}
      </div>
    </div>
  )
}

export default Users
