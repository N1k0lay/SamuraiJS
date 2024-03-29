import {
    follow, requestUsers,
    setCurrentPages,
    toggleFollowingProgress, toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import {compose} from "redux";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
} from "../../redux/users-selectors";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        const { currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        if (this.props.isFetching) {
            return <Preloader/>
        }
        return <>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   isFetching={this.props.isFetching}
            />
        </>
    };
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps, {
        toggleIsFetching,
        follow,
        unfollow,
        setCurrentPages,
        toggleFollowingProgress,
        requestUsers
    }),
)(UsersContainer);