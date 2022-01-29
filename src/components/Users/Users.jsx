import React from "react";
import s from "./Users.module.scss";

let Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={s.user}>
            <div className={s.user__ava}></div>
            <div className={s.user__name}>{u.name}</div>
            <div className={s.user__location}>
              <div className={s.location__country}>{u.location.country}</div>
              <div className={s.location__city}>{u.location.city}</div>
            </div>
            <div>
                {u.followed
                    ? <button className={s.user__follow} onClick={() => { props.follow(u.id) }}>Отписаться</button>
                    : <button className={s.user__follow} onClick={() => { props.unfollow(u.id) }}>Подписаться</button>
                }      
            </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
