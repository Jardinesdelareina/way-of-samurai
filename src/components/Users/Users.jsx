import React from "react";
import s from "./Users.module.scss";
import * as axios from "axios";
import userAva from "./../../../src/assets/images/ava.png";

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {

    let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize);

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
            return <span className={this.props.currentPage === page && s.selectedPage}
              onClick={() => {this.onPageChanged(page)}}>{page}</span>
          })}
        </div>
        <div>
          {this.props.users.map((u) => (
            <div key={u.id} className={s.user}>
              <div className={s.user__ava}>
                <img src={u.photos.small != null ? u.photo.small : userAva} />
              </div>
              <div className={s.user__name}>{u.name}</div>
              {/* { <div className={s.user__location}>
                      <div className={s.location__country}>{u.location.country}</div>
                      <div className={s.location__city}>{u.location.city}</div>
                    </div> } */}
              <div>
                {u.followed ? (
                  <button
                    className={s.user__unfollow}
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Отписаться
                  </button>
                ) : (
                  <button
                    className={s.user__follow}
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}

export default Users;
