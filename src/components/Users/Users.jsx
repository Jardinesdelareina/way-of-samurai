import Paginator from './../common/Paginator/Paginator'
import User from './User'

const Users = (props) => {
  return (
    <div>
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
      <div>
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
