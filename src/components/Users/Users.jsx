import React from "react";
import Preloader from "../common/preloader/Preloader";
import {Paginator} from "../common/paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {
    if (props.isFetching) {
        return <Preloader/>
    }
    return (<div>
        <Paginator totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   onPageChanged={onPageChanged}
                   currentPage={currentPage}
        />
        {props.users.map(u =>
            <User user={u}
                  key={u.id}
                  followingInProgress={props.followingInProgress}
                  follow={props.follow}
                  unfollow={props.unfollow}
            />
        )}
    </div>)
};

export default Users;