import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.posts.map( p => <Post message={p.post} like={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
           <div className={classes.myPostsBlock}>
               My Posts
               <div>
                   <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                   <button onClick={onAddPost}>Add post</button>
               </div>
               <div>
                   {[postElements]}
               </div>
           </div>
    )
}

export default MyPosts;