import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className='d-flex'>
                <img className={classes.avatar} src="https://i.pinimg.com/originals/e9/47/a7/e947a7cebc84b91e2b3af66115a7b488.jpg" alt=""/>
                <p className={classes.text}>{props.message}</p>
            </div>
            <div className={classes.like}>{props.like} Likes</div>
        </div>
    )
}

export default Post;