import React from "react"

import s from "./User.module.scss"
import { UserType } from "../../types/types"
import Paginator from "../common/Paginator/Paginator"
import User from "./User"

type PropsType = {
  currentPage: number,
  onPageChanged: (pageNumber: number) => void,
  totalUsersCount: number,
  pageSize: number,
  follow: (userId: number) => void,
  unfollow: (userId: number) => void,
  users: Array<UserType>
  pageTitle: string
}

let Users: React.FC<PropsType> = ({currentPage, onPageChanged, totalUsersCount, pageSize, follow, unfollow, users, pageTitle}) => {
  return (
    <div>
      <div className={s.pageTitle}>{pageTitle}</div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            key={u.id}
            follow={follow}
            unfollow={unfollow} />
        ))}
      </div>
    </div>
  )
}

export default Users
