import React from "react";
import avatar from "../../assets/img/avatar.jpeg";
import style from './Users.module.css';
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, follow, unfollow}) => {

    return ( <div className={style.userBlock} key={user.id}>
        <div className='d-flex space-between'>
                <div>
                    <NavLink to={`/profile/` + user.id}>
                        <div>
                            {/* TODO: Фото отдельной компонентой */}
                            <img src={user.photos.small != null ? user.photos.small : avatar}
                                 className={style.userPhoto} alt=""/>
                        </div>
                    </NavLink>
                    <div>
                        {user.followed ?
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id);
                            }}>Unfollow</button> :
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id);
                            }}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{`user.location.county`}</div>
                    <div>{`user.location.city`}</div>
                </div>
            </div>
    </div>)
};

export default User;