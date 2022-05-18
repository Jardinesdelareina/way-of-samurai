import s from './User.module.scss'
import Paginator from './../common/Paginator/Paginator'
import User from './User'

const Users = (props) => {
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
