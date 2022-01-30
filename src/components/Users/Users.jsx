import React from "react";
import s from "./Users.module.scss";
import * as axios from "axios";
import userAva from "./../../../src/assets/images/ava.png";

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      this.props.setUsers(response.data.items);
    });
  }
  render() {
    return (
      <div>
      {this.props.users.map((u) => (
        <div key={u.id} className={s.user}>
          <div className={s.user__ava}>
            <img src={u.photos.small != null ? u.photo.small : userAva} />
          </div>
          <div className={s.user__name}>{u.name}</div>
          {/* <div className={s.user__location}>
              <div className={s.location__country}>{u.location.country}</div>
              <div className={s.location__city}>{u.location.city}</div>
            </div> */}
          <div>
            {u.followed
              ? <button className={s.user__unfollow} onClick={() => { this.props.unfollow(u.id) }}>Отписаться</button>
              : <button className={s.user__follow} onClick={() => { this.props.follow(u.id) }}>Подписаться</button>
            }
          </div>
        </div>
      ))}
    </div>
    )
  }
}

export default Users;
