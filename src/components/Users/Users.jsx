import React from "react";
import {Paginator} from "../common/paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {
    return (<div>
        <Paginator totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   onPageChanged={onPageChanged}
                   currentPage={currentPage}
                   portionSize = {10}
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