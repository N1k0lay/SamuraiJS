import React from "react";
import classes from './Post.module.css';
import avatar from "../../../../assets/img/avatar.jpeg";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className='d-flex'>
                <img className={classes.avatar} src={avatar} alt=""/>
                <p className={classes.text}>{props.message}</p>
            </div>
            <div className={classes.like}>{props.like} Likes</div>
        </div>
    )
}

export default Post;