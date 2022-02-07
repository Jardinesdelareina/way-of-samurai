import React from "react";
import s from "./Users.module.scss";
import userAva from "./../../../src/assets/images/ava.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      if (pages.length < 12) {
        pages.push(i);
      }
    }

    return (
      <div>
        <div className={s.currentPage}>
          {pages.map((page) => {
            return (
              <span
                className={props.currentPage === page && s.selectedPage}
                onClick={() => {
                  props.onPageChanged(page);
                }}
              >
                {page}
              </span>
            );
          })}
        </div>
        <div>
          {props.users.map((u) => (
            <div key={u.id} className={s.user}>
              <NavLink to={"/profile/" + u.id}>
                <div className={s.user__ava}>
                  <img src={u.photos.large != null ? u.photo.large : userAva} />
                </div>
              </NavLink>
              <NavLink to={"/profile/" + u.id}>
                <div className={s.user__name}>{u.name}</div>
              </NavLink>
              <div>
                {u.followed ? (
                  <button
                    className={s.user__unfollow}
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Отписаться
                  </button>
                ) : (
                  <button
                    className={s.user__follow}
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Подписаться
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Users;