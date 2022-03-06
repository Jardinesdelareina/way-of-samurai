import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  requestUsers,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getUsers, getPageSize, getCurrentPage, getTotalUsersCount, getIsFetching } from "../../redux/selectors/usersSelectors";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/reduxStore";


type MapStatePropsType = {
  currentPage: number,
  pageSize: number,
  isFetching: boolean,
  totalUsersCount: number,
  users: Array<UserType>
}

type MapDispatchPropsType = {
  getUsers: (currentPage: number, pageSize: number) => void
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

type OwnPropsType = {
  pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return (
      <>
        { this.props.isFetching ? <Preloader /> : null }
        <Users
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          currentPage={this.props.currentPage}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
        />
      </>);
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
  };
};

export default compose(withAuthRedirect,
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, { follow, unfollow, getUsers: requestUsers }))(UsersContainer);