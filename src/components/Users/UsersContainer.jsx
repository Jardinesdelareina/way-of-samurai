import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { follow, unfollow, setCurrentPage, requestUsers } from './../../redux/usersReducer'
import Users from './Users'
import Preloader from './../common/Preloader/Preloader'
import { withAuthRedirect } from './../../hoc/withAuthRedirect'
import { getUsers, getPageSize, getCurrentPage, getTotalUsersCount, getIsFetching } from './../../utils/selectors/usersSelectors'


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          currentPage={this.props.currentPage}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
})

export default compose(withAuthRedirect, connect(mapStateToProps, {follow, unfollow, setCurrentPage, requestUsers}))(UsersContainer)