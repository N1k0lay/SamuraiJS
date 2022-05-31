import React from "react";
import avatar from "../../assets/img/avatar.jpeg";
import style from './Users.module.css';
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [1, 2, 3, 4, 5];
    pages.push(pagesCount);
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i);
    // }

    return (<div>
        <div className={style.pagination}>
            {pages.map(p => {
                return <span className={(props.currentPage === p) ? style.selectedPage : style.unSelectedPage} onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p}</span>
            })}
        </div>
        {props.users.map(u => <div className={style.userBlock} key={u.id}>
            <div className='d-flex space-between'>
                <div>
                    <NavLink to={`/profile/` + u.id}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : avatar}
                                 className={style.userPhoto} alt=""/>
                        </div>
                    </NavLink>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id);
                            }}>Unfollow</button> :
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id);
                            }}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{`u.location.county`}</div>
                    <div>{`u.location.city`}</div>
                </div>
            </div>
        </div>)}
    </div>)
};

export default Users;